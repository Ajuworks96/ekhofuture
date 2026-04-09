"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppButton } from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0 opacity-40">
           <Image 
             src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" 
             alt="About Us" 
             fill 
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>
        
        <div className="relative z-10 text-center space-y-4 px-6 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-8xl font-black uppercase italic tracking-tighter"
          >
            About <span className="text-yellow-400">Ekho Futur</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest"
          >
            Diversified Excellence • Unified Vision
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase italic tracking-tighter leading-tight">
              Building the Future <br /> Across <span className="text-[#4682B4]">Industries</span>
            </h2>
            <div className="w-24 h-2 bg-yellow-400" />
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>Ekho Future is a visionary conglomerate dedicated to excellence across a diverse range of sectors. From fashion and healthcare to technology and sustainable energy, we bring a commitment to quality and innovation to everything we touch.</p>
              <p>Our journey began with a simple mission: to empower individuals and businesses to embrace the future with confidence. Today, we stand as a symbol of diversified growth, united by a singular focus on exceptional service and forward-thinking solutions.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=80" 
              alt="Office" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: "Innovation", desc: "Pushing boundaries with cutting-edge technology and creative thinking." },
                { title: "Quality", desc: "Setting the gold standard in every industry we operate in." },
                { title: "Integrity", desc: "Building trust through transparency and unwavering ethics." }
              ].map((val, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4 text-center md:text-left"
                >
                  <h3 className="text-3xl font-black uppercase italic text-yellow-400">{val.title}</h3>
                  <p className="text-white/40 text-lg font-medium">{val.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
