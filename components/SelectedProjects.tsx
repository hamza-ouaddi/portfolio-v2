"use client";
import { projects } from "@/lib/data";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Project from "./Project";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <h2 className="text-3xl text-center font-medium capitalize mb-8">
        Projects
      </h2>
      <div>
        {projects.slice(0, 4).map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
