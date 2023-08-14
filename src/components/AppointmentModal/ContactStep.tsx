import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { AppointmentFormValues } from "./appointmentModal.interface";
import { FormFieldContainer } from "./AppointmentModal.style";

function ContactStep({
  setAppointmentFormValues,
  appointmentFormValues,
  goToNextStep,
}: {
  setAppointmentFormValues: Dispatch<SetStateAction<AppointmentFormValues>>;
  appointmentFormValues: AppointmentFormValues;
  goToNextStep: () => void;
}) {
  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    goToNextStep();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <FormFieldContainer>
          <p>Nom*</p>
          <input
            type="text"
            value={appointmentFormValues?.contact?.name}
            name="name"
            placeholder="Jacques Dupont"
            onChange={(event) =>
              setAppointmentFormValues((previousValues) => ({
                ...previousValues,
                contact: {
                  ...previousValues.contact,
                  name: event.target.value,
                },
              }))
            }
            required
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <p>Adresse*</p>
          <input
            type="text"
            value={appointmentFormValues?.contact?.address}
            name="address"
            placeholder="10 rue des Acacias"
            onChange={(event) =>
              setAppointmentFormValues((previousValues) => ({
                ...previousValues,
                contact: {
                  ...previousValues.contact,
                  address: event.target.value,
                },
              }))
            }
            required
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <p>Code postal*</p>
          <input
            type="text"
            value={appointmentFormValues?.contact?.zipCode || ""}
            name="zipCode"
            placeholder="75000"
            onChange={(event) =>
              setAppointmentFormValues((previousValues) => ({
                ...previousValues,
                contact: {
                  ...previousValues.contact,
                  zipCode: event.target.value,
                },
              }))
            }
            required
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <p>Numéro de téléphone*</p>
          <input
            type="tel"
            value={appointmentFormValues?.contact?.phoneNumber}
            name="phone"
            placeholder="06 12 34 56 78"
            onChange={(event) =>
              setAppointmentFormValues((previousValues) => ({
                ...previousValues,
                contact: {
                  ...previousValues.contact,
                  phoneNumber: event.target.value,
                },
              }))
            }
            required
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <p>Email*</p>
          <input
            type="tel"
            value={appointmentFormValues?.contact?.email}
            name="email"
            placeholder="06 12 34 56 78"
            onChange={(event) =>
              setAppointmentFormValues((previousValues) => ({
                ...previousValues,
                contact: {
                  ...previousValues.contact,
                  email: event.target.value,
                },
              }))
            }
            required
          />
        </FormFieldContainer>
        <button style={{ display: "none" }} type="submit" />
      </form>
    </div>
  );
}

export default ContactStep;