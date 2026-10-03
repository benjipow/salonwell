import React from "react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-100">
      {/* Top Banner Announcement */}
      <div className="bg-gradient-to-r from-[#9b8ec4] to-[#8a7db5] text-white px-4 py-2 text-xs sm:text-sm font-semibold flex items-center justify-between shadow-inner">
        <div className="mx-auto flex items-center gap-2 text-center">
          <span className="bg-[#2d4a44] text-[#c9a84c] px-2 py-0.5 rounded text-xs uppercase font-bold tracking-wide">New</span>
          <span><b>Introducing Surge:</b> Boost Retail Sales In Your Salon</span>
        </div>
        <a 
          href="#surge" 
          className="hidden sm:inline-flex items-center gap-1 bg-[#2d4a44] text-white hover:bg-[#1a2c28] px-3 py-1 rounded-full text-xs font-medium transition-all transform hover:scale-105"
        >
          3 Month Free Trial
        </a>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2 group">
          {/* Geometric A-Mark Logo matching user's uploaded logo */}
          <svg width="32" height="28" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm group-hover:drop-shadow-md transition-shadow">
            <polygon points="60,25 90,60 30,60" fill="#9b8ec4"/>
            <polygon points="60,70 75,90 45,90" fill="#2d4a44"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#2d4a44]" style={{ letterSpacing: "-0.02em" }}>
              SALON<span className="text-[#9b8ec4]">WELL</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase -mt-1">
              Salon & Spa Growth
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-[#9b8ec4] transition-colors">Services</a>
          <a href="#surge" className="hover:text-[#9b8ec4] transition-colors flex items-center gap-1">
            <span>Surge</span>
            <span className="bg-[#9b8ec4] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Retail</span>
          </a>
          <a href="#why-us" className="hover:text-[#9b8ec4] transition-colors">Why Choose Us</a>
          <a href="#guarantee" className="hover:text-[#9b8ec4] transition-colors">Guarantee</a>
          <a href="#pricing" className="hover:text-[#9b8ec4] transition-colors">Pricing</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a 
            href="#audit" 
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#9b8ec4] hover:bg-[#8a7db5] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md"
          >
            Free Audit
          </a>
          <a 
            href="#book" 
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#9b8ec4] hover:bg-[#8a7db5] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:scale-105"
          >
            Book A Call
          </a>
        </div>
      </div>
    </header>
  );
};
