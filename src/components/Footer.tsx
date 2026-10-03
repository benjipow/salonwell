import React from "react";
import { Phone, MessageSquare, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2d4a44] text-white pt-16 pb-8 border-t border-[#1a2c28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-2">
              <svg width="32" height="28" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="60,25 90,60 30,60" fill="#9b8ec4"/>
                <polygon points="60,70 75,90 45,90" fill="#2d4a44"/>
              </svg>
              <span className="text-2xl font-black tracking-tight text-white">
                Salon<span className="text-[#9b8ec4]">Well</span><span className="text-white">.co</span>
              </span>
            </a>

            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Marketing &amp; Software that drives more revenue, clientele, and retail growth for salons and spas nationwide.
            </p>

            <div className="space-y-2 pt-2">
                <a href="tel:8654091322" className="flex items-center gap-2 text-xs font-bold text-white/80 hover:text-[#9b8ec4] transition-colors">
                <Phone className="w-4 h-4 text-[#9b8ec4]" />
                <span>Call: (865) 409-1322</span>
              </a>
                <a href="sms:8654091322" className="flex items-center gap-2 text-xs font-bold text-white/80 hover:text-[#9b8ec4] transition-colors">
                <MessageSquare className="w-4 h-4 text-[#9b8ec4]" />
                <span>Text: (865) 409-1322</span>
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#c9a84c]">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-white/50">
              <li><a href="#why-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#book" className="hover:text-white transition-colors">Careers - Hiring!</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal Notices</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#c9a84c]">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-white/50">
              <li>
                <a href="#surge" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Surge Retail</span>
                  <span className="bg-[#9b8ec4] text-white text-[9px] font-black px-1.5 py-0.5 rounded">NEW</span>
                </a>
              </li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO &amp; AI Visibility</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Google Ads &amp; Reviews</a></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#c9a84c]">
              Resources
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-white/50">
              <li><a href="#book" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#surge" className="hover:text-white transition-colors">Surge Login</a></li>
              <li><a href="#book" className="hover:text-white transition-colors">Book A Call With Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Call Bar */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#9b8ec4] to-[#8a7db5] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2d4a44] text-[#c9a84c] flex items-center justify-center font-black text-lg shadow">
              SW
            </div>
            <div>
              <span className="text-lg font-black block leading-tight">Book A Call With Us</span>
              <span className="text-xs font-semibold text-white/80">Schedule your free 1-on-1 strategy call with a salon growth expert</span>
            </div>
          </div>
          <a 
            href="#book" 
            className="px-6 py-2.5 rounded-xl bg-[#2d4a44] text-white hover:bg-[#1a2c28] font-extrabold text-xs transition-all shadow-md shrink-0"
          >
            Book Now
          </a>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8 border-t border-[#1a2c28] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/40">
          <p>© 2026 SalonWell.co Marketing. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#9b8ec4] transition-colors p-2 bg-[#1a2c28] rounded-full">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#9b8ec4] transition-colors p-2 bg-[#1a2c28] rounded-full">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#9b8ec4] transition-colors p-2 bg-[#1a2c28] rounded-full">
              <Linkedin className="w-4 h-4" />
            </a>
            <button 
              onClick={scrollToTop} 
              aria-label="Back to top" 
              className="p-2 bg-[#9b8ec4] text-white rounded-full hover:bg-[#8a7db5] transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
