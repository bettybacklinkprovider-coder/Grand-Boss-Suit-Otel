import { useEffect } from 'react';
import BookingForm from './BookingForm';
import { X } from 'lucide-react';

interface BookingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  roomId: string;
}

export default function BookingInquiryModal({
  isOpen,
  onClose,
  roomName,
  roomId,
}: BookingInquiryModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Booking Inquiry for ${roomName}`}
    >
      <div
        className="relative w-full max-w-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-20 p-2 rounded-full bg-[#171316] text-slate-300 hover:text-white border border-[#710D24]/60 hover:bg-[#710D24] shadow-lg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <BookingForm
          initialRoom={roomId}
          title={`Inquire: ${roomName}`}
          subtitle={`Secure your reservation inquiry directly with the front desk for ${roomName}.`}
          onSuccess={onClose}
        />
      </div>
    </div>
  );
}
