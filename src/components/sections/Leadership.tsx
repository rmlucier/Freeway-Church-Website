"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const leaders = [
  {
    name: "Pastor [Name]",
    role: "Lead Pastor",
    image: "/images/church-event.jpeg",
    description: "Leading our congregation with passion and dedication to God's word."
  },
  {
    name: "Pastor [Name]",
    role: "Associate Pastor",
    image: "/images/church-event.jpeg",
    description: "Overseeing discipleship and spiritual growth ministries."
  },
  {
    name: "[Name]",
    role: "Youth Pastor",
    image: "/images/youth-ministry.jpg",
    description: "Empowering the next generation to follow Jesus with purpose."
  },
  {
    name: "[Name]",
    role: "Worship Leader",
    image: "/images/sunday-service.jpeg",
    description: "Leading our community in heartfelt worship and praise."
  }
];

export default function Leadership() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 bg-neutral-black">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
            Meet Our <span className="text-primary">Leadership</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-light-gray max-w-4xl mx-auto font-light leading-relaxed">
            Our dedicated team of pastors and staff are committed to guiding our congregation 
            and fostering a loving environment where everyone can grow in their faith journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-near-black rounded-2xl overflow-hidden border border-neutral-dark-gray hover:border-primary transition-all duration-300"
            >
              <div className="aspect-square relative bg-neutral-dark-gray">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-white">{leader.name}</h3>
                <p className="text-primary font-medium mb-3">{leader.role}</p>
                <p className="text-neutral-light-gray text-sm leading-relaxed">{leader.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}