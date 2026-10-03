import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f1ea] pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background visual accents matching brand colors */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#9b8ec4]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#8a7db5]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#c9a84c]/30 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#c9a84c]" />
              <span className="text-xs sm:text-sm font-semibold text-[#2d4a44]/80">
                Websites, SEO, Reviews &amp; Retail Growth Software
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#2d4a44] leading-[1.1]">
              <span className="text-[#9b8ec4]">Marketing &amp;</span>{" "}
              <span className="text-[#9b8ec4] bg-clip-text text-transparent bg-gradient-to-r from-[#9b8ec4] to-[#8a7db5]">Software</span>{" "}
              That Drives More Revenue For Salons And Spas
            </h1>

            <p className="text-lg sm:text-xl text-[#2d4a44]/70 max-w-2xl font-normal leading-relaxed">
              SalonWell is the go-to growth partner for salons, spas, and beauty businesses that want more clients, higher average ticket sizes, and a better client experience online and in-person.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#services" 
                className="px-6 py-3.5 rounded-xl bg-[#9b8ec4] hover:bg-[#8a7db5] text-white font-extrabold text-base shadow-lg shadow-[#9b8ec4]/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#book" 
                className="px-6 py-3.5 rounded-xl bg-[#9b8ec4] hover:bg-[#8a7db5] text-white font-extrabold text-base shadow-lg shadow-[#9b8ec4]/25 transition-all transform hover:-translate-y-0.5"
              >
                Let's Chat
              </a>
            </div>

            {/* Social Links & Trust */}
            <div className="pt-6 border-t border-[#2d4a44]/10 flex flex-wrap items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2d4a44]/40">Follow Us:</span>
              <div className="flex items-center gap-4 text-xs font-semibold text-[#2d4a44]/60">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#9b8ec4] transition-colors">Instagram</a>
                <span className="text-[#2d4a44]/20">•</span>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#9b8ec4] transition-colors">Facebook</a>
                <span className="text-[#2d4a44]/20">•</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#9b8ec4] transition-colors">LinkedIn</a>
                <span className="text-[#2d4a44]/20">•</span>
                <a href="https://google.com" target="_blank" rel="noreferrer" className="hover:text-[#9b8ec4] transition-colors">Google</a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Top Quick Actions Floating Header */}
              <div className="absolute -top-6 right-4 z-20 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur p-2 rounded-2xl shadow-xl border border-white/50">
                <a href="#audit" className="px-3 py-1.5 rounded-xl bg-[#9b8ec4] text-white font-bold text-xs">
                  Free Audit
                </a>
                <a href="#book" className="px-3 py-1.5 rounded-xl bg-[#2d4a44] text-white font-bold text-xs">
                  Book A Call
                </a>
              </div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#2d4a44] group">
                <img 
                  src="https://vibe.filesafe.space/1787519097729165570/assets/dbf36bb0-f177-4373-8588-50a66bfbe131.png" 
                  alt="Happy salon client getting hair blowout" 
                  className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d4a44]/60 via-transparent to-transparent" />
              </div>

              {/* Overlay Stat Card */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 z-20 bg-[#9b8ec4] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-white/40">
                <p className="text-xs sm:text-sm font-extrabold leading-tight tracking-tight uppercase">
                  We Build Clientele, Increase Average Ticket, &amp; Strengthen Client Retention
                </p>
                <div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://vibe.filesafe.space/1787519097729165570/assets/1f758bfb-af12-4a50-8a45-a14b2a855e1e.png" alt="Bonnie Plummer - Salon Owner" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://vibe.filesafe.space/1787519097729165570/assets/d851b92f-d3c0-49ad-bc0a-3d931af49749.png" alt="Christina Kirkey - Salon Owner" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://vibe.filesafe.space/1787519097729165570/assets/c20c3b4b-4247-4097-8b02-e3fe485d4168.png" alt="Michael Enzo - Salon Owner" />
                  </div>
                  <div>
                    <span className="block text-sm font-black leading-none">More Than 200+</span>
                    <span className="text-[10px] font-semibold text-white/80">Happy Salon &amp; Spa Owners</span>
                  </div>
                </div>
              </div>

              {/* Years Experience Badge */}
              <div className="absolute -top-8 -left-6 z-20 bg-[#2d4a44] text-[#c9a84c] p-4 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-xl border-2 border-white transform -rotate-12 hover:rotate-0 transition-transform">
                <span className="text-2xl font-black leading-none">15+</span>
                <span className="text-[8px] font-extrabold uppercase leading-tight mt-0.5">Years In Beauty</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
