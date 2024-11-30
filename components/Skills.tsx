"use client";

import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const carouselFadeIn = {
  initial: { opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.5,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  const firstCarousel = skills.slice(0, Math.ceil(skills.length / 2));
  const secondCarousel = skills.slice(Math.ceil(skills.length / 2));
  return (
    <section
      ref={ref}
      id="skills"
      className="relative flex flex-col justify-center w-full text-center px-[2%] sm:px-[5%] max-lg:mt-28 mb-28 sm:mb-40 scroll-mt-28 overflow-x-clip"
    >
      <SectionTitle title="Skills" />

      <div className="absolute bg-[#ffb7ff] dark:bg-[#9e5a84] top-[16rem] right-[4rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
      <div
        className="absolute bg-[#dbd7fb] dark:bg-[#676394] top-[8rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
      md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"
      ></div>

      <motion.div
        variants={carouselFadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex mt-24"
      >
        <motion.div
          transition={{
            duration: 14,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex gap-14 md:gap-16 pr-16"
        >
          {[...firstCarousel, ...firstCarousel].map((skill, index) => (
            <motion.li
              key={index}
              className="w-32 h-32 md:w-52 md:h-52 flex flex-col items-center justify-center gap-2 text-8xl p-4 border-white dark:border-white/15 border-opacity-40 dark:bg-gray-950 
        bg-opacity-65 dark:bg-opacity-55 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-white dark:bg-white/10 border border-black/[0.1] rounded-xl"
            >
              {<skill.icon />}{" "}
              <span className="text-sm md:text-lg">{skill.name}</span>
            </motion.li>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={carouselFadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex mt-14 md:mt-16"
      >
        <motion.div
          transition={{
            duration: 14,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          initial={{ translateX: "-50%" }}
          animate={{ translateX: 0 }}
          className="flex gap-14 md:gap-16 pr-16"
        >
          {[...secondCarousel, ...secondCarousel].map((skill, index) => (
            <motion.li
              key={index}
              className="w-32 h-32 md:w-52 md:h-52 flex flex-col items-center justify-center gap-2 text-8xl p-4 border-white dark:border-white/15 border-opacity-40 dark:bg-gray-950 
        bg-opacity-65 dark:bg-opacity-55 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-white dark:bg-white/10 border border-black/[0.1] rounded-xl"
            >
              {<skill.icon />}{" "}
              <span className="text-sm md:text-lg">{skill.name}</span>
            </motion.li>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
