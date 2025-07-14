import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect - Freeway Church",
  description: "Connect with Freeway Church community. Find ways to get involved, meet new people, and grow in your faith journey.",
};

const connectOptions = [
  {
    title: "Sunday Service",
    description: "Join us every Sunday at 10am for worship, teaching, and fellowship.",
    icon: "⛪",
    link: "/watch-online",
  },
  {
    title: "Small Groups",
    description: "Connect with others in a smaller setting for deeper relationships and Bible study.",
    icon: "👥",
    link: "/connect",
  },
  {
    title: "Volunteer",
    description: "Serve alongside others and use your gifts to make a difference.",
    icon: "🤝",
    link: "/next-steps/join-team",
  },
  {
    title: "Events",
    description: "Participate in special events, community outreach, and seasonal celebrations.",
    icon: "🎉",
    link: "/connect",
  },
];

export default function ConnectPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-primary-dark text-white">
          <div className="section-container">
            <h1 className="text-hero font-bold mb-4">Connect</h1>
            <p className="text-xl max-w-3xl">
              Find your place in the Freeway Church community. There are many ways to connect, grow, and serve together.
            </p>
          </div>
        </section>

        {/* Ways to Connect */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <h2 className="text-section font-bold mb-12 text-center">Ways to Connect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {connectOptions.map((option, index) => (
                <div key={index} className="card p-8 text-center">
                  <div className="text-5xl mb-4">{option.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                  <p className="text-neutral-dark-gray mb-6">{option.description}</p>
                  <Link href={option.link} className="btn-primary">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-neutral-off-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-section font-bold mb-8 text-center">Get in Touch</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-accent-teal text-xl mr-4">📍</div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-neutral-dark-gray">
                          [Church Address]<br />
                          [City, State ZIP]
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-accent-teal text-xl mr-4">📞</div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-neutral-dark-gray">[Phone Number]</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-accent-teal text-xl mr-4">✉️</div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-neutral-dark-gray">[Email Address]</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-accent-teal text-xl mr-4">🕐</div>
                      <div>
                        <h4 className="font-semibold mb-1">Office Hours</h4>
                        <p className="text-neutral-dark-gray">
                          Monday - Friday: 9:00am - 5:00pm<br />
                          Saturday: By appointment<br />
                          Sunday: 8:00am - 12:00pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-neutral-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-neutral-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-neutral-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-neutral-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Question</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="volunteer">Volunteer Opportunity</option>
                        <option value="visit">Planning a Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-2 border border-neutral-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <h2 className="text-section font-bold mb-8 text-center">Find Us</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="card p-8">
                <div className="aspect-video bg-neutral-light-gray rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🗺️</div>
                    <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                    <p className="text-neutral-dark-gray">
                      Map integration will be added here
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Freeway Church</h3>
                  <p className="text-neutral-dark-gray mb-4">
                    [Church Address]<br />
                    [City, State ZIP]
                  </p>
                  <a href="#" className="btn-primary">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-section font-bold mb-4 text-white">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-light-gray">
              We&apos;re excited to help you find your place in the Freeway Church family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-primary bg-accent-teal hover:bg-accent-teal-dark">
                Learn More About Us
              </Link>
              <Link href="/watch-online" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Join Us Sunday
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}