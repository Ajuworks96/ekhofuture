"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "../constants/data";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-poppins">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1, x: direction > 0 ? "20%" : "-20%" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: direction > 0 ? "-20%" : "20%" }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-1/4 w-full h-full animate-liquid-right bg-blue-500/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-1/4 -right-1/4 w-full h-full animate-liquid-left bg-yellow-500/5 blur-[120px] rounded-full" />
          </div>

          <Image
            src={HERO_SLIDES[current].image}
            alt={HERO_SLIDES[current].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center z-40">
        <div className="px-16 max-w-4xl">
          <motion.div
            key={`cat-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 text-lg md:text-xl tracking-[0.3em] uppercase mb-4 font-light"
          >
            {HERO_SLIDES[current].category}
          </motion.div>

          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.1 }}
            className="text-white font-bold mb-6 leading-[1.1] tracking-[-0.02em] uppercase"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {HERO_SLIDES[current].title}
          </motion.h1>

          <motion.p
            key={`desc-${current}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl mb-8 font-light max-w-2xl leading-relaxed"
          >
            {HERO_SLIDES[current].description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white text-sm tracking-[0.4em] uppercase border-b-2 border-white pb-1 hover:pb-3 transition-all duration-300 font-light"
          >
            Explore More
          </motion.button>
        </div>
      </div>

      <div className="hidden md:block absolute top-1/2 right-12 transform -translate-y-1/2 text-white z-40">
        <div className="text-right">
          <motion.div 
            key={current}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl font-bold mb-2 font-mono"
          >
            0{current + 1}
          </motion.div>
          <div className="text-2xl font-light opacity-70">/07</div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-20 left-16 z-40">
        <div className="text-white/60 text-sm tracking-[0.5em] font-light uppercase">
          DIVERSIFIED EXCELLENCE • UNIFIED VISION
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 z-40">
        <button 
          onClick={prevSlide}
          className="text-white hover:scale-110 transition-transform duration-300"
        >
          <ChevronLeft className="w-12 h-12" strokeWidth={1.5} />
        </button>
        <div className="w-32 h-[2px] bg-white/30 overflow-hidden">
          <motion.div 
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${((current + 1) / HERO_SLIDES.length) * 100}%` }}
          />
        </div>
        <button 
          onClick={nextSlide}
          className="text-white hover:scale-110 transition-transform duration-300"
        >
          <ChevronRight className="w-12 h-12" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
