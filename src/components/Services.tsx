import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    tag: "AUDIOVISUAL",
    title: "ALQUILER DE EQUIPOS\nAUDIOVISUALES",
    desc: "Proveemos tecnología punta. Sistemas de sonido Line Array, microfonía inalámbrica profesional, consolas digitales, pantallas LED pitch fino y diseños de iluminación robótica (DMX).",
    points: [
      "Pantallas LED y Video Mapping",
      "Sistemas Line Array y Monitoreo",
      "Iluminación Robótica Sincronizada",
    ],
    img: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800&q=80",
    reverse: false
  },
  {
    tag: "GASTRONOMÍA",
    title: "CATERING Y\nMENAJE EXCLUSIVO",
    desc: "La experiencia culinaria a tu medida. Diseñamos menús exquisitos para cualquier tipo de evento, ofreciendo desde pasabocas gourmet hasta cenas a tres tiempos con cristalería y menaje de lujo.",
    points: [
      "Menús Personalizados Gourmet",
      "Cristalería y Cubertería de Lujo",
      "Servicio de Meseros Premium",
    ],
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    reverse: true
  },
  {
    tag: "ESCENOGRAFÍA",
    title: "DECORACIÓN Y\nAMBIENTACIÓN",
    desc: "Transformamos espacios ordinarios en extraordinarios. Arreglos florales de alto diseño, estructuras decorativas, luces cálidas, y mobiliario de tendencia para darle carácter a tu evento.",
    points: [
      "Arreglos Florales y Centros de Mesa",
      "Mobiliario de Vanguardia",
      "Arquitectura Efímera y Stands",
    ],
    img: "https://images.unsplash.com/photo-1469334026362-e6e22c0734dd?auto=format&fit=crop&w=800&q=80",
    reverse: false
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-[#020203] relative overflow-hidden transition-colors duration-500">
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '30px 30px',
      }} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-24 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="uppercase tracking-[0.2em] text-primary font-bold text-sm"
        >
          Suministramos los mejores recursos
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter text-white mt-4"
        >
           SERVICIOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">INTEGRALES</span>
        </motion.h2>
      </div>

      {/* Stacked Service Items */}
      <div className="space-y-32 relative z-10 pb-16">
        {services.map((svc, index) => (
          <motion.div
            key={svc.tag}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className={`max-w-7xl mx-auto px-6 md:px-10 flex flex-col ${svc.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}
          >
            {/* Context/Text */}
            <div className="w-full lg:w-[45%]">
              <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500 shadow-2xl relative overflow-hidden">
                
                {/* Glow effect inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />

                <div className="flex items-center gap-4 mb-6">
                  <span className="section-tag bg-white/5 border border-white/10 px-3 py-1 rounded-md text-white/80 drop-shadow-sm">{svc.tag}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight whitespace-pre-line mb-6 leading-tight group-hover:text-primary-light transition-colors duration-500">
                  {svc.title}
                </h3>
                
                <p className="text-gray-400 text-[15px] md:text-base leading-relaxed mb-8">
                  {svc.desc}
                </p>

                <ul className="space-y-4">
                  {svc.points.map((point, i) => (
                    <motion.li key={i} whileHover={{ x: 5 }} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-light" />
                      </div>
                      <span className="text-gray-300 font-medium">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dynamic Image */}
            <div className="w-full lg:w-[55%] relative">
              <div className={`absolute top-1/2 -translate-y-1/2 ${svc.reverse ? '-left-10' : '-right-10'} w-96 h-96 bg-gradient-to-br from-primary to-accent opacity-0 hidden opacity-20 group-hover:opacity-40 transition-opacity duration-1000 -z-10 rounded-full`} />
              
              <motion.div 
                whileHover={{ scale: 1.02, rotate: svc.reverse ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
              >
                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2.5s] ease-out saturate-[0.8] group-hover:saturate-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent opacity-80 mix-blend-overlay" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
