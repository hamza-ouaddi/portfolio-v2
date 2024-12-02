"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const heroSlideUp = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 3 },
  },
};

const headingContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 3,
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

function Hero() {
  const { ref } = useSectionInView("Home", 0.5);

  const headingContent = ["Full Stack ", "Developer ", "& UI/UX ", "Designer"];

  return (
    <motion.section
      variants={heroSlideUp}
      initial="initial"
      animate="animate"
      ref={ref}
      id="home"
      className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-24 justify-center text-center w-full h-[70vh] 2xl:h-[72vh] px-[2%] sm:px-[5%] sm:mb-0 mt-0 sm:mt-32 scroll-mt-96"
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
              delay: 3.4,
              duration: 1,
            }}
            className=" text-[1.25em] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.25vw] text-left font-normal leading-[1.4]"
          >
            Hi, I'm Hamza — a developer and designer. I'm Passionate about
            creating digital experiences that merge technical expertise with
            creativity, delivering solutions that are both user-friendly and
            visually appealing.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
