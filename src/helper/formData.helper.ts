import { AppointmentFormValues } from "../components/AppointmentModal/appointmentModal.interface";

export const buildFormData = (
  appointmentFormValues: AppointmentFormValues
): FormData => {
  const { firstAnswer, secondAnswer, inputDescription, uploadedPhotos } =
    appointmentFormValues;
  const formData = new FormData();

  if (firstAnswer) {
    formData.append("firstAnswer", firstAnswer);
  }
  if (secondAnswer) {
    formData.append("secondAnswer", secondAnswer);
  }
  if (inputDescription) {
    formData.append("inputDescription", inputDescription);
  }

  if (uploadedPhotos && uploadedPhotos[0]) {
    formData.append("photos", uploadedPhotos[0]);
  }

  return formData;
};
