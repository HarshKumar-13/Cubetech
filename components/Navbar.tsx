"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "ABOUT US",
      href: "/about",
      hasDropdown: false,
    },
    {
      name: "OUR SERVICES & SOLUTIONS",
      href: "#",
      hasDropdown: true,
      isMegaMenu: true,
    },
    {
      name: "PROJECTS",
      href: "#projects",
      hasDropdown: true,
    },
    {
      name: "KNOWLEDGE CENTER",
      href: "#knowledge-center",
      hasDropdown: true,
    },
    {
      name: "R&D",
      href: "#r-d",
      hasDropdown: false,
    },
    {
      name: "OUR CLIENTS",
      href: "#our-clients",
      hasDropdown: true,
    },
    {
      name: "CAREERS",
      href: "#careers",
      hasDropdown: false,
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-8 lg:pt-12">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[64px] flex flex-col items-start">
        
        {/* Tier 1: Glass Bar */}
        <div className="flex items-stretch bg-black/40 backdrop-blur-md h-[60px] lg:h-[72px] shadow-sm w-full lg:w-auto justify-between lg:justify-start">
          <div className="flex h-full">
            <Link href="/" className="flex h-full group">
              <div className="bg-white w-[140px] lg:w-[160px] h-full flex flex-col items-center justify-center">
                <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border-[1.5px] border-[#63CA55] flex items-center justify-center mb-1">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#63CA55] rounded-full" />
                </div>
                <span className="text-[8px] lg:text-[9px] font-bold text-slate-900 tracking-wider leading-none">
                  CUBETECH
                </span>
              </div>
              <div className="flex items-center px-6 lg:px-8">
                <h1 className="text-white font-medium text-[13px] lg:text-[15px] tracking-[0.15em] uppercase truncate group-hover:text-[#63CA55] transition-colors">
                  Cube Highways Technologies
                </h1>
              </div>
            </Link>
          </div>

          <button 
            className="lg:hidden text-white px-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Tier 2: Desktop Navigation */}
        <nav className="hidden lg:flex flex-wrap items-center gap-10 mt-10">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.isMegaMenu ? (
                <div className="relative group/mega">
                  <div className="flex items-center gap-1.5 cursor-pointer py-4">
                    <span className="text-white text-[13px] font-medium tracking-[0.15em] transition-colors group-hover/mega:text-[#63CA55]">
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4 text-white group-hover/mega:text-[#63CA55] transition-colors stroke-[2.5]" />
                  </div>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-[100%] left-0 w-[600px] bg-white shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover/mega:opacity-100 group-hover/mega:translate-y-0 group-hover/mega:pointer-events-auto transition-all duration-300 flex border border-slate-100 rounded-sm overflow-hidden z-[100]">
                    {/* Left Pane */}
                    <div className="w-1/3 bg-white flex flex-col py-2 border-r border-slate-100">
                      <Link href="/services" className="px-6 py-4 flex items-center justify-between bg-[#eaf6eb] text-[#63CA55] font-medium text-[13px]">
                        Our Services <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 text-slate-600 font-medium text-[13px] transition-colors group/link">
                        Our Solutions <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                    {/* Right Pane */}
                    <div className="w-2/3 bg-white flex flex-col py-2">
                      <Link href="/services/detail" className="px-6 py-4 text-[#63CA55] bg-[#eaf6eb] font-medium text-[13px]">
                        Planning & Design Services
                      </Link>
                      <Link href="#" className="px-6 py-4 text-slate-600 hover:bg-slate-50 font-medium text-[13px] transition-colors">
                        Operations & Maintenance Services
                      </Link>
                      <Link href="#" className="px-6 py-4 text-slate-600 hover:bg-slate-50 font-medium text-[13px] transition-colors">
                        Advisory & Due Diligence Services
                      </Link>
                      <Link href="#" className="px-6 py-4 text-slate-600 hover:bg-slate-50 font-medium text-[13px] transition-colors">
                        Innovation & R&D Services
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 group cursor-pointer py-4"
                >
                  <span className="text-white text-[13px] font-medium tracking-[0.15em] transition-colors group-hover:text-[#63CA55]">
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-white group-hover:text-[#63CA55] transition-colors stroke-[2.5]" />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden w-full bg-black/90 backdrop-blur-xl mt-4 flex flex-col p-6 gap-6 rounded-sm shadow-xl"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-[12px] font-medium tracking-[0.15em] uppercase flex justify-between items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}