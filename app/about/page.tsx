"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import OurStory from "@/components/OurStory";
import LeadershipSection from "@/components/LeadershipSection";

const dsContainer =
  "w-full max-w-[1600px] mx-auto pl-4 md:pl-8 lg:pl-12 xl:pl-[64px] pr-6 md:pr-12 lg:pr-16 xl:pr-[90px]";

const dsSectionHeading =
  "text-[32px] md:text-[40px] xl:text-[48px] font-light text-slate-800 tracking-[0.1em] uppercase leading-tight";

export default function AboutPage() {
  const partners = [
    "/images/partners/logo-1.svg",
    "/images/partners/logo-2.svg",
    "/images/partners/logo-3.svg",
    "/images/partners/logo-4.svg",
    "/images/partners/logo-5.svg",
    "/images/partners/logo-6.svg",
  ];
  return (
    <main className="bg-white min-h-screen">

      <Navbar />

      {/* Hero Section */}

      {/* HERO */}

<section
  className="relative h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden flex items-end"
  style={{
    clipPath:
      "polygon(0 0,100% 0,100% calc(100% - 60px),calc(100% - 60px) 100%,0 100%)",
  }}
>

  {/* Background */}

  <div className="absolute inset-0">
    <Image
      src="/images/about/about-banner.png"
      alt="About Cube Highways Technologies"
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  {/* Overlay */}

  <div className="absolute inset-0 bg-black/20" />

  {/* Left Gradient */}

  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

  {/* Content */}

  <div className={`relative z-20 w-full pb-16 lg:pb-20 ${dsContainer}`}>

    <div className="max-w-4xl">

      <p className="text-white/75 text-[12px] uppercase tracking-[0.22em] mb-6">
        Home / About Us
      </p>

      <h1 className="text-white text-[48px] md:text-[64px] lg:text-[84px] leading-none font-light tracking-tight">

        ABOUT{" "}

        <span className="font-medium italic">
          US
        </span>

      </h1>

    </div>

  </div>

</section>

      {/* Who We Are */}

      {/* WHO WE ARE */}

<section className="w-full py-24 lg:py-32 bg-white">

  <div className={dsContainer}>

    <ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">

        {/* Left */}

        <div>

          <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-light tracking-[0.12em] uppercase leading-none text-[#111111]">
            WHO WE ARE
          </h2>

        </div>

        {/* Right */}

        <div className="space-y-8">

          <p className="text-[18px] leading-[2] text-[#2B2B2B]">

            Cube Highways Technologies is a specialised engineering and
            technology company delivering innovative solutions for highway
            infrastructure across India. We combine deep engineering
            expertise, operational excellence and advanced analytics to help
            create safer, smarter and more efficient transportation networks.

          </p>

          <p className="text-[18px] leading-[2] text-[#2B2B2B]">

            Backed by experienced professionals, we provide services across
            transportation engineering, traffic studies, digital innovation,
            research & development, project advisory and intelligent mobility
            solutions. Our multidisciplinary approach enables us to solve
            complex infrastructure challenges while driving sustainable growth.

          </p>

        </div>

      </div>

    </ScrollReveal>

  </div>

</section>

      {/* Our Impact */}

<section className="w-full pt-12 lg:pt-16 pb-32 lg:pb-40 bg-white">
  <div className={dsContainer}>

    <ScrollReveal>
      <h3 className="text-[32px] md:text-[40px] xl:text-[48px] font-light text-slate-800 tracking-[0.1em] uppercase leading-tight mb-12 md:mb-16">
        OUR{" "}
        <span className="italic font-medium text-[#63CA55]">
          IMPACT
        </span>
      </h3>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-stretch">

      <ScrollReveal
        delay={0.1}
        className="flex flex-col h-full border-b border-[#63CA55] pb-6"
      >
        <p className="text-[3rem] md:text-[4rem] font-light text-slate-800 leading-none mb-10">
          27
        </p>

        <p className="text-[16px] md:text-[18px] font-medium text-slate-600 leading-relaxed mt-auto">
          Road assets across India, representing one of the country&apos;s most
          diversified highway portfolios with BOT and annuity projects.
        </p>
      </ScrollReveal>

      <ScrollReveal
        delay={0.2}
        className="flex flex-col h-full border-b border-[#63CA55] pb-6"
      >
        <div className="flex items-start gap-2 mb-10">
          <p className="text-[3rem] md:text-[4rem] font-light text-slate-800 leading-none">
            8,819
          </p>

          <ArrowUp className="w-8 h-8 text-[#63CA55] mt-1 md:mt-2 stroke-[2.5]" />
        </div>

        <p className="text-[16px] md:text-[18px] font-medium text-slate-600 leading-relaxed mt-auto">
          Lane kilometres of highways and expressways connecting key
          manufacturing hubs, cities and consumption centres.
        </p>
      </ScrollReveal>

      <ScrollReveal
        delay={0.3}
        className="flex flex-col h-full border-b border-[#63CA55] pb-6"
      >
        <div className="flex items-start gap-2 mb-10">
          <p className="text-[3rem] md:text-[4rem] font-light text-slate-800 leading-none">
            32,266
          </p>

          <ArrowUp className="w-8 h-8 text-[#63CA55] mt-1 md:mt-2 stroke-[2.5]" />
        </div>

        <p className="text-[16px] md:text-[18px] font-medium text-slate-600 leading-relaxed mt-auto">
          INR Crores AUM as of 31 March 2025, with a clear pathway to INR
          36,451 Crores through recent acquisitions.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4} className="h-full">
        <div className="bg-[#63CA55] p-8 md:p-10 h-full flex flex-col shadow-sm">

          <p className="text-white mb-6 mt-1">
            <span className="text-[3rem] md:text-[3.5rem] font-light leading-none">
              AAA
            </span>

            <span className="text-lg md:text-xl font-light ml-1">
              - rated
            </span>
          </p>

          <p className="text-[16px] md:text-[18px] text-white/95 leading-relaxed font-medium mt-auto">
            Credit profile from CRISIL, ICRA and India Ratings, backed by an
            experienced India-based team of 224 professionals within the wider
            ecosystem.
          </p>

        </div>
      </ScrollReveal>

    </div>

  </div>
</section>

      {/* Partners */}
      {/* OUR PARTNERS */}
{/* OUR PARTNERS */}

<section className="w-full py-24 lg:py-28 bg-white overflow-hidden">

  <div className={dsContainer}>

    <ScrollReveal>

      <div className="flex items-center gap-20">

        {/* Heading */}

        <div className="shrink-0">

          <h2 className="text-[32px] md:text-[40px] xl:text-[48px] font-light tracking-[0.1em] uppercase whitespace-nowrap">

            OUR{" "}

            <span className="italic font-medium text-[#63CA55]">
              PARTNERS
            </span>

          </h2>

        </div>

        {/* Logos */}

        <div className="relative flex-1 overflow-hidden">

          <motion.div
            className="flex items-center gap-24 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px] h-[70px]"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>

        </div>

      </div>

    </ScrollReveal>

  </div>

</section>
      {/* Timeline */}
<OurStory />
<LeadershipSection />
      

      {/* Leadership */}

      {/* Team */}

      {/* Corporate Responsibility */}

      {/* Reports */}

      {/* Gallery */}

      <Footer />

    </main>
  );
}