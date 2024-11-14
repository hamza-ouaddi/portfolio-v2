"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/lib/actions/contact.action";
import SubmitButton from "./ui/SubmitButton";
import { useToast } from "./ui/use-toast";

const formFadeIn = {
  initial: { opacity: 0, y: 200 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: 0.5,
    },
  },
};

const container = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

const containerContent = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

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
      className="flex items-center mb-20 sm:mb-28 w-full px-[4%] sm:px-[5%] h-[80vh] sm:h-[72vh] "
    >
      <div className="flex flex-col w-full md:flex-row justify-between">
        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-[14vw] sm:text-[10.75vw] md:text-[6.75vw] font-medium overflow-clip">
            <motion.span variants={containerContent} className="inline-block ">
              Get in touch
            </motion.span>
          </h2>
          <p className="text-gray-700 dark:text-white/80 text-[4.25vw] sm:text-[3.25vw] md:text-[2.25vw] xl:text-[1.75vw] 2xl:text-[1.5vw] overflow-clip">
            <motion.span variants={containerContent} className="inline-block">
              Feel free to reach out for an opportunity, <br />
              collaborate, or have a chat.
            </motion.span>
          </p>
        </motion.div>
        <motion.form
          variants={formFadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="mt-10 flex flex-col w-full md:w-1/2 dark:text-black p-4 lg:p-10 rounded-2xl bg-gradient-to-br from-gray-100 from-40% to-[#dbd7fb] to-100% dark:from-white/10 dark:to-indigo-400/45 container-shadow"
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
            className="h-14 p-6 text-lg rounded-lg border border-black/10 dark:text-white/70  dark:bg-[#454856]  dark:focus:bg-white/15 dark:focus:outline-white/70 dark:outline-none"
          />
          <textarea
            placeholder="Your message"
            name="contactMessage"
            required
            maxLength={1024}
            className="h-56 my-3 p-6 text-lg rounded-lg transition-all border border-black/10 resize-none dark:text-white/70 dark:bg-[#454856] dark:focus:bg-white/15 dark:focus:outline-white/70 dark:outline-none"
          ></textarea>
          <SubmitButton />
        </motion.form>
      </div>
    </motion.section>
  );
}
