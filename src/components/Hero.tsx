import { motion } from 'framer-motion';
import { ArrowRight, Star, Disc } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background auroras - Refined for elegance */}
      <div className="aurora-bg w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] bg-gradient-to-r from-primary/60 to-accent/40 top-[-10%] left-[-10%] animate-blob" />
      <div className="aurora-bg w-[25rem] md:w-[40rem] h-[25rem] md:h-[40rem] bg-gradient-to-br from-accent/50 to-neon/40 top-[40%] right-[-15%] animate-blob animation-delay-2000" />
      <div className="aurora-bg w-[35rem] md:w-[60rem] h-[35rem] md:h-[60rem] bg-gradient-to-tr from-primary/50 to-neon/50 bottom-[-20%] left-[10%] animate-blob animation-delay-4000" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center h-full">
        
        {/* Elegant Typography Layout */}
        <div className="relative w-full flex flex-col items-center justify-center py-24 md:py-32 mt-12 gap-8">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-neon font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base drop-shadow-[0_0_10px_rgba(232,28,255,0.5)]">
              Experiencias de Alto Nivel
            </span>
            <h1 className="text-[18vw] md:text-[12vw] font-display font-bold uppercase tracking-tighter leading-none liquid-glass-text text-center">
              NOCTRA
            </h1>
            <p className="mt-8 text-lg md:text-2xl text-gray-300 font-light tracking-wide text-center max-w-2xl px-4">
              Transformando el sonido y la luz en <span className="text-white font-medium">arte sensorial</span>.
            </p>
          </motion.div>
        </div>

        {/* Elegant Floating Glass Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="absolute hidden lg:flex right-10 top-1/2 -translate-y-1/2 glass px-6 py-4 rounded-full items-center gap-4 animate-float z-20 shadow-2xl border-white/10 backdrop-blur-xl"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_20px_rgba(109,40,217,0.4)] shrink-0">
            <Disc className="text-white w-5 h-5 animate-[spin_4s_linear_infinite]" />
          </div>
          <div className="pr-2">
            <p className="font-display font-bold text-white text-sm uppercase tracking-widest">Premium DJ</p>
            <div className="flex text-neon mt-1 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
          </div>
        </motion.div>

        {/* Refined Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-4 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto pb-12 z-20"
        >
          {[
            { title: "Servicios", link: "servicios" },
            { title: "Nosotros", link: "nosotros" },
            { title: "Galería", link: "galeria" }
          ].map((item, idx) => (
            <a href={`#${item.link}`} key={idx} className="glass rounded-[2rem] px-8 py-5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all duration-300 backdrop-blur-xl border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(109,40,217,0.15)] relative overflow-hidden">
              <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-widest z-10 text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 z-10 shrink-0">
                <ArrowRight className="text-white/70 group-hover:text-white w-4 h-4 transition-colors" />
              </div>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
