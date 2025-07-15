import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give - Freeway Church",
  description: "Support the mission of Freeway Church through online giving. Your generosity helps us connect, cultivate, and contribute to our community.",
};

export default function GivePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-neutral-black text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          <div className="section-container relative z-10">
            <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-wide">
              Give & <span className="text-primary">Support</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl font-light leading-relaxed text-neutral-light-gray">
              Your generosity helps us Connect people to God, Cultivate spiritual growth, and Contribute to our community.
            </p>
          </div>
        </section>

        {/* Why We Give */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-white">
                Why We <span className="text-primary">Give</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed mb-16">
                I am so excited about what God is doing through the generosity of our church family! 
                Giving is an act of worship and a practical way to participate in God&apos;s work. When you 
                give to Freeway Church, you&apos;re investing in transformed lives, strengthened families, 
                and our &ldquo;One More&rdquo; vision to reach our community and beyond.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    💝
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">Worship</h3>
                  <p className="text-neutral-light-gray text-lg font-light">
                    Giving is a way to honor God and express our gratitude for His incredible blessings in our lives.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    🌱
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">Growth</h3>
                  <p className="text-neutral-light-gray text-lg font-light">
                    Your gifts help create programs and resources that foster spiritual growth and discipleship.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    🤝
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">Community</h3>
                  <p className="text-neutral-light-gray text-lg font-light">
                    Together we can make a greater impact in our neighborhood and reach &ldquo;One More&rdquo; person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 bg-neutral-near-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-white">
                How It <span className="text-primary">Works</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-8 hover:border-primary transition-colors">
                    <div className="text-4xl mb-4">1️⃣</div>
                    <h3 className="text-xl font-normal mb-4 text-primary">Click Give Online</h3>
                    <p className="text-neutral-light-gray">
                      Access our secure online giving platform through Church Center.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-8 hover:border-primary transition-colors">
                    <div className="text-4xl mb-4">2️⃣</div>
                    <h3 className="text-xl font-normal mb-4 text-primary">Choose Amount</h3>
                    <p className="text-neutral-light-gray">
                      Select your giving amount and fund, then choose one-time or recurring.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-8 hover:border-primary transition-colors">
                    <div className="text-4xl mb-4">3️⃣</div>
                    <h3 className="text-xl font-normal mb-4 text-primary">Give Securely</h3>
                    <p className="text-neutral-light-gray">
                      Complete your gift using secure bank transfer or card payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Giving CTA */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
              Ready to Give?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 font-light leading-relaxed">
              Online giving is safe, secure, and convenient. You can set up one-time or recurring gifts 
              and manage your giving history all in one place.
            </p>
            <a 
              href="https://freewaychurch.churchcenter.com/giving" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary px-12 py-5 text-xl font-normal hover:bg-neutral-off-white transition-colors rounded-full inline-block"
            >
              Give Online Now
            </a>
            <p className="text-lg text-white/80 mt-6">
              Secure giving powered by Church Center
            </p>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <h2 className="text-4xl md:text-5xl font-normal mb-16 text-center text-white">
              Other Ways to <span className="text-primary">Give</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  💰
                </div>
                <h3 className="text-2xl font-normal mb-4 text-primary">In Person</h3>
                <p className="text-neutral-light-gray text-lg font-light">
                  Bring your offering during our Sunday service at 10:00 AM or drop it off at the church office.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  ✉️
                </div>
                <h3 className="text-2xl font-normal mb-4 text-primary">By Mail</h3>
                <p className="text-neutral-light-gray text-lg font-light">
                  Mail your check to:<br />
                  <strong className="text-white">Freeway Church</strong><br />
                  28900 B Drive North<br />
                  Albion, MI 49224
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="py-20 md:py-28 bg-neutral-near-black text-white">
          <div className="section-container text-center">
            <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
              Questions About <span className="text-primary">Giving?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-neutral-light-gray font-light leading-relaxed">
              We&apos;re here to help! Contact us if you have any questions about giving or need assistance 
              with online giving.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:info@freeway.church" 
                className="bg-primary text-white px-10 py-4 text-lg font-normal hover:bg-primary-dark transition-colors rounded-full"
              >
                Email Us
              </a>
              <a 
                href="tel:5177980571" 
                className="border-2 border-primary text-primary px-10 py-4 text-lg font-normal hover:bg-primary hover:text-white transition-colors rounded-full"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}