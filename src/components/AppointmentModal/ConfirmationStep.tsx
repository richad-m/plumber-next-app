import React from "react";
import { AppointmentFormValues } from "./appointmentModal.interface";
import {
  ConfirmationStepContainer,
  StepBodyTitle,
} from "./AppointmentModal.style";

function ConfirmationStep({
  appointmentFormValues,
}: {
  appointmentFormValues: AppointmentFormValues;
}) {
  const {
    firstAnswer,
    secondAnswer,
    inputDescription,
    uploadedPhotos,
    contact,
  } = appointmentFormValues;

  return (
    <ConfirmationStepContainer>
      <StepBodyTitle>Résumé de votre demande</StepBodyTitle>
      <p>Catégorie : {firstAnswer}</p>
      <p>Problème : {secondAnswer}</p>
      <p>Description : {inputDescription}</p>
      {uploadedPhotos ? (
        <div>{uploadedPhotos.length} photo(s) ajoutée(s)</div>
      ) : (
        <div>Pas de photos ajoutées</div>
      )}
      <StepBodyTitle>Vos informations</StepBodyTitle>
      <p>Nom : {contact?.name}</p>
      <p>Numéro de téléphone : {contact?.phoneNumber}</p>
      <p>Email : {contact?.email}</p>
      <p>Adresse : {`${contact?.address} ${contact?.zipCode}`} </p>
    </ConfirmationStepContainer>
  );
}

export default ConfirmationStep;
