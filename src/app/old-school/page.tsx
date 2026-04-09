"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Play } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const COLLECTION = [
  { name: "Classic Denim Jacket", price: "$129", image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80" },
  { name: "Vintage Oversized Tee", price: "$45", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80" },
  { name: "Retro Corduroy Pants", price: "$89", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80" },
  { name: "90s Varsity Jacket", price: "$159", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
  "https://images.unsplash.com/photo-1479064566235-aa6742f5a69e?w=800&q=80",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
];

export default function OldSchoolPage() {
  return (
    <main className="bg-[#0F0F0F] min-h-screen font-poppins selection:bg-[#D4A373] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80" 
            alt="Old School Hero" 
            fill 
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0F0F]/50 to-[#0F0F0F]" />
        </div>

        <div className="relative z-10 text-center space-y-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl md:text-[12rem] font-black uppercase italic tracking-tighter text-[#E6D5B8] leading-none">
              Old <br className="md:hidden" /> School
            </h1>
            <p className="text-xl md:text-2xl text-[#D4A373] uppercase tracking-[0.4em] font-medium mt-4">
               Vintage clothing with timeless style
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10"
          >
            <button className="bg-[#D4A373] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-all duration-500 flex items-center gap-3 group">
                Shop Collection 
                <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="border border-white/20 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3 group">
                Watch Film
                <div className="size-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <Play className="w-3 h-3 fill-current" />
                </div>
            </button>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#D4A373]" />
            <span className="text-[10px] text-[#D4A373] uppercase tracking-[0.3em] font-bold">Scroll</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-24 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-[#E6D5B8]">Our Story</h2>
            <div className="w-24 h-2 bg-[#D4A373]" />
          </div>
          <p className="text-[#E6D5B8]/60 text-lg md:text-xl font-medium leading-relaxed italic">
            Founded in the heart of the vintage revival, Old School is more than just a brand—it&apos;s a tribute to the craftsmanship of the past. We source and curate pieces that tell a story, blending the raw edges of history with the sophistication of modern life.
          </p>
          <p className="text-[#E6D5B8]/60 text-lg md:text-xl font-medium leading-relaxed italic">
            Every stitch, every fade, and every silhouette is chosen to celebrate timelessness. We don&apos;t just sell clothes; we provide a portal to an era where quality was paramount and style was eternal.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-1000 group"
        >
          <Image 
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80" 
            alt="Vintage Craft" 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-[#D4A373]/10 mix-blend-overlay" />
        </motion.div>
      </section>

      {/* Collection Grid */}
      <section className="px-6 md:px-24 py-32 bg-[#1A1613]">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-4">
             <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-[#E6D5B8]">Core <br /> Collection</h2>
             <p className="text-[#D4A373] uppercase tracking-[0.4em] text-sm font-bold">Fall / Winter 2026</p>
          </div>
          <button className="text-[#E6D5B8] flex items-center gap-4 group uppercase text-xs tracking-widest font-black">
                View All Items <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-[#D4A373]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {COLLECTION.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-[#0F0F0F]">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="size-12 rounded-full bg-[#D4A373] flex items-center justify-center text-black">
                        <ShoppingBag className="w-5 h-5" />
                    </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[#E6D5B8] font-black uppercase italic text-lg">{item.name}</h3>
                    <p className="text-[#D4A373] text-sm font-bold tracking-widest mt-1">AVAILABLE NOW</p>
                  </div>
                  <span className="text-[#E6D5B8] font-black text-xl">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 md:px-24 py-32">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
           {GALLERY.map((img, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className={`relative rounded-3xl overflow-hidden group ${
                 idx === 1 || idx === 4 ? "aspect-[4/5] md:translate-y-12" : "aspect-square"
               }`}
             >
               <Image 
                 src={img} 
                 alt="Gallery Image" 
                 fill 
                 className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-black uppercase tracking-[0.5em] border border-white/40 px-6 py-3">View Look</span>
               </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-24 py-40 bg-[#D4A373] text-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-6xl md:text-9xl font-black uppercase italic leading-none tracking-tighter">
                Wear The <br /> Legacy.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <button className="bg-black text-white px-16 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center gap-4">
                    Visit Store <ArrowRight className="w-6 h-6" />
                </button>
                <div className="text-left">
                    <p className="font-black italic uppercase text-lg leading-tight">Ekho Futur presents</p>
                    <p className="font-medium opacity-70 tracking-widest text-xs uppercase">Old School Vintage Line</p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
