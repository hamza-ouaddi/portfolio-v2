"use client";
import { projects } from "@/lib/data";
import React, { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import SelectedProjectCard from "./SelectedProjectCard";
import { useScroll } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

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
      className="flex flex-col justify-center items-center scroll-mt-28 max-lg:mt-28 mb-0 lg:mb-40 w-full px-[2%] sm:px-[5%]"
    >
      <SectionTitle title="Selected Projects" />
      <div
        ref={containerRef}
        className="w-full flex flex-col justify-center items-center mb-20 sm:mb-64 md:mb-80 lg:mb-0"
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
    </section>
  );
}
