"use client";

import { categories, projects } from "@/lib/data";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SingleWorkCard from "@/components/SingleWorkCard";
import CategoryTabs from "@/components/CategoryTabs";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

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

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("Development");

  return (
    <>
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <section
        id="projects"
        className="flex flex-col justify-center items-center scroll-mt-28 w-full pt-64 px-[2%] sm:px-[5%]"
      >
        <h2 className="text-[12vw] md:text-[4vw] font-semibold !leading-[1.5] overflow-clip mb-24">
          <motion.span
            variants={sectionTitleFadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="inline-block"
          >
            Work Portfolio
          </motion.span>
        </h2>

        <div>
          {projects
            .filter((project) => project.category === activeCategory)
            .map((project) => {
              return <SingleWorkCard key={project.id} {...project} />;
            })}
        </div>
      </section>

      <Link
        href="/"
        className="group fixed bottom-5 right-20 w-24 h-12 flex items-center justify-center gap-2 bg-white dark:bg-gray-950 bg-opacity-80 backdrop-blur 
    border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all overflow-hidden"
      >
        <BsArrowLeft className="group-hover:-translate-x-1 group-hover:text-white dark:group-hover:text-black transition-all opacity-70 z-10" />

        <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-all leading-none">
          Home
        </span>
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-gray-700 dark:bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
        </span>
      </Link>
    </>
  );
}
