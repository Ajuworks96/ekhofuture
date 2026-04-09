"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CATEGORY_GROUPS = [
  {
    mainTitle: "Outdoor Clothings",
    subItems: [
      { 
        name: "Old School", 
        description: "Premium vintage-inspired apparel that blends classic aesthetics with modern durability for the adventurous soul.",
        images: [
          "https://i.postimg.cc/8P132KCT/Whats-App-Image-2026-03-10-at-3-12-54-PM.jpg",
          "https://i.postimg.cc/HnQg6V3n/Whats-App-Image-2026-03-10-at-3-12-52-PM.jpg",
          "https://i.postimg.cc/rw7qbsxt/business-people-team-up-together-work.jpg",
          "https://i.postimg.cc/SNkFyQgb/Whats-App-Image-2026-03-10-at-3-12-53-PM.jpg"
        ]
      },
      { 
        name: "Trend Setter", 
        description: "Stay ahead of the fashion curve with our latest high-performance outdoor wear designed for style and comfort.",
        images: [
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80",
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80"
        ]
      }
    ]
  },
  {
    mainTitle: "Life Care",
    subItems: [
      { 
        name: "Lubnas Dental Clinic", 
        description: "Comprehensive dental care utilizing state-of-the-art technology to ensure your smile remains bright and healthy.",
        images: [
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
          "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80",
          "https://images.unsplash.com/photo-1593060591039-26b218414995?w=400&q=80",
          "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80"
        ]
      },
      { 
        name: "Hopeful Steps", 
        description: "Professional medical and wellness services focused on providing compassionate care and innovative health solutions.",
        images: [
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
          "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80"
        ]
      }
    ]
  },
  {
    mainTitle: "Smart Kitchen",
    subItems: [
      { 
        name: "Compliment", 
        description: "Intelligent kitchen appliances that transform your cooking experience with automated precision and sleek design.",
        images: [
          "https://i.postimg.cc/xCw9qzHc/IMG-2050.avif",
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80",
          "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=400&q=80",
          "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?w=400&q=80"
        ]
      },
      { 
        name: "Pots And Pan", 
        description: "Exquisite cookware crafted for professional results in the comfort of your own home kitchen.",
        images: [
          "https://i.postimg.cc/xCw9qzHc/IMG-2050.avif",
          "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&q=80",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80"
        ]
      }
    ]
  },
  {
    mainTitle: "Single categories",
    subItems: [
      { 
        name: "Builders & Realtors", 
        description: "Building the foundations of the future with luxury residential and commercial property development projects.",
        images: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
          "https://images.unsplash.com/photo-1503387762-592dea58ef23?w=400&q=80",
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
          "https://images.unsplash.com/photo-1582408921715-18e7806367c2?w=400&q=80"
        ]
      },
      { 
        name: "Pure Flow", 
        description: "Advanced water purification systems delivering crystal clear, mineral-rich water for healthy living at every tap.",
        images: [
          "https://images.unsplash.com/photo-1559839734-2b71cc197ec2?w=400&q=80",
          "https://images.unsplash.com/photo-1582213726868-9a4f6cf12d8a?w=400&q=80",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
        ]
      }
    ]
  },
  {
    mainTitle: "Ekho Digix",
    subItems: [
      { 
        name: "Agency", 
        description: "Our full-service digital marketing agency specializes in growth strategies, branding, and high-conversion ad campaigns.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
        ]
      },
      { 
        name: "Ekho Skillbyte Academy", 
        description: "Empowering the next generation of tech leaders with industry-aligned digital skills and hands-on professional coaching.",
        images: [
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80",
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80"
        ]
      }
    ]
  }
];

export function Categories() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-32 bg-white font-poppins">
      <div className="max-w-7xl mx-auto space-y-32">
        {CATEGORY_GROUPS.map((group, gIdx) => (
          <div key={group.mainTitle} className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8"
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-black">
                {group.mainTitle}
              </h2>
              <div className="flex-1 h-[2px] bg-black/5" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {group.subItems.map((item, iIdx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: iIdx * 0.1 }}
                  className="bg-gray-50 p-8 md:p-12 rounded-[4rem] shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-700 group flex flex-col gap-10 border border-gray-100"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter group-hover:text-[#4682B4] transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <div className="w-16 h-1 bg-yellow-400 group-hover:w-full transition-all duration-700" />
                    </div>
                    {/* Description added below sub-heading */}
                    <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed italic max-w-sm">
                        {item.description}
                    </p>
                  </div>

                  {/* 2x2 Image Grid */}
                  <div className="grid grid-cols-2 gap-4 aspect-square">
                    {item.images.slice(0, 4).map((src, imgIdx) => (
                      <div 
                        key={imgIdx} 
                        className="relative overflow-hidden rounded-[2rem] shadow-lg group-hover:shadow-2xl transition-all duration-500"
                      >
                        <Image 
                          src={src} 
                          alt={`${item.name} ${imgIdx}`} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                        />
                      </div>
                    ))}
                  </div>

                  {/* CTA Button added at bottom */}
                  <div className="pt-4">
                    <button className="flex items-center gap-3 bg-black text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#4682B4] transition-all group/btn">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
