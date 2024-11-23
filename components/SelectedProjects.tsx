"use client";
import { projects } from "@/lib/data";
import React, { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import SelectedProjectCard from "./SelectedProjectCard";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import PrimaryLinkButton from "./ui/PrimaryLinkButton";
import SectionTitle from "./ui/SectionTitle";

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
      className="flex flex-col justify-center items-center scroll-mt-28 max-lg:my-40 mb-0 md:mb-40 w-full px-[2%] sm:px-[5%]"
    >
      <SectionTitle title="Selected Projects" />
      <div
        ref={containerRef}
        className="w-full flex flex-col justify-center items-center"
      >
        {projects
          .filter((project) => project.preferred)
          .map((project, index) => {
            const containerScale = 1 - (5 - index) * 0.05;

            return (
              <SelectedProjectCard
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
      <PrimaryLinkButton title="More projects" link="/work" />
    </section>
  );
}
