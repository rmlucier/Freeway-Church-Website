import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServiceTimes from "@/components/sections/ServiceTimes";
import Programs from "@/components/sections/Programs";
import NextSteps from "@/components/sections/NextSteps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceTimes />
        <Programs />
        <NextSteps />
      </main>
      <Footer />
    </>
  );
}