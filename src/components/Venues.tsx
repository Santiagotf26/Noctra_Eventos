import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const venues = [
  {
    name: "Complejo La Enseñanza",
    type: "Centro de Eventos",
    capacity: "Hasta 1000 personas",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Finca Los Arrayanes",
    type: "Evento Campestre",
    capacity: "Hasta 500 personas",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Salón Élite VIP",
    type: "Corporativo / Gala",
    capacity: "Hasta 300 personas",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
  }
];

const Venues = () => {
  return (
    <section id="locaciones" className="py-24 md:py-32 bg-white dark:bg-[#030305] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6"
          >
            <span className="section-tag !mb-0 text-primary dark:text-primary-light">ESPACIOS EXCLUSIVOS</span>
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white"
          >
            NUESTRAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">LOCACIONES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
            className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Alianzas estratégicas con los mejores recintos y fincas campestres para asegurar el entorno perfecto para tu producción.
          </motion.p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
              className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl dark:shadow-2xl hover:shadow-[0_20px_50px_rgba(124,58,237,0.3)] transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:from-black/95" />
              <img 
                src={venue.img} 
                alt={venue.name} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end transform transition-transform duration-500">
                <div className="flex items-center gap-2 text-primary-light mb-3 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <MapPin size={18} />
                  <span className="text-sm font-semibold tracking-wider uppercase">{venue.type}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {venue.name}
                </h3>
                <p className="text-white/70 text-sm translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  Capacidad: {venue.capacity}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Venues;
