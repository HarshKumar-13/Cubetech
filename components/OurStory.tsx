"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const years = [
  {
    year: "2025",
    milestone: "Expanding Digital Highway Intelligence",
    stories: [
      {
        title: "AI Powered Traffic Analytics",
        image: "/images/about/story-1.jpg",
        category: "INSIGHT",
        description:
          "Advanced AI analytics helping authorities optimize traffic flow and improve mobility.",
      },
      {
        title: "Smart Mobility Solutions",
        image: "/images/about/story-2.jpg",
        category: "PROJECT",
        description:
          "Technology-enabled mobility planning supporting sustainable infrastructure.",
      },
    ],
  },

  {
    year: "2024",
    milestone: "Large Scale Advisory Projects",
    stories: [
      {
        title: "National Highway Planning",
        image: "/images/about/story-3.jpg",
        category: "PROJECT",
        description:
          "Planning future-ready highway corridors using advanced transport models.",
      },
      {
        title: "Digital Twin Infrastructure",
        image: "/images/about/story-4.jpg",
        category: "CASE STUDY",
        description:
          "Building digital twins for predictive maintenance and monitoring.",
      },
    ],
  },

  {
    year: "2023",
    milestone: "Technology Expansion",
    stories: [
      {
        title: "Research & Innovation",
        image: "/images/about/story-5.jpg",
        category: "R&D",
        description:
          "Developing sustainable transportation technologies for tomorrow.",
      },
      {
        title: "Mobility Intelligence",
        image: "/images/about/story-6.jpg",
        category: "ARTICLE",
        description:
          "Advanced forecasting and mobility intelligence solutions.",
      },
    ],
  },

  {
    year: "2022",
    milestone: "Growing Engineering Team",
    stories: [
      {
        title: "Engineering Excellence",
        image: "/images/about/story-7.jpg",
        category: "NEWS",
        description:
          "Strengthening multidisciplinary engineering capabilities.",
      },
      {
        title: "Digital Infrastructure",
        image: "/images/about/story-8.jpg",
        category: "INSIGHT",
        description:
          "Supporting highway infrastructure through analytics.",
      },
    ],
  },

  {
    year: "2021",
    milestone: "Company Founded",
    stories: [
      {
        title: "Vision for Mobility",
        image: "/images/about/story-9.jpg",
        category: "MILESTONE",
        description:
          "Established with the vision of improving transportation infrastructure.",
      },
      {
        title: "Early Growth",
        image: "/images/about/story-10.jpg",
        category: "PROJECT",
        description:
          "Building strong foundations for engineering excellence.",
      },
    ],
  },
];

export default function OurStorySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeYear = years[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % years.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? years.length - 1 : prev - 1
    );
  };

  const progress =
    ((activeIndex + 1) / years.length) * 100;
      return (
    <section className="relative py-32 bg-[#F6F6F6] overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[64px]">

        <ScrollReveal>
          <h2 className="text-center text-[56px] font-light tracking-[0.18em] uppercase mb-20">
            OUR <span className="italic font-semibold text-[#63CA55]">STORY</span>
          </h2>
        </ScrollReveal>

        {/* Progress + Navigation */}

        <div className="flex items-center gap-8 mb-10">

          <div className="flex-1 h-[2px] bg-[#E6E6E6] relative">

            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: .45 }}
              className="absolute left-0 top-0 h-full bg-[#63CA55]"
            />

          </div>

          <div className="flex gap-3">

            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-[#63CA55] flex items-center justify-center transition hover:bg-[#63CA55] hover:text-white"
            >
              <ArrowLeft size={18}/>
            </button>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-[#63CA55] flex items-center justify-center transition hover:bg-[#63CA55] hover:text-white"
            >
              <ArrowRight size={18}/>
            </button>

          </div>

        </div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-0 right-0 top-9 h-px bg-[#D7D7D7]" />

          <div className="grid grid-cols-5 relative">

            {years.map((item,index)=>{

              const active=index===activeIndex;

              return(

                <button
                  key={item.year}
                  onClick={()=>setActiveIndex(index)}
                  className="flex flex-col items-center group"
                >

                  <motion.div
                    animate={{
                      backgroundColor:active?"#63CA55":"#8E8E8E",
                      scale:active?1.25:1
                    }}
                    className="w-3 h-3 rounded-full z-10"
                  />

                  <motion.span
                    animate={{
                      color:active?"#63CA55":"#808080",
                      fontSize:active?42:24
                    }}
                    transition={{duration:.35}}
                    className="font-light mt-5"
                  >
                    {item.year}
                  </motion.span>

                </button>

              )

            })}

          </div>

        </div>

      </div>

      {/* IMAGE SECTION */}

      <div className="relative mt-20 h-[640px] overflow-hidden">

        <Image
          src="/images/about/story-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10"/>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[64px] h-full">

          <AnimatePresence mode="wait">

            <motion.div

              key={activeYear.year}

              initial={{opacity:0,y:40}}

              animate={{opacity:1,y:0}}

              exit={{opacity:0,y:-30}}

              transition={{duration:.45}}

              className="absolute left-[64px] right-[64px] top-10"

            >

              {/* Floating Cards */}

              <div className="grid grid-cols-12 gap-8 items-start">

                {/* Milestone */}

                <div className="col-span-3">

                  <div className="bg-white p-10 shadow-lg">

                    <p className="uppercase tracking-[0.2em] text-[12px] text-slate-500 mb-8">

                      Milestone

                    </p>

                    <h3 className="text-[44px] leading-[1.2] font-light text-slate-800">

                      {activeYear.milestone}

                    </h3>

                  </div>

                </div>

                {/* Story Cards */}

                <div className="col-span-9">

                  <div className="grid grid-cols-2 gap-8">

                    {activeYear.stories.map((story)=>(
                                            <motion.article
                        key={story.title}
                        whileHover={{ y: -8 }}
                        transition={{ duration: .3 }}
                        className="bg-white shadow-lg overflow-hidden group cursor-pointer"
                      >

                        <div className="relative h-[270px] overflow-hidden">

                          <Image
                            src={story.image}
                            alt={story.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                        </div>

                        <div className="p-7">

                          <div className="flex items-center justify-between mb-5">

                            <p className="uppercase tracking-[0.18em] text-[12px] text-slate-500">
                              {story.category}
                            </p>

                            <ArrowUpRight
                              size={18}
                              className="text-[#63CA55] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />

                          </div>

                          <h4 className="text-[28px] font-light text-slate-800 mb-5 leading-tight">
                            {story.title}
                          </h4>

                          <p className="text-[16px] leading-8 text-slate-600">
                            {story.description}
                          </p>

                        </div>

                      </motion.article>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>

  );
}