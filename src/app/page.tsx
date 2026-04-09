import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { LatestCreations } from "./components/LatestCreations";
import { IndustryTimeline } from "./components/IndustryTimeline";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Footer, WhatsAppButton } from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-white">
        <WhatWeDo />
        <LatestCreations />
        <IndustryTimeline />
        <About />
        <Testimonials />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
