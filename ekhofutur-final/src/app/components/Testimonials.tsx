"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants/data";

export function Testimonials() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 bg-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase text-black tracking-tighter"
          >
            Hear what our <span className="relative inline-block px-1">
              <span className="relative z-10 italic">experiences.</span>
              <motion.div 
                initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                className="absolute left-0 bottom-1 h-[60%] bg-yellow-400 z-0" 
              />
            </span> say
          </motion.h2>
          <p className="text-black/40 text-xl font-bold max-w-2xl mx-auto italic">
            Real stories from real customers across our diverse range of services — from fashion and dental care to IT solutions and sustainable energy.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="relative p-10 rounded-[3rem] border border-yellow-400 bg-black/5 hover:bg-black/10 transition-all duration-500 overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 border border-yellow-400 opacity-0 blur-xl group-hover:opacity-20 transition-opacity animate-pulse pointer-events-none"></div>
              
              <div className="relative z-10 space-y-8">
                 <div className="flex items-center justify-between">
                    <div>
                       <p className="font-black text-black/30 uppercase text-[10px] tracking-widest">{t.role}</p>
                       <h5 className="text-black font-black uppercase text-lg tracking-tight italic">{t.name}</h5>
                    </div>
                    <div className="relative w-16 h-16 rounded-full border-2 border-yellow-400 overflow-hidden shadow-xl">
                       <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                 </div>

                 <p className="text-black/70 text-xl font-bold leading-relaxed italic border-l-4 border-yellow-400 pl-6 h-32 overflow-hidden">
                   "{t.text}"
                 </p>

                 <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-yellow-400 fill-yellow-400/20" />
                    <div className="flex gap-1">
                        {[1,2,3,4,5].map(star => (
                           <div key={star} className="w-2 h-2 rounded-full bg-yellow-400" />
                        ))}
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
