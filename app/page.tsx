"use strict";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import StickyCall from "@/components/StickyCall";
import MouseGlow from "@/components/MouseGlow";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloating />
      <StickyCall />
    </main>
  );
}
