import React, { Dispatch, SetStateAction, useState } from "react";
import { FileUpload } from "../FileUpload/FileUpload";
import Image from "next/image";
import {
  AppointmentModalContainer,
  FileUploadsContainer,
  PhonePhotoContainer,
} from "./AppointmentModal.style";
import phonePhoto from "../../../assets/photo_screen.png";
import { AppointmentFormValues } from "./appointmentModal.interface";

export const MAXIMUM_FILE_SIZE = 5000000;

function FileImport({
  setAppointmentFormValues,
}: {
  setAppointmentFormValues: Dispatch<
    React.SetStateAction<AppointmentFormValues>
  >;
}) {
  const uploadHandler = (file: File): void => {
    try {
      if (file.size > MAXIMUM_FILE_SIZE || !file.type.includes("image")) {
        return;
      }
      setAppointmentFormValues((previousValues) => ({
        ...previousValues,
        uploadedPhotos: previousValues?.uploadedPhotos?.length
          ? [...previousValues?.uploadedPhotos, file]
          : [file],
      }));
    } catch (error: unknown) {
      console.error(
        `[uploadHandler] - Error while uploading file to request phone update`,
        error
      );
    }
  };
  return (
    <>
      <AppointmentModalContainer>
        <PhonePhotoContainer>
          <Image src={phonePhoto} alt="prendre-une-photo" width={200} />
          <p>
            Ajoutez une photo pour nous aider à répondre au mieux à votre
            problème
          </p>
        </PhonePhotoContainer>
        <FileUploadsContainer>
          <FileUpload uploadHandler={uploadHandler} />
          <FileUpload uploadHandler={uploadHandler} />
          <FileUpload uploadHandler={uploadHandler} />
          <FileUpload uploadHandler={uploadHandler} />
        </FileUploadsContainer>
      </AppointmentModalContainer>
    </>
  );
}

export default FileImport;
