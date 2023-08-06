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
import { AppointmentFormValues } from "./appointmentModal.interface";
import ConfirmationStep from "./ConfirmationStep";
import DescriptionStep from "./DescriptionStep";
import FileImport from "./FileImportStep";
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

  const [appointmentFormValues, setAppointmentFormValues] =
    useState<AppointmentFormValues>({});

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
          setAppointmentFormValues={setAppointmentFormValues}
        />
      )}
      {currentStep === AppointmentSteps.QUALIFICATION_2 && (
        <SecondStep
          goToNextStep={goToNextStep}
          currentOptions={currentOptions}
          setCurrentOptions={setCurrentOptions}
          setAppointmentFormValues={setAppointmentFormValues}
        />
      )}
      {currentStep === AppointmentSteps.IMPORT_PHOTOS && (
        <FileImport setAppointmentFormValues={setAppointmentFormValues} />
      )}
      {currentStep === AppointmentSteps.DESCRIPTION && (
        <DescriptionStep
          setAppointmentFormValues={setAppointmentFormValues}
          appointmentFormValues={appointmentFormValues}
        />
      )}
      {currentStep === AppointmentSteps.CONFIRMATION && (
        <ConfirmationStep appointmentFormValues={appointmentFormValues} />
      )}
    </Modal>
  );
}

export default AppointmentModal;
