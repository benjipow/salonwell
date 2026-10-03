import React from "react";
import { 
  ShoppingBag, 
  Sparkles, 
  Globe, 
  Star, 
  Search, 
  BarChart3, 
  Megaphone, 
  MapPin, 
  Calendar, 
  ClipboardCheck, 
  Settings,
  ArrowRight
} from "lucide-react";

export const ServicesGrid = () => {
  const services = [
    {
      title: "Surge - Retail Sales Growth Software",
      desc: "Start meaningful conversations that change the typical sales pitch into a results-driven conversation with in-stock retail products.",
      icon: ShoppingBag,
      featured: true,
      badge: "FEATURED SOFTWARE",
      href: "#surge"
    },
    {
      title: "Signal - AI Search Visibility",
      desc: "Strengthen how your business shows up in AI-powered search and discovery tools, like ChatGPT, so more clients can find and trust you.",
      icon: Sparkles,
      featured: false,
      badge: "AI SEARCH"
    },
    {
      title: "Convert - Websites",
      desc: "Turn more visitors into bookings with a custom website built around your brand, your services, and your client experience.",
      icon: Globe,
      featured: false,
      badge: "WEBSITES"
    },
    {
      title: "Reputation - Online Reviews",
      desc: "Generate more Google reviews, filter negative feedback, and build the kind of trust that helps new clients choose your salon or spa.",
      icon: Star,
      featured: false,
      badge: "REVIEWS"
    },
    {
      title: "Discover - SEO",
      desc: "Stop relying on Ads and help your salon or spa rank higher in search results to get found by the right clients without high ad spend.",
      icon: Search,
      featured: false,
      badge: "SEO"
    },
    {
      title: "Data - Advanced Analytics",
      desc: "Use advanced analytics to understand what is working, where revenue is coming from, and how to make smarter growth decisions.",
      icon: BarChart3,
      featured: false,
      badge: "ANALYTICS"
    },
    {
      title: "Boost - Google Ads",
      desc: "Attract high-intent clients who are actively searching for the services you offer and ready to book an appointment now.",
      icon: Megaphone,
      featured: false,
      badge: "GOOGLE ADS"
    },
    {
      title: "Appear - Listings Management",
      desc: "Keep your salon or spa accurate, visible, and easy to find across Google, Apple Maps, Bing, Yelp, and over 100 directory apps.",
      icon: MapPin,
      featured: false,
      badge: "LISTINGS"
    },
    {
      title: "Engage - Social Media Scheduling",
      desc: "Stay consistent on social media with strategic scheduling tools that support your brand, saving you hours every week.",
      icon: Calendar,
      featured: false,
      badge: "SOCIAL"
    },
    {
      title: "Lead - Custom Forms & Quizzes",
      desc: "Capture more inquiries with custom forms for consultations, wedding requests, employment applications, and appointment leads.",
      icon: ClipboardCheck,
      featured: false,
      badge: "FORMS"
    },
    {
      title: "Flow - Booking Software Support",
      desc: "Create a smoother client experience by allowing us to optimize the booking flow and salon management software you rely on.",
      icon: Settings,
      featured: false,
      badge: "INTEGRATION"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#f4f1ea] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#2d4a44]/10 text-[#2d4a44] text-xs font-bold uppercase tracking-wider shadow-sm">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#2d4a44] tracking-tight">
            Marketing Solutions for Salons and Spas
          </h2>
          <p className="text-[#2d4a44]/70 text-base sm:text-lg">
            Purpose-built technology and full-service execution to drive real foot traffic and retail sales.
          </p>
        </div>

        {/* Services Grid (Dark cards with vibrant icons matching the model visual) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            if (srv.featured) {
              return (
                <div 
                  key={idx} 
                  id="surge"
                  className="p-8 rounded-3xl bg-gradient-to-br from-[#9b8ec4] to-[#8a7db5] text-white shadow-xl border border-white/40 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-slate-900 text-[#c9a84c] px-2.5 py-1 rounded-md">
                        {srv.badge}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white leading-tight">
                      {srv.title}
                    </h3>

                    <p className="text-white/90 font-medium text-sm sm:text-base leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-6 relative z-10">
                    <a 
                      href="#book" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-[#2d4a44] font-extrabold text-sm transition-all shadow-md group-hover:gap-3"
                    >
                      Learn More &amp; Start Trial
                      <ArrowRight className="w-4 h-4 text-[#c9a84c]" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-3xl bg-[#2d4a44] text-white border border-[#1a2c28] hover:border-[#9b8ec4]/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 bg-[#1a2c28] px-2.5 py-1 rounded-md">
                      {srv.badge}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#9b8ec4] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#9b8ec4] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1a2c28]/80">
                  <a 
                    href="#book" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9b8ec4] hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
