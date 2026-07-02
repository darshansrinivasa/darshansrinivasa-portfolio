import { homeCta } from "./home";

export const contactPage = {
  titleBefore: "Let's craft something ",
  titleEmphasis: "exceptional.",
  description: homeCta.description,
  emailLabel: "Direct Email",
  linkedInLabel: "Professional Network",
  locationLabel: "Based in Bangalore, India — Working Globally",
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "E.g. Julianne Moore",
    emailLabel: "Email Address",
    emailPlaceholder: "julianne@boutique.com",
    projectTypeLabel: "Project Type",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your vision and objectives...",
    submitLabel: "Send Inquiry",
    submittingLabel: "Sending...",
    successTitle: "Message sent",
    successMessage:
      "Thanks for reaching out. I'll get back to you within 1–2 business days.",
    errorMessage:
      "Something went wrong while sending your message. Please try again or email me directly.",
  },
  imageCaption: "Available for Shopify partnerships",
  links: [
    {
      id: "email",
      label: "Email",
      description: "Best for project inquiries and collaborations",
      icon: "mail",
      getHref: (email: string) => `mailto:${email}`,
      external: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      description: "Connect professionally",
      icon: "work",
      hrefKey: "linkedIn" as const,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      description: "View code and open-source work",
      icon: "code",
      hrefKey: "github" as const,
      external: true,
    },
    {
      id: "resume",
      label: "Resume",
      description: "Download PDF",
      icon: "description",
      hrefKey: "resume" as const,
      external: false,
      download: true,
    },
  ],
} as const;

export const contactMetadataDescription =
  "Contact Darshan S — email, LinkedIn, GitHub, and resume download for Shopify work and consultations.";
