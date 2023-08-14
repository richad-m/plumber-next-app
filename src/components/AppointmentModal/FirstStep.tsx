import { Dispatch, SetStateAction } from "react";
import {
  FirstStepOptions,
  FirstStepOptionsMap,
  FLOW,
  FlowType,
  SecondStepsOptionsMap,
  ThirdStepOptionsMap,
} from "../../constants/appointmentSteps";
import OptionCardButton from "../OptionCardButton/OptionCardButton";
import { AppointmentFormValues } from "./appointmentModal.interface";
import { AppointmentModalContainer } from "./AppointmentModal.style";

export function FirstStep({
  goToNextStep,
  setCurrentOptions,
  currentOptions,
  setAppointmentFormValues,
}: {
  goToNextStep: () => void;
  setCurrentOptions: Dispatch<
    SetStateAction<FlowType | SecondStepsOptionsMap | ThirdStepOptionsMap>
  >;
  currentOptions: FlowType;
  setAppointmentFormValues: Dispatch<
    React.SetStateAction<AppointmentFormValues>
  >;
}) {
  const chooseOption = (options: FirstStepOptionsMap): void => {
    setCurrentOptions(options);
    goToNextStep();
  };
  return (
    <AppointmentModalContainer>
      {Object.keys(currentOptions).map((option) => (
        <OptionCardButton
          key={option}
          label={option as FirstStepOptions}
          onClick={() => {
            setAppointmentFormValues((previousValues) => ({
              ...previousValues,
              firstAnswer: option,
            }));
            //@ts-ignore
            chooseOption(FLOW[option]);
          }}
        />
      ))}
    </AppointmentModalContainer>
  );
}
