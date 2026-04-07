import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "La calidad audiovisual y el nivel del DJ transformaron nuestra fiesta de fin de año en un evento de talla mundial. Noctra entrega lo que promete: élite absoluta.",
    author: "CEO, TechNova Corp",
    event: "Gala Corporativa Anual"
  },
  {
    text: "Un despliegue de luces y sonido impecable. Nuestros 15 años fueron exactamente como los soñamos, con una atmósfera de festival.",
    author: "Familia Restrepo",
    event: "Fiesta de 15 Años VIP"
  },
  {
    text: "Desde la logística hasta el último beat, la energía nunca bajó. El staff de Noctra son verdaderos maestros de la producción.",
    author: "Director de Marketing",
    event: "Activación de Marca"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent z-10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent-light text-xs font-bold tracking-[0.2em] mb-4">
            RESEÑAS VIP
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: idx * 0.15, duration: 0.4, ease: "easeOut" }}
              className="group bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] p-8 md:p-10 rounded-3xl hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-500 shadow-2xl relative"
            >
              {/* Gradient border effect top */}
              <div className="absolute top-0 left-10 w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <Quote className="text-primary-light/50 w-10 h-10 mb-6 group-hover:text-cyan-400 transition-colors duration-500" />
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-light italic">
                "{t.text}"
              </p>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <p className="text-white font-bold tracking-wider uppercase text-sm">
                  {t.author}
                </p>
                <p className="text-cyan-500/70 text-xs font-bold tracking-[0.1em] mt-1">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
