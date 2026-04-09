"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Flame, 
  Utensils, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  Activity,
  Award
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const COLLECTIONS = [
  { name: "Iron-Core Series", material: "Enamelled Cast Iron", img: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&q=80" },
  { name: "Titanium Fusion", material: "Multi-Ply Non-Stick", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80" },
  { name: "Chef Pro Set", material: "Full Stainless Steel", img: "https://images.unsplash.com/photo-1594830997433-a363d6b0416b?w=800&q=80" },
  { name: "Heritage Wok", material: "Hand-Hammered Carbon", img: "https://images.unsplash.com/photo-1514328537559-630d82990468?w=800&q=80" }
];

export default function PotsAndPanPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen font-poppins selection:bg-[#8B4513] selection:text-white pb-0">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80" 
            alt="Premium Cookware" 
            fill 
            className="object-cover opacity-20 grayscale brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/80 to-[#FAF9F6]" />
        </div>

        <div className="relative z-10 space-y-10 max-w-5xl">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-6"
           >
             <div className="inline-flex items-center gap-2 bg-[#8B4513]/10 text-[#8B4513] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <Award className="w-4 h-4" />
                Since 1924 • Craftsmanship Heritage
             </div>
             <h1 className="text-6xl md:text-[10rem] font-black text-slate-900 leading-none tracking-tighter uppercase italic">
                Pots & <br /> <span className="text-[#8B4513]">Pan.</span>
             </h1>
             <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed italic">
                The ultimate fusion of architectural engineering and culinary tradition. Precision instruments for the modern home chef.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex flex-col sm:flex-row gap-6 justify-center"
           >
             <button className="bg-slate-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#8B4513] transition-all flex items-center justify-center gap-4 group">
                Shop Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
             <button className="bg-white text-slate-900 border border-slate-200 px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:border-[#8B4513] transition-all">
                The Guide
             </button>
           </motion.div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="px-6 md:px-24 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl"
            >
                <Image src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&q=80" alt="Iron Pouring" fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-2xl font-black italic">1450°C</p>
                    <p className="text-white/60 text-xs uppercase font-bold tracking-widest">Liquid Metal Casting</p>
                </div>
            </motion.div>

            <div className="space-y-12">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">The Alchemy of <br /> <span className="text-[#8B4513]">Heat.</span></h2>
                    <div className="w-20 h-2 bg-[#8B4513]" />
                </div>
                <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium capitalize">
                    <p>Every piece in our collection is a result of obsessive iteration. We don&apos;t just manufacture cookware; we forge legacy assets that gain character with every meal.</p>
                    <p>Using a unique 9-layer composite technology, our pots and pans provide heat retention that matches cast iron with the responsiveness of pure copper.</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {[
                        { title: "Heat Shield", desc: "Patented base", icon: <Flame className="w-5 h-5" /> },
                        { title: "Scratch-Pro", desc: "Diamond plating", icon: <Sparkles className="w-5 h-5" /> },
                        { title: "Ergo-Hold", desc: "Solid steel handle", icon: <Activity className="w-5 h-5" /> },
                        { title: "Induction-Ready", desc: "Copper core", icon: <Utensils className="w-5 h-5" /> }
                    ].map((feat, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="size-10 rounded-xl bg-[#8B4513]/5 text-[#8B4513] flex items-center justify-center shrink-0">{feat.icon}</div>
                            <div>
                                <h4 className="font-black text-sm text-slate-900 uppercase tracking-tighter">{feat.title}</h4>
                                <p className="text-xs text-slate-400 font-bold">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="px-6 md:px-24 py-40 bg-slate-100 rounded-[5rem] mx-6 md:mx-24 mb-40 border border-slate-200">
         <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-900">Forged <br /> For <span className="text-[#8B4513]">Chefs.</span></h2>
            <button className="text-[#8B4513] flex items-center gap-3 font-black uppercase tracking-widest text-xs group">
                Full Catalogue <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {COLLECTIONS.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white p-6 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700"
                >
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8">
                        <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">{item.name}</h3>
                        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-1">{item.material}</p>
                    </div>
                </motion.div>
            ))}
         </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-24 py-40 text-center">
         <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-6xl md:text-9xl font-black uppercase italic leading-none tracking-tighter text-slate-900">
                Taste The <br /> <span className="text-[#8B4513]">Precision.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <button className="bg-[#8B4513] text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-[14px] hover:bg-slate-900 transition-all flex items-center gap-4">
                    Upgrade Your Kitchen <ArrowRight className="w-6 h-6" />
                </button>
                <div className="text-left">
                    <p className="font-black italic uppercase text-lg text-[#8B4513]">Lifetime Warranty</p>
                    <p className="text-xs uppercase font-black tracking-[0.2em] text-slate-400">Guaranteed for the next century</p>
                </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
