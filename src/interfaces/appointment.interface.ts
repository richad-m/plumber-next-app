import type { File } from "formidable";

export interface AppointmentFormData {
  fields: {
    firstAnswer?: string;
    secondAnswer?: string;
    inputDescription?: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
  };
  files: {
    photos?: File[];
  };
}
