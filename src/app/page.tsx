import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EventsCarousel from "@/components/sections/EventsCarousel";
import ServiceTimes from "@/components/sections/ServiceTimes";
import Programs from "@/components/sections/Programs";
import NextSteps from "@/components/sections/NextSteps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-section font-bold mb-4">Around Freeway Church</h2>
              <p className="text-lg text-neutral-dark-gray max-w-2xl mx-auto">
                Stay connected with upcoming events, services, and opportunities to grow in your faith journey.
              </p>
            </div>
            <EventsCarousel />
          </div>
        </section>
        <ServiceTimes />
        <Programs />
        <NextSteps />
      </main>
      <Footer />
    </>
  );
}