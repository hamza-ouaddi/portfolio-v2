"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

const headingContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

const headingParts = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function ModernHero() {
  const { ref } = useSectionInView("Home", 0.5);

  const headingContent = ["Full Stack ", "Developer ", "& UI/UX ", "Designer"];

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-24 justify-center mb-28 text-center w-full h-[44vh] sm:h-[72vh] md:h-[46vh] 2xl:h-[72vh] px-[2%] sm:px-[5%] sm:mb-0 scroll-mt-96"
    >
      <motion.h1
        variants={headingContainer}
        initial="initial"
        animate="animate"
        className="mt-4 md:mt-4 lg:mt-40 pb-8 text-[8.5vw] sm:text-[7.75vw] text-left font-medium !leading-[1] overflow-clip"
      >
        {headingContent.map((heading, index) => (
          <motion.span
            className="inline-block"
            key={index}
            variants={headingParts}
          >
            {heading}
            {"\u00A0"}
            {index === 1 && <br />}{" "}
          </motion.span>
        ))}
      </motion.h1>

      <div className=" flex flex-col items-end justify-between ">
        <div className="flex justify-end items-center gap-4 w-[100%] sm:w-[80%] md:w-[80%] lg:w-[50%]">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.6, 0.01, 0.05, 0.95],
              delay: 0.8,
              duration: 1,
            }}
            className=" text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.25vw] text-left font-normal leading-[1.4]"
          >
            Hi, I'm Hamza — a developer and designer. I'm Passionate about
            creating digital experiences that merge technical expertise with
            creativity, delivering solutions that are both user-friendly and
            visually appealing.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default ModernHero;
