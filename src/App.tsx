import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';
import Marquee from './components/Marquee';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const Stats = React.lazy(() => import('./components/Stats'));
const EventTypes = React.lazy(() => import('./components/EventTypes'));
const Services = React.lazy(() => import('./components/Services'));
const Venues = React.lazy(() => import('./components/Venues'));
const Team = React.lazy(() => import('./components/Team'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const About = React.lazy(() => import('./components/About'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Footer = React.lazy(() => import('./components/Footer'));

const FluidBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030305]">
     <motion.div
       animate={{ 
         x: [0, 100, -50, 0], 
         y: [0, -50, 100, 0],
         scale: [1, 1.2, 1]
       }}
       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
       className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
       style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0) 70%)' }}
     />
     <motion.div
        animate={{
           x: [0, -100, 50, 0],
           y: [0, 100, -50, 0],
           scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,28,255,0.1) 0%, rgba(232,28,255,0) 70%)' }}
     />
      <motion.div
        animate={{
           x: [0, 50, -50, 0],
           y: [0, 50, -50, 0],
           scale: [1, 1.3, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, rgba(0,240,255,0) 70%)' }}
     />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Forced dark mode to prevent any white flashes flashes
    document.documentElement.classList.add('dark');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    const loadTimer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(loadTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="font-sans antialiased bg-[#030305] text-gray-100 min-h-screen">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="relative font-sans antialiased text-gray-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      <FluidBackground />
      <Navbar />
      
      <main>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Hero />
          <Stats />
          <Marquee />
          <EventTypes />
          <Services />
          <Venues />
          <Team />
          <Testimonials />
          <About />
          <Gallery />
        </Suspense>
      </main>
      
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
