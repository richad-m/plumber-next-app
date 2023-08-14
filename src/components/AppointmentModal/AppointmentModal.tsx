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
import { buildFormData } from "../../helper/formData.helper";
import Modal from "../UI/Modal/Modal";
import { AppointmentFormValues } from "./appointmentModal.interface";
import ConfirmationStep from "./ConfirmationStep";
import DescriptionStep from "./DescriptionStep";
import FileImport from "./FileImportStep";
import { FirstStep } from "./FirstStep";
import SecondStep from "./SecondStep";
import { showToastError, showToastSuccess } from "../UI/Toast/toast.helper";

const { NEXT_PUBLIC_APP_API_URL } = process.env;

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
  const [isModalButtonDisabled, setIsModalButtonDisabled] = useState(false);

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

  const sendAppointmentEmail = async (): Promise<void> => {
    const formData = buildFormData(appointmentFormValues);
    setIsModalButtonDisabled(true);
    try {
      await fetch(`${NEXT_PUBLIC_APP_API_URL}/contact`, {
        method: "POST",
        body: formData,
      });
      closeAndReset();
      showToastSuccess(
        "Votre demande a bien été prise en compte.\n Nous vous rappelerons dès que possible."
      );
    } catch (error: unknown) {
      console.error(error);
      showToastError("Une erreur est survenue");
    } finally {
      setIsModalButtonDisabled(false);
    }
  };

  const isFinalStep = currentStep === AppointmentSteps.CONFIRMATION;

  return (
    <Modal
      title="Quel est votre problème ?"
      onClose={closeAndReset}
      isOpen={isOpen}
      primaryAction={isFinalStep ? sendAppointmentEmail : goToNextStep}
      goBack={
        currentStep === AppointmentSteps.QUALIFICATION_1
          ? undefined
          : backToPreviousStep
      }
      primaryButtonText={isFinalStep ? "Envoyer la demande" : "Continuer"}
      disabled={isModalButtonDisabled}
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
