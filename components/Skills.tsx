"use client";

import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 440,
      damping: 22,
      duration: 0.05,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);
  return (
    <section
      ref={ref}
      id="skills"
      className="max-w-[52rem] text-center scroll-mt-28 mb-28 sm:mb-40"
    >
      <h2 className="text-3xl text-center font-medium capitalize mb-8">
        Skills
      </h2>

      <motion.ul
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            className="bg-white px-5 py-3 border border-black/[0.1] rounded-xl"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
