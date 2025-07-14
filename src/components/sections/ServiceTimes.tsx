"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  { time: "9:15a", title: "Preservice Prayer", description: "Join us for a time of prayer before service" },
  { time: "10:00a", title: "Worship Service", description: "Experience powerful worship and inspiring messages" },
  { time: "11:30a", title: "Fellowship", description: "Connect with our community over coffee and conversation" },
  { time: "6:00p", title: "Freeway Youth", description: "Dynamic ministry for 6th-12th grade students" },
];

export default function ServiceTimes() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-neutral-off-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-section font-bold mb-4">Join Us This Sunday</h2>
          <p className="text-xl text-neutral-dark-gray max-w-2xl mx-auto">
            We&apos;d love to see you! Here&apos;s what to expect when you visit Freeway Church.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="text-accent-teal text-3xl font-bold mb-2">{service.time}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-dark-gray">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}