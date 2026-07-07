"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const faqs = [
  {
    question: "What is Cube Highways Technologies Pvt Ltd?",
    answer: "Cube Highways Technologies Pvt Ltd is the consultancy and advisory company within the Cube Highways ecosystem, focused on planning, developing, operating and optimising road and highway infrastructure across India. It bridges strategic investment decisions with on-ground technical and operational execution."
  },
  {
    question: "What services does CubeHighways provide?",
    answer: "We provide comprehensive infrastructure consulting, including transport planning, structural auditing, AI-driven traffic management, and predictive asset maintenance."
  },
  {
    question: "How does CubeHighways use AI in highway management?",
    answer: "We leverage real-time monitoring, advanced data analytics, and custom-built AI applications to manage complex toll operations, optimize traffic flow, and predict maintenance needs before critical failures occur."
  },
  {
    question: "What are CubeHighways' key technology-driven initiatives?",
    answer: "Our initiatives include smart tolling systems, IoT sensor deployment for bridge health monitoring, automated pavement distress detection, and cloud-based central control centers."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="w-full max-w-[900px] mx-auto mt-16">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-[#63CA55]/30">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full py-6 flex items-center justify-between text-left group"
            >
              <span className={`text-[17px] font-medium transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                {faq.question}
              </span>
              <div className="ml-4 shrink-0">
                {isOpen ? (
                  <ArrowDown className="w-5 h-5 text-[#63CA55] stroke-[2]" />
                ) : (
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-400 transition-colors" />
                )}
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-[15px] text-[#777777] leading-[1.8] pr-12">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}