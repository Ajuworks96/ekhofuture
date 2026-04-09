"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer, WhatsAppButton } from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Contact Info */}
            <div className="space-y-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                  Get in <br /> <span className="text-yellow-400">Touch</span>
                </h1>
                <p className="text-slate-400 text-xl font-medium uppercase tracking-[0.2em]">We are ready for the future</p>
              </motion.div>

              <div className="space-y-10">
                {[
                  { icon: Phone, label: "Call Us", val: "+91 000 000 0000" },
                  { icon: Mail, label: "Email Us", val: "hello@ekhofutur.com" },
                  { icon: MapPin, label: "Visit Us", val: "Industrial Hub, Kerala, India" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="p-4 bg-black text-white rounded-2xl group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-black text-2xl font-black uppercase italic">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black p-12 md:p-16 rounded-[4rem] shadow-2xl"
            >
              <form className="space-y-8">
                <div className="space-y-4">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] ml-6">Your Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white outline-none focus:border-yellow-400 transition-colors" type="text" placeholder="John Doe" />
                </div>
                <div className="space-y-4">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] ml-6">Your Email</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white outline-none focus:border-yellow-400 transition-colors" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-4">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] ml-6">Your Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-6 px-8 text-white outline-none focus:border-yellow-400 transition-colors" placeholder="How can we help?" />
                </div>
                <button className="w-full bg-yellow-400 text-black py-6 rounded-full font-black uppercase tracking-[0.4em] text-xs hover:bg-yellow-300 transition-all hover:scale-[1.02] shadow-xl">
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
