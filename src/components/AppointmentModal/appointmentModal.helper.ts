import { AppointmentFormValues } from "./appointmentModal.interface";

export const getPrimaryButtonText = (
  shouldDisplaySubmitButton: boolean,
  isFinalStep: boolean
): string | undefined => {
  if (!shouldDisplaySubmitButton) {
    return undefined;
  }

  return isFinalStep ? "Envoyer la demande" : "Continuer";
};

export const isContactFormEmpty = (
  appointmentFormValues: AppointmentFormValues
): boolean => {
  if (!appointmentFormValues?.contact?.address) {
    return true;
  }
  if (!appointmentFormValues?.contact?.name) {
    return true;
  }
  if (!appointmentFormValues?.contact?.email) {
    return true;
  }
  if (!appointmentFormValues?.contact?.phoneNumber) {
    return true;
  }
  if (!appointmentFormValues?.contact?.zipCode) {
    return true;
  }

  return false;
};
