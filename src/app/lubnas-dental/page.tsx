"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star, 
  Calendar,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Heart
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const SERVICES = [
  { title: "Dental Cleaning", desc: "Professional plaque removal and polishing for a healthy, bright smile.", icon: <CheckCircle className="w-6 h-6" /> },
  { title: "Root Canal", desc: "Expert treatment to save damaged teeth and eliminate persistent pain.", icon: <Stethoscope className="w-6 h-6" /> },
  { title: "Teeth Whitening", desc: "Advanced laser whitening for immediate, long-lasting results.", icon: <Star className="w-6 h-6" /> },
  { title: "Braces", desc: "Orthodontic solutions including modern invisible aligners.", icon: <ChevronRight className="w-6 h-6" /> },
  { title: "Implants", desc: "Permanent, natural-looking tooth replacement with precision surgery.", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Care Checkup", desc: "Routine diagnostics to prevent issues before they start.", icon: <Heart className="w-6 h-6" /> }
];

const TESTIMONIALS = [
  { name: "Sarah Johnson", text: "The best dental experience I've ever had. Professional staff and completely painless!", rating: 5 },
  { name: "Michael Chen", text: "Dr. Lubna and her team are amazing. They explained everything clearly and the results are perfect.", rating: 5 },
  { name: "Emma Wilson", text: "Highly recommend for anyone seeking high-quality dental care in a comfortable environment.", rating: 5 }
];

export default function DentalClinicPage() {
  return (
    <main className="bg-white min-h-screen font-poppins selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80" 
            alt="Dental Clinic" 
            fill 
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-24 flex flex-col items-start max-w-4xl gap-8">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-6"
           >
             <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                Trusted Dental Excellence
             </div>
             <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-tight">
                Lubnas <span className="text-blue-600">Dental</span> <br /> Clinic
             </h1>
             <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                Experience world-class dental care with a personal touch. We use advanced technology to restore your smile and confidence.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
           >
             <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3">
                Book Appointment <Calendar className="w-5 h-5" />
             </button>
             <button className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:border-blue-600 transition-all flex items-center justify-center gap-3">
                Call Now <Phone className="w-5 h-5" />
             </button>
           </motion.div>
        </div>

        {/* Floating Info */}
        <div className="absolute right-10 bottom-10 hidden lg:flex gap-4">
             {[
                 { label: "Emergency", value: "+91 98765 43210", icon: <Phone className="w-5 h-5" /> },
                 { label: "Hours", value: "9 AM - 8 PM", icon: <Clock className="w-5 h-5" /> }
             ].map((item, i) => (
                 <div key={i} className="bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-start gap-4">
                     <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">{item.icon}</div>
                     <div>
                         <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 leading-none mb-1">{item.label}</p>
                         <p className="text-sm font-bold text-slate-900">{item.value}</p>
                     </div>
                 </div>
             ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-24 py-32 bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
           >
              <Image 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" 
                alt="Modern Clinic" 
                fill 
                className="object-cover"
              />
           </motion.div>

           <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Patient-Centric <span className="text-blue-600 italic">Dental Hub.</span></h2>
                <div className="w-20 h-2 bg-blue-600 rounded-full" />
              </div>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium capitalize prose-blue">
                <p>Welcome to Lubnas Dental Clinic, where we combine healthcare excellence with modern hospitality. For over 15 years, our clinic has been a trusted name in advanced dentistry.</p>
                <p>Our expert team led by Dr. Lubna provides a wide range of specialized treatments, ensuring every patient receives a tailored recovery path in a sterile, comfortable, and pain-free environment.</p>
              </div>
              <ul className="grid grid-cols-2 gap-6">
                 {["Sterilized Tools", "Digital X-Rays", "Zero-Wait Policy", "Post-Op Gifting"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-black uppercase tracking-tighter text-xs text-slate-800">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        {item}
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-24 py-32">
        <div className="text-center space-y-4 mb-20">
             <h2 className="text-4xl md:text-6xl font-black text-slate-900">Our <span className="text-blue-600">Specializations</span></h2>
             <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {SERVICES.map((item, idx) => (
             <motion.div
               key={item.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group"
             >
               <div className="size-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  {item.icon}
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
               <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Doctor Section */}
      <section className="px-6 md:px-24 py-32 bg-blue-600 rounded-[4rem] mx-6 md:mx-24 my-20 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 size-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10 order-2 lg:order-1">
               <div className="space-y-2">
                 <p className="text-blue-100 font-black uppercase tracking-widest text-xs">Lead Specialist</p>
                 <h2 className="text-5xl md:text-7xl font-black">Dr. Lubna <br /> <span className="opacity-50">Siddiqui</span></h2>
               </div>
               <div className="space-y-6 text-xl text-blue-100 font-medium">
                  <p>MDS - Orthodontics & Dentofacial Orthopaedics, 15+ years experience. Passionate about transforming lives through perfect smiles.</p>
                  <div className="grid grid-cols-2 gap-8 pt-6">
                    <div>
                        <p className="text-4xl font-black">5000+</p>
                        <p className="text-xs uppercase font-black tracking-widest opacity-60">Happy Patients</p>
                    </div>
                    <div>
                        <p className="text-4xl font-black">12</p>
                        <p className="text-xs uppercase font-black tracking-widest opacity-60">Clinical Awards</p>
                    </div>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
               <div className="relative size-80 md:size-[500px] bg-white rounded-full overflow-hidden shadow-2xl border-[10px] border-white/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80" 
                    alt="Doctor" 
                    fill 
                    className="object-cover"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Appointment Form Section */}
      <section className="px-6 md:px-24 py-32 max-w-7xl mx-auto">
         <div className="bg-slate-50 rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-100">
            <div className="p-12 md:p-20 space-y-8 bg-blue-600 text-white">
                <h2 className="text-4xl md:text-6xl font-black leading-tight">Secure Your <br /> Visit Today.</h2>
                <p className="text-blue-100 font-medium text-lg">Leave your details and our smile coordinator will call you back within 3 hours.</p>
                <div className="space-y-6 pt-10">
                    <div className="flex items-center gap-6">
                        <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center text-white"><MapPin className="w-6 h-6" /></div>
                        <p className="font-bold">123 Health Ave, Medical City, India</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center text-white"><Phone className="w-6 h-6" /></div>
                        <p className="font-bold">+91 00000 00000</p>
                    </div>
                </div>
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:border-blue-600 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone</label>
                        <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:border-blue-600 transition-all font-medium" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Treatment</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:border-blue-600 transition-all font-medium appearance-none">
                            <option>Orthodontic Braces</option>
                            <option>Teeth Whitening</option>
                            <option>Dental Implant</option>
                            <option>Root Canal</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 pt-4">
                        <button className="w-full bg-blue-600 text-white font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-200">
                            Confirm Appointment
                        </button>
                    </div>
                </form>
            </div>
         </div>
      </section>

      <section className="px-6 md:px-24 py-10">
         <div className="h-96 w-full bg-slate-200 rounded-[3rem] overflow-hidden grayscale">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.1524316987!2d76.3116347!3d9.993448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514ab00001%3A0x6a0f0d1a1a1a1a1a!2sKochi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0" 
                allowFullScreen 
                loading="lazy"
            />
         </div>
      </section>

      <Footer />
    </main>
  );
}
