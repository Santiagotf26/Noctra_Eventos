import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs for animation */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-neon/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block py-1 px-3 mb-6 rounded-full glass border-white/20 text-sm font-medium text-neon tracking-wider"
        >
          LLEVAMOS TU EVENTO AL SIGUIENTE NIVEL
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          Creamos experiencias <br className="hidden md:block" />
          <span className="text-gradient">inolvidables</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12"
        >
          Iluminación, sonido, animación y montajes profesionales para que tu fiesta sea única y espectacular.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/573114971131"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-darker font-bold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Cotizar ahora
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicios"
            className="flex items-center justify-center px-8 py-4 rounded-full glass font-bold text-lg text-white transition hover:bg-white/10"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-darker to-transparent z-10" />
    </section>
  );
};

export default Hero;
