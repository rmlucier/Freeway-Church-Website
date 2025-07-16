"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/components/ui/Button";

export default function EventsCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-neutral-near-black">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
            Ready to <span className="text-primary">Connect</span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-light-gray mb-12 font-light leading-relaxed">
            I am so excited about the opportunity to welcome you into our absolutely dynamic 
            community! Whether you&apos;re looking to Connect with God, Cultivate your faith, 
            or Contribute to something greater, there&apos;s a place for you at Freeway Church.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-neutral-black rounded-xl p-6 border border-neutral-dark-gray hover:border-primary transition-colors group"
            >
              <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Connect</h3>
              <p className="text-neutral-light-gray text-sm leading-relaxed">
                Join us for worship, fellowship, and authentic community every Sunday. 
                Experience the warmest community you&apos;ll ever meet!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-neutral-black rounded-xl p-6 border border-neutral-dark-gray hover:border-primary transition-colors group"
            >
              <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">
                🌱
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cultivate</h3>
              <p className="text-neutral-light-gray text-sm leading-relaxed">
                Grow in your faith through Bible studies, prayer groups, and meaningful 
                discipleship opportunities designed for every season of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-neutral-black rounded-xl p-6 border border-neutral-dark-gray hover:border-primary transition-colors group"
            >
              <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Contribute</h3>
              <p className="text-neutral-light-gray text-sm leading-relaxed">
                Make a difference in our community and beyond. Discover your purpose 
                and use your gifts to transform lives through our &quot;One More&quot; initiative.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              variant="primary" 
              size="lg"
              href="/connect"
            >
              Get Connected Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="/about"
            >
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-neutral-dark-gray"
          >
            <p className="text-neutral-light-gray text-lg mb-4">
              Have questions about our events or want to get involved?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="mailto:info@freeway.church" 
                className="flex items-center text-primary hover:text-primary-light transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                info@freeway.church
              </a>
              <span className="text-neutral-dark-gray">|</span>
              <a 
                href="tel:+15177980571" 
                className="flex items-center text-primary hover:text-primary-light transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (517) 798-0571
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}