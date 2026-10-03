import React, { useState } from "react";
import { Quote, Star, CheckCircle, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AuditAndTestimonials = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    salonName: "",
    ownerName: "",
    email: "",
    phone: "",
    website: "",
    serviceType: "Hair Salon"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const testimonials = [
    {
      quote: "SalonWell helped us transform our online presence with well-planned strategies that quickly increased our booking traffic and retail revenue.",
      author: "Michael Enzo Trivet",
      salon: "BOND Salon & Studio",
      rating: 5,
      avatar: "https://vibe.filesafe.space/1787519097729165570/assets/c20c3b4b-4247-4097-8b02-e3fe485d4168.png"
    },
    {
      quote: "Working with SalonWell was smooth from start to finish. Their Surge software alone boosted our retail sales by 34% in the first 60 days.",
      author: "Christina Kirkey",
      salon: "Pinup Studio Salon",
      rating: 5,
      avatar: "https://vibe.filesafe.space/1787519097729165570/assets/d851b92f-d3c0-49ad-bc0a-3d931af49749.png"
    },
    {
      quote: "Our Google reviews doubled, and we now rank #1 in our city on ChatGPT and Google Search for hair extensions and facial spas.",
      author: "Bonnie Plummer",
      salon: "Vivid Salon & Spa",
      rating: 5,
      avatar: "https://vibe.filesafe.space/1787519097729165570/assets/1f758bfb-af12-4a50-8a45-a14b2a855e1e.png"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Audit Request Submitted!",
        description: "Our beauty growth team will analyze your website & local rankings within 24 hours."
      });
      setFormData({
        salonName: "",
        ownerName: "",
        email: "",
        phone: "",
        website: "",
        serviceType: "Hair Salon"
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-[#f4f1ea] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Call to Action Banner */}
        <div id="book" className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#2d4a44] border border-[#1a2c28]">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://vibe.filesafe.space/1787519097729165570/assets/78ec2de8-9dbc-4f9b-af51-fd6a9221c855.png" 
              alt="Stylist hair drying" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Your Next Stage Of Growth Starts With SalonWell
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              We help salons and spas get found, get booked, and grow revenue with custom-built marketing and software designed around the real client journey.
            </p>

            {/* Bottom gold accent call bar */}
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#9b8ec4] to-[#8a7db5] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <span className="text-xs font-black uppercase tracking-wider block text-white/80">
                  Ready to Accelerate Your Digital Journey?
                </span>
                <span className="text-xl sm:text-2xl font-black block">
                  Book A Call With Our Team
                </span>
              </div>
              <a 
                href="#audit" 
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#2d4a44] text-white hover:bg-[#1a2c28] font-extrabold text-sm transition-all shadow-md shrink-0"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Free Audit Form Section */}
        <div id="audit" className="grid lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#2d4a44]/10 shadow-xl">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
              Free Analysis
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d4a44] tracking-tight">
              Get Your Free Salon &amp; Spa Business Audit
            </h2>
            <p className="text-[#2d4a44]/70 text-sm sm:text-base leading-relaxed">
              Discover how your salon ranks on Google, ChatGPT, Apple Maps, and local search. We'll analyze your website conversion rates and retail growth potential.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm font-semibold text-[#2d4a44]/80">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] shrink-0" />
                <span>Local SEO &amp; Google Business Profile Score</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-[#2d4a44]/80">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] shrink-0" />
                <span>ChatGPT &amp; AI Search Visibility Audit</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-[#2d4a44]/80">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] shrink-0" />
                <span>Website Speed &amp; Booking Conversion Report</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-[#f4f1ea] p-6 sm:p-8 rounded-2xl border border-[#2d4a44]/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#2d4a44] mb-1">
                    Salon / Spa Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    value={formData.salonName}
                    onChange={e => setFormData({ ...formData, salonName: e.target.value })}
                    placeholder="e.g. Velvet Hair Lounge" 
                    className="w-full px-4 py-3 rounded-xl border border-[#2d4a44]/15 focus:outline-none focus:ring-2 focus:ring-[#9b8ec4] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#2d4a44] mb-1">
                    Owner / Manager Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    value={formData.ownerName}
                    onChange={e => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins" 
                    className="w-full px-4 py-3 rounded-xl border border-[#2d4a44]/15 focus:outline-none focus:ring-2 focus:ring-[#9b8ec4] text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#2d4a44] mb-1">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@velvethair.com" 
                    className="w-full px-4 py-3 rounded-xl border border-[#2d4a44]/15 focus:outline-none focus:ring-2 focus:ring-[#9b8ec4] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#2d4a44] mb-1">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000" 
                    className="w-full px-4 py-3 rounded-xl border border-[#2d4a44]/15 focus:outline-none focus:ring-2 focus:ring-[#9b8ec4] text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#2d4a44] mb-1">
                    Website URL
                  </label>
                  <input 
                    type="url" 
                    value={formData.website}
                    onChange={e => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://velvethair.com" 
                    className="w-full px-4 py-3 rounded-xl border border-[#2d4a44]/15 focus:outline-none focus:ring-2 focus:ring-[#9b8ec4] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#2d4a44] mb-1">
                    Business Type
                  </label>
                  <select 
                    value={formData.serviceType}
                    onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#2d4a44]/15 focus:outline-none focus:ring-2 focus:ring-[#9b8ec4] text-sm bg-white"
                  >
                    <option value="Hair Salon">Hair Salon</option>
                    <option value="Skin Care & Facial Spa">Skin Care &amp; Facial Spa</option>
                    <option value="Barbershop / Blowout Bar">Barbershop / Blowout Bar</option>
                    <option value="MedSpa / Aesthetics">MedSpa / Aesthetics</option>
                    <option value="Nail Salon / Lash Studio">Nail Salon / Lash Studio</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#9b8ec4] hover:bg-[#8a7db5] text-white font-extrabold text-base shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Generating Audit..." : "Claim Free Audit Now"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-[#c9a84c] uppercase tracking-wider block mb-1">
              Customer Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d4a44] tracking-tight">
              What Salon &amp; Spa Owners Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((tm, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-[#2d4a44]/10 shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(tm.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[#2d4a44]/80 italic text-sm sm:text-base leading-relaxed">
                    "{tm.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#2d4a44]/10">
                  <img src={tm.avatar} alt={tm.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#9b8ec4]/30" />
                  <div>
                    <h4 className="text-sm font-extrabold text-[#2d4a44]">{tm.author}</h4>
                    <p className="text-xs font-semibold text-[#2d4a44]/60">{tm.salon}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
