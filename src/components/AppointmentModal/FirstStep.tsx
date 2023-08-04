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
import { AppointmentModalContainer } from "./AppointmentModal.style";

export function FirstStep({
  goToNextStep,
  setCurrentOptions,
  currentOptions,
}: {
  goToNextStep: () => void;
  setCurrentOptions: Dispatch<
    SetStateAction<FlowType | SecondStepsOptionsMap | ThirdStepOptionsMap>
  >;
  currentOptions: FlowType;
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
          //@ts-ignore
          onClick={() => chooseOption(FLOW[option])}
        />
      ))}
    </AppointmentModalContainer>
  );
}
