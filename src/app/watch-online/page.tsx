import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Online - Freeway Church",
  description: "Join us for live worship services online every Sunday at 10am. Experience community and worship from anywhere.",
};

export default function WatchOnlinePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-neutral-black text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          <div className="section-container relative z-10">
            <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-wide">
              Watch <span className="text-primary">Online</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl font-light leading-relaxed text-neutral-light-gray">
              Join us for live worship every Sunday at 10:00 AM, or catch up on previous services anytime.
            </p>
          </div>
        </section>

        {/* Live Stream Section */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">
                Live <span className="text-primary">Service</span>
              </h2>
              <p className="text-xl text-neutral-light-gray max-w-3xl mx-auto">
                Experience worship and the Word live every Sunday at 10:00 AM
              </p>
            </div>
            
            {/* YouTube Embed */}
            <div className="max-w-5xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl bg-neutral-dark-gray">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/live_stream?channel=UCRrCQnXSguf6UYfNQORCN3Q"
                  title="Freeway Church Live Stream"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="https://www.youtube.com/@freewaymedia/streams" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 text-lg font-normal hover:bg-primary-dark transition-colors rounded-full inline-block"
                >
                  View All Past Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-20 md:py-28 bg-neutral-near-black">
          <div className="section-container">
            <h2 className="text-4xl md:text-5xl font-normal mb-16 text-center text-white">
              Service <span className="text-primary">Times</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-8 text-center hover:border-primary transition-colors">
                <div className="text-primary text-4xl font-normal mb-4">9:15 AM</div>
                <h3 className="text-xl font-normal mb-4 text-white">Pre-Service Prayer</h3>
                <p className="text-neutral-light-gray">Join us for a time of prayer before service</p>
              </div>
              <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-8 text-center hover:border-primary transition-colors">
                <div className="text-primary text-4xl font-normal mb-4">10:00 AM</div>
                <h3 className="text-xl font-normal mb-4 text-white">Main Worship Service</h3>
                <p className="text-neutral-light-gray">Live worship and teaching</p>
              </div>
              <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-8 text-center hover:border-primary transition-colors">
                <div className="text-primary text-4xl font-normal mb-4">11:30 AM</div>
                <h3 className="text-xl font-normal mb-4 text-white">Fellowship</h3>
                <p className="text-neutral-light-gray">Connect with others after service</p>
              </div>
              <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-8 text-center hover:border-primary transition-colors">
                <div className="text-primary text-4xl font-normal mb-4">6:00 PM</div>
                <h3 className="text-xl font-normal mb-4 text-white">Youth</h3>
                <p className="text-neutral-light-gray">Freeway Youth for all ages</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-white">
                More Ways to <span className="text-primary">Connect</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-neutral-near-black rounded-2xl p-8 border border-neutral-dark-gray hover:border-primary transition-colors">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Podcast</h3>
                  <p className="text-neutral-light-gray mb-6">
                    Listen to our messages on the go. Available on all major podcast platforms.
                  </p>
                  <a 
                    href="https://open.spotify.com/show/1ClBK7hZzOSyfFhQYjpjMo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    Listen on Spotify →
                  </a>
                </div>
                
                <div className="bg-neutral-near-black rounded-2xl p-8 border border-neutral-dark-gray hover:border-primary transition-colors">
                  <h3 className="text-2xl font-normal mb-4 text-primary">YouTube Channel</h3>
                  <p className="text-neutral-light-gray mb-6">
                    Subscribe to our channel for weekly messages and special content.
                  </p>
                  <a 
                    href="https://www.youtube.com/channel/UCRrCQnXSguf6UYfNQORCN3Q" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    Subscribe on YouTube →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First Time Watching CTA */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
              First Time Watching?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 font-light leading-relaxed">
              We&apos;d love to connect with you! Let us know you joined us online and experience 
              the Freeway Church family in person this Sunday.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/connect" 
                className="bg-white text-primary px-10 py-4 text-lg font-normal hover:bg-neutral-off-white transition-colors rounded-full"
              >
                Let Us Know You Visited
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white text-white px-10 py-4 text-lg font-normal hover:bg-white hover:text-primary transition-colors rounded-full"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}