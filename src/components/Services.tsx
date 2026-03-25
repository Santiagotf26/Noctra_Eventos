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
    <section id="servicios" className="py-24 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Nuestros <span className="text-gradient">Servicios</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Equipos de última tecnología y personal altamente capacitado para garantizar el éxito total de tu celebración.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              {/* Hover gradient effect inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
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
