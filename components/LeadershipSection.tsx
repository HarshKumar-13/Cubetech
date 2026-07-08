"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const dsContainer =
  "w-full max-w-[1600px] mx-auto pl-4 md:pl-8 lg:pl-12 xl:pl-[64px] pr-6 md:pr-12 lg:pr-16 xl:pr-[90px]";

const leaders = [
  {
    name: "John Anderson",
    designation: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Emily Carter",
    designation: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Michael Brown",
    designation: "Head of Engineering",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sophia Wilson",
    designation: "Director - Strategy",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "David Miller",
    designation: "Chief Operating Officer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Olivia Thomas",
    designation: "Head of Digital",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-32 bg-white">

      <div className={dsContainer}>

        <div className="grid grid-cols-12 gap-20 items-start">

          {/* LEFT COLUMN */}

          <div className="col-span-12 lg:col-span-3">

            <div className="sticky top-28">

              <ScrollReveal>

                <h2 className="text-[46px] xl:text-[54px] leading-none tracking-[0.14em] uppercase font-light">

                  LEADERSHIP

                </h2>

                <p className="mt-10 text-[18px] leading-[2] text-slate-600">

                  Our leadership team combines decades of experience across
                  transportation engineering, mobility, intelligent
                  infrastructure and digital innovation to deliver
                  future-ready highway solutions.

                </p>

              </ScrollReveal>

            </div>

          </div>

          <div className="col-span-12 lg:col-span-9 overflow-hidden">

    <div
        className="
        flex
        gap-8
        overflow-x-auto
        snap-x
        snap-mandatory
        scrollbar-hide
        pb-4
        "
    >

        {leaders.map((leader, index) => (

            <ScrollReveal
                key={leader.name}
                delay={index * 0.05}
                className="flex-shrink-0 snap-start"
            >

                <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: .35 }}
                    className="group cursor-pointer w-[310px]"
                >

                    <div className="relative h-[520px] overflow-hidden">

                        <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"/>

                        <div className="absolute left-8 right-8 bottom-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">

                            <h3 className="text-white text-[28px] font-light">

                                {leader.name}

                            </h3>

                            <p className="text-white/80 mt-2">

                                {leader.designation}

                            </p>

                        </div>

                    </div>

                </motion.article>

            </ScrollReveal>

        ))}

    </div>

</div>
        </div>

      </div>

    </section>
  );
}