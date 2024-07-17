import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs">
        &copy; {currentYear} Hamza Ouaddi. All rights reserved.
      </small>
      <p className="text-xs">hamzaouaddi04@gmail.com</p>
    </footer>
  );
}

export default Footer;
