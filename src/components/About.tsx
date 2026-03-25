import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué elegir <br />
              <span className="text-gradient">Fole Eventos?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Somos una agencia creativa apasionada por transformar cualquier espacio en un escenario de primer nivel. Con años de experiencia en la industria del entretenimiento, nos aseguramos de que cada detalle suene, se vea y se sienta espectacular.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Tu tranquilidad es nuestra prioridad. Déjalo en nuestras manos y prepárate para disfrutar.
            </p>
            
            <a 
              href="https://wa.me/573114971131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-white text-darker font-bold text-lg transition-transform hover:scale-105"
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">+10</h3>
              <p className="text-gray-400 font-medium">Años de experiencia</p>
            </div>
            
            <div className="glass-card p-8 flex flex-col items-center text-center translate-y-0 sm:translate-y-8">
              <Users className="w-12 h-12 text-neon mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">+500</h3>
              <p className="text-gray-400 font-medium">Eventos realizados</p>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center">
              <ThumbsUp className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">100%</h3>
              <p className="text-gray-400 font-medium">Clientes Satisfechos</p>
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
