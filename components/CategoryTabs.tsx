"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type CategoryTabsProps = {
  categories: readonly string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

function CategoryTabs({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryTabsProps) {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed mx-auto top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-white dark:border-black/40 border-opacity-40 bg-white dark:bg-gray-950 
    bg-opacity-65 dark:bg-opacity-55 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {categories.map((category) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={category}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 1,
              }}
            >
              <button
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300 transition",
                  {
                    "text-gray-950 dark:text-gray-300":
                      activeCategory == category,
                  }
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}

                {category === activeCategory && (
                  <motion.span
                    className="bg-gray-100 dark:bg-gray-800 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default CategoryTabs;
