import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { BsLinkedin } from "react-icons/bs";

type IconLinkButtonProps = {
  link: string;
  icon: IconType;
};

function IconLinkButton({ link, icon: Icon }: IconLinkButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group focus:scale-[1.15] hover:scale-[1.10] relative h-14 w-14 overflow-hidden overflow-x-hidden rounded-full transition-all bg-white dark:bg-white/10 text-gray-700 dark:text-white/60 hover:text-gray-950 border border-black/10 p-4 flex items-center justify-center"
    >
      <span className="relative z-10 group-hover:text-white transition-all">
        <Icon />
      </span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-gray-700 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
      </span>
    </Link>
  );
}

export default IconLinkButton;
