import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give - Freeway Church",
  description: "Support the mission of Freeway Church through online giving. Your generosity helps us connect, cultivate, and contribute to our community.",
};

const givingOptions = [
  {
    title: "General Fund",
    description: "Support the overall ministry and operations of Freeway Church",
    icon: "💝",
  },
  {
    title: "Missions",
    description: "Help us reach our community and support global missions",
    icon: "🌍",
  },
  {
    title: "Building Fund",
    description: "Contribute to facility improvements and expansion",
    icon: "🏗️",
  },
  {
    title: "Benevolence",
    description: "Support members and community members in need",
    icon: "🤝",
  },
];

export default function GivePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-primary-dark text-white">
          <div className="section-container">
            <h1 className="text-hero font-bold mb-4">Give</h1>
            <p className="text-xl max-w-3xl">
              Your generosity helps us connect people to God, cultivate spiritual growth, and contribute to our community.
            </p>
          </div>
        </section>

        {/* Why We Give */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-section font-bold mb-8">Why We Give</h2>
              <p className="text-lg text-neutral-dark-gray mb-8">
                Giving is an act of worship and a practical way to participate in God's work. 
                When you give to Freeway Church, you're investing in transformed lives, 
                strengthened families, and a thriving community.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h3 className="text-xl font-bold mb-2">Worship</h3>
                  <p className="text-neutral-dark-gray">Giving is a way to honor God and express our gratitude for His blessings.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold mb-2">Growth</h3>
                  <p className="text-neutral-dark-gray">Your gifts help create programs and resources that foster spiritual growth.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-neutral-dark-gray">Together we can make a greater impact in our neighborhood and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Giving Options */}
        <section className="py-16 md:py-24 bg-neutral-off-white">
          <div className="section-container">
            <h2 className="text-section font-bold mb-12 text-center">Ways to Give</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {givingOptions.map((option, index) => (
                <div key={index} className="card p-6">
                  <div className="text-3xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-neutral-dark-gray">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Online Giving */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-section font-bold mb-8">Give Online</h2>
              <p className="text-lg text-neutral-dark-gray mb-8">
                Online giving is safe, secure, and convenient. You can set up one-time or recurring gifts 
                and manage your giving history all in one place.
              </p>
              
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Give?</h3>
                <p className="text-neutral-dark-gray mb-6">
                  Click the button below to access our secure online giving platform.
                </p>
                <button className="btn-primary text-lg px-8 py-4">
                  Give Online Now
                </button>
                <p className="text-sm text-neutral-dark-gray mt-4">
                  Secure giving powered by trusted payment processing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-16 md:py-24 bg-neutral-off-white">
          <div className="section-container">
            <h2 className="text-section font-bold mb-12 text-center">Other Ways to Give</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">In Person</h3>
                <p className="text-neutral-dark-gray">
                  Bring your offering during our Sunday service or drop it off at the church office.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold mb-2">By Mail</h3>
                <p className="text-neutral-dark-gray">
                  Mail your check to:<br />
                  Freeway Church<br />
                  [Church Address]<br />
                  [City, State ZIP]
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-2">Text to Give</h3>
                <p className="text-neutral-dark-gray">
                  Text GIVE to [Phone Number] to give quickly and easily from your mobile device.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-section font-bold mb-4 text-white">Questions About Giving?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-light-gray">
              We're here to help! Contact us if you have any questions about giving or need assistance.
            </p>
            <Link href="/connect" className="btn-primary bg-accent-teal hover:bg-accent-teal-dark">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}