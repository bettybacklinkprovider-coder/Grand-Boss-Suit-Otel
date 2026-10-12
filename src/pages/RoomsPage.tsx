import { useState } from 'react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';
import { RoomSuite } from '../types';
import BookingForm from '../components/BookingForm';
import BookingInquiryModal from '../components/BookingInquiryModal';
import {
  Sparkles,
  Phone,
  Bed,
  Users,
  Maximize2,
  Check,
  ShieldCheck,
  ArrowRight,
  Info
} from 'lucide-react';

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeRoomModal, setActiveRoomModal] = useState<RoomSuite | null>(null);

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.images.deluxe}
            alt="Luxury Suite interior"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/95 via-[#3B0715]/85 to-[#09090B]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171316]/80 border border-[#710D24]/60 text-xs tracking-widest text-[#C9A27E] uppercase mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A27E]" />
            <span>Accommodation Sanctuary</span>
          </div>

          <h1 className="font-brand text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Our Rooms <span className="text-[#C9A27E] font-serif italic">& Suites</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-6">
            Meticulously appointed suites in central Mersin, tailored for calm nights and effortless rejuvenation.
          </p>

          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            All rooms feature high soundproofing, individually controlled air conditioning, en-suite marble bathrooms, and dedicated high-speed Wi-Fi.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-[#09090B] border-t border-b border-white/5 sticky top-[68px] z-30 backdrop-blur-md bg-[#09090B]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Showing <strong className="text-white">{filteredRooms.length}</strong> room suites available for booking inquiry
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#171316] rounded-xl border border-white/10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#710D24] to-[#3B0715] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Suites
            </button>
            <button
              onClick={() => setSelectedCategory('deluxe')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === 'deluxe'
                  ? 'bg-gradient-to-r from-[#710D24] to-[#3B0715] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Deluxe King
            </button>
            <button
              onClick={() => setSelectedCategory('executive')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === 'executive'
                  ? 'bg-gradient-to-r from-[#710D24] to-[#3B0715] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => setSelectedCategory('standard')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === 'standard'
                  ? 'bg-gradient-to-r from-[#710D24] to-[#3B0715] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard
            </button>
          </div>
        </div>
      </section>

      {/* Grid of Room Cards */}
      <section className="py-16 lg:py-24 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="group glass-panel rounded-2xl overflow-hidden border border-[#710D24]/30 hover:border-[#710D24] transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-red-950/40"
              >
                <div>
                  {/* Large Room Image */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-black/40">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171316] via-transparent to-transparent opacity-90" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-[#09090B]/85 border border-[#710D24]/50 text-xs font-semibold text-[#C9A27E]">
                        {room.category} Class
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded">
                          <Bed className="w-3.5 h-3.5 text-[#C9A27E]" />
                          <span>{room.bedType}</span>
                        </span>
                        <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded">
                          <Users className="w-3.5 h-3.5 text-[#C9A27E]" />
                          <span>{room.capacity}</span>
                        </span>
                      </div>
                      <span className="bg-black/60 font-mono px-2.5 py-1 rounded text-slate-300">
                        {room.size}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h2 className="font-editorial text-2xl font-bold text-white group-hover:text-[#C9A27E] transition-colors">
                          {room.name}
                        </h2>
                        <p className="text-xs text-[#C9A27E] font-medium mt-0.5">
                          {room.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {room.description}
                    </p>

                    {/* Highlights Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded bg-[#3B0715]/40 border border-[#710D24]/30 text-slate-200"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Verified Amenities */}
                    <div className="border-t border-white/5 pt-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                        Verified Room Amenities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {room.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C9A27E] shrink-0" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-8 pt-0">
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-slate-400">
                      Direct front-desk reservation inquiry
                    </div>
                    <button
                      onClick={() => setActiveRoomModal(room)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] hover:from-[#8F122F] hover:to-[#540A1D] border border-[#710D24]/60 shadow-md transition-all cursor-pointer"
                    >
                      <span>Request Booking</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A27E]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Page Room Inquiry Form Section */}
      <section className="py-16 lg:py-24 bg-[#171316] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A27E]">
              Custom Reservation Form
            </span>
            <h2 className="font-editorial text-3xl font-bold text-white mt-1">
              Inquire About Room Availability
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Select your preferred dates and suite category. Our reception desk checks the actual availability ledger before confirming.
            </p>
          </div>

          <BookingForm
            title="Suite Reservation Inquiry"
            subtitle="Direct submission to Grand Boss Suit Otel front desk staff in Akdeniz, Mersin."
          />
        </div>
      </section>

      {/* Call-to-action Section */}
      <section className="py-16 bg-[#09090B] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-[#710D24]/40">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-3">
              Prefer Immediate Booking via Telephone?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
              Our 24-hour reception desk is ready to answer questions regarding suit dimensions, arrival times, and group accommodation in Mersin.
            </p>
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] hover:from-[#8F122F] hover:to-[#540A1D] border border-[#710D24]/60 shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#C9A27E]" />
              <span>Call +90 555 146 5133</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {activeRoomModal && (
        <BookingInquiryModal
          isOpen={!!activeRoomModal}
          onClose={() => setActiveRoomModal(null)}
          roomId={activeRoomModal.id}
          roomName={activeRoomModal.name}
        />
      )}
    </div>
  );
}
