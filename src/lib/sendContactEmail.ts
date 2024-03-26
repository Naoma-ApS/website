"use server";

import { ContactFormData } from "@app/contact/page";
import { env } from "@env";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export default async function sendContactEmail(form: ContactFormData) {
  const { data, error } = await resend.emails.send({
    from: "Kontakt fra naomadk website <it@naoma.dk>",
    to: "kvi@naoma.dk",
    subject: `Naomadk website contact form fra - ${form.email}!`,
    html: `<div> <p>Emne: ${form.title}</p> <p>Email: ${form.email}</p> <p>Besked: ${form.message}</p> </div>`,
  });

  if (error) {
    throw new Error(JSON.stringify(error));
  }

  return data;
}
