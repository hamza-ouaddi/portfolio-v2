"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="xl:w-[72rem] max-w-[72rem] text-left leading-8 mb-28 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <h2 className="text-2xl sm:text-5xl text-left font-bold !leading-[1.5] capitalize mb-8">
        About Me
      </h2>
      <p className="text-xl text-secondaryDarkerColor xl:w-[60rem] max-w-[72rem]">
        A full-stack developer with expertise in React, Next.js, Vue.js,
        Node.js, Express.js,PHP Laravel, MongoDB, and SQL. Alongside my
        technical skills, I have a strong background in UI/UX design, enabling
        me to create intuitive and engaging user experiences. I’m passionate
        about creating innovative solutions to complex problems in the most
        creative way, and always looking for new challenges. Hence, I’m excited
        to continue learning and growing in my career.
      </p>
    </motion.section>
  );
}
