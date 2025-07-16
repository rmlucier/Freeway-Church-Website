import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Visit - Freeway Church",
  description: "Plan your visit to Freeway Church. Learn what to expect during your first visit, KidsWay check-in, and fellowship time.",
};

export default function VisitPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-neutral-black text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          <div className="section-container relative z-10">
            <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-wide">
              Plan Your <span className="text-primary">Visit</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl font-light leading-relaxed text-neutral-light-gray">
              I am so excited to welcome you to Freeway Church! Come experience the warmest 
              community you&apos;ll ever meet and discover what it means to Connect, Cultivate, 
              and Contribute in God&apos;s family.
            </p>
          </div>
        </section>

        {/* Welcome Video Section */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">
                Welcome to <span className="text-primary">Freeway</span>
              </h2>
              <p className="text-xl text-neutral-light-gray max-w-3xl mx-auto">
                Watch this personal message from Pastor Roy about what to expect during your visit
              </p>
            </div>
            
            {/* Video Embed Placeholder */}
            <div className="max-w-5xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl bg-neutral-dark-gray border-2 border-dashed border-primary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                      🎥
                    </div>
                    <h3 className="text-2xl font-normal mb-2 text-primary">Welcome Video</h3>
                    <p className="text-neutral-light-gray">Video will be embedded here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 md:py-28 bg-neutral-near-black">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-16 text-center text-white">
                What to <span className="text-primary">Expect</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Service Overview */}
                <div className="bg-neutral-black rounded-2xl p-8 border border-neutral-dark-gray">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl">
                    🎵
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">Worship Experience</h3>
                  <p className="text-neutral-light-gray mb-6">
                    Our service begins at 10:00 AM with contemporary worship music that will lift your spirit. 
                    You&apos;ll feel the presence of God as we sing together and prepare our hearts for His Word.
                  </p>
                  <ul className="text-neutral-light-gray space-y-2 text-sm">
                    <li>• Contemporary worship music</li>
                    <li>• Welcoming atmosphere</li>
                    <li>• Biblical teaching that applies to life</li>
                    <li>• Prayer and community connection</li>
                  </ul>
                </div>

                {/* Dress Code & Atmosphere */}
                <div className="bg-neutral-black rounded-2xl p-8 border border-neutral-dark-gray">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl">
                    👕
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">Come As You Are</h3>
                  <p className="text-neutral-light-gray mb-6">
                    There&apos;s no dress code at Freeway Church! Whether you&apos;re in jeans and a t-shirt or 
                    Sunday best, you&apos;re welcome here. We care more about your heart than your clothes.
                  </p>
                  <ul className="text-neutral-light-gray space-y-2 text-sm">
                    <li>• Casual and comfortable atmosphere</li>
                    <li>• No judgment, just love</li>
                    <li>• Friendly greeters to help you</li>
                    <li>• Coffee and refreshments available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KidsWay Section */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-white">
                <span className="text-primary">KidsWay</span> Check-In
              </h2>
              
              <div className="bg-neutral-near-black rounded-2xl p-8 border border-neutral-dark-gray mb-12">
                <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  👶
                </div>
                <h3 className="text-2xl font-normal mb-6 text-primary">Safe & Fun for Kids</h3>
                <p className="text-neutral-light-gray text-lg mb-8">
                  We love kids at Freeway Church! Our KidsWay program provides a safe, engaging 
                  environment where children can learn about Jesus while parents enjoy the service.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-xl font-normal mb-4 text-white">Check-In Process</h4>
                    <ul className="text-neutral-light-gray space-y-2">
                      <li>• Arrive 15 minutes early for first-time check-in</li>
                      <li>• Bring your child to the KidsWay area</li>
                      <li>• Our team will help you through the process</li>
                      <li>• You&apos;ll receive a security tag for pickup</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-normal mb-4 text-white">What We Provide</h4>
                    <ul className="text-neutral-light-gray space-y-2">
                      <li>• Age-appropriate Bible lessons</li>
                      <li>• Fun activities and games</li>
                      <li>• Trained and background-checked volunteers</li>
                      <li>• Secure environment with check-in system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule & Fellowship */}
        <section className="py-20 md:py-28 bg-neutral-near-black">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-16 text-center text-white">
                Sunday <span className="text-primary">Schedule</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Pre-Service Prayer */}
                <div className="bg-neutral-black rounded-2xl p-8 border border-neutral-dark-gray text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    🙏
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">9:15 AM</h3>
                  <h4 className="text-xl font-normal mb-4 text-white">Pre-Service Prayer</h4>
                  <p className="text-neutral-light-gray text-sm">
                    Join us for a time of prayer before the service begins. This is optional but a great 
                    way to prepare your heart for worship.
                  </p>
                </div>

                {/* Main Service */}
                <div className="bg-neutral-black rounded-2xl p-8 border border-primary text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    ⛪
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">10:00 AM</h3>
                  <h4 className="text-xl font-normal mb-4 text-white">Main Worship Service</h4>
                  <p className="text-neutral-light-gray text-sm">
                    Our main service with worship, teaching, and community. This is where the magic happens! 
                    Plan to arrive by 9:50 AM to get settled.
                  </p>
                </div>

                {/* Fellowship */}
                <div className="bg-neutral-black rounded-2xl p-8 border border-neutral-dark-gray text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    ☕
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">11:30 AM</h3>
                  <h4 className="text-xl font-normal mb-4 text-white">Fellowship Time</h4>
                  <p className="text-neutral-light-gray text-sm">
                    Don&apos;t rush out! Stay for fellowship time with coffee, snacks, and conversation. 
                    This is where real community happens and friendships are formed.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-neutral-black rounded-2xl p-8 border border-neutral-dark-gray max-w-2xl mx-auto">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Also Available</h3>
                  <div className="space-y-2 text-neutral-light-gray">
                    <p><strong className="text-white">6:00 PM</strong> - Freeway Youth (Middle & High School)</p>
                    <p><strong className="text-white">7:00 PM</strong> - Young Adults (18-30s)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Parking */}
        <section className="py-20 md:py-28 bg-neutral-black">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-16 text-center text-white">
                Find <span className="text-primary">Us</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-normal mb-6 text-primary">Location & Parking</h3>
                  <div className="space-y-4 text-neutral-light-gray">
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm flex-shrink-0">
                        📍
                      </div>
                      <div>
                        <p className="font-normal text-white">28900 B Drive North</p>
                        <p>Albion, MI 49224</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm flex-shrink-0">
                        🚗
                      </div>
                      <div>
                        <p className="font-normal text-white">Plenty of Free Parking</p>
                        <p>Large parking lot with easy access</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm flex-shrink-0">
                        🚧
                      </div>
                      <div>
                        <p className="font-normal text-white">Convenient Location</p>
                        <p>Right off Interstate I-94 for easy access</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-normal mb-6 text-primary">Need Help?</h3>
                  <div className="space-y-4 text-neutral-light-gray">
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm flex-shrink-0">
                        👋
                      </div>
                      <div>
                        <p className="font-normal text-white">Friendly Greeters</p>
                        <p>Our team will help you find your way</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm flex-shrink-0">
                        📞
                      </div>
                      <div>
                        <p className="font-normal text-white">Call Us</p>
                        <p><a href="tel:5177980571" className="hover:text-primary transition-colors">(517) 798-0571</a></p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm flex-shrink-0">
                        ✉️
                      </div>
                      <div>
                        <p className="font-normal text-white">Email Pastor Roy</p>
                        <p><a href="mailto:roy@freeway.church" className="hover:text-primary transition-colors">roy@freeway.church</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
              Ready to Visit?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 font-light leading-relaxed">
              We can&apos;t wait to meet you! Come experience the absolutely dynamic community 
              where everyone&apos;s invited to have their lives wrecked by Jesus.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/connect" 
                className="bg-white text-primary px-10 py-4 text-lg font-normal hover:bg-neutral-off-white transition-colors rounded-full"
              >
                Let Us Know You&apos;re Coming
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