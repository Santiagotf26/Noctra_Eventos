import React, { Suspense, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const AboutBento = React.lazy(() => import('./components/AboutBento'));
const BrandCarousel = React.lazy(() => import('./components/BrandCarousel'));
const EventTypes = React.lazy(() => import('./components/EventTypes'));
const Team = React.lazy(() => import('./components/Team'));
const Gallery = React.lazy(() => import('./components/Gallery')); // Explore Artworks
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Smooth Scroll for Navbar Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
         const href = anchor.getAttribute('href');
         if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
         }
      });
    });
  }, []);

  return (
    <div className="relative font-sans antialiased text-gray-200 min-h-screen w-full overflow-x-hidden bg-darker">
      <Navbar />
      
      <main className="w-full relative z-10 pt-[80px]">
        <Suspense fallback={<Preloader />}>
          <Hero />
          
          <AboutBento />
          
          <BrandCarousel />

          <div id="servicios">
             <EventTypes />
          </div>

          <div id="equipo">
            <Team />
          </div>

          <div id="trabajos">
             <Gallery />
          </div>

        </Suspense>
      </main>
      
      <div id="contacto">
         <Suspense fallback={<div />}>
            <Footer />
         </Suspense>
      </div>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
