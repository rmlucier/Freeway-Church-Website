import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EventsCarousel from "@/components/sections/EventsCarousel";
import AboutUs from "@/components/sections/AboutUs";
import Location from "@/components/sections/Location";
import Leadership from "@/components/sections/Leadership";
import NextSteps from "@/components/sections/NextSteps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="py-16 md:py-24 bg-neutral-black">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-section font-bold mb-4 text-white">Around Freeway Church</h2>
              <p className="text-lg text-neutral-light-gray max-w-2xl mx-auto">
                Stay connected with upcoming events, services, and opportunities to grow in your faith journey.
              </p>
            </div>
            <EventsCarousel />
          </div>
        </section>
        <AboutUs />
        <Location />
        <Leadership />
        <NextSteps />
      </main>
      <Footer />
    </>
  );
}