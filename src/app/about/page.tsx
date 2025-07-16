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

        {/* Mission & Vision Section */}
        <section className="py-20 md:py-28 bg-neutral-black text-white">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-8 text-center">Our Mission & Vision</h2>
              <div className="text-center mb-16">
                <h3 className="text-2xl md:text-3xl font-normal mb-6 text-primary">Vision Statement</h3>
                <p className="text-xl md:text-2xl text-neutral-light-gray mb-8 max-w-4xl mx-auto font-light leading-relaxed italic">
                  &quot;Together, we are eagerly cultivating a legacy of Jesus followers. Freeway is a community that feels like home: driven with purpose, life-change and Godly intimacy.&quot;
                </p>
                <p className="text-lg md:text-xl text-neutral-light-gray max-w-4xl mx-auto font-light leading-relaxed">
                  Our vision is rooted in six meaningful pillars that guide both individuals and our church as a whole.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-normal">
                    1
                  </div>
                  <h3 className="text-xl font-normal mb-3 text-primary">Connect to God</h3>
                  <p className="text-neutral-light-gray text-sm font-light">Your connectedness to Jesus is the foundation of spiritual progress and life. Abide in Him daily.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-normal">
                    2
                  </div>
                  <h3 className="text-xl font-normal mb-3 text-primary">Connect to Others</h3>
                  <p className="text-neutral-light-gray text-sm font-light">Knit yourself together with other members to form a healthy home. Forgive quickly and put each other first.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-normal">
                    3
                  </div>
                  <h3 className="text-xl font-normal mb-3 text-primary">Cultivate Life-Change by Sharing</h3>
                  <p className="text-neutral-light-gray text-sm font-light">Growth happens when we share what God is doing. Whatever we repeat, we remember.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-normal">
                    4
                  </div>
                  <h3 className="text-xl font-normal mb-3 text-primary">Cultivate Life-Change by Inviting</h3>
                  <p className="text-neutral-light-gray text-sm font-light">Everyone&apos;s invited to have their lives wrecked by Jesus. Invite others to experience God&apos;s transforming love.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-normal">
                    5
                  </div>
                  <h3 className="text-xl font-normal mb-3 text-primary">Contribute by Serving</h3>
                  <p className="text-neutral-light-gray text-sm font-light">Every believer is called to ministry. Figure out what God&apos;s called you to do and contribute to that calling.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-normal">
                    6
                  </div>
                  <h3 className="text-xl font-normal mb-3 text-primary">Contribute by Giving</h3>
                  <p className="text-neutral-light-gray text-sm font-light">We don&apos;t give to cover bills but to leave a legacy. Learn the value of generous giving back to God.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="py-20 md:py-28 bg-neutral-near-black text-white">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-12 text-center">What We <span className="text-primary">Believe</span></h2>
              
              {/* Core Beliefs */}
              <div className="text-center mb-16">
                <p className="text-xl md:text-2xl text-neutral-light-gray font-light leading-relaxed mb-8">
                  We believe in one God, eternally existing in three persons: Father, Son (Jesus Christ), 
                  and Holy Spirit. We believe the Bible is the inspired, infallible Word of God, providing 
                  guidance for life and faith. We believe in salvation through faith in Jesus Christ, the 
                  power of the Holy Spirit, and the importance of community and serving others.
                </p>
              </div>

              {/* Key Doctrines Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="bg-neutral-black p-6 rounded-lg border border-neutral-dark-gray">
                  <h3 className="text-xl font-normal mb-3 text-primary">Scripture</h3>
                  <p className="text-neutral-light-gray text-sm font-light">The Bible is verbally inspired of God and is the infallible, authoritative rule of faith and conduct.</p>
                </div>
                <div className="bg-neutral-black p-6 rounded-lg border border-neutral-dark-gray">
                  <h3 className="text-xl font-normal mb-3 text-primary">Trinity</h3>
                  <p className="text-neutral-light-gray text-sm font-light">One true God revealed as Father, Son, and Holy Spirit - eternally self-existent and Creator of all.</p>
                </div>
                <div className="bg-neutral-black p-6 rounded-lg border border-neutral-dark-gray">
                  <h3 className="text-xl font-normal mb-3 text-primary">Jesus Christ</h3>
                  <p className="text-neutral-light-gray text-sm font-light">Virgin birth, sinless life, miracles, death for our sins, bodily resurrection, and exaltation to God&apos;s right hand.</p>
                </div>
                <div className="bg-neutral-black p-6 rounded-lg border border-neutral-dark-gray">
                  <h3 className="text-xl font-normal mb-3 text-primary">Salvation</h3>
                  <p className="text-neutral-light-gray text-sm font-light">Through repentance toward God and faith in Jesus Christ - justified by grace through faith.</p>
                </div>
                <div className="bg-neutral-black p-6 rounded-lg border border-neutral-dark-gray">
                  <h3 className="text-xl font-normal mb-3 text-primary">Holy Spirit</h3>
                  <p className="text-neutral-light-gray text-sm font-light">Baptism in the Holy Spirit with initial evidence of speaking in tongues, gifts, and power for service.</p>
                </div>
                <div className="bg-neutral-black p-6 rounded-lg border border-neutral-dark-gray">
                  <h3 className="text-xl font-normal mb-3 text-primary">Divine Healing</h3>
                  <p className="text-neutral-light-gray text-sm font-light">Healing is provided in the Atonement and is the privilege of all believers.</p>
                </div>
              </div>

              {/* Church Structure */}
              <div className="bg-neutral-black p-8 rounded-lg border border-neutral-dark-gray mb-16">
                <h3 className="text-2xl font-normal mb-6 text-primary text-center">Our Church Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-normal mb-3 text-white">Self-Governing Status</h4>
                    <p className="text-neutral-light-gray text-sm font-light mb-4">
                      Freeway Church is a Self-Governing (General Council) Assembly of God Church. 
                      We are affiliated with and supportive of the Assemblies of God, but we are 
                      self-governed and determine our own affairs.
                    </p>
                    <ul className="text-neutral-light-gray text-sm font-light space-y-2">
                      <li>• Our church chooses its pastor</li>
                      <li>• Our church owns its building and assets</li>
                      <li>• Our church determines its own programs</li>
                      <li>• Our church chooses supported missionaries</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-normal mb-3 text-white">Organizational Philosophy</h4>
                    <p className="text-neutral-light-gray text-sm font-light mb-4">
                      We are a body, not a business. We are a people, not a building. 
                      We are an organism, not an organization.
                    </p>
                    <p className="text-neutral-light-gray text-sm font-light">
                      Every member is critical to the life and health of this church. 
                      We are at our best when every member of the body is functioning 
                      properly and in their correct place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Assemblies of God Partnership */}
              <div className="text-center bg-neutral-black p-8 rounded-lg border border-neutral-dark-gray">
                <h3 className="text-2xl font-normal mb-4 text-primary">Our Theological Partnership</h3>
                <p className="text-lg text-neutral-light-gray font-light leading-relaxed mb-6">
                  Our church partners with the Assemblies of God. Though we are an independent church, 
                  the Assemblies of God helps us with accountability and support. Our church aligns with 
                  the A/G&apos;s theological statements and their 16 Fundamental Truths.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://ag.org/Beliefs/Statement-of-Fundamental-Truths" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                    Read Full Statement of Faith
                  </a>
                  <a href="https://ag.org" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-transparent border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                    Learn About Assemblies of God
                  </a>
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
                <div className="bg-neutral-near-black p-6 rounded-lg border border-neutral-dark-gray mb-8">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Historic Beginnings</h3>
                  <p className="mb-4">
                    On April 14, 1942, in the home of Mr. and Mrs. Floyd Konkle at 708 North Clark Street, Albion, Michigan, 
                    our church was officially started with 20 charter members present. Rev. and Mrs. W. E. Davis were called 
                    to pastor the Albion Assembly of God Church after returning from the mission field in India.
                  </p>
                  <p>
                    In 1947, work began to construct a church building at 910 North Superior Street, completed in May 1951. 
                    Under Rev. and Mrs. Clarence Pedersen&apos;s leadership, the church purchased property off Interstate I-94 
                    and constructed our current facilities at 28900 B. Drive North.
                  </p>
                </div>
                <div className="bg-neutral-near-black p-6 rounded-lg border border-neutral-dark-gray mb-8">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Modern Era</h3>
                  <p className="mb-4">
                    In 2014, under Pastor Steve Meszaros&apos; leadership, the church was renamed &quot;Freeway Church.&quot; 
                    Our current leaders, Pastors Roy and Elissa Lucier, were installed in October 2021.
                  </p>
                </div>
                <div className="bg-neutral-near-black p-6 rounded-lg border border-neutral-dark-gray">
                  <h3 className="text-2xl font-normal mb-4 text-primary">Roy & Elissa&apos;s Journey</h3>
                  <p className="mb-4">
                    Called to ministry in our youth, Elissa and I met at North Central University in Minneapolis, MN 
                    where we studied ministry and leadership while obtaining our credentials through the Assemblies of 
                    God movement. Newly married and ready to follow anywhere the Lord may lead, we ministered in both 
                    Minnesota and Massachusetts, growing our family and ministering for several years as associate 
                    pastors before returning to our home state of Michigan.
                  </p>
                  <p className="mb-4">
                    We waited and prayed for God to provide the right opportunity for our next assignment and call. 
                    This landed us in none other than the city of Albion and a beautiful church right off of I-94.
                  </p>
                  <p className="mb-4">
                    It&apos;s amazing how God paired us so well to lead this body of believers. Freeway Church is the 
                    warmest community you&apos;ll ever meet. We are full of life and love for each other. It&apos;s an 
                    honor to lead this congregation and serve.
                  </p>
                  <p className="mb-4">
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