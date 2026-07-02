export const contactProjectTypes = [
  { value: "shopify", label: "Shopify Development" },
  { value: "ux", label: "UX Strategy & Design" },
  { value: "consultation", label: "Technical Consultation" },
  { value: "other", label: "Something Else" },
] as const;

export type ContactProjectType = (typeof contactProjectTypes)[number]["value"];

export type ContactFormFields = {
  name: string;
  email: string;
  projectType: ContactProjectType;
  message: string;
  website?: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormFields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getProjectTypeLabel(value: ContactProjectType): string {
  return (
    contactProjectTypes.find((option) => option.value === value)?.label ?? value
  );
}

export function validateContactForm(
  fields: ContactFormFields,
): ContactFormErrors | null {
  const errors: ContactFormErrors = {};

  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length > 120) {
    errors.name = "Name must be 120 characters or fewer.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (
    !contactProjectTypes.some((option) => option.value === fields.projectType)
  ) {
    errors.projectType = "Please select a project type.";
  }

  if (!message) {
    errors.message = "Please enter a message.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 5000) {
    errors.message = "Message must be 5000 characters or fewer.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
