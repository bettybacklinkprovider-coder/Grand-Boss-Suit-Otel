import { useState } from 'react';
import { HOTEL_INFO, ROOMS_DATA, GALLERY_DATA, HOTEL_HIGHLIGHTS } from '../data/hotelData';
import { GalleryPhoto, RoomSuite } from '../types';
import { useRouter, Link } from '../router/RouterContext';
import BookingForm from '../components/BookingForm';
import HotelMap from '../components/HotelMap';
import LightboxModal from '../components/LightboxModal';
import BookingInquiryModal from '../components/BookingInquiryModal';
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Maximize2,
  Sparkles,
  Wifi,
  Wind,
  Bed,
  Tv,
  Coffee,
  Check
} from 'lucide-react';

export default function HomePage() {
  const { navigate } = useRouter();

  // Lightbox state for Section 5 Gallery
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  // Quick inquiry modal for room cards
  const [selectedRoomModal, setSelectedRoomModal] = useState<RoomSuite | null>(null);

  // Take the 3 verified preview rooms for Section 3
  const previewRooms = ROOMS_DATA.slice(0, 3);

  // Take at least 8 distinct gallery images for Section 5
  const galleryItems = GALLERY_DATA.slice(0, 9);

  return (
    <div className="relative w-full">
      {/* ========================================================= */}
      {/* SECTION 1: LUXURY HERO SECTION                            */}
      {/* ========================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Full-screen background image with zoom animation effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={HOTEL_INFO.images.hero}
            alt="Grand Boss Suit Otel Mediterranean facade at twilight"
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] duration-1000 motion-safe:transition-transform motion-safe:hover:scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Dark Burgundy-Red Overlay with balanced gradient for building visibility and text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/80 via-[#3B0715]/55 to-[#09090B]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(113,13,36,0.25)_0%,rgba(9,9,11,0.75)_85%)]" />
        </div>

        {/* Hero Content with smooth fade-in */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 sm:mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171316]/80 border border-[#710D24]/60 text-xs tracking-widest text-[#C9A27E] uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A27E]" />
            <span>Akdeniz · Mersin, Türkiye</span>
          </div>

          <h1 className="font-brand text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
            GRAND BOSS <span className="text-[#C9A27E] font-serif italic block sm:inline font-normal">Suit Otel</span>
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-slate-200 mb-6 font-light">
            “Experience Luxury. Discover Comfort.”
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Located in the heart of Mersin, Grand Boss Suit Otel offers sophisticated boutique suites, tranquil interiors, and round-the-clock Turkish hospitality crafted for your peace of mind.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] hover:from-[#8F122F] hover:to-[#540A1D] border border-[#710D24]/60 shadow-xl shadow-red-950/50 hover:shadow-red-900/60 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Our Rooms</span>
              <ArrowRight className="w-4 h-4 text-[#C9A27E]" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white glass-panel hover:bg-[#710D24]/20 border border-white/15 hover:border-[#710D24]/50 transition-all transform hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Quick trust strip */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-400">
            <div className="flex flex-col items-center">
              <span className="text-white font-semibold">Fasih Kayabalı Cd.</span>
              <span className="text-[11px] text-slate-400">Central Akdeniz, Mersin</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-semibold">24 / 7 Front Desk</span>
              <span className="text-[11px] text-slate-400">Continuous Guest Care</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-semibold">Bespoke Suites</span>
              <span className="text-[11px] text-slate-400">High Soundproofing</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-semibold">+90 555 146 5133</span>
              <span className="text-[11px] text-[#C9A27E]">Direct Inquiries</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: WELCOME TO GRAND BOSS SUIT OTEL                */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#09090B] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Column 1: Descriptive Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
                <span>Welcome to Mersin</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Welcome to <br />
                <span className="text-[#C9A27E] italic">Grand Boss Suit Otel</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nestled on Fasih Kayabalı Caddesi in the heart of Mersin's Akdeniz district, Grand Boss Suit Otel offers an atmosphere of composed comfort and genuine warmth. Whether you visit the Mediterranean coast for commerce, harbor business, or personal leisure, our suits are arranged to ensure complete tranquility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div className="glass-panel p-4 rounded-xl border border-white/5">
                  <h4 className="text-sm font-semibold text-white mb-1">Tailored Comfort</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Quiet, climate-controlled rooms with orthopedic mattresses and plush linens.
                  </p>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-white/5">
                  <h4 className="text-sm font-semibold text-white mb-1">Heart of Akdeniz</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Direct access to Mersin business quarters, transport hubs, and seaside promenades.
                  </p>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-white/5">
                  <h4 className="text-sm font-semibold text-white mb-1">Attentive Hospitality</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Round-the-clock reception to greet you and coordinate any personalized request.
                  </p>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-white/5">
                  <h4 className="text-sm font-semibold text-white mb-1">Modern Amenities</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Fast Wi-Fi, smart television, marble rain showers, and daily room care.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#171316] hover:bg-[#710D24]/30 border border-[#710D24]/50 hover:border-[#710D24] transition-all group"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A27E] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Column 2: Hotel Photography Display */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#710D24]/30 shadow-2xl group">
                <img
                  src={HOTEL_INFO.images.entrance}
                  alt="Grand Boss Suit Otel entrance canopy at night"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 glass-panel rounded-xl border border-[#710D24]/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#C9A27E] font-medium block">
                        Akdeniz / Mersin
                      </span>
                      <span className="text-sm font-semibold text-white">
                        Grand Boss Suit Otel Facade & Entrance
                      </span>
                    </div>
                    <span className="text-xs text-slate-300 font-mono">24/7 Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: ROOMS & SUITES PREVIEW                         */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#171316] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
              Accommodation
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
              Rooms & Suites Preview
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              Explore our meticulously appointed suits, each designed to balance calm aesthetics with modern functionality.
            </p>
          </div>

          {/* 3 Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewRooms.map((room) => (
              <div
                key={room.id}
                className="group glass-panel rounded-2xl overflow-hidden border border-[#710D24]/30 hover:border-[#710D24] transition-all duration-300 flex flex-col hover:-translate-y-1.5 shadow-lg hover:shadow-xl hover:shadow-red-950/40"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-black/40">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171316] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#09090B]/80 border border-[#710D24]/40 text-xs font-medium text-[#C9A27E]">
                    {room.category} Suite
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs text-slate-300 font-mono bg-black/60 px-2.5 py-0.5 rounded">
                    {room.size}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-white group-hover:text-[#C9A27E] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#C9A27E] font-medium mt-0.5 mb-3">
                      {room.tagline}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                      {room.description}
                    </p>

                    {/* Verified amenities list */}
                    <div className="border-t border-white/5 pt-3 pb-4">
                      <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-2">
                        Included Amenities:
                      </div>
                      <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                        {room.amenities.slice(0, 4).map((amenity, i) => (
                          <li key={i} className="flex items-center gap-1.5 truncate">
                            <Check className="w-3 h-3 text-[#C9A27E] shrink-0" />
                            <span className="truncate">{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedRoomModal(room)}
                      className="px-4 py-2 rounded-lg text-xs font-medium text-[#C9A27E] hover:text-white bg-[#710D24]/20 hover:bg-[#710D24]/50 border border-[#710D24]/40 transition-colors"
                    >
                      Request Booking
                    </button>
                    <Link
                      to="/rooms"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#C9A27E] transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#710D24]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom link to all rooms */}
          <div className="mt-12 text-center">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A27E] hover:text-white transition-colors"
            >
              <span>Explore All Suites & Configurations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: LUXURY EXPERIENCE                              */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#09090B] relative overflow-hidden border-t border-white/5">
        {/* Ambient burgundy background gradients and soft glowing highlights */}
        <div 
          className="absolute -top-32 left-1/4 w-96 h-96 bg-[#710D24]/20 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true"
        />
        <div 
          className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#3B0715]/30 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
              Guest Experience
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
              The Luxury Experience
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              Thoughtfully curated interiors, attentive care, and quiet comfort throughout your entire Mersin journey.
            </p>
          </div>

          {/* Bento-grid of experiences with high-resolution hotel photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Restful Suites */}
            <div className="group glass-panel rounded-2xl overflow-hidden border border-[#710D24]/30 hover:border-[#710D24] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-red-950/40">
              <div>
                <div className="relative h-48 overflow-hidden bg-black/40">
                  <img
                    src={HOTEL_INFO.images.deluxe}
                    alt="Restful suites plush king bed and ambient mood lighting"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171316] via-[#171316]/30 to-transparent" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#C9A27E]">
                    <Bed className="w-4 h-4 text-[#C9A27E]" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-editorial text-lg font-bold text-white mb-2 group-hover:text-[#C9A27E] transition-colors">
                    Restful Suites
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Deep orthopedic mattresses, luxury duvets, and double-glazed soundproofed windows ensure undisturbed sleep.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-white/5 text-[11px] text-[#C9A27E] font-medium flex items-center justify-between">
                <span>Premium Bedding Collection</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">Orthopedic</span>
              </div>
            </div>

            {/* Card 2: 24/7 Front Desk */}
            <div className="group glass-panel rounded-2xl overflow-hidden border border-[#710D24]/30 hover:border-[#710D24] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-red-950/40">
              <div>
                <div className="relative h-48 overflow-hidden bg-black/40">
                  <img
                    src={HOTEL_INFO.images.lobby}
                    alt="Grand Boss Suit Otel 24/7 reception desk and concierge"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171316] via-[#171316]/30 to-transparent" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#C9A27E]">
                    <Clock className="w-4 h-4 text-[#C9A27E]" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-editorial text-lg font-bold text-white mb-2 group-hover:text-[#C9A27E] transition-colors">
                    24/7 Front Desk
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Continuous front desk attendance to facilitate late check-ins, local transport dispatch, and daily room service.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-white/5 text-[11px] text-[#C9A27E] font-medium flex items-center justify-between">
                <span>Always At Your Service</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">Round-the-Clock</span>
              </div>
            </div>

            {/* Card 3: High-Speed Wi-Fi */}
            <div className="group glass-panel rounded-2xl overflow-hidden border border-[#710D24]/30 hover:border-[#710D24] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-red-950/40">
              <div>
                <div className="relative h-48 overflow-hidden bg-black/40">
                  <img
                    src={HOTEL_INFO.images.executive}
                    alt="High-speed internet in executive lounge with smart TV"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171316] via-[#171316]/30 to-transparent" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#C9A27E]">
                    <Wifi className="w-4 h-4 text-[#C9A27E]" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-editorial text-lg font-bold text-white mb-2 group-hover:text-[#C9A27E] transition-colors">
                    High-Speed Wi-Fi
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dedicated fiber connectivity in all rooms and common spaces for seamless remote work and streaming.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-white/5 text-[11px] text-[#C9A27E] font-medium flex items-center justify-between">
                <span>Reliable Business Speed</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">Fiber Optic</span>
              </div>
            </div>

            {/* Card 4: Prime Akdeniz */}
            <div className="group glass-panel rounded-2xl overflow-hidden border border-[#710D24]/30 hover:border-[#710D24] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-red-950/40">
              <div>
                <div className="relative h-48 overflow-hidden bg-black/40">
                  <img
                    src={HOTEL_INFO.images.terrace}
                    alt="Prime Akdeniz location overlooking Mersin Mediterranean cityscape"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171316] via-[#171316]/30 to-transparent" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#C9A27E]">
                    <MapPin className="w-4 h-4 text-[#C9A27E]" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-editorial text-lg font-bold text-white mb-2 group-hover:text-[#C9A27E] transition-colors">
                    Prime Akdeniz
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Convenient positioning in Mesudiye, offering quick routes to port logistics, commerce, and dining avenues.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-3 border-t border-white/5 text-[11px] text-[#C9A27E] font-medium flex items-center justify-between">
                <span>Effortless Navigation</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">Mersin Harbor</span>
              </div>
            </div>
          </div>

          {/* Large Atmospheric Visual Callout */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-[#710D24]/40 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 sm:h-80 lg:h-auto overflow-hidden">
                <img
                  src={HOTEL_INFO.images.breakfast}
                  alt="Hotel morning breakfast and authentic Turkish hospitality"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 sm:p-12 glass-panel-deep flex flex-col justify-center">
                <span className="text-xs font-semibold text-[#C9A27E] uppercase tracking-widest mb-2">
                  Turkish Hospitality
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-4">
                  Warmth in Every Greeting
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  At Grand Boss Suit Otel, we pride ourselves on authentic care. From the freshly brewed Turkish tea to spotless suites prepared before your arrival, our goal is to make every stay restful and smooth.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={`tel:${HOTEL_INFO.phoneClean}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] border border-[#710D24]/60"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C9A27E]" />
                    <span>Speak with Reception</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: HOTEL GALLERY (AT LEAST 8 DISTINCT IMAGES)      */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#171316] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
                Visual Showcase
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
                Hotel Gallery
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Nine authentic viewpoints across our suites, entrance, reception, lounge, and terrace.
              </p>
            </div>
            <div className="text-xs text-slate-400">
              Click any photograph to open the high-resolution lightbox preview
            </div>
          </div>

          {/* Grid Layout of 9 distinct hotel images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative rounded-xl overflow-hidden border border-[#710D24]/30 hover:border-[#710D24] cursor-pointer bg-black/40 shadow-lg hover:shadow-xl transition-all duration-300 h-64 sm:h-72"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-[#09090B]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover overlay content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#C9A27E] px-2.5 py-1 rounded bg-black/60 border border-white/10">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                      <Maximize2 className="w-4 h-4 text-[#C9A27E]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-editorial text-base font-semibold text-white group-hover:text-[#C9A27E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: CONTACT & BOOKING                              */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#09090B] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
              Reservations & Direct Assistance
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
              Contact & Booking
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              Reach out directly to Grand Boss Suit Otel. Submit an inquiry form or call our front desk directly for real-time room availability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <BookingForm
                title="Direct Reservation Inquiry"
                subtitle="Fill in your dates and preferences. Our front desk team verifies availability and contacts you directly."
              />
            </div>

            {/* Right: Contact Details & Location Map */}
            <div className="lg:col-span-5 space-y-6">
              {/* Hotel Contact Card */}
              <div className="glass-panel p-6 rounded-2xl border border-[#710D24]/40 space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="font-brand text-lg font-bold text-white">
                    {HOTEL_INFO.name}
                  </span>
                  <span className="text-xs text-[#C9A27E] font-medium">Akdeniz / Mersin</span>
                </div>

                <div className="space-y-3 text-sm">
                  <a
                    href={`tel:${HOTEL_INFO.phoneClean}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#3B0715]/40 border border-[#710D24]/40 hover:bg-[#710D24]/30 transition-all text-white group"
                  >
                    <Phone className="w-5 h-5 text-[#C9A27E] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-xs text-slate-400 block">Official Telephone:</span>
                      <strong className="text-base text-white tracking-wide font-mono">
                        {HOTEL_INFO.phone}
                      </strong>
                      <span className="text-[11px] text-[#C9A27E] block mt-0.5">
                        Click to call directly from your device
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-slate-300">
                    <MapPin className="w-5 h-5 text-[#C9A27E] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs text-slate-400 block">Complete Address:</span>
                      <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                        {HOTEL_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-slate-300">
                    <Clock className="w-5 h-5 text-[#C9A27E] shrink-0" />
                    <div>
                      <span className="text-xs text-slate-400 block">Reception & Check-in:</span>
                      <span className="text-xs text-slate-200">
                        24 Hours Front Desk · Check-in 14:00 · Check-out 12:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <HotelMap />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={activePhoto}
        photos={galleryItems}
        onClose={() => setActivePhoto(null)}
        onNavigate={(p) => setActivePhoto(p)}
      />

      {/* Room Modal */}
      {selectedRoomModal && (
        <BookingInquiryModal
          isOpen={!!selectedRoomModal}
          onClose={() => setSelectedRoomModal(null)}
          roomId={selectedRoomModal.id}
          roomName={selectedRoomModal.name}
        />
      )}
    </div>
  );
}
