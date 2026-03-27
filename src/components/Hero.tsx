import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animaciones de scroll para el texto EVENTOS en el fondo
  const { scrollYProgress } = useScroll({ target: containerRef });
  const textX1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const textX2 = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section id="inicio" ref={containerRef} className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-darker transition-colors duration-500">
      
      {/* Texto Scrolling Fondo - Mueve al hacer scroll */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.04]">
        <motion.div style={{ x: textX1 }} className="whitespace-nowrap flex leading-none">
          {Array(10).fill('EVENTOS ').map((text, i) => (
            <span key={i} className="text-[120px] md:text-[200px] lg:text-[280px] font-display font-bold text-gray-900 dark:text-white px-4">
              {text}
            </span>
          ))}
        </motion.div>
        <motion.div style={{ x: textX2 }} className="whitespace-nowrap flex leading-none -ml-[300px]">
          {Array(10).fill('EVENTOS ').map((text, i) => (
            <span key={i} className="text-[120px] md:text-[200px] lg:text-[280px] font-display font-bold text-gray-900 dark:text-white px-4 outline-text">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Esferas de blur para el glassmorfismo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/30 rounded-full blur-[100px] dark:mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 dark:bg-accent/20 rounded-full blur-[100px] dark:mix-blend-screen pointer-events-none" />

      {/* Etiquetas laterales */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4"
      >
        {['EXPERIENCIAS', 'EVENTOS', 'INNOVACIÓN', 'ARTE CINÉTICO'].map((tag, i) => (
          <div key={tag} className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-primary shadow-[0_0_10px_#7C3AED]' : 'bg-gray-300 dark:bg-white/20 group-hover:bg-primary'} transition-all`} />
            <span className={`text-[11px] font-medium tracking-[0.2em] ${i === 0 ? 'text-primary dark:text-primary-light drop-shadow-sm' : 'text-gray-400 dark:text-white/40 group-hover:text-gray-900 dark:group-hover:text-white/80'} transition-all`}>
              {tag}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Contenido Principal */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto mt-16 md:mt-0">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="px-5 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 mb-8 shadow-sm"
        >
          <span className="section-tag !text-primary dark:!text-primary-light font-bold">
            LA EXPERIENCIA CINÉTICA DE ÉLITE
          </span>
        </motion.div>

        {/* Texto Dinámico NOCTRA */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[120px] lg:text-[180px] font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-primary to-accent dark:from-white dark:via-primary-light dark:to-primary mb-6 drop-shadow-xl dark:drop-shadow-[0_0_50px_rgba(124,58,237,0.3)]"
          style={{ lineHeight: 1 }}
        >
          NOCTRA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transformamos espacios convencionales en narrativas electrizantes. Tecnología DJ de vanguardia, láseres y montajes que conectan la visión con la realidad.
        </motion.p>

        {/* Botones Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/573114971131?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20eventos."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark dark:bg-primary/30 dark:backdrop-blur-xl dark:border dark:border-primary/50 text-white font-semibold text-sm tracking-[0.1em] shadow-[0_10px_30px_rgba(124,58,237,0.3)] transition-all flex items-center justify-center gap-3"
          >
            RESERVAR FECHA
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="px-8 py-4 rounded-xl bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white/90 font-bold text-sm tracking-[0.1em] hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center justify-center shadow-sm"
          >
            VER EVENTOS
          </motion.a>
        </motion.div>
      </div>

      {/* Indicator Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-400 dark:via-white/50 to-transparent overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary blur-[1px]"
          />
        </div>
      </motion.div>
      
      {/* Estilos locales para el outline de texto del fondo */}
      <style>{`
        .outline-text {
          color: transparent !important;
          -webkit-text-stroke: 1px rgba(0,0,0,0.1);
        }
        .dark .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
        }
      `}</style>
    </section>
  );
};

export default Hero;
