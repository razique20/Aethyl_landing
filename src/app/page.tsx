import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhatWeBuild from "@/components/WhatWeBuild";
import UseCases from "@/components/UseCases";
import Ecosystem from "@/components/Ecosystem";
import VoidSection from "@/components/VoidSection";
import Blogs from "@/components/Blogs";
import CTA from "@/components/CTA";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhatWeBuild />
        <UseCases />
        <Blogs />
        <VoidSection />
        <Ecosystem />
        <FAQ />
        <CTA />
        <QuoteForm />
        <Location />
      </main>
      <Footer />
    </>
  );
}
