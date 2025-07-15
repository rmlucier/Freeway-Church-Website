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
    title: "Prayer",
    description: "Submit a prayer request and let our prayer team lift you up in prayer.",
    icon: "🙏",
    link: "https://freewaychurch.churchcenter.com/people/forms/585698",
    external: true,
  },
  {
    title: "Follow Jesus",
    description: "Ready to take the next step in your faith journey? We&apos;d love to help you follow Jesus.",
    icon: "✝️",
    link: "https://freewaychurch.churchcenter.com/people/forms/585705",
    external: true,
  },
  {
    title: "Connect",
    description: "Let us know you&apos;re here! We&apos;d love to connect with you and help you find your place.",
    icon: "🤝",
    link: "https://freewaychurch.churchcenter.com/people/forms/274372",
    external: true,
  },
  {
    title: "Join the Core Team",
    description: "Ready to serve? Join our core team and use your gifts to make a difference.",
    icon: "👥",
    link: "https://freewaychurch.churchcenter.com/people/forms/585690",
    external: true,
  },
];

export default function ConnectPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-neutral-black text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          <div className="section-container relative z-10">
            <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-wide">
              Connect & <span className="text-primary">Belong</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl font-light leading-relaxed text-neutral-light-gray">
              I am so excited to help you find your place in the Freeway Church family! 
              There are incredible opportunities to Connect, Cultivate your faith, and 
              Contribute to our &ldquo;One More&rdquo; vision.
            </p>
          </div>
        </section>

        {/* Ways to Connect */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <h2 className="text-4xl md:text-5xl font-normal mb-16 text-center text-white">
              Next <span className="text-primary">Steps</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {connectOptions.map((option, index) => (
                <div key={index} className="bg-neutral-near-black border border-neutral-dark-gray rounded-2xl p-8 text-center hover:border-primary transition-colors">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">{option.title}</h3>
                  <p className="text-neutral-light-gray text-lg font-light mb-6">{option.description}</p>
                  <a 
                    href={option.link}
                    target={option.external ? "_blank" : "_self"}
                    rel={option.external ? "noopener noreferrer" : ""}
                    className="bg-primary text-white px-8 py-3 text-lg font-normal hover:bg-primary-dark transition-colors rounded-full inline-block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 md:py-28 bg-neutral-near-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-16 text-center text-white">
                Get in <span className="text-primary">Touch</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-normal mb-8 text-primary">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 text-lg flex-shrink-0">
                        📍
                      </div>
                      <div>
                        <h4 className="text-xl font-normal mb-2 text-white">Address</h4>
                        <p className="text-neutral-light-gray text-lg">
                          28900 B Drive North<br />
                          Albion, MI 49224
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 text-lg flex-shrink-0">
                        📞
                      </div>
                      <div>
                        <h4 className="text-xl font-normal mb-2 text-white">Phone</h4>
                        <a href="tel:5177980571" className="text-neutral-light-gray text-lg hover:text-primary transition-colors">
                          (517) 798-0571
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 text-lg flex-shrink-0">
                        ✉️
                      </div>
                      <div>
                        <h4 className="text-xl font-normal mb-2 text-white">Email</h4>
                        <a href="mailto:info@freeway.church" className="text-neutral-light-gray text-lg hover:text-primary transition-colors">
                          info@freeway.church
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 text-lg flex-shrink-0">
                        🕐
                      </div>
                      <div>
                        <h4 className="text-xl font-normal mb-2 text-white">Service Times</h4>
                        <div className="text-neutral-light-gray text-lg space-y-1">
                          <p>Sunday: 9:15 AM - Pre-Service Prayer</p>
                          <p>Sunday: 10:00 AM - Main Worship</p>
                          <p>Sunday: 11:30 AM - Fellowship</p>
                          <p>Sunday: 6:00 PM - Youth</p>
                          <p>Sunday: 7:00 PM - Young Adults</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div>
                  <h3 className="text-2xl font-normal mb-8 text-primary">Find Us</h3>
                  <div className="bg-neutral-black rounded-2xl overflow-hidden border border-neutral-dark-gray">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.7176719045156!2d-84.74222922406433!3d42.26320137120203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883d45707c68ba07%3A0x6a66c4b94ee84f9e!2s28900%20B-Drive%20N%2C%20Albion%2C%20MI%2049224!5e0!3m2!1sen!2sus!4v1752604761348!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Freeway Church Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-white">
                Follow <span className="text-primary">Us</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-neutral-near-black rounded-2xl p-8 border border-neutral-dark-gray hover:border-primary transition-colors">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Instagram</h3>
                  <p className="text-neutral-light-gray mb-6">
                    See what&apos;s happening at Freeway Church through photos and stories.
                  </p>
                  <a 
                    href="https://instagram.com/freeway.church" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    Follow Us →
                  </a>
                </div>
                
                <div className="bg-neutral-near-black rounded-2xl p-8 border border-neutral-dark-gray hover:border-primary transition-colors">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Facebook</h3>
                  <p className="text-neutral-light-gray mb-6">
                    Connect with our community and stay updated on events and announcements.
                  </p>
                  <a 
                    href="https://www.facebook.com/www.freeway.church" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    Like Our Page →
                  </a>
                </div>
                
                <div className="bg-neutral-near-black rounded-2xl p-8 border border-neutral-dark-gray hover:border-primary transition-colors">
                  <h3 className="text-2xl font-normal mb-4 text-primary">YouTube</h3>
                  <p className="text-neutral-light-gray mb-6">
                    Watch our services and stay connected with weekly messages.
                  </p>
                  <a 
                    href="https://www.youtube.com/channel/UCRrCQnXSguf6UYfNQORCN3Q" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    Subscribe →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
              Ready to Connect?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 font-light leading-relaxed">
              We can&apos;t wait to meet you! Join us this Sunday and experience the warmest 
              community you&apos;ll ever meet.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/about" 
                className="bg-white text-primary px-10 py-4 text-lg font-normal hover:bg-neutral-off-white transition-colors rounded-full"
              >
                Plan Your Visit
              </Link>
              <Link 
                href="/watch-online" 
                className="border-2 border-white text-white px-10 py-4 text-lg font-normal hover:bg-white hover:text-primary transition-colors rounded-full"
              >
                Watch Online First
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}