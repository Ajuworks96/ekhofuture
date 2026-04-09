"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CREATIONS } from "../constants/data";

export function LatestCreations() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 bg-white font-poppins">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tighter"
          >
            Our Latest <span className="relative inline-block px-1">
              <span className="relative z-10 italic">Creations</span>
              <div className="absolute left-0 bottom-1 w-full h-[60%] bg-yellow-400 z-0" />
            </span>
          </motion.h2>
          <p className="text-black/40 max-w-lg mx-auto italic font-bold text-lg md:text-xl">
            A visual collection of our most recent works - each piece crafted with intention, emotion, and style.
          </p>
        </div>

        {/* Dynamic Expanding Gallery - Matching HTML Logic */}
        <div className="hidden md:flex items-center gap-2 h-[400px] w-full max-w-4xl mx-auto overflow-hidden mt-10">
          {CREATIONS.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-[100%] shadow-lg"
            >
              <Image 
                src={src} 
                alt={`Creation ${idx}`} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {CREATIONS.map((src, idx) => (
            <div key={idx} className="min-w-[280px] h-[400px] rounded-[2.5rem] overflow-hidden shrink-0 shadow-xl border border-black/5">
              <Image src={src} alt={`Creation ${idx}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
