import { projects } from "@/lib/data";
import Image from "next/image";
import React, { useRef } from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <h2 className="text-3xl text-center font-medium capitalize mb-8">
        Projects
      </h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
