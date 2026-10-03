import React from "react";
import { Check, ShieldCheck, TrendingUp, Clock, Award, Users } from "lucide-react";

export const WhyChooseUs = () => {
  const points = [
    {
      num: "01",
      title: "Results You Can Track",
      desc: "We focus on visibility, bookings, retail growth, and client experience in ways owners can actually measure and report on.",
      highlight: true
    },
    {
      num: "02",
      title: "Fast Updates Without Hassle",
      desc: "Submit a ticket and we'll update your website, listings, Google Business Profile, Apple Maps, Bing, and AI data sources within 48 hours."
    },
    {
      num: "03",
      title: "Industry Experience That Shows",
      desc: "We are built by people who understand salons and spas from the inside, not outsiders guessing at how beauty businesses work."
    },
    {
      num: "04",
      title: "White-Glove, Proactive Support",
      desc: "Every client gets a dedicated Success Manager and a high-touch experience from onboarding through ongoing growth strategies.",
      accent: true
    }
  ];

  const stats = [
    { value: "200+", label: "Happy Customers" },
    { value: "15+", label: "Years In Beauty" },
    { value: "5.8M+", label: "Leads & Bookings Generated" },
    { value: "5 Star", label: "Reputation Score" }
  ];

  return (
    <section className="py-20 bg-[#f4f1ea] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Split: Title & Intro */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2d4a44] tracking-tight leading-tight">
              Why Salons and Spas Choose SalonWell
            </h2>
            <p className="text-[#2d4a44]/70 text-base leading-relaxed">
              SalonWell is different. Our clients are never locked in. Your website is yours. Your marketing is custom. Your support is white-glove. And your growth is measurable.
            </p>
            <div className="pt-2">
              <a 
                href="#book" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#9b8ec4] hover:bg-[#8a7db5] text-white font-extrabold text-sm shadow-md transition-all"
              >
                Book A Call
              </a>
            </div>
          </div>

          {/* 2x2 Grid of Key Differentiators */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {points.map((p, idx) => (
              <div 
                key={idx} 
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  p.highlight 
                    ? "bg-[#9b8ec4] border-white/40 text-white shadow-lg" 
                    : p.accent 
                    ? "bg-[#2d4a44] border-[#1a2c28] text-white shadow-lg"
                    : "bg-[#2d4a44] border-[#1a2c28] text-white shadow-xl"
                }`}
              >
                <div>
                  <span className={`text-xl font-black block mb-4 ${
                    p.highlight ? "text-white/80" : p.accent ? "text-[#9b8ec4]" : "text-[#9b8ec4]"
                  }`}>
                    {p.num}
                  </span>
                  <h3 className={`text-xl font-black mb-3 ${
                    p.highlight ? "text-white" : "text-white"
                  }`}>
                    {p.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    p.highlight ? "text-white/90 font-medium" : p.accent ? "text-white/70" : "text-white/70"
                  }`}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proven Results By The Numbers Bar */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#2d4a44] text-white border border-[#1a2c28] shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center">
            
            <div className="col-span-2 lg:col-span-1">
              <span className="text-xs font-extrabold text-white/40 uppercase tracking-wider block mb-1">
                Proven Growth
              </span>
              <h4 className="text-xl font-black text-white leading-tight">
                Results by the Numbers
              </h4>
            </div>

            {stats.map((st, i) => (
              <div key={i} className="text-left border-l border-[#1a2c28] pl-6">
                <span className="text-3xl sm:text-4xl font-black text-[#c9a84c] block tracking-tight">
                  {st.value}
                </span>
                <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block mt-1">
                  {st.label}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
