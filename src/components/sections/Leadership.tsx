"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const leaders = [
  {
    name: "Pastor Roy Lucier",
    role: "Lead Pastor",
    image: "/images/church-event.jpeg",
    description: "Leading with absolute dynamic passion for our \"One More\" vision - connecting people to God, cultivating authentic disciples, and contributing to community transformation."
  },
  {
    name: "Pastor [Name]",
    role: "Associate Pastor",
    image: "/images/church-event.jpeg",
    description: "Partnering in discipleship and spiritual growth ministries to help every person reach their full potential in Christ."
  },
  {
    name: "[Name]",
    role: "Youth Pastor",
    image: "/images/youth-ministry.jpg",
    description: "Empowering the next generation to follow Jesus with purpose and passion, building tomorrow's leaders today."
  },
  {
    name: "[Name]",
    role: "Worship Leader",
    image: "/images/sunday-service.jpeg",
    description: "Creating an atmosphere where hearts connect with Heaven through authentic, Spirit-filled worship experiences."
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
            I am so excited about our incredible leadership team! Each person brings absolute 
            dynamic passion to help you Connect with God, Cultivate your faith, and Contribute 
            to transforming lives in our community and beyond.
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