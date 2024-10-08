import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const social_links = [
  { image: FaInstagram, href: "/" },
  { image: FaFacebook, href: "/" },
  { image: FaLinkedin, href: "/" },
  { image: FaSquareXTwitter, href: "/" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar title="Rental" links={links} />
        {children}
        <Footer
          title="&copy; 2024 Rental. All rights reserved."
          links={social_links}
        />
      </body>
    </html>
  );
}
