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
  const uploadHandler = (files: FileList | null): void => {
    try {
      if (!files) {
        return;
      }
      const uploadedFile = files[0];
      console.log(files);
      if (
        uploadedFile.size > MAXIMUM_FILE_SIZE ||
        !uploadedFile.type.includes("image")
      ) {
        return;
      }
      setAppointmentFormValues((previousValues) => ({
        ...previousValues,
        uploadedPhotos: files,
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
          <Image src={phonePhoto} alt={"take a photo"} width={200} />
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
