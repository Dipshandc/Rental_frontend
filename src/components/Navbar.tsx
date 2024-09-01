"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  title: string;
  links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-[100]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl ml-2">
          <Link href="/">{title}</Link>
        </div>
        <div className="mr-2">
          <ul className="flex space-x-4">
            {links.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`
                      hover:text-white decoration-teal-400
                      ${
                        isActive
                          ? "text-white decoration-teal-400"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
