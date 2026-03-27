import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    tag: "NIVEL 01",
    title: "OPERACIÓN\nEN VIVO",
    desc: "Coordinación técnica milimétrica. Nos encargamos de la operación de sonido, luces y visuales en tiempo real para que los artistas brillen.",
    points: [
      "Monitores y PA para DJs e Invitados",
      "Controladores y Consolas Pioneer",
      "Iluminación DMX Sincronizada",
      "Soporte In Situ Ininterrumpido"
    ],
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    reverse: false
  },
  {
    tag: "NIVEL 02",
    title: "DISEÑO DE\nESCENARIO",
    subtitle: "ESTÉTICA VISUAL",
    desc: "El aspecto visual de tu evento. Desde tarimas LED hasta andamiaje tipo Truss para festivales, definimos la personalidad visual.",
    points: [
      "Rigging y Estructuras Modulares",
      "Pantallas LED Pitch Fino",
      "Efectos CO2 y Pirotecnia Fría",
      "Afinación Acústica del Recinto"
    ],
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    reverse: true
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-gray-100 dark:bg-[#080812] relative overflow-hidden transition-colors duration-500">
      
      {/* Malla de cibernética abstracta (Glass) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
        backgroundSize: '40px 40px',
        color: 'gray'
      }} />

      {/* Encabezado */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20 relative z-10 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6"
        >
          <span className="section-tag !mb-0 text-primary dark:text-primary-light">PRODUCCIÓN TÉCNICA</span>
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-gray-900 dark:text-white mb-6 drop-shadow-sm dark:drop-shadow-2xl"
        >
           SERVICIOS
          <br />
          <span className="relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary to-accent dark:from-white dark:via-primary-light dark:to-primary">INTEGRALES</span>
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-2 left-0 h-1 md:h-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-none dark:shadow-[0_0_15px_rgba(232,28,255,0.8)]" 
            />
          </span>
        </motion.h2>
      </div>

      {/* Bloques de Servicio */}
      <div className="space-y-32 relative z-10 pb-16">
        {services.map((svc) => (
          <motion.div
            key={svc.tag}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`max-w-7xl mx-auto px-6 md:px-10 flex flex-col ${svc.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}
          >
            {/* Contenido / Texto */}
            <div className="w-full lg:w-[45%]">
              <div className="bg-white/70 dark:bg-surface/40 backdrop-blur-xl border border-gray-200 dark:border-white/5 p-8 md:p-10 rounded-[2rem] hover:bg-white dark:hover:bg-surface/60 hover:border-primary/20 dark:hover:border-white/10 transition-all duration-500 shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="section-tag bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-md text-gray-800 dark:text-white drop-shadow-sm border border-gray-200 dark:border-white/20">{svc.tag}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tight whitespace-pre-line mb-8 leading-[1.1] group-hover:text-primary transition-colors duration-500">
                  {svc.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-[15px] md:text-base leading-relaxed mb-10 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  {svc.desc}
                </p>

                <ul className="space-y-4">
                  {svc.points.map((point, i) => (
                    <motion.li key={i} whileHover={{ x: 5 }} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/30 dark:border-primary/40 flex items-center justify-center mt-0.5 shrink-0 group-hover/item:bg-primary transition-all shadow-sm">
                        <Check className="w-3 h-3 text-primary dark:text-white group-hover/item:text-white" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Imagen Dinámica */}
            <div className="w-full lg:w-[55%] relative">
              <div className={`absolute top-1/2 -translate-y-1/2 ${svc.reverse ? '-left-10' : '-right-10'} w-72 h-72 bg-gradient-to-br from-primary to-accent blur-[80px] opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-1000 -z-10 rounded-full`} />
              
              <motion.div 
                whileHover={{ scale: 1.03, rotate: svc.reverse ? -2 : 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-gray-100 dark:border-white/5 group-hover:border-primary/30 transition-colors duration-500 relative"
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-1000 z-10" />
                <img src={svc.img} alt="Técnica" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out saturate-50 group-hover:saturate-100" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
