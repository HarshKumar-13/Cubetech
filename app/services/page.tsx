"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Pause, Play, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// Strict Design System variables inherited from Navbar/Home
const dsContainer = "w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[64px]";
const dsSectionHeading = "text-[32px] md:text-[40px] xl:text-[48px] font-light text-slate-800 tracking-[0.1em] uppercase leading-tight";

export default function ServicesPage() {
  // 1. Services Carousel Data
  const servicesCarouselData = [
    {
      id: 0,
      titleHighlight: "Design",
      titlePrefix: "Planning & ",
      titleSuffix: " Services",
      description: "Transport planning, traffic engineering and infrastructure design services help assess project viability, reduce congestion and enhance user convenience on new and existing corridors. Concept development, traffic impact assessment and engineering design come together to create efficient, safe and future-ready highway solutions.",
      image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&q=80&w=1600"
    },
    {
      id: 1,
      titleHighlight: "Maintenance",
      titlePrefix: "Operations & ",
      titleSuffix: " Services",
      description: "For operating assets, the company provides maintenance strategies for highways, pavements and structures, along with road safety engineering and inspections. Specialised systems ensure optimised asset performance, reduced downtime and extended asset lifespan.",
      image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=1600"
    },
    {
      id: 2,
      titleHighlight: "Due Diligence",
      titlePrefix: "Advisory & ",
      titleSuffix: " Services",
      description: "Technical surveys, due diligence, lenders advisory and project management support investors, banks and developers throughout the transaction and execution cycle. Independent audits bring transparency and robust risk assessment.",
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1600"
    },
    {
      id: 3,
      titleHighlight: "R&D",
      titlePrefix: "Innovation & ",
      titleSuffix: " Services",
      description: "Through proprietary forecasting tools, advanced analytics, high-performance materials and asset management systems, the R&D team drives continuous improvement in highway performance and smarter capital allocation.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600"
    }
  ];

  const [activeService, setActiveService] = useState(0);
  const [isServicePaused, setIsServicePaused] = useState(false);

  // 5-6 Second Auto-Carousel Logic
  useEffect(() => {
    if (isServicePaused) return;
    const timer = setInterval(() => {
      setActiveService((current) => (current + 1) % servicesCarouselData.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isServicePaused, servicesCarouselData.length]);

  // 2. Know More Projects Data
  const projects = [
    {
      id: 1,
      title: "3 Days Traffic Count at Commercial Traffic Crossing (ETC)",
      description: "Transport operations and traffic engineering assessments play a critical role in predicting viability and demand forecasting on toll corridors.",
      image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "3 Days Traffic Count at Jalpaiguri Junction (NH-27 for 70 KM stretch)",
      description: "Through comprehensive toll auditing processes and infrastructure viability checks we ensure accuracy across multiple highway stretches.",
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // 3. Popular Searches Data
  const popularSearches = [
    "Transport planning and traffic engineering services",
    "Toll road performance optimisation in India",
    "BOT and annuity highways",
    "Smart tolling solutions",
    "Pavement condition assessment",
    "Predictive asset maintenance",
  ];

  // 4. Reports Data
  const reports = [
    { id: 1, title: "Tools Brochure", date: "Published March 2024", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Tools Brochure", date: "Published March 2024", image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Tools Brochure", date: "Published March 2024", image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* =========================================
          1. HERO SECTION
          ========================================= */}
      <section className="relative w-full h-[50vh] min-h-[500px] md:min-h-[600px] overflow-hidden flex items-end pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=2560" alt="Curved Forest Road Aerial" fill priority className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        <div className={`relative z-20 ${dsContainer}`}>
          <div className="flex flex-col items-start">
            <p className="text-[10px] md:text-[11px] text-white/80 tracking-[0.15em] uppercase mb-6 font-medium">
              HOME <span className="mx-3 opacity-50">/</span> CAPABILITIES & SOLUTIONS <span className="mx-3 opacity-50">/</span> <span className="text-white">SERVICES</span>
            </p>
            <h1 className="text-white text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-none font-light tracking-tight">
              Our <span className="font-bold italic">Services</span>
            </h1>
          </div>
        </div>
      </section>

      {/* =========================================
          2. INTRO QUOTE
          ========================================= */}
      <section className="w-full py-20 md:py-[100px] bg-white">
        <div className={dsContainer}>
          <ScrollReveal>
            <div className="border-l-[6px] border-[#63CA55] pl-6 md:pl-8 max-w-5xl">
              <p className="text-[22px] md:text-[30px] leading-[1.6] text-slate-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor faucibus ex sapien vitae.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          3. SERVICES AUTO-CAROUSEL (SPLIT LAYOUT)
          ========================================= */}
      <section className="relative w-full bg-white border-y border-slate-100 flex flex-col lg:flex-row min-h-[700px]">
        {/* Left Side: Absolute Image for Perfect Bleed */}
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-[400px] lg:h-full z-0">
          <AnimatePresence mode="wait">
            <motion.div key={activeService} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
              <Image src={servicesCarouselData[activeService].image} alt="Service" fill className="object-cover" priority />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Container (Matches Navbar alignment exactly) */}
        <div className={`relative z-10 ${dsContainer} h-full flex flex-col lg:flex-row items-stretch`}>
          {/* Spacer for Left Image */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto flex-shrink-0" />
          
          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pl-0 lg:pl-16 xl:pl-[90px] py-16 lg:py-24">
            
            <div className="flex items-center gap-4 mb-12 flex-shrink-0">
              <button onClick={() => setIsServicePaused(!isServicePaused)} className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors">
                {isServicePaused ? <Play className="w-3.5 h-3.5 fill-current ml-0.5" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
              </button>
              <div className="flex-1 max-w-[280px] flex gap-2">
                {servicesCarouselData.map((_, idx) => (
                  <div key={idx} className="h-[3px] flex-1 bg-slate-200 rounded-full overflow-hidden relative">
                    {activeService === idx && (
                      <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: isServicePaused ? 0 : 5.5, ease: "linear" }} className="absolute top-0 left-0 h-full bg-[#63CA55]" />
                    )}
                    {idx < activeService && <div className="absolute top-0 left-0 h-full w-full bg-[#63CA55]" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeService} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.5 }}>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">SERVICES OFFERED</p>
                  <h2 className="text-[40px] md:text-[52px] xl:text-[58px] font-light text-slate-900 leading-[1.05] tracking-tight mb-8">
                    {servicesCarouselData[activeService].titlePrefix}
                    <span className="font-bold italic text-[#63CA55]">{servicesCarouselData[activeService].titleHighlight}</span>
                    <br />{servicesCarouselData[activeService].titleSuffix}
                  </h2>
                  <p className="text-[16px] md:text-[18px] text-[#777777] leading-[1.8] max-w-[560px] mb-12">
                    {servicesCarouselData[activeService].description}
                  </p>
                  <button className="bg-[#63CA55] hover:bg-[#52B045] transition-colors duration-300 text-white text-[12px] md:text-[13px] font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-sm flex items-center gap-3 w-fit">
                    VIEW SERVICE <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. KNOW MORE (SPLIT LAYOUT)
          ========================================= */}
      <section className="relative w-full flex flex-col lg:flex-row min-h-[650px] border-b border-slate-100">
        {/* Left Side: Absolute Dark Background */}
        <div className="absolute top-0 left-0 w-full lg:w-[45%] h-[400px] lg:h-full z-0 bg-[#1a2420] overflow-hidden">
           <div className="absolute inset-0 opacity-10">
             <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600" alt="Texture" fill className="object-cover" />
           </div>
        </div>

        <div className={`relative z-10 ${dsContainer} h-full flex flex-col lg:flex-row items-stretch`}>
          {/* Left Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center pr-0 lg:pr-16 xl:pr-[90px] py-16 lg:py-24">
            <p className="text-[#63CA55] text-[16px] md:text-[18px] font-light mb-2 uppercase tracking-widest">
              KNOW MORE ABOUT
            </p>
            <h2 className="text-[40px] md:text-[48px] text-white font-medium leading-[1.1] mb-12">
              Planning & Design Services
            </h2>
            <div className="flex flex-col gap-6">
              {/* Only See All Projects logic implemented here as requested */}
              <Link href="#" className="text-white text-[13px] font-bold tracking-[0.15em] uppercase flex items-center gap-3 hover:text-[#63CA55] transition-colors w-fit group">
                SEE ALL PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Content (Projects Grid) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center pl-0 lg:pl-16 xl:pl-[90px] py-16 lg:py-24 bg-white">
            <div className="flex justify-between items-center mb-10">
              <div className="flex gap-2 w-32">
                <div className="h-[3px] flex-1 bg-[#63CA55] rounded-full" />
                <div className="h-[3px] flex-1 bg-slate-200 rounded-full" />
              </div>
              <div className="flex gap-3">
                <button className="text-slate-300 hover:text-[#63CA55] transition-colors"><ArrowLeft className="w-6 h-6 stroke-[1.5]" /></button>
                <button className="text-[#63CA55] hover:text-[#52B045] transition-colors"><ArrowRight className="w-6 h-6 stroke-[1.5]" /></button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="flex flex-col group cursor-pointer">
                  <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-20" />
                    <div className="absolute top-4 left-4 border border-white/50 text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
                      PROJECT
                    </div>
                  </div>
                  <h3 className="text-[17px] md:text-[19px] font-medium text-slate-900 leading-[1.3] mb-4 group-hover:text-[#63CA55] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-[1.7]">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. POPULAR SEARCHES (FADING MARQUEE)
          ========================================= */}
      <section className="w-full py-16 bg-white overflow-hidden">
        <div className={dsContainer}>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#63CA55] text-[12px] font-bold tracking-widest uppercase mb-8">
              POPULAR SEARCHES
            </h3>
            <div className="relative w-full flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] h-12">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                className="flex w-max items-center"
              >
                {[...popularSearches, ...popularSearches].map((search, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="text-slate-500 text-[14px] hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap px-8">
                      {search}
                    </span>
                    <div className="w-[1px] h-4 bg-slate-300" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. REPORTS SECTION
          ========================================= */}
      <section className="w-full py-16 bg-white">
        <div className={dsContainer}>
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-8 border-b-[3px] border-slate-100 pb-4 relative">
            <div className="absolute bottom-[-3px] left-0 w-[20%] h-[3px] bg-[#63CA55]" />
            <h2 className={dsSectionHeading}>REPORTS</h2>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button className="text-slate-300 hover:text-[#63CA55] transition-colors"><ArrowLeft className="w-6 h-6 stroke-[1.5]" /></button>
              <button className="text-[#63CA55] hover:text-[#52B045] transition-colors"><ArrowRight className="w-6 h-6 stroke-[1.5]" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8">
            {reports.map((report) => (
              <ScrollReveal key={report.id} delay={report.id * 0.1} className="relative aspect-[16/10] overflow-hidden group border border-slate-100">
                <Image src={report.image} alt={report.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-end">
                  <div className="flex flex-col">
                    <h4 className="text-white text-[15px] font-bold tracking-wide mb-1 leading-tight">{report.title}</h4>
                    <span className="text-white/80 text-[12px]">{report.date}</span>
                  </div>
                  <button className="bg-[#63CA55] hover:bg-[#52B045] transition-colors text-white text-[11px] font-bold tracking-widest px-4 py-2 flex items-center gap-2">
                     Download PDF
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          7. GALLERY SECTION (EQUAL WIDTH)
          ========================================= */}
      <section className="w-full py-16 bg-white">
        <div className={dsContainer}>
          <div className="flex justify-between items-end mb-8 border-b-[3px] border-slate-100 pb-4 relative">
            <div className="absolute bottom-[-3px] left-0 w-[20%] h-[3px] bg-[#63CA55]" />
            <h2 className={dsSectionHeading}>GALLERY</h2>
            <div className="flex gap-4">
              <button className="text-slate-300 hover:text-[#63CA55] transition-colors"><ArrowLeft className="w-6 h-6 stroke-[1.5]" /></button>
              <button className="text-[#63CA55] hover:text-[#52B045] transition-colors"><ArrowRight className="w-6 h-6 stroke-[1.5]" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 pt-8">
            <ScrollReveal className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden bg-slate-100">
              <Image src="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&q=80&w=800" alt="Gallery Image 1" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden bg-slate-100">
              <Image src="https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=800" alt="Gallery Image 2" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden bg-slate-100">
              <Image src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800" alt="Gallery Image 3" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
          8. GET IN TOUCH CTA BANNER
          ========================================= */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-end pb-16 md:pb-24 overflow-hidden mt-10">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2560" alt="Highway Top Down" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
        
        <div className={`relative z-20 ${dsContainer}`}>
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-[44px] md:text-[56px] lg:text-[72px] font-light text-white leading-none tracking-tight">
              Let&apos;s get in touch
            </h2>
            <button className="bg-[#63CA55] hover:bg-[#52B045] transition-colors duration-300 text-white text-[12px] md:text-[14px] font-bold tracking-[0.15em] uppercase px-10 md:px-12 py-4 md:py-5 rounded-sm">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}