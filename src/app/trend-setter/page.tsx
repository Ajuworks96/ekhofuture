"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const COLLECTIONS = [
  { name: "Monochrome Vest", category: "Apparel", image: "https://images.unsplash.com/photo-1539109132335-34a91be0d59b?w=800&q=80" },
  { name: "Bauhaus Coat", category: "Outerwear", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80" },
  { name: "Minimalist Tote", category: "Accessories", image: "https://images.unsplash.com/photo-1584917469275-3adcb8b39eda?w=800&q=80" },
  { name: "Linear Sneakers", category: "Footwear", image: "https://images.unsplash.com/photo-1560769129-d53b47975166?w=800&q=80" },
];

const LOOKBOOK = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
];

export default function TrendSetterPage() {
  return (
    <main className="bg-white min-h-screen font-poppins selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1600&q=90" 
            alt="Trend Setter Hero" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-6xl md:text-[10rem] font-black uppercase"
          >
            Trend <br className="md:hidden" /> Setter
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-sm md:text-lg uppercase tracking-[0.5em] font-light"
          >
            Luxury redefined through minimalism
          </motion.p>
        </div>

        {/* Vertical Socials/Side Label */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 items-center">
            <div className="w-[1px] h-32 bg-white/30" />
            <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.8em] text-white/60 font-medium">Summer Collection 2026</span>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-24 py-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
                Architectural <br /> 
                <span className="font-black italic uppercase">Precision.</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
                Trend Setter operates at the intersection of modern architecture and wearable art. Every piece is a study in geometry, fabric integrity, and monochrome balance.
            </p>
            <div className="flex items-center gap-6">
                 <div className="size-16 rounded-full border border-black/10 flex items-center justify-center">
                     <span className="text-[10px] font-black uppercase">TS</span>
                 </div>
                 <span className="text-xs uppercase tracking-widest font-black">Est. 2024</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/3] bg-gray-50 overflow-hidden"
          >
             <Image 
               src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80" 
               alt="Minimalist Design" 
               fill 
               className="object-cover grayscale"
             />
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="px-6 md:px-24 py-32 bg-[#F9F9F9]">
        <div className="mb-20 text-center space-y-4">
             <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">Featured <span className="font-light not-italic">Items</span></h2>
             <div className="w-12 h-1 bg-black mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
           {COLLECTIONS.map((item, idx) => (
             <motion.div
               key={item.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group cursor-pointer bg-white p-4"
             >
               <div className="relative aspect-[3/4] overflow-hidden mb-6">
                 <Image 
                   src={item.image} 
                   alt={item.name} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/80 backdrop-blur-sm text-white flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest">Select Size</span>
                      <ShoppingBag className="w-4 h-4" />
                 </div>
               </div>
               <div className="text-center space-y-1">
                 <h3 className="text-sm font-black uppercase tracking-widest">{item.name}</h3>
                 <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">{item.category}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Lookbook */}
      <section className="py-20 md:py-40">
        <div className="px-6 md:px-24 mb-20 flex justify-between items-end">
             <div className="space-y-4">
               <h2 className="text-4xl md:text-6xl font-black uppercase italic">Lookbook</h2>
               <p className="text-xs uppercase tracking-[0.4em] font-medium text-gray-400">Vol. 04 / Linear Motion</p>
             </div>
             <ArrowRight className="w-10 h-10 text-gray-200" />
        </div>

        <div className="flex overflow-hidden gap-4 md:gap-8 px-6 md:px-24">
            {LOOKBOOK.map((img, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex-none w-[70vw] md:w-[30vw] aspect-[2/3] relative overflow-hidden group"
                >
                    <Image 
                        src={img} 
                        alt="Lookbook" 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                </motion.div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-24 py-40 border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
                Lead The <br /> Movement.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <button className="bg-black text-white px-14 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-gray-800 transition-all flex items-center gap-4">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1">
                    Book Private Showing
                </Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
