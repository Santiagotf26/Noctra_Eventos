import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const productions = [
  {
    title: "Bodas y Matrimonios",
    desc: "Sistemas de iluminación cálida, sonido de alta fidelidad y logística impecable para el día más importante.",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&fm=webp&q=60"
  },
  {
    title: "Fiestas de 15 Años",
    desc: "Efectos especiales, láseres, y atmósferas juveniles vibrantes con equipos de nivel discoteca/concierto.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&fm=webp&q=60"
  },
  {
    title: "Eventos Corporativos",
    desc: "Producción ejecutiva, pantallas LED finas y microfonía profesional para lanzamientos y conferencias.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&fm=webp&q=60"
  },
  {
    title: "Cumpleaños y Privados",
    desc: "Celebraciones a medida, escenarios temáticos y música en vivo con producción audiovisual premium.",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&fm=webp&q=60"
  }
];

const EventTypes = () => {
  return (
    <section id="tipos-evento" className="py-24 md:py-32 bg-gray-50 dark:bg-darker relative overflow-hidden transition-colors duration-500">
      
      {/* Luces de fondo glassmorfismo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 z-10 relative">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 dark:text-white mb-4"
            >
              EVENTOS <span className="text-primary dark:text-primary-light">A MEDIDA</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15 }}
              className="text-gray-600 dark:text-gray-400 max-w-xl text-base leading-relaxed"
            >
              Nos adaptamos a la escala y tono de tu celebración. Desde una íntima recepción de boda hasta una producción corporativa masiva de alto perfil.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#servicios"
            className="group flex items-center gap-2 text-primary dark:text-primary-light text-sm font-semibold tracking-[0.1em] hover:text-gray-900 dark:hover:text-white transition-all whitespace-nowrap bg-primary/5 dark:bg-primary/10 px-6 py-3 rounded-xl border border-primary/20 hover:bg-primary/10 dark:hover:bg-primary/20 backdrop-blur-md shadow-sm"
          >
            VER SERVICIOS 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>

        {/* Tarjetas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productions.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="flex flex-col sm:flex-row group relative bg-white dark:bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-2xl h-full"
            >
              {/* Imagen (Mitad Izquierda) */}
              <div className="sm:w-2/5 overflow-hidden relative min-h-[200px] h-full">
                <div className="absolute inset-0 bg-gray-900/10 dark:bg-darker/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={item.img} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              {/* Contenido (Mitad Derecha) */}
              <div className="p-6 sm:p-8 relative z-20 sm:w-3/5 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 tracking-wide group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300 mt-auto">
                  <Plus className="w-5 h-5 text-gray-500 group-hover:text-primary dark:group-hover:text-white transition-colors" />
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
