"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const programs = [
  {
    title: "SUNDAY SERVICE",
    description: "A worship service on Sunday mornings at 10am.",
    image: "/images/sunday-service.jpg",
    link: "/services",
  },
  {
    title: "KIDSWAY",
    description: "Children's program (K-5th grade) for learning and worship.",
    image: "/images/kidsway.jpg",
    link: "/kidsway",
  },
  {
    title: "FELLOWSHIP",
    description: "Extended time for fellowship after Sunday service.",
    image: "/images/fellowship.jpg",
    link: "/connect",
  },
  {
    title: "FREEWAY YOUTH",
    description: "FWY (6th-12th grade) meets Sunday evenings.",
    image: "/images/youth.jpg",
    link: "/youth",
  },
];

export default function Programs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-section font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-neutral-dark-gray max-w-2xl mx-auto">
            Discover ways to connect, grow, and serve at Freeway Church
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="aspect-video bg-neutral-light-gray relative overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-neutral-dark-gray mb-4">{program.description}</p>
                <Link
                  href={program.link}
                  className="text-accent-teal font-semibold group-hover:text-accent-teal-dark transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}