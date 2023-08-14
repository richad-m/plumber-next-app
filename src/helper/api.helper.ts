import { File } from "formidable";
import * as fs from "fs";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";
import { AppointmentFormData } from "../interfaces/appointment.interface";

export const getEmailBody = (fields: AppointmentFormData["fields"]): string => {
  const { firstAnswer, secondAnswer, inputDescription } = fields;

  return `
    <p> Catégorie : ${firstAnswer} </p> 
    </br>
    <p> Sous catégorie : ${secondAnswer} </p> 
    </br>
    <p> Description : ${inputDescription} </p> 
    </br>
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
