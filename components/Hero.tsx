"use client";

import Image from "next/image";
import React from "react";
import personalImage from "@/public/assets/images/my-image.jpg";
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
      className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-24 justify-center mb-28 text-center w-full h-[44vh] sm:h-[46vh] md:h-[40vh] lg:h-[48vh] xl:h-[64vh] 2xl:h-[72vh] px-[2%] sm:px-[5%] sm:mb-0 scroll-mt-96"
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
          {/* <div className="flex justify-start items-center min-w-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Image
                src={personalImage}
                alt="Hamza Ouaddi's Image"
                priority={true}
                className="h-36 w-36 rounded-full shadow-xl object-cover"
              />
            </motion.div>
          </div> */}
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: [0.6, 0.01, 0.05, 0.95],
              delay: 0.8,
              duration: 1,
            }}
            className=" text-[4vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.25vw] text-left font-normal leading-[1.4]"
          >
            Hi, I'm Hamza — a developer and designer. I'm Passionate about
            creating digital experiences that merge technical expertise with
            creativity, delivering solutions that are both user-friendly and
            visually appealing.
          </motion.p>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-start w-[46%] gap-4 sm:gap-2 text-lg font-medium "
        >
          <div className="flex max-sm:flex-col gap-4 sm:gap-2 max-sm:items-center max-sm:w-full">
            <Link
              href="#contact"
              className="group max-sm:w-full bg-gray-900 dark:border dark:border-white/10 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-[10px] outline-none 
            focus:scale-110 hover:scale-105 hover:bg-gray-950 transition"
            >
              Get in touch{" "}
              <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
            </Link>
            <Link
              href="/resume"
              className="group max-sm:w-full bg-white dark:bg-white/10 px-7 py-3 flex items-center justify-center gap-2 rounded-[10px] outline-none 
            focus:scale-110 hover:scale-105 transition border border-black/10"
            >
              My resume{" "}
              <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
            </Link>
          </div>
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
        </motion.div> */}
      </div>
    </section>
  );
}

export default ModernHero;
