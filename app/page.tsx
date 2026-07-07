"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import FeatureCarousel from "@/components/FeatureCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Hexagon, Component, Leaf, Globe2, ShieldCheck, Zap, Factory, ArrowUp, ArrowRight, ArrowUpRight, ArrowLeft, Pause, Play, Award, Eye } from "lucide-react";

// Standardized Classes for the Design System
const dsContainer =
  "w-full max-w-[1600px] mx-auto pl-4 md:pl-8 lg:pl-12 xl:pl-[64px] pr-6 md:pr-12 lg:pr-16 xl:pr-[90px]";
const dsSectionHeading = "text-[32px] md:text-[40px] xl:text-[48px] font-light text-slate-800 tracking-[0.1em] uppercase leading-tight";

const splitCarouselData = [
  {
    id: 0,
    title: (
      <>
        AI-Driven Highway<br />
        Operations & Control
      </>
    ),
    description: "Cube Highways Technologies leverages real-time monitoring, advanced data analytics and custom-built AI applications to manage complex toll and highway operations from a central control centre. This technology-first approach improves safety, optimises traffic flow and boosts asset performance across geographically diverse corridors.",
    image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 1,
    title: (
      <>
        Smart Infrastructure<br />
        & Asset Management
      </>
    ),
    description: "We deploy state-of-the-art IoT sensors and predictive maintenance algorithms to extend the lifespan of critical highway infrastructure. Our data-driven approach minimizes downtime, optimizes repair schedules, and significantly reduces long-term operational costs across our entire network.",
    image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&q=80&w=1600"
  }
];

export default function Home() {
  const partnerLogos = [
    { name: "NEXCO", icon: Hexagon },
    { name: "IFC", icon: Globe2 },
    { name: "MITSUBISHI", icon: Building2 },
    { name: "I SQUARED", icon: Component },
    { name: "ECOBUILD", icon: Leaf },
    { name: "SECURA", icon: ShieldCheck },
    { name: "VOLT", icon: Zap },
    { name: "INDUSTRIES", icon: Factory },
  ];

  const [splitActiveIndex, setSplitActiveIndex] = useState(0);
  const [isSplitPaused, setIsSplitPaused] = useState(false);

  useEffect(() => {
    if (isSplitPaused) return;
    const timer = setInterval(() => {
      setSplitActiveIndex((current) => (current + 1) % splitCarouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isSplitPaused]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section
  className="relative w-full h-screen min-h-[750px] md:min-h-[850px] overflow-hidden flex items-center"
  style={{
    clipPath: "polygon(0 0, 100% 0, 100% 0, 100% calc(100% - 70px), calc(100% - 70px) 100%, 0 100%)",
  }}
>
        <div className="absolute inset-0 w-full h-full z-0">
          <Image src="/images/banner.png" alt="Aerial view" fill priority className="object-cover object-center" sizes="100vw"/>
        </div>
        <div className="absolute inset-0 z-10 bg-black/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-[90%] md:w-[80%]" />
        
        <div className={`relative z-20 mt-32 ${dsContainer}`}>
          <div className="max-w-4xl flex flex-col items-start">
            <h2 className="text-white text-[2.625rem] md:text-[4.375rem] lg:text-[4.75rem] leading-none font-light tracking-tight mb-4 whitespace-nowrap">
  WE&apos;RE IN <span className="font-medium italic">BUSINESS</span>
</h2>

<h2 className="text-white text-[2.625rem] md:text-[4.375rem] lg:text-[4.75rem] leading-none font-light tracking-tight mb-8 whitespace-nowrap">
  TO HELP OUR <span className="font-medium italic">PLANET</span>
</h2>
            <p className="text-white/95 text-base md:text-xl font-light tracking-wide mb-12 max-w-2xl">
              We provide consulting, planning and engineering design services.
            </p>
            <button className="bg-[#63CA55] hover:bg-[#52B045] transition-colors duration-300 text-white text-[14px] md:text-[16px] font-semibold tracking-[0.2em] uppercase px-10 md:px-12 py-4 md:py-5">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTRO QUOTE */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className={dsContainer}>
          <ScrollReveal>
            <div className="border-l-[6px] border-[#63CA55] pl-6 md:pl-8 max-w-5xl">
              <p className="text-[22px] md:text-[32px] leading-relaxed text-slate-800 font-light">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor faucibus ex sapien vitae.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. OUR PARTNERS (Auto-Marquee using Framer Motion) */}
      <section className="w-full pb-20 md:pb-24 bg-white overflow-hidden">
        <div className={`${dsContainer} flex flex-col xl:flex-row items-start xl:items-center gap-8 xl:gap-12`}>
          <ScrollReveal className="shrink-0 z-10 bg-white pr-4">
            <h3 className={dsSectionHeading}>
              OUR <span className="text-[#63CA55] font-bold italic">PARTNERS</span>
            </h3>
          </ScrollReveal>
          
          <div className="flex-1 w-full overflow-hidden relative h-24 flex items-center before:absolute before:left-0 before:w-16 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:w-16 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              className="flex w-max items-center"
            >
              {[...partnerLogos, ...partnerLogos].map((Logo, idx) => (
                <div key={idx} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer mx-10">
                  <Logo.icon className="w-10 h-10 text-slate-800 stroke-[1.5]" />
                  <span className="font-bold text-lg text-slate-800 tracking-wider whitespace-nowrap">{Logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SUCCESS METRICS */}
      <section className="w-full pb-32 lg:pb-40 bg-white">
        <div className={dsContainer}>
          <ScrollReveal>
            <h3 className={`${dsSectionHeading} mb-12 md:mb-16`}>
              OUR SUCCESS METRICS
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-stretch">
            
            <ScrollReveal delay={0.1} className="flex flex-col h-full border-b border-[#63CA55] pb-6">
              <p className="text-[3rem] md:text-[4rem] font-light text-slate-800 leading-none mb-10">27</p>
              <p className="text-[16px] md:text-[18px] font-medium text-slate-600 leading-relaxed mt-auto">
                Road assets across India, representing one of the country&apos;s most diversified highway portfolios with BOT and annuity projects.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="flex flex-col h-full border-b border-[#63CA55] pb-6">
              <div className="flex items-start gap-2 mb-10">
                <p className="text-[3rem] md:text-[4rem] font-light text-slate-800 leading-none">8,819</p>
                <ArrowUp className="w-8 h-8 text-[#63CA55] mt-1 md:mt-2 stroke-[2.5]" />
              </div>
              <p className="text-[16px] md:text-[18px] font-medium text-slate-600 leading-relaxed mt-auto">
                Lane kilometres of highways and expressways connecting key manufacturing hubs, cities and consumption centres.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="flex flex-col h-full border-b border-[#63CA55] pb-6">
              <div className="flex items-start gap-2 mb-10">
                <p className="text-[3rem] md:text-[4rem] font-light text-slate-800 leading-none">32,266</p>
                <ArrowUp className="w-8 h-8 text-[#63CA55] mt-1 md:mt-2 stroke-[2.5]" />
              </div>
              <p className="text-[16px] md:text-[18px] font-medium text-slate-600 leading-relaxed mt-auto">
                INR Crores AUM as of 31 March 2025, with a clear pathway to INR 36,451 Crores through recent acquisitions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="h-full">
              <div className="bg-[#63CA55] p-8 md:p-10 h-full flex flex-col shadow-sm">
                <p className="text-white mb-6 mt-1">
                  <span className="text-[3rem] md:text-[3.5rem] font-light leading-none">AAA</span>
                  <span className="text-lg md:text-xl font-light ml-1">- rated</span>
                </p>
                <p className="text-[16px] md:text-[18px] text-white/95 leading-relaxed font-medium mt-auto">
                  Credit profile from CRISIL, ICRA and India Ratings, backed by an experienced India-based team of 224 professionals within the wider ecosystem.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. ACCOLADES & RECOGNITION */}
      <section className="w-full pb-20 bg-white">
        <div className={dsContainer}>
          <ScrollReveal>
            <h3 className={`${dsSectionHeading} mb-12`}>
              ACCOLADES & RECOGNITION
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {[1, 2, 3].map((item, idx) => (
              <ScrollReveal key={item} delay={0.1 + (idx * 0.1)} className="flex flex-col items-start border-b border-[#63CA55] pb-8 w-full">
                <Award className="w-12 h-12 md:w-16 md:h-16 text-slate-800 stroke-[1] mb-6" />
                <h4 className="text-[18px] font-medium text-slate-700 mb-1">Award Name</h4>
                <p className="text-[15px] text-slate-400 mb-5">11/02/2024</p>
                <p className="text-[16px] text-slate-500 leading-relaxed">
                  Description - Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURE CAROUSEL (SERVICES) */}
      <FeatureCarousel />

      {/* 7. AI-DRIVEN SPLIT LAYOUT (FIXED OVERLAP & ALIGNMENT) */}
      <section className="flex flex-col xl:flex-row w-full items-stretch min-h-[900px] border-b border-slate-100 bg-white">
        
        {/* Left Column */}
        <div className="w-full xl:w-1/2 px-6 md:px-12 lg:px-16 xl:px-[90px] pt-16 xl:pt-24 pb-0 flex flex-col border-r border-slate-100">
          <div className="flex-1 flex flex-col h-full">
            
            <div className="flex items-center gap-4 mb-12 md:mb-16 flex-shrink-0">
              <button onClick={() => setIsSplitPaused(!isSplitPaused)} className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors">
                {isSplitPaused ? <Play className="w-3.5 h-3.5 fill-current ml-0.5" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
              </button>
              <div className="flex-1 max-w-[320px] flex gap-3">
                {splitCarouselData.map((_, idx) => (
                  <div key={idx} className="h-[3px] flex-1 bg-slate-200 rounded-full overflow-hidden relative">
                    {splitActiveIndex === idx && (
                      <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: isSplitPaused ? 0 : 5, ease: "linear" }} className="absolute top-0 left-0 h-full bg-[#63CA55]" />
                    )}
                    {idx < splitActiveIndex && <div className="absolute top-0 left-0 h-full w-full bg-[#63CA55]" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Guaranteed minimum height to prevent overlapping */}
            <div className="flex-shrink-0 min-h-[250px] mb-8">
              <AnimatePresence mode="wait">
                <motion.div key={splitActiveIndex} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-[36px] md:text-[48px] lg:text-[58px] xl:text-[64px] font-medium text-slate-900 leading-[1.05] tracking-tight mb-6">
                    {splitCarouselData[splitActiveIndex].title}
                  </h2>
                  <p className="text-[16px] md:text-[18px] lg:text-[19px] text-[#777777] leading-[1.8] max-w-[620px]">
                    {splitCarouselData[splitActiveIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative w-full aspect-[4/3] md:aspect-video xl:aspect-auto xl:flex-1 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div key={splitActiveIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
                  <Image src={splitCarouselData[splitActiveIndex].image} alt="Operations Layout" fill className="object-cover object-center" priority/>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full xl:w-1/2 flex flex-col relative h-full">
          <div className="relative flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-[90px] py-16 md:py-24 min-h-[400px] md:min-h-[450px]">
            <div className="absolute inset-0 z-0">
              <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600" alt="Highway Aerial" fill className="object-cover"/>
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10">
              <h2 className={`${dsSectionHeading} text-white mb-10`}>
                OUR SOLUTIONS
              </h2>
              <button className="bg-[#63CA55] hover:bg-[#52B045] transition-colors duration-300 text-white text-[13px] font-bold tracking-[0.15em] uppercase px-8 py-4 flex items-center gap-3 w-fit rounded-[2px]">
                READ MORE <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
          
          <div className="relative z-10 bg-[#14191d] p-8 md:px-12 lg:px-16 xl:px-[90px] py-16 xl:py-20 xl:[clip-path:polygon(0_0,100%_0,100%_calc(100%-60px),calc(100%-60px)_100%,0_100%)] flex-shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
              <div className="flex flex-col border-b border-[#63CA55]/30 pb-8">
                <p className="text-[36px] xl:text-[48px] font-light text-white mb-6 leading-none">27</p>
                <p className="text-[14px] text-slate-400 leading-[1.8] pr-4">Road assets across India, representing one of the country&apos;s most diversified highway portfolios with BOT and annuity projects.</p>
              </div>
              <div className="flex flex-col border-b border-[#63CA55]/30 pb-8">
                <div className="flex items-start gap-1 mb-6">
                  <p className="text-[36px] xl:text-[48px] font-light text-white leading-none">8,819</p>
                  <ArrowUpRight className="w-4 h-4 text-[#63CA55] mt-1.5 stroke-2" />
                </div>
                <p className="text-[14px] text-slate-400 leading-[1.8] pr-4">Lane kilometres of highways and expressways connecting key manufacturing hubs, cities and consumption centres.</p>
              </div>
              <div className="flex flex-col border-b border-[#63CA55]/30 pb-8">
                <div className="flex items-start gap-1 mb-6">
                  <p className="text-[36px] xl:text-[48px] font-light text-white leading-none">32,266</p>
                  <ArrowUpRight className="w-4 h-4 text-[#63CA55] mt-1.5 stroke-2" />
                </div>
                <p className="text-[14px] text-slate-400 leading-[1.8] pr-4">INR Crores AUM as of 31 March 2025, with a clear pathway to INR 36,451 Crores through recent acquisitions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. KEY PROJECTS (Hover View + Alignment Fix) */}
      <section className="w-full bg-white py-20 md:py-[120px]">
        <div className={dsContainer}>
          
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <h2 className={dsSectionHeading}>
              KEY PROJECTS
            </h2>
            <div className="flex gap-4">
              <button className="text-[#63CA55] hover:text-[#52B045] transition-colors p-2"><ArrowLeft className="w-7 h-7 stroke-[1]" /></button>
              <button className="text-[#63CA55] hover:text-[#52B045] transition-colors p-2"><ArrowRight className="w-7 h-7 stroke-[1]" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-16">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group cursor-pointer flex flex-col h-full">
                
                {/* Hover overlay implemented here */}
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%)] bg-slate-100">
                  <Image 
                    src={project === 1 ? "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800"} 
                    alt="Project Thumbnail" 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  {project === 1 && <div className="absolute inset-0 bg-[#d47b4a]/50 mix-blend-multiply" />}
                  
                  {/* Dark Glass Overlay on Hover */}
                  {/* Premium Hover Overlay */}
<div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent backdrop-blur-[2px]" />

  {/* Bottom Content */}
  <div className="absolute bottom-0 left-0 w-full p-8">

    {/* Animated Green Line */}
    <div className="absolute bottom-0 left-0 w-full px-8 pb-8">

 <div className="absolute bottom-0 left-0 w-full px-8 pb-8">

  {/* Green Line */}
  <div className="w-0 h-[2px] bg-[#63CA55] group-hover:w-20 transition-all duration-500 mb-2" />

  <div className="flex items-center justify-between">

    <p className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500 text-white text-[15px] font-medium tracking-[0.18em] uppercase leading-none">
      View Project
    </p>

    <div className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
      <ArrowUpRight className="w-5 h-5 text-white" />
    </div>

  </div>

</div>

</div>

  </div>

</div>
                </div>

                <h3 className="text-[24px] lg:text-[28px] xl:text-[32px] font-medium text-slate-900 leading-[1.2] mb-4 pr-4">
                  Transport Planning & Traffic Engineering
                </h3>

                <div className="relative mb-10 flex-grow">
                  <p className="text-[15px] lg:text-[16px] text-[#777777] leading-[1.8] pr-8">
                    We deliver advanced travel demand estimation, traffic forecasts, traffic impact assessments, and seamless network planning to optimise congestion, improve mobility, and enhance road-user experience.
                  </p>
                  <ArrowRight className="absolute right-0 top-1 text-[#63CA55] w-5 h-5 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-auto">
                  <span className="text-[10px] lg:text-[11px] text-[#999999] pb-1 border-b-[1.5px] border-[#63CA55]/50 tracking-[0.05em] uppercase hover:text-slate-700 transition-colors">Traffic Forecasting</span>
                  <span className="text-[10px] lg:text-[11px] text-[#999999] pb-1 border-b-[1.5px] border-[#63CA55]/50 tracking-[0.05em] uppercase hover:text-slate-700 transition-colors">Urban Transport Modelling</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. EXPLORE R&D */}
      <section className="relative w-full h-[780px] lg:h-[820px] overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/R&D.png"
      alt="R&D"
      fill
      className="object-cover"
    />
  </div>

  {/* Content Card */}
  <div className="absolute left-[70px] bottom-[70px] z-20">

    <div className="w-[560px] bg-[#111111]/75 backdrop-blur-[2px] border-l-[4px] border-[#63CA55] px-16 py-14">

      <h2 className="text-white text-[56px] font-light leading-none mb-10">
        Explore our{" "}
        <span className="font-bold italic">
          R&amp;D
        </span>
      </h2>

      <button className="bg-[#63CA55] hover:bg-[#52B045] transition-colors duration-300 text-white text-[14px] font-semibold tracking-[0.18em] uppercase px-9 py-4 ">
        Explore More
      </button>

    </div>

  </div>

</section>

      {/* 10. FAQ SECTION */}
      <section className="w-full py-[100px] md:py-[120px] bg-white">
        <div className={`${dsContainer} flex flex-col items-center`}>
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-light text-slate-800 tracking-[0.05em] text-center uppercase mb-4">
            YOUR QUESTIONS, <span className="font-bold italic text-[#63CA55]">ANSWERED</span>
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* 11. FOOTER (Only one instance) */}
      <Footer />

    </main>
  );
}