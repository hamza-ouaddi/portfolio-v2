"use client";

import React from "react";
import Link from "next/link";
import { footerLinks } from "@/lib/data";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};

const containerChildren = {
  initial: { opacity: 0, y: 200 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.5,
    },
  },
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className="flex justify-between items-center md:items-start flex-col md:flex-row gap-4 px-[2%] sm:px-[5%] mb-10 text-center text-gray-500 overflow-hidden"
    >
      <motion.div
        variants={containerChildren}
        className="text-center md:text-left"
      >
        <p>&copy; {currentYear} Hamza Ouaddi. All rights reserved.</p>
        <p>hamzaouaddi04@gmail.com</p>
      </motion.div>

      <motion.div variants={containerChildren} className="space-x-6">
        {footerLinks.map((link) => (
          <Link
            href={link.url}
            key={link.name}
            className="first:border-r-2 first:pr-6 transition-all hover:text-gray-900"
          >
            {link.name}
          </Link>
        ))}
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
