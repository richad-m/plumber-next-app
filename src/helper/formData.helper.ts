import { AppointmentFormValues } from "../components/AppointmentModal/appointmentModal.interface";
import { ContactFormValue } from "../components/ContactForm";

export const buildFormData = (
  appointmentFormValues: AppointmentFormValues
): FormData => {
  const {
    firstAnswer,
    secondAnswer,
    inputDescription,
    uploadedPhotos,
    contact,
  } = appointmentFormValues;
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
  if (contact?.name) {
    formData.append("name", contact?.name);
  }
  if (contact?.email) {
    formData.append("name", contact?.email);
  }
  if (contact?.phoneNumber) {
    formData.append("name", contact?.phoneNumber);
  }
  if (contact?.address && contact?.zipCode) {
    formData.append("name", `${contact?.address} ${contact.zipCode}`);
  }

  if (uploadedPhotos && uploadedPhotos[0]) {
    formData.append("photos", uploadedPhotos[0]);
  }

  return formData;
};

export const buildContactFormData = (
  contactFormValues: ContactFormValue
): FormData => {
  const formData = new FormData();
  const { name, zipCode, address, service, email, message, phoneNumber } =
    contactFormValues;

  if (message) {
    formData.append("inputDescription", message);
  }
  if (name) {
    formData.append("name", name);
  }
  if (email) {
    formData.append("email", email);
  }
  if (phoneNumber) {
    formData.append("phoneNumber", phoneNumber);
  }
  if (address && zipCode) {
    formData.append("address", `${address} ${zipCode}`);
  }

  return formData;
};
