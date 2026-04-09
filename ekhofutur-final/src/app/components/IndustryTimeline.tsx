"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { INDUSTRY_TIMELINE } from "../constants/data";

export function IndustryTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.65, 0, 0.35, 1] as any }
    }
  };

  return (
    <section className="relative w-full overflow-clip py-32 bg-white font-poppins">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {INDUSTRY_TIMELINE.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className="relative pl-12 border-l-2 border-[#FFD700] pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFD700] border-4 border-white shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
              
              <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <h3 className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-8 tracking-tighter uppercase italic">
                  {item.title}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                   <div className="space-y-8">
                      <p className="text-gray-600 text-xl font-medium leading-relaxed italic">
                        {item.description}
                      </p>
                      <Link 
                        href={item.url}
                        className="inline-block px-10 py-4 bg-[#4682B4] text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300 shadow-xl shadow-[#4682B4]/20"
                      >
                        Visit Website
                      </Link>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                     {item.images.map((img, i) => (
                       <div key={i} className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg border border-white group/img">
                          <Image 
                            src={img} 
                            alt={item.title} 
                            fill 
                            className="object-cover grayscale group-hover/img:grayscale-0 transition-all duration-1000 group-hover/img:scale-110" 
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors" />
                       </div>
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
