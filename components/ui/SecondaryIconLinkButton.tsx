import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type IconLinkButtonProps = {
  link: string;
  icon: IconType;
  rotate?: string;
};

function SecondaryIconLinkButton({
  link,
  icon: Icon,
  rotate,
}: IconLinkButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group focus:scale-[1.15] hover:scale-[1.10] relative h-14 w-14 overflow-hidden overflow-x-hidden rounded-full transition-all bg-white/10 dark:bg-white/10 text-gray-700 dark:text-white/60 hover:text-gray-950 border border-black/20 dark:border-white/10  flex items-center justify-center"
    >
      <span
        className={clsx(
          "relative text-2xl z-10 transition-all",
          `-rotate-${rotate}`
        )}
      >
        <Icon />
      </span>
    </Link>
  );
}

export default SecondaryIconLinkButton;
