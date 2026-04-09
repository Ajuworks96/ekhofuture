"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  { title: "Diverse Business Portfolio", desc: "From fashion to technology, we deliver excellence across multiple industries.", icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" },
  { title: "Customer-Centered Solutions", desc: "Every service is tailored to meet your unique needs and exceed expectations.", icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" },
  { title: "Innovation Meets Tradition", desc: "Blending modern technology with timeless quality in everything we do.", icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" }
];

export function About() {
  return (
    <section className="w-full font-poppins text-white px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24" style={{ background: "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(70, 130, 180) 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-10 uppercase tracking-tighter"
          >
            About Ekho <span className="relative inline-block px-1">
              <span className="relative z-10 italic">Future</span>
              <div className="absolute left-0 bottom-1 w-full h-[60%] bg-yellow-500 z-0" />
            </span>
          </motion.h2>
          <p className="text-center text-slate-300 max-w-2xl text-xl italic font-medium leading-relaxed">
            A diverse collection of businesses united under one vision — delivering quality, innovation, and exceptional service across every industry we serve.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-24"
        >
          {FEATURES.map((f, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="space-y-6 group"
            >
              <div className="size-16 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl group-hover:bg-white/20 transition-all">
                <Image src={f.icon} alt={f.title} width={40} height={40} className="w-full h-auto" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase tracking-tighter">{f.title}</h3>
                <p className="text-lg text-slate-300 font-medium italic">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 1 */}
        <div className="mt-32 space-y-40">
           <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="flex-1 relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                 <Image src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80" alt="Businesses" fill className="object-cover" />
              </div>
              <div className="flex-1 space-y-8">
                 <h3 className="text-4xl font-black uppercase tracking-tighter">Explore Our Businesses</h3>
                 <p className="text-xl text-slate-200 font-medium italic leading-relaxed">Discover our diverse portfolio spanning fashion boutiques, dental care, IT solutions, EV charging stations, and more. Each venture is crafted to serve you better.</p>
              </div>
           </div>

           {/* Row 2 */}
           <div className="flex flex-col md:flex-row-reverse items-center gap-20">
              <div className="flex-1 relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                 <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Service" fill className="object-cover" />
              </div>
              <div className="flex-1 space-y-8">
                 <h3 className="text-4xl font-black uppercase tracking-tighter text-right">Experience Quality Service</h3>
                 <p className="text-xl text-slate-200 font-medium italic leading-relaxed text-right">Whether you're shopping for style, enhancing your smile, powering your vehicle, or upgrading your technology, we deliver excellence at every touchpoint.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
