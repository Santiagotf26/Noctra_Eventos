import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-32 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[120px]" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-tight">
              ¿Por qué elegir <br />
              <span className="text-gradient">Noctra?</span>
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-6 tracking-wide">
              Somos una agencia creativa apasionada por transformar cualquier espacio en un escenario de primer nivel. Con años de experiencia en la industria del entretenimiento, nos aseguramos de que cada detalle suene, se vea y se sienta espectacular.
            </p>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-10 tracking-wide">
              Tu tranquilidad es nuestra prioridad. Déjalo en nuestras manos y prepárate para disfrutar.
            </p>
            
            <a 
              href="https://wa.me/573114971131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-white text-darker font-medium text-lg tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Hablemos de tu evento
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <div className="glass-card p-10 flex flex-col items-center text-center rounded-3xl border-white/5 hover:border-white/10 transition-colors">
              <Award className="w-10 h-10 text-primary mb-6 drop-shadow-[0_0_15px_rgba(109,40,217,0.5)]" />
              <h3 className="text-4xl font-display font-black text-white mb-2 tracking-tighter">+10</h3>
              <p className="text-gray-400 font-light tracking-wide">Años de experiencia</p>
            </div>
            
            <div className="glass-card p-10 flex flex-col items-center text-center translate-y-0 sm:translate-y-12 rounded-3xl border-white/5 hover:border-white/10 transition-colors">
              <Users className="w-10 h-10 text-neon mb-6 drop-shadow-[0_0_15px_rgba(232,28,255,0.5)]" />
              <h3 className="text-4xl font-display font-black text-white mb-2 tracking-tighter">+500</h3>
              <p className="text-gray-400 font-light tracking-wide">Eventos realizados</p>
            </div>

            <div className="glass-card p-10 flex flex-col items-center text-center rounded-3xl border-white/5 hover:border-white/10 transition-colors">
              <ThumbsUp className="w-10 h-10 text-accent mb-6 drop-shadow-[0_0_15px_rgba(255,62,0,0.5)]" />
              <h3 className="text-4xl font-display font-black text-white mb-2 tracking-tighter">100%</h3>
              <p className="text-gray-400 font-light tracking-wide">Clientes Satisfechos</p>
            </div>
            
            {/* Empty block for layout grid or additional stat */}
            <div className="hidden sm:block"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
