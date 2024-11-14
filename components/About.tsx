"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import personalImage from "@/public/assets/images/my-image.jpg";
import darkLogo from "@/public/assets/images/logo-icon-dark.svg";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

const containerChildren = {
  initial: { opacity: 0, y: 200 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.5,
    },
  },
};

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="flex flex-col justify-center items-center gap-8 w-full text-left leading-8 lg:h-[75vh] px-[2%] sm:px-[5%] max-lg:my-28 lg:mb-40 scroll-mt-28"
      id="about"
    >
      <div className="flex flex-col gap-20 lg:flex-row justify-between lg:items-center min-w-fit z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            amount: 0.8,
          }}
          className="flex items-center w-fit"
        >
          <motion.div
            variants={containerChildren}
            className="z-10 w-fit lg:w-full"
          >
            <Image
              src={personalImage}
              alt="Hamza Ouaddi's Image"
              priority={true}
              className="h-60 w-60 lg:h-72 lg:w-72 xl:h-96 xl:w-96 rounded-full shadow-xl object-cover"
            />
          </motion.div>
          <motion.div
            variants={containerChildren}
            className="-ml-20 lg-ml-28 xl:-ml-52 w-36 lg:w-48 h-fit xl:w-96 z-0 "
          >
            <Image
              src={darkLogo}
              alt="Hamza Ouaddi Logo"
              priority={true}
              className=""
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            amount: 0.8,
          }}
          className="md:w-[80%] lg:w-[50%]"
        >
          <motion.h2
            variants={containerChildren}
            className="text-4xl sm:text-6xl text-left font-semibold !leading-[1.5] capitalize overflow-clip inline-block"
          >
            Hamza Ouaddi
          </motion.h2>
          <motion.div
            variants={containerChildren}
            className="space-y-4 text-[1.25em] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.25vw] text-left font-normal leading-[1.4] text-secondaryDarkerColor"
          >
            <p>
              A full-stack developer with expertise in React, Next.js, Vue.js,
              Node.js, Express.js,PHP Laravel, MongoDB, and SQL. Alongside my
              technical skills, I have a strong background in UI/UX design,
              enabling me to create intuitive and engaging user experiences.
            </p>

            <p>
              I’m passionate about creating innovative solutions to complex
              problems in the most creative way, and always looking for new
              challenges. Hence, I’m excited to continue learning and growing in
              my career.
            </p>
          </motion.div>

          <motion.div
            variants={containerChildren}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-start mt-8 gap-4 sm:gap-2 text-lg font-medium "
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
