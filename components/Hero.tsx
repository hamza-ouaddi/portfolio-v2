"use client";

import Image from "next/image";
import React from "react";
import personalImage from "@/public/my-image.jpg";
import { motion } from "framer-motion";
import { BsArrowRight, BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 text-center w-[72rem] sm:mb-0 scroll-mt-96"
    >
      <div className="flex justify-start items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={personalImage}
            alt="Hamza Ouaddi's Image"
            priority={true}
            className="h-36 w-36 rounded-full  shadow-xl object-cover"
          />
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className=" mt-4 px-4 text-2xl sm:text-5xl text-left font-bold !leading-[1.5]"
      >
        <span className="font-bold"> Hello, I'm Hamza Ouaddi</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-10 mt-2 px-4 text-secondaryColor text-2xl sm:text-4xl text-left font-semibold !leading-[1.2]"
      >
        A Full Stack Developer and UI/UX Designer <br /> who is passionate about
        creating user-friendly <br /> and visually appealing digital solutions.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-start gap-2 px-4 text-lg font-medium "
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-[10px] outline-none 
          focus:scale-110 hover:scale-105 hover:bg-gray-950 transition"
        >
          Get in touch{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>
        <Link
          href="/resume"
          className="group bg-white dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-[10px] outline-none 
          focus:scale-110 hover:scale-105 transition border border-black/10"
        >
          My resume{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>
        <div className="flex flex-row items-center justify-center gap-2">
          <Link
            href="https://www.linkedin.com/in/hamza-ouaddi/"
            className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-white/60 flex items-center gap-2 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.10]  hover:text-gray-950 transition border border-black/10"
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://github.com/hamza-ouaddi"
            target="_blank"
            className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-white/60 flex items-center gap-2 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.10] hover:text-gray-950 transition border border-black/10"
          >
            <BsGithub />
          </Link>
          <Link
            href="https://dribbble.com/hamza_adi"
            className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-white/60 flex items-center gap-2 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.10] hover:text-gray-950 transition border border-black/10"
          >
            <BsDribbble />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
