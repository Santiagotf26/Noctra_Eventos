import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventTypes from './components/EventTypes';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Revisar preferencia guardada (por defecto modo claro como solicitó el usuario)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

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

  // Simular tiempo de carga del preloader y esperar que imágenes pesadas se cacheadas
  const loadTimer = setTimeout(() => setIsLoading(false), 2200);
  return () => clearTimeout(loadTimer);
}, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  if (isLoading) {
    return (
      <div className="font-sans antialiased bg-gray-50 dark:bg-[#05050A] text-gray-900 dark:text-gray-100 min-h-screen">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="font-sans antialiased bg-gray-50 dark:bg-darker text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <EventTypes />
        <About />
        <Services />
        <Gallery />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
