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
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-primary-dark text-white">
          <div className="section-container">
            <h1 className="text-hero font-bold mb-4">Our Story & Beliefs</h1>
            <p className="text-xl max-w-3xl">
              Discover who we are, what we believe, and how we&apos;re making a difference in our community.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-section font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-dark-gray mb-8">
                At Freeway Church, our mission is to <strong>Connect</strong> people to God and each other, 
                <strong> Cultivate</strong> spiritual growth and discipleship, and empower them to 
                <strong> Contribute</strong> to the world around them through service and outreach. 
                We believe in creating a vibrant community where everyone feels welcome and can 
                discover their purpose in Christ.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-accent-teal text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    C
                  </div>
                  <h3 className="text-xl font-bold mb-2">Connect</h3>
                  <p className="text-neutral-dark-gray">Building authentic relationships with God and community</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent-teal text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    C
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cultivate</h3>
                  <p className="text-neutral-dark-gray">Growing in faith through discipleship and spiritual formation</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent-teal text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    C
                  </div>
                  <h3 className="text-xl font-bold mb-2">Contribute</h3>
                  <p className="text-neutral-dark-gray">Making a difference through service and outreach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="py-16 md:py-24 bg-neutral-off-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-section font-bold mb-6">What We Believe</h2>
              <p className="text-lg text-neutral-dark-gray">
                We believe in one God, eternally existing in three persons: Father, Son (Jesus Christ), 
                and Holy Spirit. We believe the Bible is the inspired, infallible Word of God, providing 
                guidance for life and faith. We believe in salvation through faith in Jesus Christ, the 
                power of the Holy Spirit, and the importance of community and serving others.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-section font-bold mb-6">Our History</h2>
              <p className="text-lg text-neutral-dark-gray">
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
        <section className="py-16 md:py-24 bg-neutral-off-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-section font-bold mb-6">Our Leadership</h2>
              <p className="text-lg text-neutral-dark-gray">
                Freeway Church is led by a dedicated team of pastors and staff committed to guiding 
                our congregation. Our team is passionate about teaching God&apos;s Word and fostering 
                a loving environment where everyone can grow in their faith journey.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-section font-bold mb-4 text-white">Ready to Visit?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-light-gray">
              We&apos;d love to meet you! Join us this Sunday and experience what Freeway Church is all about.
            </p>
            <Link href="/" className="btn-primary bg-accent-teal hover:bg-accent-teal-dark">
              Plan Your Visit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}