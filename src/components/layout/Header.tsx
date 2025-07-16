"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Visit", href: "/visit" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-neutral-black/95 backdrop-blur-sm border-b border-neutral-dark-gray/30"
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-white-horizontal.png"
              alt="Freeway Church"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-normal transition-colors text-white hover:text-primary relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/watch-online" className="bg-primary text-white px-6 py-3 rounded-sm font-normal text-lg hover:bg-primary-dark transition-colors">
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
                className="w-full h-0.5 bg-white transition-colors"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="w-full h-0.5 bg-white transition-colors"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                className="w-full h-0.5 bg-white transition-colors"
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
          className="md:hidden overflow-hidden bg-neutral-black border-t border-neutral-dark-gray"
        >
          <div className="py-6 space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-lg text-white hover:text-primary font-normal border-b border-neutral-dark-gray/30 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/watch-online"
              className="bg-primary text-white px-6 py-3 rounded-sm font-normal text-lg hover:bg-primary-dark transition-colors inline-block mt-4"
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