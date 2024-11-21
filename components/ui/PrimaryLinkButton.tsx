import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

type PrimaryLinkButtonProps = {
  title: string;
  link: string;
};

function PrimaryLinkButton({ title, link }: PrimaryLinkButtonProps) {
  return (
    <Link
      href={link}
      className="group relative flex items-center justify-center w-fit h-[calc(48px+8px)] focus:scale-[1.15] hover:scale-[1.10] transition-all text-white bg-gray-900 dark:bg-white/10  py-1 pl-6 pr-14 rounded-full"
    >
      <span className="z-10 pr-2">{title}</span>
      <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-gray-700 transition-[width] group-hover:w-[calc(100%-8px)]">
        <div className="mr-3.5 flex items-center justify-center">
          <BsArrowRight />
        </div>
      </div>
    </Link>
  );
}

export default PrimaryLinkButton;
