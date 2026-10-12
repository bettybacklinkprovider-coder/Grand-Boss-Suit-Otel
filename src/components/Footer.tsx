import { Link } from '../router/RouterContext';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#09090B] border-t border-[#710D24]/30 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Subtle top burgundy gradient glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#710D24]/15 via-transparent to-transparent pointer-events-none blur-2xl" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block group focus-visible:outline-none">
              <span className="font-brand text-2xl font-bold tracking-wider text-white group-hover:text-[#C9A27E] transition-colors">
                GRAND BOSS <span className="text-[#C9A27E] font-serif italic text-xl">Suit Otel</span>
              </span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              A refined boutique hospitality address in central Akdeniz, Mersin. Crafted for discerning guests seeking peaceful suites, personalized service, and Turkish warmth.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-[#C9A27E]">
              <span className="flex items-center gap-1.5 bg-[#3B0715]/40 border border-[#710D24]/30 px-3 py-1.5 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A27E]" />
                Official Hotel Direct Inquiries
              </span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">Mersin, Türkiye</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#C9A27E] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#710D24]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C9A27E] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#710D24]" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#C9A27E] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#710D24]" /> Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C9A27E] transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#710D24]" /> Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Hotel Inquiries & Location
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${HOTEL_INFO.phoneClean}`}
                  className="flex items-start gap-3 text-slate-300 hover:text-[#C9A27E] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#C9A27E] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    <strong className="text-white block font-medium">{HOTEL_INFO.phone}</strong>
                    <span className="text-xs text-slate-400">24/7 Telephone & WhatsApp Assistance</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#C9A27E] mt-0.5 shrink-0" />
                <span>
                  {HOTEL_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-[#C9A27E] shrink-0" />
                <span>Check-in: 14:00 · Check-out: 12:00</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-[#C9A27E] shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved. Mesudiye / Akdeniz / Mersin.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Direct Reservations</span>
            <span>·</span>
            <span>Boutique Hospitality</span>
            <span>·</span>
            <a href={`tel:${HOTEL_INFO.phoneClean}`} className="text-[#C9A27E] hover:underline">
              {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
