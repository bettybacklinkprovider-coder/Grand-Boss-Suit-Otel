import { useState, useId } from 'react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { BookingInquiry } from '../types';
import { CheckCircle2, Phone, Calendar, User, Mail, MessageSquare, Users, Sparkles, Send } from 'lucide-react';

interface BookingFormProps {
  initialRoom?: string;
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
}

export default function BookingForm({
  initialRoom = '',
  title = 'Direct Booking Inquiry',
  subtitle = 'Submit your preferred dates for real-time front desk verification and guaranteed room reservation.',
}: BookingFormProps) {
  const [formData, setFormData] = useState<BookingInquiry>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: initialRoom || 'deluxe-king-suit',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingInquiry | null>(null);

  // Generate unique IDs for all form inputs to guarantee accessibility
  const idFullName = useId();
  const idPhone = useId();
  const idEmail = useId();
  const idRoomType = useId();
  const idGuests = useId();
  const idCheckIn = useId();
  const idCheckOut = useId();
  const idMessage = useId();

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name must be at least 3 characters.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact phone number.';
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (e.g. +90 555 123 4567).';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address for reservation details.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.checkIn) {
      errs.checkIn = 'Select a check-in date.';
    }

    if (!formData.checkOut) {
      errs.checkOut = 'Select a check-out date.';
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      errs.checkOut = 'Check-out date must be after check-in date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate front-desk transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      checkIn: '',
      checkOut: '',
      guests: 2,
      roomType: initialRoom || 'deluxe-king-suit',
      message: '',
    });
    setErrors({});
  };

  // WhatsApp quick-link with prefilled text for direct Turkish hotel communication
  const selectedRoomObj = ROOMS_DATA.find((r) => r.id === formData.roomType);
  const roomName = selectedRoomObj ? selectedRoomObj.name : 'Suit';

  if (submittedData) {
    return (
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#710D24]/50 text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#710D24]/20 border border-[#710D24]/60 flex items-center justify-center mx-auto mb-5 text-[#C9A27E]">
          <CheckCircle2 className="w-8 h-8 text-[#C9A27E]" />
        </div>

        <h3 className="font-editorial text-2xl font-bold text-white mb-2">
          Inquiry Successfully Dispatched
        </h3>
        
        <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
          Thank you, <strong className="text-white">{submittedData.fullName}</strong>. Your reservation inquiry for the <strong className="text-[#C9A27E]">{roomName}</strong> from <span className="text-white font-mono">{submittedData.checkIn}</span> to <span className="text-white font-mono">{submittedData.checkOut}</span> has been logged with our 24/7 reception desk at <strong className="text-white">Grand Boss Suit Otel</strong>.
        </p>

        <div className="bg-[#171316] p-4 rounded-xl border border-white/10 text-left text-xs text-slate-300 max-w-md mx-auto mb-6 space-y-2">
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-slate-400">Guest Name:</span>
            <span className="text-white font-medium">{submittedData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-slate-400">Contact Telephone:</span>
            <span className="text-white font-mono">{submittedData.phone}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1.5">
            <span className="text-slate-400">Confirmation Channel:</span>
            <span className="text-[#C9A27E]">Telephone & Email Verification</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Status:</span>
            <span className="text-amber-300 font-medium">Pending Front Desk Confirmation</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#3B0715]/40 border border-[#710D24]/40 max-w-lg mx-auto mb-6 text-xs text-slate-300 leading-relaxed text-left">
          <span className="font-semibold text-[#C9A27E] block mb-1">Notice on Reservations:</span>
          To prevent overbooking, official reservations are confirmed directly by our hotel staff following identity verification. If you require immediate confirmation for today, call reception directly at <a href={`tel:${HOTEL_INFO.phoneClean}`} className="text-white font-bold underline">{HOTEL_INFO.phone}</a>.
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${HOTEL_INFO.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] hover:from-[#8F122F] hover:to-[#540A1D] border border-[#710D24]/60 transition-all shadow-md"
          >
            <Phone className="w-4 h-4 text-[#C9A27E]" />
            Call Reception Now
          </a>
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#710D24]/30">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A27E] uppercase tracking-widest mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A27E]" />
          <span>Boutique Hospitality</span>
        </div>
        <h3 className="font-editorial text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={idFullName} className="block text-xs font-medium text-slate-300 mb-1.5">
              Full Name <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id={idFullName}
                type="text"
                placeholder="e.g. Mehmet Yılmaz"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: '' });
                }}
                className={`w-full bg-[#09090B]/80 text-white placeholder-slate-500 text-sm rounded-lg pl-10 pr-3.5 py-2.5 border transition-all focus:outline-none focus:ring-1 ${
                  errors.fullName
                    ? 'border-red-500/80 focus:ring-red-500'
                    : 'border-white/10 focus:border-[#710D24] focus:ring-[#710D24]'
                }`}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? `${idFullName}-error` : undefined}
              />
            </div>
            {errors.fullName && (
              <p id={`${idFullName}-error`} className="text-xs text-red-400 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor={idPhone} className="block text-xs font-medium text-slate-300 mb-1.5">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id={idPhone}
                type="tel"
                placeholder="+90 555 000 0000"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                className={`w-full bg-[#09090B]/80 text-white placeholder-slate-500 text-sm rounded-lg pl-10 pr-3.5 py-2.5 border transition-all focus:outline-none focus:ring-1 ${
                  errors.phone
                    ? 'border-red-500/80 focus:ring-red-500'
                    : 'border-white/10 focus:border-[#710D24] focus:ring-[#710D24]'
                }`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? `${idPhone}-error` : undefined}
              />
            </div>
            {errors.phone && (
              <p id={`${idPhone}-error`} className="text-xs text-red-400 mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email & Room Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={idEmail} className="block text-xs font-medium text-slate-300 mb-1.5">
              Email Address <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id={idEmail}
                type="email"
                placeholder="guest@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full bg-[#09090B]/80 text-white placeholder-slate-500 text-sm rounded-lg pl-10 pr-3.5 py-2.5 border transition-all focus:outline-none focus:ring-1 ${
                  errors.email
                    ? 'border-red-500/80 focus:ring-red-500'
                    : 'border-white/10 focus:border-[#710D24] focus:ring-[#710D24]'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${idEmail}-error` : undefined}
              />
            </div>
            {errors.email && (
              <p id={`${idEmail}-error`} className="text-xs text-red-400 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor={idRoomType} className="block text-xs font-medium text-slate-300 mb-1.5">
              Suite Preference
            </label>
            <div className="relative">
              <select
                id={idRoomType}
                value={formData.roomType}
                onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                className="w-full bg-[#09090B]/90 text-white text-sm rounded-lg px-3.5 py-2.5 border border-white/10 focus:border-[#710D24] focus:ring-1 focus:ring-[#710D24] focus:outline-none appearance-none"
              >
                {ROOMS_DATA.map((r) => (
                  <option key={r.id} value={r.id} className="bg-[#171316] text-white">
                    {r.name} ({r.capacity})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Check-in, Check-out, Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor={idCheckIn} className="block text-xs font-medium text-slate-300 mb-1.5">
              Check-in Date <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id={idCheckIn}
                type="date"
                value={formData.checkIn}
                onChange={(e) => {
                  setFormData({ ...formData, checkIn: e.target.value });
                  if (errors.checkIn) setErrors({ ...errors, checkIn: '' });
                }}
                className={`w-full bg-[#09090B]/80 text-white text-sm rounded-lg pl-10 pr-3.5 py-2.5 border transition-all focus:outline-none focus:ring-1 ${
                  errors.checkIn
                    ? 'border-red-500/80 focus:ring-red-500'
                    : 'border-white/10 focus:border-[#710D24] focus:ring-[#710D24]'
                }`}
                aria-invalid={!!errors.checkIn}
                aria-describedby={errors.checkIn ? `${idCheckIn}-error` : undefined}
              />
            </div>
            {errors.checkIn && (
              <p id={`${idCheckIn}-error`} className="text-xs text-red-400 mt-1">{errors.checkIn}</p>
            )}
          </div>

          <div>
            <label htmlFor={idCheckOut} className="block text-xs font-medium text-slate-300 mb-1.5">
              Check-out Date <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id={idCheckOut}
                type="date"
                value={formData.checkOut}
                onChange={(e) => {
                  setFormData({ ...formData, checkOut: e.target.value });
                  if (errors.checkOut) setErrors({ ...errors, checkOut: '' });
                }}
                className={`w-full bg-[#09090B]/80 text-white text-sm rounded-lg pl-10 pr-3.5 py-2.5 border transition-all focus:outline-none focus:ring-1 ${
                  errors.checkOut
                    ? 'border-red-500/80 focus:ring-red-500'
                    : 'border-white/10 focus:border-[#710D24] focus:ring-[#710D24]'
                }`}
                aria-invalid={!!errors.checkOut}
                aria-describedby={errors.checkOut ? `${idCheckOut}-error` : undefined}
              />
            </div>
            {errors.checkOut && (
              <p id={`${idCheckOut}-error`} className="text-xs text-red-400 mt-1">{errors.checkOut}</p>
            )}
          </div>

          <div>
            <label htmlFor={idGuests} className="block text-xs font-medium text-slate-300 mb-1.5">
              Guests
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                id={idGuests}
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                className="w-full bg-[#09090B]/90 text-white text-sm rounded-lg pl-10 pr-3.5 py-2.5 border border-white/10 focus:border-[#710D24] focus:ring-1 focus:ring-[#710D24] focus:outline-none"
              >
                <option value={1} className="bg-[#171316]">1 Guest</option>
                <option value={2} className="bg-[#171316]">2 Guests</option>
                <option value={3} className="bg-[#171316]">3 Guests</option>
                <option value={4} className="bg-[#171316]">4 Guests</option>
                <option value={5} className="bg-[#171316]">5+ Guests (Contact)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor={idMessage} className="block text-xs font-medium text-slate-300 mb-1.5">
            Special Requests or Estimated Arrival Time (Optional)
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <textarea
              id={idMessage}
              rows={3}
              placeholder="e.g. Late check-in after 20:00, quiet high floor requested..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#09090B]/80 text-white placeholder-slate-500 text-sm rounded-lg pl-10 pr-3.5 py-2.5 border border-white/10 focus:border-[#710D24] focus:ring-1 focus:ring-[#710D24] focus:outline-none resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] hover:from-[#8F122F] hover:to-[#540A1D] border border-[#710D24]/60 shadow-lg shadow-red-950/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Sending Inquiry to Reception...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#C9A27E]" />
                <span>Book Your Stay</span>
              </>
            )}
          </button>
          <p className="text-[11px] text-slate-400 text-center mt-2">
            Instant transmission to Grand Boss Suit Otel front desk · Direct booking support at <a href={`tel:${HOTEL_INFO.phoneClean}`} className="text-[#C9A27E] hover:underline font-mono">{HOTEL_INFO.phone}</a>
          </p>
        </div>
      </form>
    </div>
  );
}
