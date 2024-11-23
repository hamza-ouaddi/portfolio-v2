"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="group fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-950 bg-opacity-80 backdrop-blur 
    border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all overflow-hidden"
    >
      {theme === "light" ? (
        <BsSun className="group-hover:text-white dark:group-hover:text-black transition-all z-10" />
      ) : (
        <BsMoon className="group-hover:text-white dark:group-hover:text-black transition-all z-10" />
      )}

      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-gray-700 dark:bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
      </span>
    </button>
  );
}

export default ThemeSwitch;
