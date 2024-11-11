"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/lib/actions/contact.action";
import SubmitButton from "./ui/SubmitButton";
import { useToast } from "./ui/use-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);
  const { toast } = useToast();

  const handleSubmit = async (formData: FormData) => {
    const result = await sendEmail(formData);

    if (result.error) {
      toast({
        title: "Failed to send email",
        description: result.error,
      });

      console.error("Client-side error:", result.error);
      return;
    }

    toast({
      title: "Your email sent successfully!",
    });
  };
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
      className="flex flex-col md:flex-row my-auto justify-between mb-20 sm:mb-28 w-full px-[2%] sm:px-[5%] "
    >
      <div>
        <h2 className="text-[12vw] sm:text-[6.75vw] font-medium ">
          Get in touch
        </h2>
        <p className="text-gray-700 dark:text-white/80 w-[480px] text-[4.25vw] md:text-[1.25vw]">
          Feel free to reach out for an opportunity, collaborate, or have a
          chat.
        </p>

        <a
          href="mailto:hamzaouaddi04@gmail.com"
          className="underline text-[4vw] md:text-[1vw]"
        >
          hamzaouaddi04@gmail.com
        </a>
      </div>
      <form
        className="mt-10 flex flex-col w-full md:w-1/2 dark:text-black"
        action={async (formData) => {
          await handleSubmit(formData);
        }}
      >
        <input
          type="email"
          name="contactEmail"
          placeholder="Your email"
          required
          maxLength={250}
          className="h-14 px-4 rounded-lg border border-black/10 dark:text-white/70 dark:bg-white dark:bg-white/10  dark:focus:bg-white/15 dark:focus:outline-white/70 dark:outline-none"
        />
        <textarea
          placeholder="Your message"
          name="contactMessage"
          required
          maxLength={1024}
          className="h-56 my-3 p-4 rounded-lg transition-all border border-black/10 resize-none dark:text-white/70 dark:bg-white dark:bg-white/10  dark:focus:bg-white/15 dark:focus:outline-white/70 dark:outline-none"
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}
