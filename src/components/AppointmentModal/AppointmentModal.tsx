import React, { useState } from "react";
import {
  AppointmentSteps,
  FirstStepOptions,
  NEXT_STEPS,
} from "../../constants/appointmentSteps";
import Modal from "../UI/Modal";
import { FirstStep } from "./FirstStep";
import SecondStep from "./SecondStep";

function AppointmentModal({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const [currentStep, setCurrentStep] = useState<AppointmentSteps>(
    AppointmentSteps.QUALIFICATION_1
  );
  const [currentOption, setCurrentOption] = useState<FirstStepOptions>();

  const goToNextStep = (): void =>
    setCurrentStep(
      (previousStep) =>
        NEXT_STEPS?.[previousStep] || AppointmentSteps.QUALIFICATION_1
    );

  const closeAndReset = (): void => {
    setCurrentStep(AppointmentSteps.QUALIFICATION_1);
    onClose();
  };

  return (
    <Modal
      title="Quel est votre problème ?"
      onClose={closeAndReset}
      isOpen={isOpen}
      primaryAction={goToNextStep}
    >
      {currentStep === AppointmentSteps.QUALIFICATION_1 && (
        <FirstStep
          goToNextStep={goToNextStep}
          setCurrentOption={setCurrentOption}
        />
      )}
      {currentStep === AppointmentSteps.QUALIFICATION_2 && (
        <SecondStep selectedOption={currentOption} />
      )}
    </Modal>
  );
}

export default AppointmentModal;
