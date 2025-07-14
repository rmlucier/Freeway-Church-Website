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
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-primary-dark text-white">
          <div className="section-container">
            <h1 className="text-hero font-bold mb-4">Watch Online</h1>
            <p className="text-xl max-w-3xl">
              Join us for live worship every Sunday at 10am, or catch up on previous services anytime.
            </p>
          </div>
        </section>

        {/* Live Service */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-section font-bold mb-8 text-center">Live Service</h2>
              
              <div className="card p-8 mb-8">
                <div className="aspect-video bg-neutral-light-gray rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📺</div>
                    <h3 className="text-xl font-bold mb-2">Live Stream</h3>
                    <p className="text-neutral-dark-gray">
                      Our live stream will appear here during service times
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Next Service</h3>
                  <p className="text-lg text-neutral-dark-gray mb-6">
                    Join us this Sunday at 10:00am for worship and teaching
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://www.youtube.com/@freewaychurch" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Watch on YouTube
                    </a>
                    <a 
                      href="https://www.facebook.com/freewaychurch" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Watch on Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-16 md:py-24 bg-neutral-off-white">
          <div className="section-container">
            <h2 className="text-section font-bold mb-12 text-center">Service Times</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="card p-6 text-center">
                <div className="text-accent-teal text-3xl font-bold mb-2">9:15a</div>
                <h3 className="text-xl font-semibold mb-2">Preservice Prayer</h3>
                <p className="text-neutral-dark-gray">Join us for a time of prayer before service</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-accent-teal text-3xl font-bold mb-2">10:00a</div>
                <h3 className="text-xl font-semibold mb-2">Worship Service</h3>
                <p className="text-neutral-dark-gray">Live worship and teaching</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-accent-teal text-3xl font-bold mb-2">11:30a</div>
                <h3 className="text-xl font-semibold mb-2">Fellowship</h3>
                <p className="text-neutral-dark-gray">Connect with others after service</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-accent-teal text-3xl font-bold mb-2">6:00p</div>
                <h3 className="text-xl font-semibold mb-2">Freeway Youth</h3>
                <p className="text-neutral-dark-gray">Youth ministry for 6th-12th grade</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Messages */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <h2 className="text-section font-bold mb-12 text-center">Recent Messages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <div className="aspect-video bg-neutral-light-gray"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Walking in Faith</h3>
                  <p className="text-sm text-neutral-dark-gray mb-2">January 14, 2024</p>
                  <p className="text-neutral-dark-gray">Discover how to take steps of faith in the new year.</p>
                </div>
              </div>
              <div className="card">
                <div className="aspect-video bg-neutral-light-gray"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Love in Action</h3>
                  <p className="text-sm text-neutral-dark-gray mb-2">January 7, 2024</p>
                  <p className="text-neutral-dark-gray">Learn how to put love into action through service.</p>
                </div>
              </div>
              <div className="card">
                <div className="aspect-video bg-neutral-light-gray"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hope for Tomorrow</h3>
                  <p className="text-sm text-neutral-dark-gray mb-2">December 31, 2023</p>
                  <p className="text-neutral-dark-gray">End the year with hope for the future.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/messages" className="btn-primary">
                View All Messages
              </Link>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-section font-bold mb-4 text-white">First Time Watching?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-light-gray">
              We'd love to connect with you! Let us know you joined us online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/connect" className="btn-primary bg-accent-teal hover:bg-accent-teal-dark">
                Let Us Know You Visited
              </Link>
              <Link href="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}