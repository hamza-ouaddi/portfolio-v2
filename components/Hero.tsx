"use client";

import Image from "next/image";
import React from "react";
import personalImage from "@/public/my-image.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mb-28 text-center max-w-[55rem] sm:mb-0">
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={personalImage}
            alt="Hamza Ouaddi's Image"
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
          />
        </motion.div>
      </div>

      {/* <p>
        Hello, I'm Hamza Ouaddi, a full-stack developer, and UI/UX designer. I'm
        all about creating user-friendly solutions that not only work well but
        also look awesome. Let's team up and turn your concepts into reality!
      </p> */}

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl sm:text-4xl font-medium !leading-[1.5]"
      >
        <span className="font-bold"> Hello</span>, I'm{" "}
        <span className="font-bold">Hamza Ouaddi</span>, a{" "}
        <span className="font-bold">full-stack developer</span>, and
        <span className="font-bold"> UI/UX designer.</span> I'm passionate about
        creating <span className="font-bold">user-friendly</span> and{" "}
        <span className="font-bold">visually appealing </span> digital
        solutions.
      </motion.p>
    </section>
  );
}
