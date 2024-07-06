"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg border border-black/10"
        />
        <textarea
          placeholder="Your message"
          className="h-56 my-3 p-4 rounded-lg border border-black/10"
        ></textarea>
        <button
          type="submit"
          className="group flex justify-center items-center gap-2 h-12 w-32 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 active:scale-105 hover:scale-110 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
