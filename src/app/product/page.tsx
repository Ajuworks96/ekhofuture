"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppButton } from "../components/Footer";
import Image from "next/image";

const PRODUCTS = [
  { name: "Eco-Pure Water", category: "Wellness", img: "https://i.postimg.cc/SNkFyQgb/Whats-App-Image-2026-03-10-at-3-12-53-PM.jpg" },
  { name: "Pots & Pans Pro", category: "Kitchenware", img: "https://i.postimg.cc/xCw9qzHc/IMG-2050.avif" },
  { name: "EV Charge Pro", category: "Technology", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80" },
  { name: "Smart Scapes", category: "Landscaping", img: "https://i.postimg.cc/kXWypPgB/20260110-113349.avif" }
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[40vh] bg-black flex items-end pb-20 px-6 md:px-16 lg:px-24">
         <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80')] bg-cover bg-center" />
         <div className="relative z-10">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter"
            >
              Our <span className="text-yellow-400">Products</span>
            </motion.h1>
         </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRODUCTS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[3rem] aspect-[16/10] bg-gray-100"
              >
                 <Image 
                   src={p.img} 
                   alt={p.name} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute bottom-10 left-10 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-yellow-400 font-black uppercase tracking-widest text-xs mb-2">{p.category}</p>
                    <h2 className="text-white text-4xl font-black uppercase italic">{p.name}</h2>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
