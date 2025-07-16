"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function EventsHero() {
  return (
    <section className="relative min-h-[600px] bg-neutral-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/FreewayBuilding.jpg"
          alt="Freeway Church Building"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-black/90 via-neutral-black/70 to-neutral-black/90" />
      </div>
      
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-6 text-white leading-tight">
            Around <span className="text-primary">Freeway</span> Church
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-light-gray mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            I am so excited about all the absolutely dynamic opportunities we have to 
            Connect with God and each other, Cultivate our faith through meaningful experiences, 
            and Contribute to transforming our community and beyond!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              href="/connect"
            >
              Get Connected
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="mailto:info@freeway.church"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-neutral-light-gray text-sm mb-2">Discover What&apos;s Happening</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}