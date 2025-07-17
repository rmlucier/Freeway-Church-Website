"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const leaders = [
  {
    name: "Pastor Roy Lucier",
    role: "Lead Pastor",
    credentials: "Licensed Minister (2009), Ordained Minister (2023)",
    image: "/images/RoyandElissa.jpg",
    description: "Leading with absolute dynamic passion for our \"One More\" vision - connecting people to God, cultivating authentic disciples, and contributing to community transformation. Roy graduated from North Central University and serves full-time as our official Lead Pastor."
  },
  {
    name: "Elissa Lucier",
    role: "Associate Pastor",
    credentials: "Licensed Minister (2009)",
    image: "/images/RoyandElissa.jpg",
    description: "Leading worship with passion and overseeing volunteer management and administrative operations. Elissa graduated from North Central University and serves part-time as Associate Pastor, bringing incredible energy to helping every person discover their purpose and serve with excellence."
  },
  {
    name: "Jamie & Nate",
    role: "Freeway Youth Leaders",
    credentials: "Youth Ministry Team",
    image: "/images/teaching.jpeg",
    description: "Passionately leading Freeway Youth to help the next generation discover their purpose in Christ and develop into tomorrow's leaders through dynamic worship, relevant teaching, and authentic community."
  }
];


export default function Leadership() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 bg-neutral-dark-gray">
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
            to transforming lives in our community and beyond. Roy and Elissa have three kids 
            (Malachi, Iris and Eden) and have been serving Freeway Church since October 2021.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
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
                <p className="text-primary font-medium mb-1">{leader.role}</p>
                <p className="text-neutral-light-gray text-xs mb-3 italic">{leader.credentials}</p>
                <p className="text-neutral-light-gray text-sm leading-relaxed">{leader.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}