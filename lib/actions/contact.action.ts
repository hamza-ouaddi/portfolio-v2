"use server";

import { Resend } from "resend";
import { contactFormInputValidation } from "../utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const contactEmail = formData.get("contactEmail");
  const contactMessage = formData.get("contactMessage");

  if (!contactFormInputValidation(contactEmail, 250)) {
    return {
      error: "Invalid Contact Email",
    };
  }

  if (!contactFormInputValidation(contactMessage, 1024)) {
    return {
      error: "Invalid Contact Message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: "hamza0addi@gmail.com",
      subject: "Hello world",
      reply_to: contactEmail as string,
      text: contactMessage as string,
    });
  } catch (error) {
    throw error;
  }
}
