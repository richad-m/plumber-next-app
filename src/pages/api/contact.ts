import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";
import { getAttachmentList, getEmailBody } from "../../helper/api.helper";
import { AppointmentFormData } from "../../interfaces/appointment.interface";

export const config = {
  api: {
    bodyParser: false,
  },
};

const { NEXT_PUBLIC_RESEND_API_KEY, NEXT_PUBLIC_CONTACT_EMAIL } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return;
  }

  // parse form with a Promise wrapper
  const data: AppointmentFormData = await new Promise((resolve, reject) => {
    const formData = new IncomingForm();
    formData.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  const attachments = await getAttachmentList(data.files.photos);
  const bodyHtml = getEmailBody(data.fields);

  const emailSettings: CreateEmailOptions = {
    from: "test@resend.dev",
    to: NEXT_PUBLIC_CONTACT_EMAIL || "",
    subject: "test",
    html: bodyHtml,
    attachments,
  };

  const resend = new Resend(NEXT_PUBLIC_RESEND_API_KEY);
  await resend.emails.send(emailSettings);

  res.status(200).json({ message: "Email sent" });
}
