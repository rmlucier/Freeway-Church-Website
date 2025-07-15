"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  { time: "9:15a", title: "Preservice Prayer", description: "Join us for a time of prayer before service" },
  { time: "10:00a", title: "Worship Service", description: "Experience powerful worship and inspiring messages" },
  { time: "11:30a", title: "Fellowship", description: "Connect with our community over coffee and conversation" },
  { time: "6:00p", title: "Freeway Youth", description: "Dynamic ministry for 6th-12th grade students" },
];

function getServiceImage(title: string): string {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('prayer')) {
    return '/images/prayer.jpeg';
  } else if (lowerTitle.includes('worship') || lowerTitle.includes('service')) {
    return '/images/sunday-service.jpeg';
  } else if (lowerTitle.includes('fellowship')) {
    return '/images/fellowship.jpeg';
  } else if (lowerTitle.includes('youth')) {
    return '/images/youth-ministry.jpg';
  } else {
    return '/images/church-event.jpeg';
  }
}

export default function ServiceTimes() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-neutral-near-black">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-section font-bold mb-4 text-white">Join Us This Sunday</h2>
          <p className="text-xl text-neutral-light-gray max-w-2xl mx-auto">
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
              className="bg-neutral-black p-6 text-center rounded-lg border border-neutral-dark-gray hover:border-primary transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark-gray to-neutral-black opacity-50"></div>
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
                backgroundImage: `url('${getServiceImage(service.title)}')`
              }}></div>
              <div className="relative z-10">
                <div className="text-primary text-3xl font-bold mb-2">{service.time}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-neutral-light-gray">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}