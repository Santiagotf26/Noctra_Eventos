import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const carouselImages = [
  {
    id: 1,
    title: "BODAS INOLVIDABLES",
    desc: "Iluminación cálida, pistas de baile iluminadas y sonorización perfecta.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&fm=webp&q=60",
    tag: "MATRIMONIOS"
  },
  {
    id: 2,
    title: "15 AÑOS ÉPICOS",
    desc: "Atmósferas vibrantes, láseres juveniles y el mejor equipamiento para fiestas.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&fm=webp&q=60",
    tag: "CELEBRACIONES"
  },
  {
    id: 3,
    title: "PRODUCCIÓN CORPORATIVA",
    desc: "Presentaciones de alto impacto con pantallas LED y audio nítido.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&fm=webp&q=60",
    tag: "EMPRESAS"
  }
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white dark:bg-surface2 relative overflow-hidden transition-colors duration-500">
      
      {/* Título de Sección */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 z-10 relative flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-tag mb-4 drop-shadow-sm"
        >
          VERSATILIDAD TOTAL
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-gray-900 dark:text-white"
        >
          NUESTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">PORTAFOLIO</span>
        </motion.h2>
      </div>

      {/* CARRUSEL INTERACTIVO */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 relative h-[50vh] md:h-[70vh]">
        
        {/* Controles Glassy del Carrusel */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30">
          <button onClick={prevSlide} className="p-3 md:p-4 rounded-full bg-white/30 dark:bg-dark/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 text-white hover:bg-white/50 dark:hover:bg-primary/50 transition-all shadow-xl hover:scale-110">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30">
          <button onClick={nextSlide} className="p-3 md:p-4 rounded-full bg-white/30 dark:bg-dark/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 text-white hover:bg-white/50 dark:hover:bg-primary/50 transition-all shadow-xl hover:scale-110">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Imagen y Texto (Slides) */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={carouselImages[currentIndex].img} 
                alt={carouselImages[currentIndex].title} 
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
              
              <div className="absolute bottom-10 left-6 md:bottom-16 md:left-16 max-w-xl bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden group">
                 <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

                 <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold tracking-[0.2em] rounded border border-primary-light/50 mb-4 max-w-max">
                   {carouselImages[currentIndex].tag}
                 </span>
                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 tracking-tighter drop-shadow-md">
                   {carouselImages[currentIndex].title}
                 </h3>
                 <p className="text-white/80 text-sm md:text-base leading-relaxed drop-shadow-sm font-light">
                   {carouselImages[currentIndex].desc}
                 </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores / Dots */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === idx ? 'w-10 bg-primary' : 'w-4 bg-gray-400 dark:bg-white/20 hover:bg-gray-500 dark:hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
