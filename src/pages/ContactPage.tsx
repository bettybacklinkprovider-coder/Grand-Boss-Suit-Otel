import { HOTEL_INFO } from '../data/hotelData';
import BookingForm from '../components/BookingForm';
import HotelMap from '../components/HotelMap';
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Building
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.images.entrance}
            alt="Grand Boss Suit Otel entrance canopy"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/95 via-[#3B0715]/85 to-[#09090B]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171316]/80 border border-[#710D24]/60 text-xs tracking-widest text-[#C9A27E] uppercase mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A27E]" />
            <span>24 / 7 Dedicated Reception Desk</span>
          </div>

          <h1 className="font-brand text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Contact <span className="text-[#C9A27E] font-serif italic">& Book Your Stay</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-6">
            Direct communication with Grand Boss Suit Otel in Mersin. Fast answers, clear terms, and guaranteed attention.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="font-mono text-[#C9A27E]">{HOTEL_INFO.phone}</span>
            <span>·</span>
            <span>Akdeniz / Mersin</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-[#09090B] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info Cards & Quick Calling */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
                  Official Contact Channels
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                  Reach Our Hotel Team
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our front desk operates continuous 24-hour reception in Mesudiye, Mersin. Whether you need immediate room booking or location assistance, our staff is at your disposal.
                </p>
              </div>

              {/* Direct Telephone Card */}
              <div className="glass-panel p-6 rounded-2xl border border-[#710D24]/40 hover:border-[#710D24] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#710D24]/20 border border-[#710D24]/40 flex items-center justify-center text-[#C9A27E] shrink-0 mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneClean}`}
                      className="text-lg sm:text-xl font-bold text-white font-mono hover:text-[#C9A27E] transition-colors block mt-0.5"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-400 mt-1">
                      Available 24 hours a day for direct inquiries & check-ins.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      <a
                        href={`tel:${HOTEL_INFO.phoneClean}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] hover:from-[#8F122F] hover:to-[#540A1D] border border-[#710D24]/60 transition-all"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#C9A27E]" />
                        <span>Call Reception</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Address Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A27E] shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">
                      Hotel Address
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-0.5">
                      {HOTEL_INFO.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {HOTEL_INFO.address}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                      <Building className="w-3.5 h-3.5 text-[#C9A27E]" />
                      <span>District: Akdeniz · Mersin, Türkiye</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-[#C9A27E] text-xs font-semibold uppercase mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Reception Hours</span>
                  </div>
                  <p className="text-xs text-white font-medium">24 / 7 Continuous</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Check-in: 14:00 · Out: 12:00</p>
                </div>

                <div className="glass-panel p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-[#C9A27E] text-xs font-semibold uppercase mb-1">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Inquiries</span>
                  </div>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-xs text-white font-medium hover:text-[#C9A27E] truncate block"
                  >
                    {HOTEL_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Written confirmation</p>
                </div>
              </div>

              {/* Interactive Hotel Map */}
              <div className="pt-2">
                <HotelMap />
              </div>
            </div>

            {/* Right: Comprehensive Booking Form */}
            <div className="lg:col-span-7">
              <BookingForm
                title="Book Your Stay Inquiry"
                subtitle="Submit your preferred dates for real-time front desk verification. No fake booking confirmations; our staff calls or emails you directly to finalize your reservation."
              />

              {/* Trust & Guarantee Box */}
              <div className="mt-6 p-5 glass-panel rounded-xl border border-white/5 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-[#C9A27E] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#C9A27E]" />
                  <span>Direct Booking Assurance</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  When booking directly through Grand Boss Suit Otel channels, you avoid intermediary surcharges and receive direct coordination with our on-site team. Free cancellation terms and check-in flexibility can be discussed directly with reception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
