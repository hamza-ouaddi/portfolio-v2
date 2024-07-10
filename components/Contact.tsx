"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/lib/actions/contact.action";
import SubmitButton from "./ui/SubmitButton";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);
  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
    >
      <h2 className="text-3xl text-center font-medium capitalize mb-2">
        Contact me
      </h2>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:hamzaouaddi04@gmail.com" className="underline"></a>{" "}
        hamzaouaddi04@gmail.com or through this form
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="contactEmail"
          placeholder="Your email"
          required
          maxLength={250}
          className="h-14 px-4 rounded-lg border border-black/10"
        />
        <textarea
          placeholder="Your message"
          name="contactMessage"
          required
          maxLength={1024}
          className="h-56 my-3 p-4 rounded-lg border border-black/10 resize-none"
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}
