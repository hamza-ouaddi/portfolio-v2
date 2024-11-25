"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import myLogo from "@/public/assets/images/hamza-ouaddi-logo.svg";

const slideUp = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100vh",
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const slideDown = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

const greetingsFadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.8,
    },
  },
};

const greetings = ["Hello", "Bonjour", "Hola", "Ciao", "Olà", "やあ", "Hallo"];

function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == greetings.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 280
    );
  }, [index]);

  //To create a curve and animate it while sliding up
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curveSliderAnimation = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="flex justify-center items-center fixed top-0 left-0 h-[100vh] w-[100vw] bg-purple-800 z-50"
    >
      {dimension.width > 0 && (
        <>
          <div className="flex flex-col items-center gap-4 z-10">
            <motion.span
              variants={slideDown}
              initial="initial"
              animate="animate"
            >
              <Image src={myLogo} alt="Hamza Ouaddi Logo" width="240" />
            </motion.span>

            <motion.h1
              variants={greetingsFadeIn}
              initial="initial"
              animate="animate"
              className="text-4xl text-white"
            >
              {greetings[index]}
            </motion.h1>
          </div>

          <svg className="curve-svg">
            <motion.path
              variants={curveSliderAnimation}
              initial="initial"
              exit="exit"
              className="fill-purple-800"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}

export default Preloader;
