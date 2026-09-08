import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <div className="bg-[#09090b] text-[#E5E3DC] min-h-screen flex flex-col justify-between selection:bg-[#c5a880] selection:text-[#09090b]">
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
