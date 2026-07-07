"use client";

import ScrollReveal from "./ScrollReveal";

const dsContainer =
  "w-full max-w-[1600px] mx-auto pl-4 md:pl-8 lg:pl-12 xl:pl-[64px] pr-6 md:pr-12 lg:pr-16 xl:pr-[90px]";

type SuccessMetricsProps = {
  title?: string;
  italicWord?: string;
};

export default function SuccessMetrics({
  title = "OUR SUCCESS",
  italicWord = "METRICS",
}: SuccessMetricsProps) {
  return (
    <section className="w-full py-24 lg:py-32 bg-white">

      <div className={dsContainer}>

        <ScrollReveal>

          <h2 className="text-[52px] font-light tracking-[0.1em] uppercase mb-20">

            {title}{" "}

            <span className="italic font-medium text-[#63CA55]">
              {italicWord}
            </span>

          </h2>

        </ScrollReveal>

        {/* Paste your existing metrics grid here */}

      </div>

    </section>
  );
}