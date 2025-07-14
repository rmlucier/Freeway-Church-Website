"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Messages", href: "/messages" },
  { name: "Giving", href: "/give" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
              Freeway Church
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-neutral-dark-gray hover:text-primary" : "text-white hover:text-neutral-light-gray"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/watch-online" className="btn-primary">
              Watch Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                className={`w-full h-0.5 ${isScrolled ? "bg-neutral-dark-gray" : "bg-white"} transition-colors`}
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className={`w-full h-0.5 ${isScrolled ? "bg-neutral-dark-gray" : "bg-white"} transition-colors`}
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                className={`w-full h-0.5 ${isScrolled ? "bg-neutral-dark-gray" : "bg-white"} transition-colors`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden bg-white"
        >
          <div className="py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-neutral-dark-gray hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/watch-online"
              className="btn-primary inline-block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Watch Online
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}