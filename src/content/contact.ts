import { homeCta } from "./home";

export const contactPage = {
  titleBefore: "Let's craft something ",
  titleEmphasis: "exceptional.",
  description: homeCta.description,
  emailLabel: "Direct Email",
  linkedInLabel: "Professional Network",
  connectTitle: "Connect",
  connectDescription:
    "Reach out via email or LinkedIn, browse GitHub, or download the resume.",
  imageCaption: "Available for Shopify frontend partnerships",
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
  "Contact Darshan S — email, LinkedIn, GitHub, and resume download for Shopify frontend work and consultations.";
