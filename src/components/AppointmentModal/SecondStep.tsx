import React, { Dispatch, SetStateAction } from "react";
import {
  FlowType,
  SecondStepsOptionsMap,
  ThirdStepOptionsMap,
} from "../../constants/appointmentSteps";
import { OptionButton } from "../UI/Button.style";
import { AppointmentFormValues } from "./appointmentModal.interface";
import { AppointmentModalContainer } from "./AppointmentModal.style";

function SecondStep({
  setCurrentOptions,
  goToNextStep,
  currentOptions,
  setAppointmentFormValues,
}: {
  setCurrentOptions: Dispatch<
    SetStateAction<FlowType | SecondStepsOptionsMap | ThirdStepOptionsMap>
  >;
  goToNextStep: () => void;
  currentOptions: Record<any, any>;
  setAppointmentFormValues: Dispatch<
    React.SetStateAction<AppointmentFormValues>
  >;
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
            setAppointmentFormValues((previousValues) => ({
              ...previousValues,
              secondAnswer: previousValues.secondAnswer
                ? `${previousValues.secondAnswer} - ${option}`
                : option,
            }));
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
