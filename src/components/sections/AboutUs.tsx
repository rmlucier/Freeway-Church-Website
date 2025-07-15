"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/sunday-service.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-4xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-normal mb-8 text-white leading-tight">
              About <span className="text-primary">Freeway Church</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-light-gray mb-8 font-light leading-relaxed">
              I am so excited about what God is doing at Freeway Church! We are absolutely dynamic in our 
              mission to Connect people to God and each other, Cultivate spiritual growth through authentic 
              discipleship, and empower every person to Contribute to the world around them.
            </p>
            <p className="text-lg md:text-xl text-neutral-light-gray mb-12 font-light leading-relaxed">
              This is our &ldquo;One More&rdquo; season - reaching one more person, baptizing one more believer, 
              and creating one more opportunity for transformation. Whether you&apos;re just beginning your 
              faith journey or you&apos;ve been walking with Jesus for years, you&apos;ll discover incredible 
              opportunities to grow, serve, and make a lasting impact right here at Freeway Church.
            </p>
            <Link 
              href="/about" 
              className="bg-primary text-white px-8 py-4 text-lg font-normal hover:bg-primary-dark transition-colors rounded-full"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}