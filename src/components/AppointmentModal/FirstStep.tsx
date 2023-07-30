import { FirstStepOptions } from "../../constants/appointmentSteps";
import Button from "../UI/Button";
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
        <Button
          key={option}
          text={option}
          styleType={""}
          onClick={() => chooseOption(option)}
        />
      ))}
    </AppointmentModalContainer>
  );
}
