import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    title: "Noctra Corporativo",
    desc: "Convenciones de ventas, lanzamientos de producto, fiestas de fin de año, capacitaciones y activaciones de marca. Producción ejecutiva y audiovisual premium.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
    color: "from-blue-600/20 to-transparent",
    hoverColor: "group-hover:text-blue-400"
  },
  {
    title: "Noctra Social",
    desc: "Realizamos eventos únicos e inolvidables: Bodas de lujo, Fiestas de 15 años y aniversarios con escenografías temáticas y música en vivo.",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    color: "from-primary/20 to-transparent",
    hoverColor: "group-hover:text-primary-light"
  },
  {
    title: "Noctra Recreativo",
    desc: "Momentos de diversión e integración masiva. Conciertos, festivales y celebraciones para el bienestar empresarial y entretenimiento a gran escala.",
    img: "https://images.unsplash.com/photo-1533174000228-db8cb4fb76ac?auto=format&fit=crop&w=1000&q=80",
    color: "from-accent/20 to-transparent",
    hoverColor: "group-hover:text-accent-light"
  }
];

const EventTypes = () => {
  return (
    <section id="tipos-evento" className="py-24 md:py-32 bg-[#05050A] relative overflow-hidden transition-colors duration-500">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full opacity-0 hidden pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 z-10 relative">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-6 uppercase"
            >
              Categorías de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Eventos</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Nos adaptamos a la escala y tono de tu celebración. Ejecutamos de manera impecable cada evento asegurando una correcta operación logística.
            </motion.p>
          </div>
        </div>

        {/* Categories Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
              className="group relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 group-hover:bg-black/30" />
              <div className={`absolute inset-0 bg-gradient-to-t via-black/50 to-black/90 from-black z-10 ${cat.color} mix-blend-multiply transition-colors duration-500`} />
              
              <img 
                src={cat.img} 
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 saturate-50 group-hover:saturate-100"
              />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                  <h3 className={`text-3xl font-display font-bold text-white mb-4 ${cat.hoverColor} transition-colors duration-300`}>
                    {cat.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {cat.desc}
                  </p>
                </div>
                
                {/* Floating Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
