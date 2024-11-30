"use client";

import React from "react";
import { motion } from "framer-motion";
import { headerLinks } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";

const headerSlideDown = {
  initial: {
    y: -100,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: 3.3,
    },
  },
};

const itemsSlideDown = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: 3.3,
    },
  },
};

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  const pathname = usePathname();

  //To hide the header in work page
  if (pathname === "/work") {
    return null;
  }

  return (
    <header className="z-40 relative">
      <motion.div
        variants={headerSlideDown}
        initial="initial"
        animate="animate"
        className="fixed mx-auto top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-white dark:border-black/40 border-opacity-40 bg-white dark:bg-gray-950 
        bg-opacity-65 dark:bg-opacity-55 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full "
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {headerLinks.map((link) => (
            <motion.li
              variants={itemsSlideDown}
              initial="initial"
              animate="animate"
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300 transition",
                  {
                    "text-gray-950 dark:text-gray-300":
                      activeSection == link.name,
                  }
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}

                {link.name === activeSection && (
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
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
