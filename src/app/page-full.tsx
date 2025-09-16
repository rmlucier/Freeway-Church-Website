'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function FullPageHome() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'events', label: 'Events' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'location', label: 'Location' },
    { id: 'give', label: 'Give' },
    { id: 'connect', label: 'Connect' }
  ];

  return (
    <div className="min-h-screen bg-neutral-black text-neutral-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-black/90 backdrop-blur-md border-b border-primary/20">
        <div className="section-container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo-white-horizontal.png"
                alt="Freeway Church"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-neutral-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-neutral-white/10 transition-colors"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`} />
                <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 top-3 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-neutral-black/95 backdrop-blur-md border-t border-primary/20"
            >
              <div className="section-container py-4">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-primary/10 ${
                        activeSection === item.id ? 'text-primary bg-primary/5' : 'text-neutral-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-black via-neutral-black/90 to-primary/10" />
        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-brand-header mb-6">
              Welcome to <span className="text-primary">Freeway Church</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-light-gray mb-8 max-w-3xl mx-auto">
              I am so excited about these incredible opportunities to Connect, Cultivate, and Contribute! 
              Join the warmest community you'll ever meet.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:items-center md:justify-center">
              <button
                onClick={() => scrollToSection('services')}
                className="btn-primary text-lg px-8 py-4 w-full md:w-auto"
              >
                Join Us This Sunday
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="btn-secondary text-lg px-8 py-4 w-full md:w-auto"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-dark-gray/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-brand-header mb-6">About Freeway Church</h2>
            <p className="text-lg text-neutral-light-gray max-w-3xl mx-auto">
              Roy and Elissa met at North Central University in Minneapolis and have served in Minnesota, 
              Massachusetts, and now beautiful Michigan. We have a heart for this region and a passion 
              for authentic relationships with Jesus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Connect",
                description: "People to God and each other through authentic relationships and community.",
                icon: "🤝"
              },
              {
                title: "Cultivate", 
                description: "Spiritual growth through discipleship, worship, and biblical teaching.",
                icon: "🌱"
              },
              {
                title: "Contribute",
                description: "To community transformation and reaching 'One More' person for Christ.",
                icon: "❤️"
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-neutral-black/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-neutral-black/70 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-brand-subheader text-primary mb-4">{pillar.title}</h3>
                <p className="text-neutral-light-gray">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section id="services" className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-brand-header mb-6">Join Us This Sunday</h2>
            <p className="text-lg text-neutral-light-gray mb-12">
              Every Sunday is absolutely dynamic! Come experience worship, teaching, and fellowship 
              with the warmest community you'll ever meet.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-brand-subheader text-primary mb-4">Sunday Schedule</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Pre-Service Prayer</span>
                      <span className="text-primary">9:15 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Main Worship Service</span>
                      <span className="text-primary">10:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fellowship</span>
                      <span className="text-primary">11:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Freeway Youth</span>
                      <span className="text-primary">6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Young Adults</span>
                      <span className="text-primary">7:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-brand-subheader text-primary mb-4">Can't Make It?</h3>
                  <p className="text-neutral-light-gray mb-4">
                    Watch our live stream every Sunday at 10:00 AM or catch up on past messages anytime.
                  </p>
                  <Link
                    href="https://www.youtube.com/@freewaymedia/streams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Watch Online
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section id="events" className="py-24 bg-neutral-dark-gray/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-brand-header mb-6">Upcoming Events</h2>
            <p className="text-lg text-neutral-light-gray max-w-3xl mx-auto mb-8">
              Join us for these incredible opportunities to grow, serve, and connect with our community.
            </p>
            <Link href="/events" className="btn-secondary">
              View All Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-brand-header mb-6">Our Leadership</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <Image
                    src="/images/RoyandElissa.jpg"
                    alt="Pastor Roy & Elissa Lucier"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-brand-subheader text-primary">Pastor Roy & Elissa Lucier</h3>
                  <p className="text-neutral-light-gray">
                    <strong>Lead Pastor:</strong> Roy Lucier<br />
                    <strong>Associate Pastor:</strong> Elissa Lucier
                  </p>
                  <p className="text-neutral-light-gray">
                    Roy and Elissa bring years of ministry experience and a heart for authentic 
                    relationships. They are passionate about seeing lives transformed through 
                    the love of Christ and building a community where everyone can thrive.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-neutral-light-gray">
                      <strong>Roy:</strong> roy@freeway.church
                    </p>
                    <p className="text-sm text-neutral-light-gray">
                      <strong>Elissa:</strong> elissa@freeway.church
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-neutral-dark-gray/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-brand-header mb-6">Visit Us</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-brand-subheader text-primary mb-4">Location</h3>
                    <p className="text-neutral-light-gray">
                      28900 B Drive North<br />
                      Albion, MI 49224
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-brand-subheader text-primary mb-4">Contact</h3>
                    <p className="text-neutral-light-gray">
                      Phone: (517) 798-0571<br />
                      Email: info@freeway.church
                    </p>
                  </div>

                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=28900+B+Drive+North,+Albion,+MI+49224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Get Directions
                  </Link>
                </div>

                <div className="bg-neutral-light-gray/10 rounded-xl p-4 flex items-center justify-center">
                  <p className="text-neutral-light-gray text-center">
                    Interactive Map<br />
                    <span className="text-sm">Click "Get Directions" for navigation</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Give Section */}
      <section id="give" className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-brand-header mb-6">Give</h2>
            <p className="text-lg text-neutral-light-gray mb-12">
              Your generosity helps us continue our mission to Connect, Cultivate, and Contribute 
              to God's kingdom and our community.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-brand-subheader text-primary mb-6">Online Giving</h3>
              <p className="text-neutral-light-gray mb-8">
                Give securely online through our Church Center platform. Thank you for your 
                faithful stewardship and partnership in ministry.
              </p>
              <Link
                href="https://freewaychurch.churchcenter.com/giving"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Give Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-24 bg-neutral-dark-gray/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-brand-header mb-6">Connect With Us</h2>
            <p className="text-lg text-neutral-light-gray mb-12">
              Ready to take your next step? We'd love to connect with you and help you 
              find your place in our church family.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-brand-subheader text-primary mb-6">Get Connected</h3>
                <div className="space-y-4">
                  <Link
                    href="https://freewaychurch.churchcenter.com/people/forms/274372"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary block"
                  >
                    Connect Form
                  </Link>
                  <Link
                    href="https://freewaychurch.churchcenter.com/people/forms/585705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary block"
                  >
                    Follow Jesus
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-brand-subheader text-primary mb-6">Follow Us</h3>
                <div className="space-y-4">
                  <Link
                    href="https://instagram.com/freeway.church"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary block"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://www.facebook.com/www.freeway.church"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary block"
                  >
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-black border-t border-primary/20">
        <div className="section-container">
          <div className="text-center">
            <Image
              src="/images/logo-white-horizontal.png"
              alt="Freeway Church"
              width={200}
              height={45}
              className="h-10 w-auto mx-auto mb-6"
            />
            <p className="text-neutral-light-gray mb-4">
              28900 B Drive North, Albion, MI 49224<br />
              (517) 798-0571 | info@freeway.church
            </p>
            <p className="text-sm text-neutral-light-gray/70">
              © {new Date().getFullYear()} Freeway Church. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}