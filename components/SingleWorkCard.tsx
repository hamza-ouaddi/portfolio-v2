"use client";

import { projects } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SecondaryIconLinkButton from "./ui/SecondaryIconLinkButton";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

type ProjectsProps = (typeof projects)[number] & {
  repo?: string;
};

export default function SingleWorkCard({
  title,
  description,
  image,
  technologies,
  link,
  repo,
  color,
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group flex items-center justify-center"
    >
      <div
        style={
          {
            "--dynamic-color": color,
          } as React.CSSProperties
        }
        className={`relative mb-3 sm:mb-16 max-w-[1200px] lg:min-h-[600px] lg:h-[520px] flex lg:items-center flex-col-reverse lg:flex-row lg:group-even:flex-row-reverse bg-gradient-to-tr group-even:bg-gradient-to-tl from-gray-100 from-0% to-[var(--dynamic-color)] to-100% dark:from-gray-800 dark:to-[var(--dynamic-color)] transition rounded-2xl  border-black/5 overflow-hidden h-fit w-full container-shadow`}
      >
        <div className="flex flex-col h-[340px] md:h-full py-6 px-5 sm:py-10 sm:px-8 lg:pr-2 lg:pl-10 lg:group-even:pr-10 lg:group-even:pl-2 max-w-full lg:max-w-[58%] lg:w-[400px] max-lg:bg-gray-100 max-lg:dark:bg-[#282F3C] z-10 max-lg:secondary-container-shadow">
          <div>
            <h3 className="text-3xl font-semibold">{title}</h3>
            <span className="flex flex-row gap-2 mt-2">
              <SecondaryIconLinkButton
                link={link}
                icon={MdOutlineArrowOutward}
                rotate="45"
              />
              {repo && <SecondaryIconLinkButton link={repo} icon={BsGithub} />}
            </span>
          </div>
          <p className=" text-gray-700 dark:text-white/70 leading-relaxed mt-auto">
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
      </div>
    </motion.section>
  );
}
