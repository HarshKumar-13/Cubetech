"use client";
import Link from "next/link";
import { MapPin, Mail, ArrowRight,} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] pt-24 pb-8 relative overflow-hidden flex flex-col">
      {/* Top Grid Content - Universal Alignment */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-[90px] relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
        
        {/* Col 1 */}
        <div className="flex flex-col">
          <h4 className="text-white text-[17px] font-medium mb-6 uppercase tracking-wider">Company</h4>
          <div className="flex flex-col gap-4 text-[15px] text-white/60">
            <Link href="#" className="hover:text-[#63CA55] transition-colors">Home</Link>
            <Link href="#" className="hover:text-[#63CA55] transition-colors">About Us</Link>
            <Link href="#" className="hover:text-[#63CA55] transition-colors">Services</Link>
            <Link href="#" className="hover:text-[#63CA55] transition-colors">Project</Link>
            <Link href="#" className="hover:text-[#63CA55] transition-colors">Contact us</Link>
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col">
          <h4 className="text-white text-[17px] font-medium mb-6 uppercase tracking-wider">Quick Links</h4>
          <div className="flex flex-col gap-4 text-[15px] text-white/60">
            <Link href="#" className="hover:text-[#63CA55] transition-colors">Our Success Stories</Link>
            <Link href="#" className="hover:text-[#63CA55] transition-colors">Awards</Link>
            <Link href="#" className="hover:text-[#63CA55] transition-colors">Our Partners</Link>
            <Link href="#" className="hover:text-[#63CA55] transition-colors">Testimonials</Link>
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col">
          <h4 className="text-white text-[17px] font-medium mb-6 uppercase tracking-wider">Contact Us</h4>
          <div className="flex flex-col gap-5 text-[15px] text-white/60">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
              <p className="leading-relaxed">Tower C, 5th Floor, Logix Cyber Park,<br />Sector 62, Noida - 201309</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 shrink-0" />
              <a href="mailto:support@cubehighways.com" className="hover:text-white transition-colors">
                support@cubehighways.com
              </a>
            </div>
          </div>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col">
          <h4 className="text-white text-[17px] font-medium mb-6 uppercase tracking-wider">Sign up to our Newsletter</h4>
          <div className="flex items-center border-b border-white/30 pb-3 mb-10 group focus-within:border-[#63CA55] transition-colors">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent w-full text-[15px] text-white outline-none placeholder:text-white/40"
            />
            <button className="text-white/40 hover:text-[#63CA55] transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <h4 className="text-white text-[17px] font-medium mb-6 uppercase tracking-wider">Follow us</h4>
        </div>

      </div>

      {/* Massive Watermark Text - Changed to font-medium */}
      <div className="w-full flex flex-col items-center justify-center pointer-events-none select-none mt-10">
        <span className="text-[14vw] leading-[0.85] font-medium text-white/[0.04] tracking-tighter w-full text-center whitespace-nowrap">
          CUBEHIGHWAYS
        </span>
        <span className="text-[14vw] leading-[0.85] font-medium text-white/[0.04] tracking-tighter w-full text-center whitespace-nowrap -mt-[1%]">
          TECHNOLOGIES
        </span>
      </div>

      {/* Bottom Bar - Fixed layout */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-[90px] relative z-10 flex flex-col md:flex-row justify-between items-center mt-12 text-[12px] text-white/40 border-t border-white/10 pt-6">
        <p className="mb-4 md:mb-0">copyrights © cubehighways 2025</p>
        {/* Back to top moved next to copyright on the right side */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:text-white transition-colors flex items-center gap-2"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}