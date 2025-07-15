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
                  28900 B Drive North<br />
                  Albion, MI 49224
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Service Times</h3>
                <div className="space-y-2">
                  <p><strong>Sunday:</strong> 9:15 AM - Pre-Service Prayer</p>
                  <p><strong>Sunday:</strong> 10:00 AM - Main Worship Service</p>
                  <p><strong>Sunday:</strong> 11:30 AM - Fellowship</p>
                  <p><strong>Sunday:</strong> 6:00 PM - Youth</p>
                  <p><strong>Sunday:</strong> 7:00 PM - Young Adults</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Contact</h3>
                <p>Phone: (517) 798-0571</p>
                <p>Email: <a href="mailto:info@freeway.church" className="hover:text-primary transition-colors">info@freeway.church</a></p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-neutral-dark-gray rounded-2xl overflow-hidden h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.7176719045156!2d-84.74222922406433!3d42.26320137120203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883d45707c68ba07%3A0x6a66c4b94ee84f9e!2s28900%20B-Drive%20N%2C%20Albion%2C%20MI%2049224!5e0!3m2!1sen!2sus!4v1752604761348!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Freeway Church Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}