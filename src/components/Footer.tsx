import React, { ElementType } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

interface Link {
  image: React.FC<React.SVGProps<SVGSVGElement>>; // Expecting a functional component
  href: string;
}

interface FooterProps {
  title: string;
  links: Link[];
}

const Footer: React.FC<FooterProps> = ({ title, links }) => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-sm ml-7">
          <Link href="/">{title}</Link>
        </div>
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="text-gray-400 hover:text-white">
                {<link.image />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
