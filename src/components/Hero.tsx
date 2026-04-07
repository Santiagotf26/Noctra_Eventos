import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax extreme scroll animations
  const { scrollYProgress } = useScroll({ target: containerRef });
  const textX1 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const textX2 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="inicio" ref={containerRef} className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#030305] transition-colors duration-500">
      
      {/* Background Kinetic Scrolling Text */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden pointer-events-none opacity-[0.06] will-change-transform">
        <motion.div style={{ x: textX1 }} className="whitespace-nowrap flex leading-none">
          {Array(4).fill('PRODUCCIÓN ').map((text, i) => (
            <span key={i} className="text-[120px] md:text-[220px] lg:text-[320px] font-display font-black text-white px-4">
              {text}
            </span>
          ))}
        </motion.div>
        <motion.div style={{ x: textX2 }} className="whitespace-nowrap flex leading-none -ml-[400px]">
          {Array(4).fill('DE ÉLITE ').map((text, i) => (
            <span key={i} className="text-[120px] md:text-[220px] lg:text-[320px] font-display font-black text-white px-4 outline-text">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Cyberpunk/Neon Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/40 rounded-full opacity-0 hidden mix-blend-screen pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/30 rounded-full opacity-0 hidden mix-blend-screen pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityFade }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto mt-20 pb-32"
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
           className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 shadow-[0_0_30px_rgba(124,58,237,0.2)]"
        >
          <span className="section-tag !text-primary-light font-bold tracking-[0.3em]">
            DISEÑAMOS EXPERIENCIAS INOLVIDABLES
          </span>
        </motion.div>

        {/* Dynamic Title */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[160px] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-[0_0_80px_rgba(255,255,255,0.1)]"
            style={{ lineHeight: 0.9 }}
          >
            NOCTRA
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, letterSpacing: "0em" }}
             animate={{ opacity: 1, letterSpacing: "0.5em" }}
             transition={{ duration: 1.5, delay: 0.6 }}
             className="text-primary-light font-medium mt-4 text-xl md:text-3xl uppercase"
          >
             EVENTOS
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-300 md:text-xl font-light max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Agencia organizadora de eventos para empresas, sociales y fiestas. Transformamos espacios mediante iluminación inmersiva, sonido superior y logística impecable.
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 relative"
        >
          {/* Glow effect behind primary button */}
          <div className="absolute inset-0 bg-primary blur-2xl opacity-40 animate-pulse rounded-full z-0" />
          
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(124,58,237,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/573114971131"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 px-10 py-5 rounded-full bg-primary text-white font-bold text-sm tracking-[0.2em] transition-all flex items-center justify-center gap-3 overflow-hidden border border-primary-light/50"
          >
            <span className="relative z-10">COTIZAR AHORA</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#servicios"
            className="relative z-10 px-10 py-5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center"
          >
            NUESTROS SERVICIOS
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Styled Outline Text specific to this dark theme */}
      <style>{`
        .outline-text {
          color: transparent !important;
          -webkit-text-stroke: 1px rgba(255,255,255,0.05);
        }
      `}</style>
    </section>
  );
};

export default Hero;
