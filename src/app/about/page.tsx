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
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed">
                  We believe in one God, eternally existing in three persons: Father, Son (Jesus Christ), 
                  and Holy Spirit. We believe the Bible is the inspired, infallible Word of God, providing 
                  guidance for life and faith. We believe in salvation through faith in Jesus Christ, the 
                  power of the Holy Spirit, and the importance of community and serving others.
                </p>
                <div className="pt-8 border-t border-neutral-dark-gray max-w-3xl mx-auto">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Our Theological Partnership</h3>
                  <p className="text-lg text-neutral-light-gray font-light leading-relaxed">
                    Our church partners with the Assemblies of God. Though we are an independent church, 
                    the Assemblies of God helps us with accountability and support. Our church aligns with 
                    the A/G&apos;s theological statements. 
                    <a href="https://ag.org/Beliefs/Statement-of-Fundamental-Truths" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary hover:text-primary-dark transition-colors ml-1">
                      Read their statement of faith here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 md:py-28 bg-neutral-black text-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-center">Our <span className="text-primary">Story</span></h2>
              <div className="space-y-6 text-lg md:text-xl text-neutral-light-gray font-light leading-relaxed">
                <p>
                  Called to ministry in our youth, Elissa and I met at North Central University in Minneapolis, MN 
                  where we studied ministry and leadership while obtaining our credentials through the Assemblies of 
                  God movement. Newly married and ready to follow anywhere the Lord may lead, we ministered in both 
                  Minnesota and Massachusetts, growing our family and ministering for several years as associate 
                  pastors before returning to our home state of Michigan.
                </p>
                <p>
                  We waited and prayed for God to provide the right opportunity for our next assignment and call. 
                  This landed us in none other than the city of Albion and a beautiful church right off of I-94.
                </p>
                <p>
                  It&apos;s amazing how God paired us so well to lead this body of believers. Freeway Church is the 
                  warmest community you&apos;ll ever meet. We are full of life and love for each other. It&apos;s an 
                  honor to lead this congregation and serve.
                </p>
                <p>
                  Elissa and I have a heart for this region and a passion to walk others through what it means to 
                  have a real relationship with Jesus. Jesus, a real person, who died for you and loves you more 
                  than anyone else ever could. We believe Jesus died for all - yes, even you! You are welcome at 
                  Freeway Church. Come join the family of God and experience all that a life following Jesus has to offer.
                </p>
                <p className="text-right italic text-primary">
                  -Pastor Roy Lucier
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Church Section */}
        <section className="py-20 md:py-28 bg-neutral-near-black text-white">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-center">Why <span className="text-primary">Church?</span></h2>
              <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed text-center mb-12">
                According to research, people seek spiritual communities for many reasons. At Freeway Church, 
                we&apos;re here to help you find what you&apos;re looking for:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {["Peace", "Hope", "Healing", "Forgiveness", "Truth", "Guidance", "Purpose", "Growth", "Meaning", "Salvation", "Spirituality", "Community"].map((item) => (
                  <div key={item} className="bg-neutral-black border border-neutral-dark-gray rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <p className="text-lg font-normal text-primary">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Modern Church</h3>
                  <p className="text-neutral-light-gray text-lg font-light">
                    At our church, we embrace a vibrant community, engaging worship experiences and 
                    relevant teachings that connect ancient truths with the challenges of contemporary life.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Seek And You Will Find</h3>
                  <p className="text-neutral-light-gray text-lg font-light">
                    Are you seeking a church where you can truly find your place? Our church warmly 
                    opens its doors to those on a journey of discovery, providing a supportive 
                    community where you can find the perfect fit for your spiritual growth.
                  </p>
                </div>
              </div>
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