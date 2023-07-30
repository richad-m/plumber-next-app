import React from "react";
import {
  FirstStepOptions,
  FIRST_TO_SECOND_STEP_OPTIONS,
} from "../../constants/appointmentSteps";
import { OptionButton } from "../UI/Button.style";
import { AppointmentModalContainer } from "./AppointmentModal.style";

function SecondStep({ selectedOption }: { selectedOption?: FirstStepOptions }) {
  if (!selectedOption) {
    return null;
  }
  const options = FIRST_TO_SECOND_STEP_OPTIONS?.[selectedOption];
  return (
    <AppointmentModalContainer>
      {options?.map((option) => (
        <OptionButton key={option} onClick={() => null}>
          {option}
        </OptionButton>
      ))}
    </AppointmentModalContainer>
  );
}

export default SecondStep;
