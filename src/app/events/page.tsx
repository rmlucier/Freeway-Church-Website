import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EventsCarousel from "@/components/sections/EventsCarousel";

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Around Freeway Church</h1>
          <EventsCarousel />
        </div>
      </main>
      <Footer />
    </>
  );
}