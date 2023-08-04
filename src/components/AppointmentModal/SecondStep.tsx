import React, { Dispatch, SetStateAction } from "react";
import {
  FlowType,
  SecondStepsOptionsMap,
  ThirdStepOptionsMap,
} from "../../constants/appointmentSteps";
import { OptionButton } from "../UI/Button.style";
import { AppointmentModalContainer } from "./AppointmentModal.style";

function SecondStep({
  setCurrentOptions,
  goToNextStep,
  currentOptions,
}: {
  setCurrentOptions: Dispatch<
    SetStateAction<FlowType | SecondStepsOptionsMap | ThirdStepOptionsMap>
  >;
  goToNextStep: () => void;
  currentOptions: Record<any, any>;
}) {
  return (
    <AppointmentModalContainer>
      {Object.keys(currentOptions)?.map((option) => (
        <OptionButton
          key={option}
          onClick={() => {
            setCurrentOptions(
              (previousOptions: any) => previousOptions[option]
            );
            if (!currentOptions[option]) {
              goToNextStep();
            }
          }}
        >
          {option}
        </OptionButton>
      ))}
    </AppointmentModalContainer>
  );
}

export default SecondStep;
