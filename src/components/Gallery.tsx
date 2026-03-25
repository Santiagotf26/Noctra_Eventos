import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1533174000225-114d05ce53bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // DJ
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Lights
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Party Crowd
  "https://images.unsplash.com/photo-1470229722913-7c090be5a524?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Stage
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Drinks / Bar
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Wedding or elegant
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Nuestros <span className="text-gradient">Momentos</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una mirada a las experiencias inolvidables que hemos creado para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                idx === 2 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-[4/3] w-full">
                <img 
                  src={src} 
                  alt={`Galería Fole Eventos ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ver evento
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
