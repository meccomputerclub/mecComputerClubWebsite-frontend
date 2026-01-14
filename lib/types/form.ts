export type FieldType = "text" | "number" | "email" | "textarea" | "select" | "radio" | "checkbox";

export interface FieldOption {
  label: string;
  value: string;
}

export interface FormField {
  label: string;
  name: string;
  type: FieldType;
  required: boolean;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  options?: FieldOption[];
}

export interface CreateFormPayload {
  title: string;
  description?: string;
  eventId: string;
  fields: FormField[];
}
