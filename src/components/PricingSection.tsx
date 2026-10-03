import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Standard",
      desc: "Essential digital presence, search listings, and review generation for emerging salons.",
      price: "$49",
      period: "/ Month",
      popular: false,
      features: [
        "Custom Mobile-Responsive Website",
        "Google & Apple Maps Listings Setup",
        "Automated Google Review Campaign",
        "AI Search Visibility Optimization",
        "Dedicated Success Manager",
        "Standard Email Support"
      ]
    },
    {
      name: "Professional",
      desc: "Complete growth suite including Surge retail software and high-intent Google Ads management.",
      price: "$99",
      period: "/ Month",
      popular: true,
      features: [
        "Everything in Standard",
        "Surge Retail Growth Software Included",
        "Google Ads & SEO Execution",
        "Social Media Post Scheduler",
        "Custom Lead & Consultation Forms",
        "48-Hour Website Content Updates",
        "Priority Phone & Chat Support"
      ]
    },
    {
      name: "Enterprise",
      desc: "Custom multi-location software architecture, priority support, and bespoke growth strategy.",
      price: "$199",
      period: "/ Month",
      popular: false,
      features: [
        "Everything in Professional",
        "Multi-Location & Suite Management",
        "Advanced Analytics & ROI Dashboard",
        "Custom Booking System Integration",
        "Quarterly Executive Growth Reviews",
        "Dedicated Account Director",
        "1-on-1 Stylist Retail Training"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#f4f1ea] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#2d4a44]/10 text-[#2d4a44] text-xs font-bold uppercase tracking-wider shadow-sm">
            Pricing Plans
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#2d4a44] tracking-tight">
            Pricing Plans That Fit Every Business Need
          </h2>
          <p className="text-[#2d4a44]/70 text-base sm:text-lg">
            Transparent pricing with <strong>No Contracts</strong> and a <strong>60-Day Money-Back Guarantee</strong>.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                plan.popular 
                  ? "bg-[#2d4a44] text-white border-[#2d4a44] shadow-2xl lg:-translate-y-3" 
                  : "bg-white text-[#2d4a44] border-[#2d4a44]/10 shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                  Recommended Plan
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className={`text-2xl font-black ${plan.popular ? "text-white" : "text-[#2d4a44]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${plan.popular ? "text-white/70" : "text-[#2d4a44]/70"}`}>
                    {plan.desc}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl sm:text-5xl font-black tracking-tight ${plan.popular ? "text-[#c9a84c]" : "text-[#c9a84c]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs font-bold uppercase ${plan.popular ? "text-white/40" : "text-[#2d4a44]/50"}`}>
                    {plan.period}
                  </span>
                </div>

                <div className="pt-6 border-t border-[#2d4a44]/10 space-y-3">
                  <p className={`text-xs font-black uppercase tracking-wider ${plan.popular ? "text-[#c9a84c]" : "text-[#c9a84c]"}`}>
                    Package includes:
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((ft, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-[#c9a84c]" : "text-[#c9a84c]"}`} />
                        <span className={plan.popular ? "text-white/80" : "text-[#2d4a44]/80"}>
                          {ft}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="#book" 
                  className={`w-full py-3.5 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-md ${
                    plan.popular 
                      ? "bg-[#9b8ec4] hover:bg-[#8a7db5] text-white" 
                      : "bg-[#2d4a44] hover:bg-[#1a2c28] text-white"
                  }`}
                >
                  Purchase Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
