import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorOrb from './components/CursorOrb';

import GlobalCornerSunlight from './components/layout/GlobalCornerSunlight';

// Dedicated Pages
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ClassesPage from './pages/ClassesPage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

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
        {/* Full-Page Warm Golden Illuminated Edge Frame (Top, Bottom, Left, Right & 4 Corners) */}
        <GlobalCornerSunlight />

        {/* Interactive Champagne Gold Cursor Orb follower & Trail */}
        <CursorOrb />

        {/* Fixed Navigation */}
        <Navbar />

        {/* Page Routing */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/tattoos" element={<Navigate to="/gallery?category=tattoos" replace />} />
            <Route path="/artworks" element={<Navigate to="/gallery?category=graphite-pencil" replace />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
