import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function PrimaryLinkButton({ title }: { title: string }) {
  return (
    <Link
      href="/work"
      className="group relative flex items-center gap-2 max-sm:w-full text-white bg-gray-900 dark:border dark:border-white/10 px-7 py-3 rounded-full outline-none transition border overflow-hidden focus:scale-110 hover:scale-105"
    >
      <span className="absolute top-0 left-0 flex h-full  w-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:w-full"></span>
      <span className="group-hover:text-black z-10 ">{title}</span>
      <BsArrowRight className="group-hover:translate-x-1 group-hover:text-black transition opacity-70" />
    </Link>
  );
}

export default PrimaryLinkButton;
