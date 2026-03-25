import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandCarousel from './components/BrandCarousel';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useEffect } from 'react';

function App() {
  // Smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="font-sans antialiased bg-darker text-gray-100 min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <BrandCarousel />
        <Services />
        <About />
        <Gallery />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
