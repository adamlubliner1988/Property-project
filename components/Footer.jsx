import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo-white.png";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <Link href={"/"}>
          <div className="mb-4 md:mb-0">
            <Image src={logo} alt="Logo" className="h-8 w-auto" />
          </div>
        </Link>
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li className="text-sm text-gray-400 mt-2 md:mt-0">
              <Link href="/properties">Properties</Link>
            </li>
            <li className="text-sm text-gray-400 mt-2 md:mt-0">
              <a href="/terms.html">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
