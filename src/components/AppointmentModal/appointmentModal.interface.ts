import { FirstStepOptions } from "../../constants/appointmentSteps";

export interface AppointmentFormValues {
  firstAnswer?: FirstStepOptions;
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
