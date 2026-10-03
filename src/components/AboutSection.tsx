import React from "react";
import { Check, ShieldCheck, HeartHandshake, Sparkles, Award } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      title: "No Contracts, EVER",
      desc: "We guarantee our results. If we stop delivering, you shouldn't be locked in!",
      bgColor: "bg-[#9b8ec4]",
      textColor: "text-white"
    },
    {
      title: "60-Day Money-Back Guarantee",
      desc: "If you are not satisfied for ANY reason, get your money back without hassle!",
      bgColor: "bg-[#9b8ec4]",
      textColor: "text-white"
    },
    {
      title: "Dedicated Success Manager",
      desc: "You always have a direct contact to help ensure your ongoing growth and success.",
      bgColor: "bg-[#9b8ec4]",
      textColor: "text-white"
    },
    {
      title: "Custom-Built, Luxury Design",
      desc: "Your online presence should represent you and your unique brand standards!",
      bgColor: "bg-[#9b8ec4]",
      textColor: "text-white"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Section: Image + Who We Are */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Visual with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img 
                src="https://vibe.filesafe.space/1787519097729165570/assets/0ed5b36f-48b4-4a8b-b946-5be0b19b5369.png" 
                alt="Salon owner reviewing iPad analytics" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>

            {/* Rotating / Floating Experience Seal */}
            <div className="absolute -top-6 -left-6 bg-[#2d4a44] text-[#c9a84c] p-4 rounded-full w-28 h-28 flex flex-col items-center justify-center text-center shadow-xl border-4 border-white">
              <span className="text-3xl font-black leading-none">15+</span>
              <span className="text-[9px] font-extrabold uppercase leading-tight mt-1">Years Working In Salons &amp; Spas</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
              Who We Are
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d4a44] tracking-tight leading-tight">
              Solutions Designed to Grow Your Business
            </h2>

            <p className="text-[#2d4a44]/70 leading-relaxed text-base sm:text-lg">
              We help salons and spas grow with custom websites, SEO, Google Reviews, listings management, AI search visibility, Google Ads, client forms, social media scheduling, and software support.
            </p>

            <p className="text-[#2d4a44]/70 leading-relaxed text-base sm:text-lg font-medium">
              We also built <strong className="text-[#2d4a44]">Surge</strong>, our retail sales growth software for salons, designed to increase product sales without the awkward pitch.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a 
                href="#book" 
                className="px-6 py-3 rounded-xl bg-[#9b8ec4] hover:bg-[#8a7db5] text-white font-extrabold text-sm shadow-md transition-all"
              >
                Book A Call
              </a>
              <a 
                href="#testimonials" 
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#2d4a44] font-bold text-sm transition-all"
              >
                Success Stories
              </a>
            </div>
          </div>

        </div>

        {/* Highlight Guarantees Grid (4 cards like screenshot) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-[#f4f1ea] border border-[#2d4a44]/10 hover:border-[#c9a84c]/50 transition-all hover:shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#9b8ec4] text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Award className="w-5 h-5" />}
                  {idx === 2 && <HeartHandshake className="w-5 h-5" />}
                  {idx === 3 && <Sparkles className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-extrabold text-[#2d4a44] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2d4a44]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
