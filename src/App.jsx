import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorOrb from './components/CursorOrb';

// Dedicated Pages
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ClassesPage from './pages/ClassesPage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative bg-[#09090b] text-[#E5E3DC] min-h-screen flex flex-col justify-between selection:bg-[#c5a880] selection:text-[#09090b] overflow-x-hidden">
        {/* Atmospheric Warm Golden Lighting from Top / Behind Navbar (Zero-overhead GPU feathered gradients) */}
        <div 
          className="absolute top-0 left-0 right-0 h-[850px] pointer-events-none z-20 overflow-hidden" 
          aria-hidden="true"
        >
          {/* Main expansive warm golden studio bloom originating above the navbar */}
          <div 
            className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[140vw] max-w-[2000px] h-[800px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 15%, rgba(218, 180, 100, 0.12) 0%, rgba(197, 168, 128, 0.05) 30%, rgba(138, 114, 73, 0.015) 55%, transparent 75%)',
            }}
          />
          
          {/* Soft vertical ambient diffusion downward */}
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[rgba(218,180,100,0.04)] via-[rgba(197,168,128,0.015)] to-transparent pointer-events-none" />
          
          {/* Concentrated luminous aura directly behind and around the navbar */}
          <div 
            className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[220px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 65% 45% at 50% 20%, rgba(240, 210, 135, 0.08) 0%, rgba(197, 168, 128, 0.02) 50%, transparent 75%)',
            }}
          />
        </div>

        {/* Interactive Champagne Gold Cursor Orb follower & Trail */}
        <CursorOrb />

        {/* Fixed Navigation */}
        <Navbar />

        {/* Page Routing */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
