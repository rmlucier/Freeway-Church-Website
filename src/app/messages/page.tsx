import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages - Freeway Church",
  description: "Listen to weekly messages from Freeway Church. Discover God's word through inspiring sermons and biblical teaching.",
};

const recentMessages = [
  {
    title: "Walking in Faith",
    speaker: "Pastor [Name]",
    date: "January 14, 2024",
    series: "New Year, New Faith",
    description: "Discover how to take steps of faith in the new year, trusting God's plan for your life.",
    videoUrl: "/watch-online",
  },
  {
    title: "Love in Action",
    speaker: "Pastor [Name]",
    date: "January 7, 2024",
    series: "New Year, New Faith",
    description: "Learn how to put love into action through practical service and community engagement.",
    videoUrl: "/watch-online",
  },
  {
    title: "Hope for Tomorrow",
    speaker: "Pastor [Name]",
    date: "December 31, 2023",
    series: "Christmas Joy",
    description: "End the year with hope and anticipation for what God has in store for the future.",
    videoUrl: "/watch-online",
  },
];

export default function MessagesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-primary-dark text-white">
          <div className="section-container">
            <h1 className="text-hero font-bold mb-4">Messages</h1>
            <p className="text-xl max-w-3xl">
              Be encouraged and challenged through biblical teaching that applies to your everyday life.
            </p>
          </div>
        </section>

        {/* Recent Messages */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <h2 className="text-section font-bold mb-12 text-center">Recent Messages</h2>
            
            <div className="space-y-8">
              {recentMessages.map((message, index) => (
                <div key={index} className="card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-neutral-dark-gray mb-2">
                        <span>{message.date}</span>
                        <span className="mx-2">•</span>
                        <span>{message.speaker}</span>
                        <span className="mx-2">•</span>
                        <span className="text-accent-teal">{message.series}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{message.title}</h3>
                      <p className="text-neutral-dark-gray mb-4 md:mb-0">{message.description}</p>
                    </div>
                    <div className="flex space-x-4">
                      <Link href={message.videoUrl} className="btn-primary">
                        Watch
                      </Link>
                      <Link href="/media/podcast" className="btn-secondary">
                        Listen
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Message Series */}
        <section className="py-16 md:py-24 bg-neutral-off-white">
          <div className="section-container">
            <h2 className="text-section font-bold mb-12 text-center">Current Series</h2>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="card p-8">
                <h3 className="text-3xl font-bold mb-4">New Year, New Faith</h3>
                <p className="text-lg text-neutral-dark-gray mb-6">
                  Start the year with fresh faith and renewed purpose. This series explores how to deepen 
                  your relationship with God and live out His calling on your life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/watch-online" className="btn-primary">
                    Watch Latest
                  </Link>
                  <Link href="/media/podcast" className="btn-secondary">
                    Listen to Podcast
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-section font-bold mb-4 text-white">Stay Connected</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-light-gray">
              Never miss a message. Subscribe to our podcast or watch live online every Sunday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/media/podcast" className="btn-primary bg-accent-teal hover:bg-accent-teal-dark">
                Subscribe to Podcast
              </Link>
              <Link href="/watch-online" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Watch Live
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}