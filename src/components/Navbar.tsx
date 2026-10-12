import { useState, useEffect } from 'react';
import { useRouter, Link } from '../router/RouterContext';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { RoutePath } from '../types';

export default function Navbar() {
  const { currentPath } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const navLinks: { label: string; path: RoutePath }[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Rooms & Suites', path: '/rooms' },
    { label: 'Contact & Booking', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav-scrolled py-3 shadow-lg shadow-black/40' : 'glass-nav py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-decoration-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#710D24]"
          >
            <span className="font-brand text-lg sm:text-xl font-bold tracking-wider text-slate-100 group-hover:text-[#C9A27E] transition-colors">
              GRAND BOSS <span className="text-[#C9A27E] font-serif italic text-base sm:text-lg">Suit Otel</span>
            </span>
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((item) => {
              const active = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    active
                      ? 'text-[#C9A27E] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#710D24] via-[#C9A27E] to-[#710D24] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] hover:from-[#8F122F] hover:to-[#540A1D] border border-[#710D24]/50 rounded-lg shadow-md shadow-red-950/40 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              title="Call Grand Boss Suit Otel"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A27E]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="p-2 text-slate-300 hover:text-[#C9A27E] rounded-lg border border-white/10"
              aria-label="Call Hotel"
            >
              <Phone className="w-4 h-4 text-[#C9A27E]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-deep border-b border-[#710D24]/40 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 pt-2">
            {navLinks.map((item) => {
              const active = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    active
                      ? 'bg-[#710D24]/30 text-[#C9A27E] font-semibold border border-[#710D24]/40'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#710D24] to-[#3B0715] rounded-lg border border-[#710D24]/60"
            >
              <Phone className="w-4 h-4 text-[#C9A27E]" />
              <span>Call +90 555 146 5133</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full py-2 px-4 text-xs font-medium text-slate-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
