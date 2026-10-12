import { useEffect } from 'react';
import { GalleryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (photo: GalleryPhoto) => void;
}

export default function LightboxModal({
  photo,
  photos,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        onNavigate(photos[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const nextIndex = (currentIndex + 1) % photos.length;
        onNavigate(photos[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [photo, photos, onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Hotel Image Preview"
    >
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        {/* Top bar */}
        <div className="w-full flex items-center justify-between py-2 px-1 text-slate-300">
          <div className="text-xs uppercase tracking-widest text-[#C9A27E]">
            {photo.category} · Photo {currentIndex + 1} of {photos.length}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-[#710D24] text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image container */}
        <div
          className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-[#710D24]/40 bg-[#171316] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full max-h-[75vh] object-contain transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#710D24] text-white border border-white/15 transition-all shadow-lg hover:scale-105"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#710D24] text-white border border-white/15 transition-all shadow-lg hover:scale-105"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div
          className="mt-3 text-center max-w-2xl px-4 py-2 glass-panel rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-editorial text-lg text-white font-medium">{photo.title}</h3>
          <p className="text-xs text-slate-300 mt-0.5">{photo.caption}</p>
        </div>
      </div>
    </div>
  );
}
