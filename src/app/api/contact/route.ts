import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";
import {
  getProjectTypeLabel,
  validateContactForm,
  type ContactFormFields,
} from "@/lib/contact-form";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? site.email;
  const resend = getResendClient();

  if (!resend || !fromEmail) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = body as Partial<ContactFormFields>;

  if (payload.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const fields: ContactFormFields = {
    name: String(payload.name ?? ""),
    email: String(payload.email ?? ""),
    projectType:
      payload.projectType === "shopify" ||
      payload.projectType === "ux" ||
      payload.projectType === "consultation" ||
      payload.projectType === "other"
        ? payload.projectType
        : "shopify",
    message: String(payload.message ?? ""),
  };

  const errors = validateContactForm(fields);

  if (errors) {
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
  }

  const projectTypeLabel = getProjectTypeLabel(fields.projectType);
  const safeName = escapeHtml(fields.name.trim());
  const safeEmail = escapeHtml(fields.email.trim());
  const safeMessage = escapeHtml(fields.message.trim()).replaceAll("\n", "<br />");

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: fields.email.trim(),
    subject: `Portfolio inquiry: ${projectTypeLabel} — ${fields.name.trim()}`,
    text: [
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      `Project type: ${projectTypeLabel}`,
      "",
      fields.message.trim(),
    ].join("\n"),
    html: `
      <h2>New portfolio contact form submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Project type:</strong> ${escapeHtml(projectTypeLabel)}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
