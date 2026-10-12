/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, useRouter } from './router/RouterContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomsPage from './pages/RoomsPage';
import ContactPage from './pages/ContactPage';
import { HOTEL_INFO } from './data/hotelData';
import { Phone } from 'lucide-react';

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage />;
      case '/rooms':
        return <RoomsPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09090B] text-slate-100 selection:bg-[#710D24] selection:text-white relative">
      {/* Sticky Blurred Glass Navigation Bar */}
      <Navbar />

      {/* Main Page Content (Switching between the 4 independent pages) */}
      <main className="flex-1 w-full" id="main-content">
        {renderPage()}
      </main>

      {/* Luxury Footer with links and address */}
      <Footer />

      {/* Floating Call Button on mobile & tablet */}
      <aside aria-label="Direct Hotel Call Action" className="fixed bottom-5 right-5 z-40">
        <a
          href={`tel:${HOTEL_INFO.phoneClean}`}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#710D24] to-[#3B0715] hover:from-[#8F122F] hover:to-[#540A1D] text-white shadow-xl shadow-red-950/70 border border-[#710D24]/80 transition-all transform hover:scale-105 group"
          title={`Call ${HOTEL_INFO.name} directly: ${HOTEL_INFO.phone}`}
          aria-label={`Call ${HOTEL_INFO.name} directly at ${HOTEL_INFO.phone}`}
        >
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
            <Phone className="w-3.5 h-3.5 text-[#C9A27E] group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider pr-1 hidden sm:inline">
            Direct Line
          </span>
          <span className="text-xs font-mono font-medium text-[#C9A27E]">
            {HOTEL_INFO.phone}
          </span>
        </a>
      </aside>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
