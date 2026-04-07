import { motion } from 'framer-motion';
import { Headphones, Music } from 'lucide-react';

const team = [
  {
    name: "ALEX VANGUARD",
    role: "HEAD PRODUCER",
    img: "/djs/dj_alpha.png"
  },
  {
    name: "MIA KRYPT",
    role: "RESIDENT DJ",
    img: "/djs/dj_beta.png"
  },
  {
    name: "ZANE NEØN",
    role: "TECHNO VISIONARY",
    img: "/djs/dj_gamma.png"
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-24 md:py-32 relative overflow-hidden bg-transparent z-10 text-white">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            NUESTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-cyan-400">TALENTO</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Los curadores de la energía. Productores y DJs residentes que garantizan que el ambiente nunca caiga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: idx * 0.15, duration: 0.4, ease: "easeOut" }}
              className="group relative cursor-pointer"
            >
              {/* Glow Aura */}
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] border border-white/10 group-hover:border-primary/40 transition-colors duration-500 shadow-2xl">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover saturate-50 group-hover:saturate-100 transition-all duration-[2s] group-hover:scale-110" 
                />
                
                {/* Gradient Info Box */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-display font-black tracking-wider uppercase mb-1 drop-shadow-md text-white group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-light text-xs font-bold tracking-[0.2em] mb-4">
                    {member.role}
                  </p>
                  
                  {/* Social Micro-interactions */}
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors border border-white/20 hover:border-transparent">
                      <Headphones size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-cyan-500 transition-colors border border-white/20 hover:border-transparent">
                      <Music size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
