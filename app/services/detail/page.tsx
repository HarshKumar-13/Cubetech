"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const dsContainer = "w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[64px]";
const dsSectionHeading = "text-[32px] md:text-[40px] xl:text-[48px] font-light text-slate-800 tracking-[0.1em] uppercase leading-tight";

export default function ServiceDetailPage() {
  const [selectedSubService, setSelectedSubService] = useState<number | null>(null);

  // Sub-Services Data for the Explore Grid
  const subServices = [
    { title: "Sub service - 1", image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=800" },
    { title: "Sub service - 2", image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&q=80&w=800" },
    { title: "Sub service - 3", image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800" },
    { title: "Sub service - 4", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" },
    { title: "Sub service - 5", image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=800" },
    { title: "Sub service - 6", image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&q=80&w=800" },
  ];

  // Related Projects Data
  const relatedProjects = [
    {
      id: 1,
      title: "Transport Planning & Traffic Engineering",
      description: "We deliver advanced travel demand estimation, traffic forecasts, traffic impact assessments, and seamless network planning to optimise congestion, improve mobility, and enhance road-user experience. With decades of technical expertise, our solutions help assess project viability and future-proof transportation networks.",
      image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Infrastructure Development & Project Management",
      description: "From concept to commissioning, we direct infrastructure surveys, engineering designs, and overall project execution. Our team ensures project performance via rigorous audits, compliance checks, and engineering excellence even across complex and large-scale highway systems.",
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedSubService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedSubService]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* =========================================
          1. HERO SECTION (Breadcrumbs Removed)
          ========================================= */}
      <section className="relative w-full h-[50vh] min-h-[500px] md:min-h-[600px] overflow-hidden flex items-end pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=2560" alt="Curved Forest Road Aerial" fill priority className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        
        <div className={`relative z-20 ${dsContainer}`}>
          <div className="flex flex-col items-start max-w-4xl">
            <h1 className="text-white text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] font-light tracking-widest uppercase">
              TRANSPORT PLANNING & TRAFFIC <br /> ENGINEERING PROJECTS
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
          3. SPLIT SECTION (Left Image Overlay, Right Text)
          ========================================= */}
      <section className="w-full pb-[120px] bg-white">
        <div className={dsContainer}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">
            
            {/* Left Image with Overlay Text */}
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px] overflow-hidden bg-slate-100">
              <Image src="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&q=80&w=1200" alt="Highway Planning" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent h-[60%]" />
              <h2 className="absolute top-12 left-10 md:left-12 text-white text-[36px] md:text-[48px] font-light leading-tight tracking-wide">
                PLANNING & <br />
                <span className="font-bold italic">DESIGN</span> SERVICES
              </h2>
            </div>

            {/* Right Text Content & Inline Image */}
            <div className="flex flex-col justify-center py-6">
              <p className="text-[#666666] text-[16px] leading-[1.8] mb-6">
                The overall Transport Planning & Traffic Engineering Projects support urban mobility planning by providing insights into toll booth efficiency, seasonal traffic variations, and congestion hotspots. The collected data will play a crucial role in enhancing traffic management, road infrastructure planning, and decongestion strategies, ultimately improving travel efficiency and road safety in the capital.
              </p>
              <p className="text-[#666666] text-[16px] leading-[1.8] mb-12">
                We deliver advanced travel demand estimation, traffic forecasts, traffic impact assessments, and seamless network planning to optimise congestion, improve mobility, and enhance road-user experience. With decades of technical expertise, our solutions help assess project viability and future-proof transportation networks.
              </p>
              
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100 border border-slate-200">
                <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200" alt="Road Planning Mockup" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. EXPLORE SUB-SERVICES GRID
          ========================================= */}
      <section className="w-full pb-[120px] bg-white">
        <div className={dsContainer}>
          
          <div className="flex justify-between items-end mb-12 border-b border-slate-100 pb-6">
            <h2 className={dsSectionHeading}>
              EXPLORE OUR <span className="font-bold italic text-[#63CA55]">PLANNING & DESIGN SERVICES</span>
            </h2>
            <div className="flex gap-4">
              <button className="text-slate-300 hover:text-[#63CA55] transition-colors"><ArrowLeft className="w-6 h-6 stroke-[1.5]" /></button>
              <button className="text-[#63CA55] hover:text-[#52B045] transition-colors"><ArrowRight className="w-6 h-6 stroke-[1.5]" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {subServices.map((sub, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div 
                  onClick={() => setSelectedSubService(idx)} 
                  className="group cursor-pointer relative w-full aspect-[16/10] overflow-hidden shadow-sm"
                >
                  <Image src={sub.image} alt={sub.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  <h4 className="absolute bottom-6 left-6 md:left-8 text-white text-[18px] md:text-[20px] font-medium tracking-wide">
                    {sub.title}
                  </h4>
                  {/* Subtle Learn More on hover */}
                  <span className="absolute bottom-7 right-8 text-white/0 text-[12px] font-bold tracking-widest uppercase border-b border-white/0 transition-all duration-300 group-hover:text-white group-hover:border-white">
                    Learn More
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          5. RELATED PROJECTS GRID
          ========================================= */}
      <section className="w-full pb-[160px] bg-white">
        <div className={dsContainer}>
          
          <div className="flex justify-between items-end mb-12 border-b border-slate-100 pb-6">
            <h2 className={dsSectionHeading}>
              SEE RELATED <span className="font-bold italic text-[#63CA55]">PROJECTS</span>
            </h2>
            <div className="flex gap-4">
              <button className="text-slate-300 hover:text-[#63CA55] transition-colors"><ArrowLeft className="w-6 h-6 stroke-[1.5]" /></button>
              <button className="text-[#63CA55] hover:text-[#52B045] transition-colors"><ArrowRight className="w-6 h-6 stroke-[1.5]" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {relatedProjects.map((project, idx) => (
              <div key={project.id} className="group cursor-pointer flex flex-col h-full">
                
                {/* Image with bottom-right clip path */}
                <div className="relative w-full aspect-[16/10] mb-8 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%)] bg-slate-100">
                  <Image 
                    src={project.image} 
                    alt="Project Thumbnail" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  {idx === 0 && <div className="absolute inset-0 bg-[#d47b4a]/60 mix-blend-multiply" />}
                  {idx === 0 && <div className="absolute top-8 left-8 text-white text-[24px] font-medium tracking-wider">PROJECT 01</div>}
                </div>

                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3 className="text-[26px] md:text-[30px] font-medium text-slate-900 leading-[1.25] pr-4">
                    {project.title}
                  </h3>
                  <ArrowRight className="text-slate-300 w-6 h-6 stroke-[1.5] mt-1 shrink-0 group-hover:translate-x-1 group-hover:text-[#63CA55] transition-all duration-300" />
                </div>

                <div className="relative mb-10 flex-grow">
                  <p className="text-[16px] text-[#777777] leading-[1.8] pr-8">
                    {project.description}
                  </p>
                </div>

                {/* Individually Underlined Tags */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-auto">
                  <span className="text-[11px] text-[#999999] pb-1 border-b-[1.5px] border-[#63CA55]/50 tracking-[0.05em] uppercase hover:text-slate-700 transition-colors">
                    Traffic Forecasting
                  </span>
                  <span className="text-[11px] text-[#999999] pb-1 border-b-[1.5px] border-[#63CA55]/50 tracking-[0.05em] uppercase hover:text-slate-700 transition-colors">
                    Urban Transport Modelling
                  </span>
                  <span className="text-[11px] text-[#999999] pb-1 border-b-[1.5px] border-[#63CA55]/50 tracking-[0.05em] uppercase hover:text-slate-700 transition-colors">
                    Traffic Impact Assessment
                  </span>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          6. POP-UP MODAL (AnimatePresence)
          ========================================= */}
      <AnimatePresence>
        {selectedSubService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="relative w-full max-w-[900px] bg-white rounded-sm overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Image Header */}
              <div className="relative w-full h-[250px] md:h-[350px]">
                <Image src={subServices[selectedSubService].image} alt="Service Detail" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <h3 className="absolute bottom-8 left-10 text-white text-[28px] md:text-[36px] font-medium">
                  {subServices[selectedSubService].title}
                </h3>
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedSubService(null)} 
                  className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-10 md:p-14 flex flex-col gap-6 max-h-[50vh] overflow-y-auto">
                <p className="text-[#666666] leading-[1.8] text-[15px] md:text-[16px]">
                  The survey aimed to support urban mobility planning by providing insights into toll booth efficiency, seasonal traffic variations, and congestion hotspots. The collected data will play a crucial role in enhancing traffic management, road infrastructure planning, and decongestion strategies, ultimately improving travel efficiency and road safety in the capital.
                </p>
                <p className="text-[#666666] leading-[1.8] text-[15px] md:text-[16px]">
                  The survey aimed to support urban mobility planning by providing insights into toll booth efficiency, seasonal traffic variations, and congestion hotspots. The collected data will play a crucial role in enhancing traffic management, road infrastructure planning, and decongestion strategies, ultimately improving travel efficiency and road safety in the capital.
                </p>
                <p className="text-[#666666] leading-[1.8] text-[15px] md:text-[16px]">
                  The survey aimed to support urban mobility planning by providing insights into toll booth efficiency, seasonal traffic variations, and congestion hotspots. The collected data will play a crucial role in enhancing traffic management, road infrastructure planning, and decongestion strategies, ultimately improving travel efficiency and road safety in the capital.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}