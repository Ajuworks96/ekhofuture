"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "../constants/data";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 md:py-40 bg-[#f9f9f9] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
           <motion.h4 
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
             className="text-black/30 font-black uppercase tracking-[0.5em] text-xs"
           >
             Reviews
           </motion.h4>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             className="text-5xl md:text-7xl font-black uppercase text-black tracking-tighter"
           >
             Trust from <br/>
             <span className="italic">Global Partners</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white border border-black/5 rounded-[3rem] p-12 relative group shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mb-8">
                <Quote className="w-8 h-8 text-yellow-500 fill-current" />
              </div>
              <p className="text-xl md:text-2xl font-bold text-black/70 leading-relaxed mb-10 tracking-tight italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-black/5 pt-8">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-black uppercase text-xs">
                  {t.name[0]}
                </div>
                <div>
                  <h5 className="text-black font-black uppercase text-sm tracking-widest">{t.name}</h5>
                  <p className="text-black/30 font-bold uppercase text-[10px] tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <section className="py-24 md:py-48 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h4 className="text-white/30 font-black uppercase tracking-[0.5em] text-xs">Get in Touch</h4>
              <h2 className="text-6xl md:text-[8rem] font-black uppercase text-white leading-[0.85] tracking-tighter">
                Start a<br/><span className="italic">Project</span>
              </h2>
            </div>
            <p className="text-white/40 text-2xl font-bold max-w-md tracking-tight">
              We're ready to bring your vision to life. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col gap-6">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-400 transition-all">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse group-hover:bg-black" />
                  </div>
                  <span className="text-white/60 font-black tracking-widest uppercase text-xs group-hover:text-white transition-colors">hello@ekhofutur.com</span>
               </div>
            </div>
          </div>

          <form className="bg-[#050505] p-10 md:p-20 rounded-[4rem] border border-white/5 space-y-10 shadow-2xl">
            <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b-2 border-white/10 py-6 focus:outline-none focus:border-yellow-400 transition-all text-xs font-black tracking-widest text-white uppercase placeholder:text-white/10" />
            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b-2 border-white/10 py-6 focus:outline-none focus:border-yellow-400 transition-all text-xs font-black tracking-widest text-white uppercase placeholder:text-white/10" />
            <textarea rows={4} placeholder="SERVICE DESCRIPTION" className="w-full bg-transparent border-b-2 border-white/10 py-6 focus:outline-none focus:border-yellow-400 transition-all text-xs font-black tracking-widest text-white uppercase placeholder:text-white/10 resize-none" />
            <button className="w-full py-8 bg-white text-black font-black uppercase tracking-[0.3em] rounded-full hover:bg-yellow-400 transition-all text-sm shadow-[0_20px_50px_rgba(255,255,255,0.05)]">
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
