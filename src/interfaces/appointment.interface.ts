export interface AppointmentFormData {
  fields: {
    firstAnswer?: string;
    secondAnswer?: string;
    inputDescription?: string;
  };
  files: {
    file?: File[];
  };
}
