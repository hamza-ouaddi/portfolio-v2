import React from "react";
import Link from "next/link";
import { footerLinks } from "@/lib/data";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center md:items-start flex-col md:flex-row gap-4 px-[2%] sm:px-[5%] mb-10 text-center text-gray-500">
      <div className="text-center md:text-left">
        <p>&copy; {currentYear} Hamza Ouaddi. All rights reserved.</p>
        <p>hamzaouaddi04@gmail.com</p>
      </div>

      <div className="space-x-6">
        {footerLinks.map((link) => (
          <Link
            href={link.url}
            key={link.name}
            className="first:border-r-2 first:pr-6 transition-all hover:text-gray-900"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
