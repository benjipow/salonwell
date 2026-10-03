import React from "react";
import { CheckCircle, Zap } from "lucide-react";

export const MidBannerGuarantee = () => {
  const categories = [
    "Help Hiring New Hair Stylists & Employees",
    "Rural Salon Marketing To Get More Applications",
    "Top 200 Salon Growth Partner",
    "Show Up On ChatGPT For Your Salon or Spa",
    "Boutique Salon & Bridal Business Marketing",
    "Facial Spa & Salon Suite Marketing",
    "Aveda & Paul Mitchell Salon Marketing",
    "High End Blowout Bar & Curly Hair Growth"
  ];

  return (
    <section id="guarantee" className="relative py-20 bg-[#2d4a44] text-white overflow-hidden">
      {/* Background Salon Atmosphere Image with overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img 
          src="https://vibe.filesafe.space/1787519097729165570/assets/92c97172-2031-47d1-8df6-fa46cae64408.png" 
          alt="Salon interior dark moody" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Hero Box in Dark Banner */}
        <div className="max-w-3xl bg-[#9b8ec4]/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c] text-white text-xs font-black uppercase tracking-wider">
            Built For Beauty Leaders
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Built for Salons and Spas That Want More Than Generic Marketing
          </h2>

          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            We come from the salon and spa industry, so we understand how beauty businesses actually grow. We know the difference between traffic and bookings. We know the difference between social activity and real revenue.
          </p>

          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            And we build every website, system, and strategy around your brand, your services, your guests, and your goals.
          </p>

          <div className="pt-2">
            <a 
              href="#audit" 
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#9b8ec4] hover:bg-[#8a7db5] text-white font-extrabold text-sm shadow-xl transition-all"
            >
              Free Business Audit
            </a>
          </div>
        </div>

        {/* Ticker / Tag Grid of Salon Segments */}
        <div className="mt-16 pt-10 border-t border-[#1a2c28]">
          <p className="text-center text-xs font-bold text-white/40 uppercase tracking-widest mb-6">
            Specialized Strategies Across All Beauty Segments
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="px-4 py-2 rounded-xl bg-[#1a2c28]/80 hover:bg-[#1a2c28] border border-[#1a2c28]/60 text-white/60 text-xs font-medium flex items-center gap-2 transition-colors"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>{cat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
