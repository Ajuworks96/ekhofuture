"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Zap, 
  Cpu, 
  Settings, 
  Smartphone, 
  Wifi, 
  ArrowRight,
  ShieldCheck,
  Flame,
  ThermometerSnowflake
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const FEATURES = [
  { title: "AI Guided Cooking", desc: "Sensors that adjust temperature and timing automatically based on your recipe.", icon: <Cpu className="w-6 h-6" /> },
  { title: "Smart-Sync Hub", desc: "Control your entire kitchen ecosystem from a single intuitive touch panel.", icon: <Settings className="w-6 h-6" /> },
  { title: "Remote Access", desc: "Preheat your oven or check your fridge inventory from anywhere with the app.", icon: <Smartphone className="w-6 h-6" /> },
  { title: "Energy Efficient", desc: "Eco-optimized hardware that reduces power consumption by 40% annually.", icon: <Zap className="w-6 h-6" /> }
];

const PRODUCTS = [
  { name: "Nebula Oven", desc: "Self-cleaning convection oven with steam-injection technology.", image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&q=80" },
  { name: "Aero Induction", desc: "Rapid-heat surface with zone-free cooking precision.", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" },
  { name: "Glacier Fridge", desc: "Dynamic cooling with localized humidity control.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80" },
];

export default function ComplimentPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen font-poppins selection:bg-orange-500 selection:text-white pb-0">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80" 
            alt="Smart Kitchen" 
            fill 
            className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-24 w-full flex flex-col md:flex-row justify-between items-end pb-24 md:pb-40 gap-10">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-6 max-w-4xl"
           >
             <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
                <Wifi className="w-4 h-4" />
                Connectivity 4.0
             </div>
             <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase italic">
                Compli <br /> <span className="text-orange-500">Ment.</span>
             </h1>
             <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-2xl leading-relaxed italic">
                Redefining the culinary interface through automated precision and sleek design. The kitchen of the future is no longer a dream.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="flex flex-col items-center gap-6"
           >
                <div className="size-32 rounded-full border-2 border-orange-500/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 border-2 border-orange-500 rounded-full animate-[spin_5s_linear_infinite]" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }} />
                    <span className="text-xs font-black uppercase text-orange-500 tracking-[0.2em]">Explore</span>
                </div>
                <div className="w-[1px] h-32 bg-gradient-to-t from-orange-500 to-transparent" />
           </motion.div>
        </div>
      </section>

      {/* Stats/Highlight Bar */}
      <section className="px-6 md:px-24 py-16 bg-[#111] border-y border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
                { label: "Precision", val: "0.1°C", icon: <ThermometerSnowflake className="w-5 h-5" /> },
                { label: "Efficiency", val: "98%", icon: <Zap className="w-5 h-5" /> },
                { label: "Security", val: "Encrypted", icon: <ShieldCheck className="w-5 h-5" /> },
                { label: "Heating", val: "Instant", icon: <Flame className="w-5 h-5" /> }
            ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                    <div className="text-orange-500 opacity-60 mb-2">{stat.icon}</div>
                    <p className="text-3xl font-black text-white">{stat.val}</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-gray-500">{stat.label}</p>
                </div>
            ))}
      </section>

      {/* Tech Features */}
      <section className="px-6 md:px-24 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 order-2 lg:order-1">
                {FEATURES.map((feat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-10 bg-[#161616] rounded-[3rem] border border-white/5 hover:border-orange-500/30 transition-all duration-500 group"
                    >
                        <div className="size-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform">
                            {feat.icon}
                        </div>
                        <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-4">{feat.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-semibold">{feat.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-12 order-1 lg:order-2">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic leading-none tracking-tighter">Kitchen <br /> <span className="text-orange-500">Intelligence.</span></h2>
                    <div className="w-24 h-2 bg-orange-500" />
                </div>
                <p className="text-gray-400 text-xl font-medium leading-relaxed italic border-l-4 border-orange-500/20 pl-8">
                    Compliment is not just a brand; it&apos;s a lifestyle upgrade. We integrate high-conversion engineering with culinary passion to create appliances that think as fast as you cook.
                </p>
                <div className="flex gap-4">
                    <button className="bg-orange-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                        Launch Showroom
                    </button>
                    <button className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                        Tech Specs
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Product Showroom */}
      <section className="px-6 md:px-24 py-40 bg-[#050505] rounded-[5rem] mx-6 md:mx-24 mb-40 border border-white/5">
         <div className="text-center space-y-4 mb-24">
            <h2 className="text-4xl md:text-7xl font-black uppercase italic text-white tracking-tighter">The <span className="text-orange-500">2026</span> Lineup</h2>
            <p className="text-gray-500 uppercase tracking-[0.5em] font-black text-xs">Exclusivity in every atom</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PRODUCTS.map((prod, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                >
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden mb-8 border border-white/10">
                        <Image src={prod.image} alt={prod.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-2">Smart Series</span>
                            <div className="h-[1px] w-12 bg-orange-500" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">{prod.name}</h3>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed italic">{prod.desc}</p>
                    </div>
                </motion.div>
            ))}
         </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-24 py-40 text-center">
         <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-6xl md:text-[10rem] font-black uppercase italic leading-none text-white tracking-tighter">
                Cook <br /> <span className="text-orange-500">Differently.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <button className="bg-orange-500 text-white px-20 py-8 rounded-full font-black uppercase tracking-widest text-[14px] hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] transition-all">
                    Upgrade Your Home
                </button>
                <Link href="/contact" className="text-white font-black uppercase tracking-widest text-[14px] flex items-center gap-4 group">
                    Request Quote <ArrowRight className="w-6 h-6 text-orange-500 group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
