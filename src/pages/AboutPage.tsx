import { HOTEL_INFO, HOTEL_HIGHLIGHTS } from '../data/hotelData';
import { Link } from '../router/RouterContext';
import {
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  MapPin,
  HeartHandshake,
  Coffee,
  CheckCircle,
  Building,
  KeyRound
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background image & overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.images.entrance}
            alt="Grand Boss Suit Otel canopy entrance"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/95 via-[#3B0715]/85 to-[#09090B]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171316]/80 border border-[#710D24]/60 text-xs tracking-widest text-[#C9A27E] uppercase mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A27E]" />
            <span>Discover Our Philosophy</span>
          </div>

          <h1 className="font-brand text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            About <span className="text-[#C9A27E] font-serif italic">Grand Boss Suit Otel</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-6">
            Boutique comfort in Mesudiye, Akdeniz — crafted for deep rest and respectful Turkish hospitality.
          </p>

          <div className="flex items-center justify-center gap-3 text-xs text-slate-400">
            <span>Mesudiye, Fasih Kayabalı Cd. No:107 D</span>
            <span>·</span>
            <span>Akdeniz / Mersin, Türkiye</span>
          </div>
        </div>
      </section>

      {/* Detailed Introduction */}
      <section className="py-16 lg:py-24 bg-[#09090B] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
                Our Story & Commitment
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Designed for Serenity in the Heart of Mersin
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Grand Boss Suit Otel was conceived with a clear principle: to provide travelers with an intimate, modern sanctuary in one of the Mediterranean's most dynamic trade and maritime cities. Situated on Fasih Kayabalı Caddesi in the central Akdeniz district of Mersin, our property offers quick connectivity to the city center and maritime terminals while preserving an atmosphere of quiet refinement inside.
                </p>
                <p>
                  Every suite is tailored to provide generous personal space, ergonomic bedding, soundproofing, and contemporary design accents. Whether arriving after a lengthy journey along the coast or concluding a demanding day of business meetings, our guests enter a calm, climate-controlled space designed purely for rest.
                </p>
                <p>
                  We believe in authentic hospitality—where service is attentive without intrusion, inquiries are addressed promptly at any hour, and guest comfort remains our paramount objective.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-[#171316] border border-white/10 px-3.5 py-2 rounded-lg">
                  <Building className="w-4 h-4 text-[#C9A27E]" />
                  <span>Central Akdeniz Location</span>
                </div>
                <div className="flex items-center gap-2 bg-[#171316] border border-white/10 px-3.5 py-2 rounded-lg">
                  <KeyRound className="w-4 h-4 text-[#C9A27E]" />
                  <span>Private Boutique Suites</span>
                </div>
                <div className="flex items-center gap-2 bg-[#171316] border border-white/10 px-3.5 py-2 rounded-lg">
                  <HeartHandshake className="w-4 h-4 text-[#C9A27E]" />
                  <span>24/7 Front Desk Care</span>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#710D24]/30 shadow-2xl">
                <img
                  src={HOTEL_INFO.images.lobby}
                  alt="Grand Boss Suit Otel lobby and welcoming reception counter"
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 glass-panel rounded-xl">
                  <span className="text-xs font-semibold text-[#C9A27E] block mb-0.5">
                    Dedicated Service
                  </span>
                  <p className="text-xs text-white">
                    Our front desk is staffed 24 hours a day to welcome you whenever you arrive in Mersin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality & Guest Experience */}
      <section className="py-16 lg:py-24 bg-[#171316] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
              Values & Standards
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-1">
              Hospitality & Guest Experience
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              The details that turn a simple hotel stay into a rejuvenating stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-6 rounded-2xl border border-[#710D24]/30">
              <div className="w-12 h-12 rounded-xl bg-[#3B0715]/60 border border-[#710D24]/50 flex items-center justify-center text-[#C9A27E] mb-5">
                <HeartHandshake className="w-6 h-6 text-[#C9A27E]" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-white mb-2">
                Warm Turkish Hospitality
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hospitality in Mersin is rooted in respect and personal warmth. Our team treats every guest with attentiveness, providing personalized assistance for local routes, dining, and travel coordination.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-[#710D24]/30">
              <div className="w-12 h-12 rounded-xl bg-[#3B0715]/60 border border-[#710D24]/50 flex items-center justify-center text-[#C9A27E] mb-5">
                <ShieldCheck className="w-6 h-6 text-[#C9A27E]" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-white mb-2">
                Spotless Hygiene & Cleanliness
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every suite undergoes meticulous sanitation and linen refreshment before guest arrival. We uphold rigorous cleanliness standards across all bedrooms, private marble bathrooms, and common areas.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-[#710D24]/30">
              <div className="w-12 h-12 rounded-xl bg-[#3B0715]/60 border border-[#710D24]/50 flex items-center justify-center text-[#C9A27E] mb-5">
                <Coffee className="w-6 h-6 text-[#C9A27E]" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-white mb-2">
                Comfort & Convenience
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                From morning breakfast flavors to in-room coffee and high-speed Wi-Fi, every amenity is chosen to provide effortless convenience throughout your stay in Mersin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Hotel Photography Showcase */}
      <section className="py-16 lg:py-24 bg-[#09090B] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
              Property Architecture
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-1">
              Hotel Atmosphere
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              A photographic tour through our suites, dining, and tranquil outdoor areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden border border-[#710D24]/30 h-72 group">
              <img
                src={HOTEL_INFO.images.deluxe}
                alt="Deluxe Suite bedroom interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-medium text-white">
                Deluxe Suite Bedroom
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#710D24]/30 h-72 group">
              <img
                src={HOTEL_INFO.images.breakfast}
                alt="Breakfast Lounge with Turkish specialties"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-medium text-white">
                Breakfast & Dining Lounge
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#710D24]/30 h-72 group">
              <img
                src={HOTEL_INFO.images.terrace}
                alt="Terrace seating overlooking Mersin"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-medium text-white">
                City & Twilight Terrace
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section Using Icons */}
      <section className="py-16 lg:py-20 bg-[#171316] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
              Key Highlights
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-1">
              Why Stay at Grand Boss Suit Otel
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_HIGHLIGHTS.map((item, index) => {
              const highlightImages = [
                HOTEL_INFO.images.entrance,
                HOTEL_INFO.images.lobby,
                HOTEL_INFO.images.deluxe,
                HOTEL_INFO.images.breakfast,
              ];
              const cardImage = highlightImages[index % highlightImages.length];

              return (
                <div key={index} className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#710D24] transition-all flex flex-col justify-between hover:-translate-y-1 shadow-lg">
                  <div>
                    <div className="relative h-40 overflow-hidden bg-black/40">
                      <img
                        src={cardImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171316] via-[#171316]/30 to-transparent" />
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#C9A27E]">
                        <CheckCircle className="w-4 h-4 text-[#C9A27E]" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#C9A27E] transition-colors">{item.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="px-5 pb-4 pt-2 border-t border-white/5 text-[11px] text-[#C9A27E]">
                    Grand Boss Hospitality Guarantee
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="py-16 bg-gradient-to-b from-[#171316] to-[#09090B] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel-deep p-8 sm:p-12 rounded-3xl border border-[#710D24]/50 shadow-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E] block mb-2">
              Ready to Reserve?
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mb-4">
              We Look Forward to Welcoming You
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Plan your visit to Mersin with ease. Book your suite online or call our 24/7 reception team directly for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] hover:from-[#8F122F] hover:to-[#540A1D] border border-[#710D24]/60 shadow-lg"
              >
                <span>Contact & Book Your Stay</span>
                <ArrowRight className="w-4 h-4 text-[#C9A27E]" />
              </Link>
              <a
                href={`tel:${HOTEL_INFO.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 glass-panel hover:text-white border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#C9A27E]" />
                <span>Call {HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
