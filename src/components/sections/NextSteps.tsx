"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const steps = [
  {
    title: "PRAYER",
    description: "Submit a prayer request",
    link: "https://freewaychurch.churchcenter.com/people/forms/585698",
  },
  {
    title: "FOLLOW JESUS",
    description: "Learn about faith",
    link: "https://freewaychurch.churchcenter.com/people/forms/585705",
  },
  {
    title: "CONNECT",
    description: "Find community",
    link: "https://freewaychurch.churchcenter.com/people/forms/274372",
  },
  {
    title: "GIVE",
    description: "Support our mission",
    link: "https://freewaychurch.churchcenter.com/giving",
  },
  {
    title: "JOIN TEAM",
    description: "Serve and help",
    link: "https://freewaychurch.churchcenter.com/people/forms/585690",
  },
  {
    title: "WATCH ONLINE",
    description: "Join us live",
    link: "https://www.youtube.com/@freewaymedia/streams",
  },
];

export default function NextSteps() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-white text-neutral-black">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-section font-bold mb-4 text-neutral-black">NEXT STEPS</h2>
          <p className="text-xl text-neutral-dark-gray max-w-2xl mx-auto">
            Ready to take your next step? We&apos;re here to help you on your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-neutral-off-white rounded-2xl p-4 hover:bg-neutral-light-gray transition-all duration-200 h-full border border-neutral-medium-gray"
              >
                <h3 className="text-sm font-semibold mb-1 text-neutral-black text-center">{step.title}</h3>
                <p className="text-xs text-neutral-dark-gray text-center">{step.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}