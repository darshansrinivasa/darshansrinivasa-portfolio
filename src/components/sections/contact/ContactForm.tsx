"use client";

import { useState, type FormEvent } from "react";
import { contactPage } from "@/content/contact";
import { contactProjectTypes } from "@/lib/contact-form";
import type { ContactFormErrors, ContactProjectType } from "@/lib/contact-form";
import { cn } from "@/lib/cn";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFields = {
  name: "",
  email: "",
  projectType: "shopify" as ContactProjectType,
  message: "",
  website: "",
};

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setErrors({});
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        errors?: ContactFormErrors;
      };

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }

        setErrorMessage(data.error ?? contactPage.form.errorMessage);
        setStatus("error");
        return;
      }

      setFields(initialFields);
      setStatus("success");
    } catch {
      setErrorMessage(contactPage.form.errorMessage);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="space-y-3 py-4 text-center md:text-left"
        role="status"
        aria-live="polite"
      >
        <span className="material-symbols-outlined text-[32px] text-primary">
          check_circle
        </span>
        <h2 className="font-headline-md text-[24px] leading-snug text-on-surface md:text-headline-md">
          {contactPage.form.successTitle}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {contactPage.form.successMessage}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-label-md text-label-md text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-stack-sm md:space-y-stack-md" onSubmit={handleSubmit} noValidate>
      <div className="space-y-base">
        <label
          className="font-label-md text-label-md text-on-surface-variant"
          htmlFor="contact-name"
        >
          {contactPage.form.nameLabel}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={fields.name}
          onChange={(event) =>
            setFields((current) => ({ ...current, name: event.target.value }))
          }
          placeholder={contactPage.form.namePlaceholder}
          className={cn(
            "form-underline font-body-md text-on-surface placeholder:text-outline-variant/70",
            errors.name && "border-b-error",
          )}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name ? (
          <p id="contact-name-error" className="font-body-md text-[13px] text-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="space-y-base">
        <label
          className="font-label-md text-label-md text-on-surface-variant"
          htmlFor="contact-email"
        >
          {contactPage.form.emailLabel}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={fields.email}
          onChange={(event) =>
            setFields((current) => ({ ...current, email: event.target.value }))
          }
          placeholder={contactPage.form.emailPlaceholder}
          className={cn(
            "form-underline font-body-md text-on-surface placeholder:text-outline-variant/70",
            errors.email && "border-b-error",
          )}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email ? (
          <p id="contact-email-error" className="font-body-md text-[13px] text-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-base">
        <label
          className="font-label-md text-label-md text-on-surface-variant"
          htmlFor="contact-project-type"
        >
          {contactPage.form.projectTypeLabel}
        </label>
        <div className="relative">
          <select
            id="contact-project-type"
            name="projectType"
            value={fields.projectType}
            onChange={(event) =>
              setFields((current) => ({
                ...current,
                projectType: event.target.value as ContactProjectType,
              }))
            }
            className={cn(
              "form-underline cursor-pointer appearance-none bg-transparent pr-8 font-body-md text-on-surface",
              errors.projectType && "border-b-error",
            )}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "contact-project-type-error" : undefined
            }
          >
            {contactProjectTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-[20px] text-on-surface-variant">
            expand_more
          </span>
        </div>
        {errors.projectType ? (
          <p
            id="contact-project-type-error"
            className="font-body-md text-[13px] text-error"
          >
            {errors.projectType}
          </p>
        ) : null}
      </div>

      <div className="space-y-base">
        <label
          className="font-label-md text-label-md text-on-surface-variant"
          htmlFor="contact-message"
        >
          {contactPage.form.messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={fields.message}
          onChange={(event) =>
            setFields((current) => ({ ...current, message: event.target.value }))
          }
          placeholder={contactPage.form.messagePlaceholder}
          className={cn(
            "form-underline resize-none font-body-md text-on-surface placeholder:text-outline-variant/70",
            errors.message && "border-b-error",
          )}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <p id="contact-message-error" className="font-body-md text-[13px] text-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(event) =>
            setFields((current) => ({ ...current, website: event.target.value }))
          }
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="font-body-md text-[14px] text-error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="pt-stack-sm">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group flex w-full items-center justify-center gap-base rounded bg-primary-container py-4 font-label-md text-label-md text-on-primary-container transition-all duration-300 hover:bg-primary active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting"
            ? contactPage.form.submittingLabel
            : contactPage.form.submitLabel}
          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </button>
      </div>
    </form>
  );
}
