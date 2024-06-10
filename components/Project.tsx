"use client";

import { projects } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectsProps = (typeof projects)[number];

export default function Project({
  title,
  description,
  image,
  technologies,
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="relative bg-gray-100 hover:bg-gray-200 transition max-w-2xl rounded-lg border border-black/5 
      overflow-hidden mb-3 sm:mb-8 last:mb-0 sm:pr-8 sm:h-80 group-even:pl-8"
      >
        <div className="flex flex-col h-full pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] group-even:ml-72">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
          <ul className="flex flex-wrap gap-2  sm:mt-auto">
            {technologies.map((technology, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
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
          className="absolute top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl 
        group-even:right-[initial] group-even:-left-40 transition 
        group-hover:-translate-x-3 
        group-hover:translate-y-5 
        group-hover:-rotate-3 
        group-even:group-hover:translate-y-5 
        group-even:group-hover:translate-x-3 
        group-even:group-hover:rotate-3 
        group-hover:scale-105"
        />
      </section>
    </motion.div>
  );
}
