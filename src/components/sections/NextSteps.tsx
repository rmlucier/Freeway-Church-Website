"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const steps = [
  {
    title: "PRAYER",
    description: "Submit a prayer request or join our prayer team",
    icon: "🙏",
    link: "/next-steps/prayer",
  },
  {
    title: "FOLLOW JESUS",
    description: "Learn about faith and take your next step",
    icon: "✝️",
    link: "/next-steps/follow-jesus",
  },
  {
    title: "CONNECT",
    description: "Find community and build relationships",
    icon: "🤝",
    link: "/connect",
  },
  {
    title: "GIVE",
    description: "Support the mission of Freeway Church",
    icon: "💝",
    link: "/give",
  },
  {
    title: "JOIN THE CORE TEAM",
    description: "Serve and make a difference",
    icon: "🎯",
    link: "/next-steps/join-team",
  },
  {
    title: "WATCH ONLINE",
    description: "Join us live or watch past messages",
    icon: "📺",
    link: "/watch-online",
  },
];

export default function NextSteps() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-section font-bold mb-4 text-white">NEXT STEPS</h2>
          <p className="text-xl text-neutral-light-gray max-w-2xl mx-auto">
            Ready to take your next step? We&apos;re here to help you on your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={step.link}
                className="block bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 h-full"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-neutral-light-gray">{step.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}