import { FirstStepOptions } from "../../constants/appointmentSteps";
import OptionCardButton from "../OptionCardButton/OptionCardButton";
import { AppointmentModalContainer } from "./AppointmentModal.style";

export function FirstStep({
  goToNextStep,
  setCurrentOption,
}: {
  goToNextStep: () => void;
  setCurrentOption: (value?: any) => void;
}) {
  const chooseOption = (option: string): void => {
    setCurrentOption(option);
    goToNextStep();
  };
  return (
    <AppointmentModalContainer>
      {Object.values(FirstStepOptions).map((option) => (
        <OptionCardButton
          key={option}
          label={option}
          onClick={() => chooseOption(option)}
        />
      ))}
    </AppointmentModalContainer>
  );
}
