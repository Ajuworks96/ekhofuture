"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppButton } from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { INDUSTRY_TIMELINE } from "../constants/data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[50vh] bg-[#111] overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 opacity-30">
            <Image 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
              alt="Services" 
              fill 
              className="object-cover"
            />
         </div>
         <div className="relative z-10 text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-6xl md:text-9xl font-black uppercase italic italic tracking-tighter"
            >
              Our <span className="text-yellow-400">Services</span>
            </motion.h1>
            <p className="text-white/60 tracking-[0.5em] font-black uppercase text-xs">Innovation across horizons</p>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 md:px-16 lg:px-24">
         <div className="max-w-7xl mx-auto space-y-32">
            {INDUSTRY_TIMELINE.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-20 items-center`}
              >
                 {/* Visuals */}
                 <div className="flex-1 w-full grid grid-cols-2 gap-4">
                    {service.images.slice(0, 4).map((img, i) => (
                      <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-2xl">
                         <Image 
                           src={img} 
                           alt={service.title} 
                           fill 
                           className="object-cover group-hover:scale-110 transition-transform duration-1000"
                         />
                      </div>
                    ))}
                 </div>

                 {/* Info */}
                 <div className="flex-1 space-y-8">
                    <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter italic">
                       {service.title}
                    </h2>
                    <div className="w-20 h-2 bg-yellow-400" />
                    <p className="text-slate-500 text-xl font-medium leading-relaxed italic">
                       {service.description}
                    </p>
                    <div className="pt-8">
                       <Link 
                         href={service.url}
                         className="inline-block px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-yellow-400 hover:text-black transition-all shadow-xl hover:scale-105"
                       >
                         Launch Project
                       </Link>
                    </div>
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
