"use client";
import { projects } from "@/lib/data";
import React, { useRef } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";
import ProjectCard from "./ProjectCard";
import { useScroll } from "framer-motion";

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
      <h2 className="text-[10vw] md:text-[4vw] font-semibold !leading-[1.5] overflow-clip inline-block capitalize md:mb-4">
        Selected Projects
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
