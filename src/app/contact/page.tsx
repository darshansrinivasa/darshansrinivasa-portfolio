import type { Metadata } from "next";
import { ContactPageContent } from "@/components/sections/contact/ContactPageContent";
import { contactMetadataDescription } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: contactMetadataDescription,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
