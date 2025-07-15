import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Freeway Church",
  description: "Learn about Freeway Church's mission, beliefs, history, and leadership. Connect, Cultivate, Contribute.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-neutral-black text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          <div className="section-container relative z-10">
            <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-wide">Our Story & <span className="text-primary">Beliefs</span></h1>
            <p className="text-xl md:text-2xl max-w-4xl font-light leading-relaxed text-neutral-light-gray">
              Discover who we are, what we believe, and how we&apos;re making a difference in our community.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-neutral-black text-white">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-8 text-center">Our Mission</h2>
              <p className="text-xl md:text-2xl text-neutral-light-gray mb-16 text-center max-w-4xl mx-auto font-light leading-relaxed">
                At Freeway Church, our mission is to <span className="text-primary font-normal">Connect</span> people to God and each other, 
                <span className="text-primary font-normal"> Cultivate</span> spiritual growth and discipleship, and empower them to 
                <span className="text-primary font-normal"> Contribute</span> to the world around them through service and outreach. 
                We believe in creating a vibrant community where everyone feels welcome and can 
                discover their purpose in Christ.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="bg-primary text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-normal">
                    C
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">Connect</h3>
                  <p className="text-neutral-light-gray text-lg font-light">Building authentic relationships with God and community</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-normal">
                    C
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">Cultivate</h3>
                  <p className="text-neutral-light-gray text-lg font-light">Growing in faith through discipleship and spiritual formation</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-normal">
                    C
                  </div>
                  <h3 className="text-2xl font-normal mb-4 text-primary">Contribute</h3>
                  <p className="text-neutral-light-gray text-lg font-light">Making a difference through service and outreach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="py-20 md:py-28 bg-neutral-near-black text-white">
          <div className="section-container">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12">What We <span className="text-primary">Believe</span></h2>
              <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed">
                We believe in one God, eternally existing in three persons: Father, Son (Jesus Christ), 
                and Holy Spirit. We believe the Bible is the inspired, infallible Word of God, providing 
                guidance for life and faith. We believe in salvation through faith in Jesus Christ, the 
                power of the Holy Spirit, and the importance of community and serving others.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 md:py-28 bg-neutral-black text-white">
          <div className="section-container">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12">Our <span className="text-primary">History</span></h2>
              <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed">
                Freeway Church began with a vision to create a place where people could experience 
                authentic faith and genuine community. Founded in [Year], we started with a small 
                group of passionate individuals meeting in a community center. Through God&apos;s grace 
                and the dedication of our members, we have grown into a thriving church, committed 
                to impacting our city and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 md:py-28 bg-neutral-near-black text-white">
          <div className="section-container">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-normal mb-12">Our <span className="text-primary">Leadership</span></h2>
              <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed">
                Freeway Church is led by a dedicated team of pastors and staff committed to guiding 
                our congregation. Our team is passionate about teaching God&apos;s Word and fostering 
                a loving environment where everyone can grow in their faith journey.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">Ready to Visit?</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 font-light leading-relaxed">
              We&apos;d love to meet you! Join us this Sunday and experience what Freeway Church is all about.
            </p>
            <Link href="/" className="bg-white text-primary px-10 py-4 text-lg font-normal hover:bg-neutral-off-white transition-colors">
              Plan Your Visit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}