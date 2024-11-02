"use client";

import { projects } from "@/lib/data";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectsProps = (typeof projects)[number] & {
  order: number;
  range: [number, number];
  progress: MotionValue<number>;
  containerScale: number;
  preferred?: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  order,
  progress,
  range,
  containerScale,
}: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.33 1"],
  });
  console.log("index", order);

  const scaleProgress = useTransform(progress, range, [1, containerScale]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale: scaleProgress,
      }}
      className="group flex  h-[100vh] sticky top-0"
    >
      <section
        style={{
          top: `calc(10% + ${order * 40}px)`,
        }}
        className="relative mb-3 sm:mb-8 last:mb-0 max-w-[1200px] mx-auto lg:min-h-[600px] lg:h-[520px] flex lg:items-center flex-col-reverse lg:flex-row lg:group-even:flex-row-reverse 
        bg-gradient-to-tr group-even:bg-gradient-to-tl from-gray-100 from-40% to-indigo-200 to-100%  dark:from-white/10 dark:to-indigo-400  transition rounded-2xl  border-black/5 
      overflow-hidden h-fit w-full container-shadow"
      >
        <div className="flex flex-col lg:h-full py-6 px-5 sm:py-10 sm:px-8 lg:pr-2 lg:pl-10 lg:group-even:pr-10 lg:group-even:pl-2  max-w-full lg:max-w-[58%] max-lg:bg-gray-100 max-lg:dark:bg-[#282F3C] z-10 max-lg:secondary-container-shadow">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className=" text-gray-700 dark:text-white/70 leading-relaxed mt-2 lg:mt-auto">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 ">
            {technologies.map((technology, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 rounded-full"
                key={index}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={image}
          alt={title}
          quality={95}
          className="w-auto lg:h-full transition group-hover:scale-105"
        />
      </section>
    </motion.div>
  );
}
