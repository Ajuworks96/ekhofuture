"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { LOGO_URL, MENU_LOGO_URL } from "../constants/data";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const groupedServices = [
    {
      category: "Outdoor Clothings",
      items: ["Old School", "Trend Setter"]
    },
    {
      category: "Life Care",
      items: ["Lubnas Dental Clinic", "Hopeful Steps"]
    },
    {
      category: "Smart Kitchen",
      items: ["Compliment", "Pots And Pan"]
    },
    {
      category: "Single Categories",
      items: ["Builders & Realtors", "Pure Flow"]
    },
    {
      category: "Ekho Digix",
      items: ["Agency", "Ekho Skillbyte Academy"]
    }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`menu fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-xl py-3 border-b border-white/5" : "bg-transparent py-6"
        }`}
      >
        <div className="flex items-center justify-between px-8 md:px-16 max-w-[1920px] mx-auto">
          <Link href="/" className="group flex items-center">
             <Image 
               src={LOGO_URL} 
               alt="Ekho Future Logo" 
               width={160} 
               height={50}
               className="object-contain mix-blend-lighten transition-all duration-700 group-hover:scale-105 group-hover:brightness-125" 
               style={{ filter: "brightness(1.2)" }}
             />
          </Link>
          
          <div className="flex items-center">
            <button 
              onClick={() => setIsOpen(true)}
              className="text-white flex items-center space-x-5 group relative"
            >
              <span className="text-[10px] tracking-[0.6em] font-black uppercase group-hover:text-yellow-400 transition-colors hidden sm:inline-block">MENU</span>
              <div className="flex flex-col space-y-2 w-10 overflow-hidden">
                <motion.span 
                  animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                  className="h-[1.5px] bg-white w-full transition-all duration-500 group-hover:bg-yellow-400" 
                />
                <motion.span 
                  animate={isOpen ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
                  className="h-[1.5px] bg-white w-full transition-all duration-500 group-hover:bg-yellow-400" 
                />
                <motion.span 
                  animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                  className="h-[1.5px] bg-white w-full transition-all duration-500 group-hover:bg-yellow-400" 
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-black overflow-hidden flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-[30px] md:px-[80px] py-8 relative z-10">
              <div className="flex items-center">
                 <span className="text-white text-2xl font-bold tracking-tighter">EF</span>
              </div>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setShowServices(false);
                }}
                className="text-white flex items-center space-x-3 group"
              >
                <span className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">Close</span>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex h-full w-full relative z-10 px-[30px] md:px-[80px]">
              {/* Left Panel: Main Menu */}
              <div className="flex flex-col justify-center w-full lg:w-1/2">
                <nav className="flex flex-col space-y-4 md:space-y-6">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Product", href: "/product" },
                    { name: "Services", href: "#" },
                    { name: "Contact", href: "/contact" }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * idx + 0.2 }}
                    >
                      {item.name === "Services" ? (
                        <button
                          onMouseEnter={() => setShowServices(true)}
                          onClick={() => setShowServices(!showServices)}
                          className={`group text-3xl md:text-4xl lg:text-5xl font-semibold transition-all duration-300 flex items-center gap-4 w-fit ${
                            showServices ? "text-white opacity-100" : "text-white opacity-60 hover:opacity-100"
                          }`}
                        >
                          {item.name}
                          <span className={`text-sm md:text-xl font-light transform transition-transform ${showServices ? "rotate-90 translate-x-2" : ""}`}>&gt;</span>
                        </button>
                      ) : (
                        <Link 
                          href={item.href}
                          onMouseEnter={() => setShowServices(false)}
                          onClick={() => setIsOpen(false)}
                          className="group text-white text-3xl md:text-4xl lg:text-5xl font-semibold hover:opacity-100 opacity-60 transition-all duration-300 flex items-center gap-4 w-fit"
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Right Panel: Grouped Services Submenu */}
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="hidden lg:flex flex-col justify-center w-1/2 border-l border-white/10 pl-20 overflow-y-auto py-20 scrollbar-hide"
                  >
                    <div className="grid grid-cols-1 gap-12">
                      {groupedServices.map((group, idx) => (
                        <motion.div 
                          key={group.category}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                          className="space-y-6"
                        >
                          <h4 className="text-white text-xs font-black uppercase tracking-[0.4em] opacity-30">{group.category}</h4>
                          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                            {group.items.map(item => (
                              <Link 
                                key={item} 
                                href="#" 
                                className="group/item flex items-center gap-3 text-white/40 hover:text-white transition-all duration-300 text-base md:text-lg font-medium py-1"
                              >
                                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-500" />
                                <span className="group-hover/item:translate-x-1 transition-transform duration-500 whitespace-nowrap">{item}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
