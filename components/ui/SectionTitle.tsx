import React from "react";
import { motion } from "framer-motion";

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

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center md:text-center pb-14 sm:pb-6 md:pb-8 3xl:pb-2 max-sm:-mb-16 overflow-clip w-full">
      <motion.h2
        variants={sectionTitleFadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
          amount: 0.005,
        }}
        className="inline-block text-[3em] md:text-[6vw] xl:text-[4vw] font-medium md:font-semibold leading-none sm:leading-normal"
      >
        {title}
      </motion.h2>
    </div>
  );
}

export default SectionTitle;
