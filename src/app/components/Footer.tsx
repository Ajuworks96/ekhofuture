"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { LOGO_URL } from "../constants/data";

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 group"
    >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none whitespace-nowrap">
            Chat with us
        </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-white pt-24 font-poppins bg-gradient-to-r from-black via-[#1F2A44] to-[#4682B4] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 pb-20">
        
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-8">
          <Link href="/" className="inline-block relative w-48 h-12">
            <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924" fill="white"></path>
              <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </Link>
          <p className="text-lg/relaxed font-medium text-white/70 italic max-w-sm">
            Ekho Future is your trusted partner across multiple industries — from fashion and dental care to IT solutions, EV charging, and sustainable living products.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col lg:items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase tracking-widest text-lg mb-8 italic text-yellow-400 underline decoration-yellow-400/20 underline-offset-8">Our Services</h2>
            <div className="flex flex-col space-y-4">
              {["Fashion Boutiques", "Dental Studio", "IT Solutions", "EV Charging Stations", "Landscape Design"].map(service => (
                <Link key={service} href="#" className="text-white/40 hover:text-white transition-all font-bold uppercase text-[10px] tracking-widest italic group flex items-center gap-2">
                  <div className="w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-4" />
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="font-black uppercase tracking-widest text-lg mb-8 italic text-yellow-400 underline decoration-yellow-400/20 underline-offset-8">Stay Connected</h2>
          <div className="space-y-6 max-w-sm">
            <p className="text-white/40 font-bold italic text-lg leading-relaxed">Get the latest updates on our services, exclusive offers, and industry insights.</p>
            <div className="flex items-center gap-2 p-2 rounded-full bg-white/5 border border-white/10 group focus-within:border-yellow-400 transition-colors">
              <input 
                className="bg-transparent placeholder-white/20 text-white outline-none w-full py-2 px-6 font-bold text-sm" 
                placeholder="Enter your email" 
                type="email" 
              />
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-yellow-300 transition-transform hover:scale-105 shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
            Copyright 2025 © <span className="text-yellow-400 italic">Ekho Future</span> All Rights Reserved.
        </p>
        <div className="flex gap-8">
            {["Privacy", "Terms", "Sitemap"].map(link => (
                <Link key={link} href="#" className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">{link}</Link>
            ))}
        </div>
      </div>
    </footer>
  );
}
