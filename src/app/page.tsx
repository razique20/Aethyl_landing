import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import Ecosystem from "@/components/Ecosystem";
import VoidSection from "@/components/VoidSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <UseCases />
        <VoidSection />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
