import Link from "next/link";
import React from "react";

type SecondaryLinkButtonProps = {
  title: string;
  link: string;
};

function SecondaryLinkButton({ title, link }: SecondaryLinkButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group relative focus:scale-[1.15] hover:scale-[1.10] flex items-center justify-center h-[calc(48px+8px)] transition-all text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-black/10 px-8 py-2 overflow-hidden rounded-full"
    >
      <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-all leading-none">
        {title}
      </span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-gray-700 dark:bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
      </span>
    </Link>
  );
}

export default SecondaryLinkButton;
