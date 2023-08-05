import React, { useState } from "react";
import {
  AppointmentSteps,
  FLOW,
  FlowType,
  NEXT_STEPS,
  PREVIOUS_STEPS,
  SecondStepsOptionsMap,
  ThirdStepOptionsMap,
} from "../../constants/appointmentSteps";
import Modal from "../UI/Modal/Modal";
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
  const [currentOptions, setCurrentOptions] = useState<
    FlowType | SecondStepsOptionsMap | ThirdStepOptionsMap
  >(FLOW);

  const goToNextStep = (): void =>
    setCurrentStep(
      (previousStep) =>
        NEXT_STEPS?.[previousStep] || AppointmentSteps.QUALIFICATION_1
    );

  const closeAndReset = (): void => {
    setCurrentOptions(FLOW);
    setCurrentStep(AppointmentSteps.QUALIFICATION_1);
    onClose();
  };

  const backToPreviousStep = (): void => {
    setCurrentStep(
      (previousStep) =>
        PREVIOUS_STEPS?.[previousStep] || AppointmentSteps.QUALIFICATION_1
    );
    setCurrentOptions(FLOW);
  };

  return (
    <Modal
      title="Quel est votre problème ?"
      onClose={closeAndReset}
      isOpen={isOpen}
      primaryAction={goToNextStep}
      goBack={
        currentStep === AppointmentSteps.QUALIFICATION_1
          ? undefined
          : backToPreviousStep
      }
    >
      {currentStep === AppointmentSteps.QUALIFICATION_1 && (
        <FirstStep
          currentOptions={currentOptions}
          goToNextStep={goToNextStep}
          setCurrentOptions={setCurrentOptions}
        />
      )}
      {currentStep === AppointmentSteps.QUALIFICATION_2 && (
        <SecondStep
          goToNextStep={goToNextStep}
          currentOptions={currentOptions}
          setCurrentOptions={setCurrentOptions}
        />
      )}
      {currentStep === AppointmentSteps.DESCRIPTION && (
        <div>Bienvenue en description</div>
      )}
    </Modal>
  );
}

export default AppointmentModal;
