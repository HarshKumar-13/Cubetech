"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Pause, Play } from "lucide-react";

const carouselData = [
  {
    id: 0,
    eyebrow: "SERVICES OFFERED",
    titlePrefix: "Planning & ",
    titleHighlight: "Design",
    titleSuffix: " Services",
    description: "Transport planning, traffic engineering and infrastructure design services help assess project viability, reduce congestion and enhance user convenience on new and existing corridors. Concept development, traffic impact assessment and engineering design come together to create efficient, safe and future-ready highway solutions.",
    image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 1,
    eyebrow: "SERVICES OFFERED",
    titlePrefix: "Operations & ",
    titleHighlight: "Maintenance",
    titleSuffix: " Services",
    description: "Transport planning, traffic engineering and infrastructure design services help assess project viability, reduce congestion and enhance user convenience on new and existing corridors. Concept development, traffic impact assessment and engineering design come together to create efficient, safe and future-ready highway solutions.",
    image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    eyebrow: "SERVICES OFFERED",
    titlePrefix: "Advisory & ",
    titleHighlight: "Due Diligence",
    titleSuffix: " Services",
    description: "Transport planning, traffic engineering and infrastructure design services help assess project viability, reduce congestion and enhance user convenience on new and existing corridors. Concept development, traffic impact assessment and engineering design come together to create efficient, safe and future-ready highway solutions.",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    eyebrow: "SERVICES OFFERED",
    titlePrefix: "Innovation & ",
    titleHighlight: "R&D",
    titleSuffix: " Services",
    description: "Transport planning, traffic engineering and infrastructure design services help assess project viability, reduce congestion and enhance user convenience on new and existing corridors. Concept development, traffic impact assessment and engineering design come together to create efficient, safe and future-ready highway solutions.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    eyebrow: "SERVICES OFFERED",
    titlePrefix: "Structural Audit ",
    titleHighlight: "",
    titleSuffix: "Services",
    description: "We carry out systematic audits of existing structures to assess their condition, integrity, and safety. These evaluations identify deficiencies, deterioration, and potential risks that could affect structural performance and service life - supported by clear recommendations for repair, retrofitting, or preventive...",
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselData.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="w-full bg-white flex flex-col lg:flex-row min-h-[600px] xl:min-h-[700px] border-t border-slate-100">
      
      {/* LEFT: Full Bleed Image */}
      <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={carouselData[activeIndex].image}
              alt={carouselData[activeIndex].titlePrefix}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT: Content & Navigation */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-0 bg-white">
        <div className="max-w-xl">
          
          {/* Top Controls */}
          <div className="flex items-center gap-4 mb-16">
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-300 transition-colors"
            >
              {isPaused ? <Play className="w-3 h-3 ml-0.5" /> : <Pause className="w-3 h-3" />}
            </button>
            
            <div className="flex items-center gap-2">
              {carouselData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPaused(true); // Pause when user manually clicks a segment
                  }}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    activeIndex === idx ? "bg-[#63CA55] w-12" : "bg-slate-200 w-8 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-6">
                  {carouselData[activeIndex].eyebrow}
                </p>
                
                <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-light text-slate-800 mb-8 leading-[1.1]">
                  {carouselData[activeIndex].titlePrefix}
                  {carouselData[activeIndex].titleHighlight && (
                    <span className="font-bold italic text-[#63CA55]">
                      {carouselData[activeIndex].titleHighlight}
                    </span>
                  )}
                  {carouselData[activeIndex].titleSuffix}
                </h3>
                
                <p className="text-[16px] text-slate-600 leading-relaxed mb-10">
                  {carouselData[activeIndex].description}
                </p>

                <button className="bg-[#63CA55] hover:bg-[#52B045] transition-colors duration-300 text-white text-[12px] font-bold tracking-[0.15em] uppercase px-8 py-3.5 flex items-center gap-3 rounded-sm w-fit">
                  VIEW SERVICE <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}