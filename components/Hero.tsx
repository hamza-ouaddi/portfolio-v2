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
      className="mb-28 text-center max-w-[55rem] sm:mb-0 scroll-mt-96"
    >
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={personalImage}
            alt="Hamza Ouaddi's Image"
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
          />
        </motion.div>
      </div>

      {/* <p>
        Hello, I'm Hamza Ouaddi, a full-stack developer, and UI/UX designer. I'm
        all about creating user-friendly solutions that not only work well but
        also look awesome. Let's team up and turn your concepts into reality!
      </p> */}

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl sm:text-4xl font-medium !leading-[1.5]"
      >
        <span className="font-bold"> Hello</span>, I'm{" "}
        <span className="font-bold">Hamza Ouaddi</span>, a{" "}
        <span className="font-bold">full-stack developer</span>, and
        <span className="font-bold"> UI/UX designer.</span> I'm passionate about
        creating <span className="font-bold">user-friendly</span> and{" "}
        <span className="font-bold">visually appealing </span> digital
        solutions.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium "
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110  active:scale-105 hover:scale-110 hover:bg-gray-950 transition"
        >
          Get in touch{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>
        <Link
          href="/resume"
          className="group bg-white dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 active:scale-105 hover:scale-110 transition border border-black/10"
        >
          My resume{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/hamza-ouaddi/"
          className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-white/60 flex items-center gap-2 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition border border-black/10"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://github.com/hamza-ouaddi"
          target="_blank"
          className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-white/60 flex items-center gap-2 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition border border-black/10"
        >
          <BsGithub />
        </Link>
        <Link
          href="https://dribbble.com/hamza_adi"
          className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-white/60 flex items-center gap-2 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition border border-black/10"
        >
          <BsDribbble />
        </Link>
      </motion.div>
    </section>
  );
}
