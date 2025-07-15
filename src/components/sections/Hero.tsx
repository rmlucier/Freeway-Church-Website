"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-neutral-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/youtube-preview.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-normal mb-8 tracking-wide leading-tight text-white">
            WELCOME TO CHURCH
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed text-neutral-light-gray">
            Connect with God and community. Cultivate spiritual growth. Contribute to the world around you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/about" className="bg-primary text-white px-10 py-4 text-lg font-normal hover:bg-primary-dark transition-colors rounded-full">
              Plan Your Visit
            </Link>
            <a href="https://www.youtube.com/@freewaymedia/streams" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-4 text-lg font-normal hover:bg-white hover:text-neutral-black transition-colors rounded-full">
              Watch Online
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}