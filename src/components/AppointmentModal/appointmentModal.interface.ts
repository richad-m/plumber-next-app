export interface AppointmentFormValues {
  firstAnswer?: string;
  secondAnswer?: string;
  uploadedPhotos?: FileList;
  inputDescription?: string;
  contact?: {
    name?: string;
    phoneNumber?: string;
    email?: string;
    address?: string;
    zipCode?: string;
    newClient?: boolean;
  };
}
