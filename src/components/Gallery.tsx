import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    title: "CONCIERTOS MASIVOS"
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    title: "BODAS VIP"
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    title: "ESCENOGRAFÍAS LED"
  },
  {
    url: "https://images.unsplash.com/photo-1470229722913-7c090be5bb10?auto=format&fit=crop&w=1200&q=80",
    title: "EXPERIENCIAS SENSORIALES"
  },
  {
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    title: "LANZAMIENTOS CORPORATIVOS"
  }
];

const Gallery = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <section id="portfolio" className="py-24 relative overflow-hidden bg-transparent">
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10 w-full text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-display font-black text-white/90 uppercase tracking-tighter"
          >
            NUESTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">PORTAFOLIO</span>
          </motion.h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">Desliza para explorar nuestras producciones</p>
        </div>

        {/* Draggable Carousel */}
        <div className="pl-6 md:pl-10">
          <motion.div 
            ref={carouselRef} 
            className="cursor-grab active:cursor-grabbing overflow-hidden"
          >
            <motion.div 
              drag="x"
              dragConstraints={{ right: 0, left: -width - 40 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              className="flex gap-4 md:gap-8 w-max"
            >
              {images.map((img, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative w-[70vw] h-[35vh] md:w-[50vw] md:h-[50vh] lg:w-[40vw] lg:h-[60vh] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl shrink-0 group border border-white/5 pointer-events-none"
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 saturate-[0.8] group-hover:saturate-110" 
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Text */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl md:text-3xl font-display font-black text-white drop-shadow-lg mb-2 opacity-90 group-hover:opacity-100 group-hover:text-primary-light transition-all">
                      {img.title}
                    </h3>
                    <div className="h-1 w-8 md:w-12 bg-primary rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary via-accent to-orange-500 opacity-10 opacity-0 hidden mix-blend-screen -z-10 animate-pulse-slow" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-primary/40 transition-colors duration-700"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] uppercase">
              ¿LISTO PARA ENCENDER <br className="hidden md:block"/> LA PISTA?
            </h2>
            <p className="text-gray-400 text-sm md:text-lg mb-8 max-w-xl mx-auto">
              Contáctanos hoy para empezar a diseñar y planificar tu próxima gran experiencia inmersiva.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              href="https://wa.me/573114971131?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20eventos." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-xs md:text-sm tracking-[0.15em] uppercase shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all inline-block hover:shadow-[0_0_40px_rgba(232,28,255,0.6)]"
            >
              RESERVAR MI FECHA
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
