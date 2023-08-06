import React, { Dispatch } from "react";
import { AppointmentFormValues } from "./appointmentModal.interface";
import {
  DescriptionStepContainer,
  DescriptionTextArea,
} from "./AppointmentModal.style";

function DescriptionStep({
  setAppointmentFormValues,
  appointmentFormValues,
}: {
  setAppointmentFormValues: Dispatch<
    React.SetStateAction<AppointmentFormValues>
  >;
  appointmentFormValues: AppointmentFormValues;
}) {
  return (
    <DescriptionStepContainer>
      <DescriptionTextArea
        onResize={() => null}
        name="message"
        placeholder="Décrivez le plus précisemment possible votre demande"
        rows={8}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setAppointmentFormValues((previousValues) => ({
            ...previousValues,
            inputDescription: event.target.value,
          }));
        }}
        value={appointmentFormValues.inputDescription || ""}
      />
    </DescriptionStepContainer>
  );
}

export default DescriptionStep;
