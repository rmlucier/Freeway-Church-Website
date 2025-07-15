"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Location() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 bg-neutral-near-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
              Visit <span className="text-primary">Our Location</span>
            </h2>
            <div className="space-y-6 text-neutral-light-gray">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
                <p className="text-lg">
                  [Church Address]<br />
                  [City, State ZIP]
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Service Times</h3>
                <div className="space-y-2">
                  <p><strong>Sunday:</strong> 10:00 AM - Worship Service</p>
                  <p><strong>Sunday:</strong> 6:00 PM - Freeway Youth</p>
                  <p><strong>Wednesday:</strong> 7:00 PM - Prayer & Bible Study</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Contact</h3>
                <p>Phone: [Phone Number]</p>
                <p>Email: [Email Address]</p>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-neutral-dark-gray rounded-2xl h-96 flex items-center justify-center"
          >
            <div className="text-center text-neutral-light-gray">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-lg">Interactive Map Coming Soon</p>
              <p className="text-sm mt-2">Or search for us on Google Maps</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}