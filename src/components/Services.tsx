import { motion } from 'framer-motion';
import { Music, Speaker, PartyPopper, CalendarCheck } from 'lucide-react';

const services = [
  {
    icon: <Music className="w-8 h-8 text-primary" />,
    title: "DJ Profesional",
    description: "Mezclas en vivo, crossover o géneros específicos. Hacemos que la pista de baile nunca se vacíe."
  },
  {
    icon: <Speaker className="w-8 h-8 text-accent" />,
    title: "Sonido e Iluminación",
    description: "Sistemas de audio de alta fidelidad y luces robóticas/laser para un montaje tipo concierto."
  },
  {
    icon: <PartyPopper className="w-8 h-8 text-neon" />,
    title: "Animación de Eventos",
    description: "Animadores y shows en vivo para mantener la energía al máximo y entretener a todos los invitados."
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-white" />,
    title: "Organización Total",
    description: "Desde bodas hasta eventos corporativos. Planeamos cada detalle para que tú solo disfrutes."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight"
          >
            Nuestros <span className="text-gradient">Servicios</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg font-light tracking-wide"
          >
            Equipos de última tecnología y personal altamente capacitado para garantizar el éxito total de tu celebración.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 group relative overflow-hidden border-white/5 hover:border-white/10 hover:shadow-[0_10px_40px_rgba(109,40,217,0.1)] transition-all duration-500 rounded-3xl"
            >
              {/* Hover gradient effect inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(232,28,255,0.3)]">
                  {svc.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-white/90 group-hover:text-white transition-colors tracking-wide">
                  {svc.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                  {svc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
