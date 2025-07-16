import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give - Freeway Church",
  description: "Experience the joy of giving at Freeway Church. Learn about tithing, offering, and Kingdom Builders - three biblical ways to support God's work and advance His kingdom.",
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
              The Joy of <span className="text-primary">Giving</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl font-light leading-relaxed text-neutral-light-gray">
              I am so excited about what God is doing through the generosity of our church family! 
              Giving is not something we take - it&apos;s something we receive with joy as people 
              freely choose to advance God&apos;s kingdom.
            </p>
          </div>
        </section>

        {/* Heart of Giving */}
        <section className="py-20 md:py-28 bg-neutral-near-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-white">
                A Heart <span className="text-primary">Touched by God</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed mb-16">
                We receive the offering - we never take it. People give freewill because it&apos;s a joy to give! 
                I desire to give. Every one of us, like Corinthians says, we determine in our heart what to give 
                and then we do it. Nobody&apos;s forced. It is a freewill offering that brings immediate joy 
                when you follow God&apos;s prompting.
              </p>
            </div>
          </div>
        </section>

        {/* Three Types of Giving */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
                Three Ways to <span className="text-primary">Give</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed max-w-4xl mx-auto">
                I want to talk to you about three different words you&apos;ll hear when it comes to giving at Freeway Church: 
                <strong className="text-primary"> Tithe, Offering, and Kingdom Builders.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Tithing */}
              <div className="bg-neutral-near-black border border-neutral-dark-gray rounded-2xl p-8 hover:border-primary transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎯
                  </div>
                  <h3 className="text-2xl font-normal text-primary mb-2">Tithe</h3>
                  <p className="text-neutral-light-gray text-lg font-light">10% of Your Income</p>
                </div>
                <div className="space-y-4 text-neutral-light-gray">
                  <p>
                    A tithe means 10% - that&apos;s what that word means. We see in the Bible that a heart touched 
                    by God wants to tithe. Before the law was written, Abraham had his heart touched by God and 
                    he tithed to Melchizedek. Jacob said, &quot;If you&apos;ll be my God, I want to tithe.&quot;
                  </p>
                  <p>
                    I understand that&apos;s a big amount, but it says this: <strong className="text-primary">God&apos;s my source. I trust Him.</strong> 
                    I&apos;m going to live on 90% blessed by God rather than live on 100% in my own hands.
                  </p>
                  <p>
                    We believe you bring it into the local church - you&apos;re on mission with us, helping to fuel 
                    the world together. If people did that, the resources of the church would be overwhelming!
                  </p>
                </div>
              </div>

              {/* Offering */}
              <div className="bg-neutral-near-black border border-neutral-dark-gray rounded-2xl p-8 hover:border-primary transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    💝
                  </div>
                  <h3 className="text-2xl font-normal text-primary mb-2">Offering</h3>
                  <p className="text-neutral-light-gray text-lg font-light">Spirit-Led Giving</p>
                </div>
                <div className="space-y-4 text-neutral-light-gray">
                  <p>
                    An offering is something I want to do - not a principle or amount that&apos;s pushed, but something 
                    that&apos;s prompted on my heart by the Holy Spirit. Maybe it&apos;s give that person $5, or $100 
                    for their missions trip, or pay for someone&apos;s lunch.
                  </p>
                  <p>
                    Whenever we have a missionary, I pray you&apos;re feeling like, &quot;I wonder if I could invest in China, 
                    Russia, or wherever this missionary&apos;s from?&quot; You&apos;re following a prompting - $50, $100, $20, $10, $5.
                  </p>
                  <p>
                    <strong className="text-primary">There&apos;s immediate joy when you give an offering</strong> because you followed 
                    a prompt from God. You are hearing the voice of the Holy Spirit!
                  </p>
                </div>
              </div>

              {/* Kingdom Builders */}
              <div className="bg-neutral-near-black border border-neutral-dark-gray rounded-2xl p-8 hover:border-primary transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🏗️
                  </div>
                  <h3 className="text-2xl font-normal text-primary mb-2">Kingdom Builders</h3>
                  <p className="text-neutral-light-gray text-lg font-light">Intentional Living</p>
                </div>
                <div className="space-y-4 text-neutral-light-gray">
                  <p>
                    Kingdom Builders is your gift that says, &quot;I&apos;m going to live intentional. Beyond the tithe, 
                    beyond when I&apos;m prompted, I am going to evaluate my life and live differently and give 
                    over and above those things.&quot;
                  </p>
                  <p>
                    This is money that goes to advance the Kingdom of God. You&apos;re saying, &quot;I will be somebody that 
                    resources the vision. I will make sacrifices, realign my budget, set new goals.&quot;
                  </p>
                  <p>
                    <strong className="text-primary">That&apos;s like generosity on steroids!</strong> It&apos;s not just sacrificing - 
                    it&apos;s expanding. Maybe you&apos;ll start a new business, increase income, so you can give more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Giver */}
        <section className="py-20 md:py-28 bg-neutral-near-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-white">
                Be a <span className="text-primary">Complete Giver</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed mb-16">
                I pray that you could be a complete giver - that you can tithe, give an offering whenever your heart 
                is prompted, and then realign your life to be a Kingdom Builder. Whether you&apos;ve been giving 
                offerings when you felt it or not, maybe you need to step up and say, &quot;I need to be a tither.&quot;
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-6 hover:border-primary transition-colors">
                  <h3 className="text-xl font-normal mb-4 text-primary">Step 1: Tithe</h3>
                  <p className="text-neutral-light-gray">
                    Start with 10% of your income brought into the local church
                  </p>
                </div>
                <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-6 hover:border-primary transition-colors">
                  <h3 className="text-xl font-normal mb-4 text-primary">Step 2: Offer</h3>
                  <p className="text-neutral-light-gray">
                    Give when prompted by the Holy Spirit for special needs
                  </p>
                </div>
                <div className="bg-neutral-black border border-neutral-dark-gray rounded-2xl p-6 hover:border-primary transition-colors">
                  <h3 className="text-xl font-normal mb-4 text-primary">Step 3: Build</h3>
                  <p className="text-neutral-light-gray">
                    Live intentionally to give over and above for Kingdom advancement
                  </p>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed">
                <strong className="text-primary">I&apos;m telling you, it&apos;s a joy to give freewill offerings</strong> - tithe, offering, 
                and Kingdom Builders - to advance the Kingdom of God!
              </p>
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
              Online giving is safe, secure, and convenient. Choose your giving type - Tithe, Offering, or Kingdom Builders - 
              and set up one-time or recurring gifts to advance God&apos;s kingdom.
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
                  Bring your offering during our Sunday service at 10:00 AM. We receive it with joy 
                  as you freely choose to give!
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
              I&apos;m praying for God to give you the breakthrough to experience the joy of giving! 
              If you have questions about tithing, offering, or Kingdom Builders, we&apos;re here to help.
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