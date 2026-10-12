import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function HotelMap() {
  // Encoded query for Mesudiye, Fasih Kayabalı Cd. No:107 D, 33060 Akdeniz/Mersin, Türkiye
  const mapSrc = `https://maps.google.com/maps?q=Mesudiye%2C%20Fasih%20Kayabal%C4%B1%20Cd.%20No%3A107%20D%2C%2033060%20Akdeniz%2FMersin%2C%20T%C3%BCrkiye&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=Grand+Boss+Suit+Otel+Mesudiye+Fasih+Kayabali+Cd+Akdeniz+Mersin`;

  return (
    <div className="glass-panel rounded-2xl border border-[#710D24]/30 overflow-hidden flex flex-col h-full">
      <div className="p-4 sm:p-5 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-[#710D24]/20 border border-[#710D24]/40 text-[#C9A27E] shrink-0 mt-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide">
              {HOTEL_INFO.name} Location
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {HOTEL_INFO.address}
            </p>
          </div>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#C9A27E] hover:text-white bg-white/5 hover:bg-[#710D24]/40 border border-[#710D24]/40 transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </div>

      <div className="relative w-full h-[320px] sm:h-[380px] bg-[#171316]">
        <iframe
          title="Grand Boss Suit Otel Map Location"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      <div className="p-3.5 bg-[#09090B]/90 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
        <span>District: Akdeniz / Mersin</span>
        <span className="text-[#C9A27E] font-mono">36.8045° N, 34.6298° E</span>
      </div>
    </div>
  );
}
