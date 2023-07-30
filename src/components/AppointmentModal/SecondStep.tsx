import React from "react";
import {
  FirstStepOptions,
  FIRST_TO_SECOND_STEP_OPTIONS,
} from "../../constants/appointmentSteps";
import Button from "../UI/Button";
import { AppointmentModalContainer } from "./AppointmentModal.style";

function SecondStep({ selectedOption }: { selectedOption?: FirstStepOptions }) {
  if (!selectedOption) {
    return null;
  }
  const options = FIRST_TO_SECOND_STEP_OPTIONS?.[selectedOption];
  return (
    <AppointmentModalContainer>
      {options?.map((option) => (
        <Button
          key={option}
          text={option}
          styleType={""}
          onClick={() => null}
        />
      ))}
    </AppointmentModalContainer>
  );
}

export default SecondStep;
