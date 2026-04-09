"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AVATARS = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
];

export function WhatWeDo() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 bg-white text-black font-poppins">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 mt-20 max-w-6xl mx-auto">
        
        {/* Image Group */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative shadow-2xl rounded-2xl overflow-hidden shrink-0 group"
        >
          <Image 
            src="https://i.postimg.cc/rw7qbsxt/business-people-team-up-together-work.jpg"
            alt="Teamwork"
            width={400}
            height={500}
            className="w-full h-auto object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          
          {/* Floating Badge */}
          <div className="flex items-center gap-3 absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-2xl border border-black/5">
            <div className="flex -space-x-4 shrink-0">
              {AVATARS.map((src, i) => (
                <div key={i} className={`relative size-9 rounded-full border-[3px] border-white z-[${i+1}] overflow-hidden`}>
                  <Image src={src} alt="Client" fill className="object-cover" />
                </div>
              ))}
              <div className="flex items-center justify-center text-[10px] text-white size-9 rounded-full border-[3px] border-white bg-[#4682B4] z-[4] font-black">
                50+
              </div>
            </div>
            <p className="text-xs font-black text-slate-800 uppercase tracking-tighter">Join With Ekho Futur</p>
          </div>
        </motion.div>

        {/* Text Area */}
        <div className="max-w-md space-y-8">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl uppercase font-bold text-slate-700 tracking-[0.3em]"
            >
              What we <span className="relative inline-block px-1">
                <span className="relative z-10 italic">do?</span>
                <div className="absolute left-0 bottom-1 w-full h-[60%] bg-yellow-400 z-0" />
              </span>
            </motion.h1>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[#4682B4] to-[#DDD9FF]"></div>
          </div>

          <div className="space-y-6 text-slate-600 font-medium leading-relaxed italic">
            <p>Ekho Future helps you succeed across multiple industries by delivering innovative solutions tailored to your unique needs, from fashion retail to cutting-edge technology.</p>
            <p>Whether you're shopping for the latest styles at our dress boutique, enhancing smiles at our dental studio, charging your electric vehicle, or transforming your business with our IT solutions, we're here to serve you.</p>
            <p>From personalized customer care to forward-thinking services, Ekho Future empowers you to live better and embrace the future with confidence.</p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#4682B4] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:shadow-2xl transition-all shadow-[#4682B4]/20"
          >
            <span>Read more</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
