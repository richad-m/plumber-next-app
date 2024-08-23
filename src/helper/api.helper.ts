import { File } from "formidable";
import * as fs from "fs";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";
import { AppointmentFormData } from "../interfaces/appointment.interface";

export const getEmailBody = (fields: AppointmentFormData["fields"]): string => {
  const {
    firstAnswer,
    secondAnswer,
    inputDescription,
    name,
    email,
    address,
    phoneNumber,
  } = fields;

  return `
    <p> Nom : ${name} </p> 
    <p> Email : ${email} </p> 
    <p> Adresse : ${address} </p> 
    <p> Téléphone : <a href="tel:${phoneNumber}">${phoneNumber}</a> </p> 
    <p> Catégorie : ${firstAnswer} </p> 
    <p> Sous catégorie : ${secondAnswer || "pas de sous catégories"} </p> 
    <p> Description : ${inputDescription} </p> 
    `;
};

export const getAttachmentList = async (
  files: File[] | undefined
): Promise<CreateEmailOptions["attachments"]> => {
  const attachmentList: CreateEmailOptions["attachments"] = [];
  if (!files || !files.length) {
    return attachmentList;
  }

  for (const file of files) {
    const buffer = await fs.promises.readFile(file.filepath);
    const fileName = file.originalFilename || file.newFilename;

    attachmentList.push({
      filename: fileName,
      content: buffer,
    });
  }

  return attachmentList;
};
