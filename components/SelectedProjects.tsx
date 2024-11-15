"use client";
import { projects } from "@/lib/data";
import React, { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import ProjectCard from "./ProjectCard";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

const sectionTitleFadeIn = {
  initial: { opacity: 0, y: 100 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.5,
    },
  },
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-col justify-center items-center scroll-mt-28 mb-0 md:mb-40 w-full px-[2%] sm:px-[5%]"
    >
      <h2 className="text-[10vw] md:text-[4vw] font-semibold !leading-[1.5] overflow-clip">
        <motion.span
          variants={sectionTitleFadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="inline-block"
        >
          Selected Work
        </motion.span>
      </h2>
      <div ref={containerRef} className="w-full">
        {projects
          .filter((project) => project.preferred)
          .map((project, index) => {
            const containerScale = 1 - (5 - index) * 0.05;

            return (
              <ProjectCard
                key={index}
                order={index}
                range={[index * 0.2, 1]}
                progress={scrollYProgress}
                containerScale={containerScale}
                {...project}
              />
            );
          })}
      </div>
    </section>
  );
}
