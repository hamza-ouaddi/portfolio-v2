"use server";

import { Resend } from "resend";
import { contactFormInputValidation } from "../utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const contactEmail = formData.get("contactEmail") as string;
  const contactMessage = formData.get("contactMessage") as string;

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
    const { data, error } = await resend.emails.send({
      from: "Contact <hello@hamzaouaddi.com>",
      to: "hello@hamzaouaddi.com",
      subject: "Message from personal website",
      reply_to: contactEmail,
      text: contactMessage,
      react: React.createElement(ContactFormEmail, {
        contactEmail,
        contactMessage,
      }),
    });

    if (error) {
      return {
        error: error.message || "An unknown error occurred.",
      };
    }
    return {
      data,
    };
  } catch (error: unknown) {
    return { error: `Failed to send email: ${(error as Error).message}` };
  }
};
