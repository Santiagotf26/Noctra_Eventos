import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <>
      <section className="py-24 md:py-32 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] bg-gradient-to-r from-primary via-accent to-primary opacity-[0.05] dark:opacity-20 blur-[100px] dark:blur-[150px] mix-blend-multiply dark:mix-blend-screen -z-10 animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-primary/40 transition-colors duration-700"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 dark:text-white mb-6 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              ¿LISTO PARA ENCENDER <br className="hidden md:block"/> LA PISTA?
            </motion.h2>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
             >
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/573114971131?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20eventos." target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-sm tracking-[0.15em] uppercase shadow-[0_0_20px_rgba(124,58,237,0.3)] dark:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-xl transition-all block">
                  INDEPENDIZA TU FECHA
                </motion.a>
             </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-darker relative overflow-hidden   border-y border-gray-200 dark:border-white/[0.05] transition-colors duration-500">
        <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm -z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
            {[{ value: "+120", label: "FIESTAS" }, { value: "15k", label: "ASISTENTES" }, { value: "12", label: "SYSTEMAS PA" }, { value: "24/7", label: "CREW" }].map((stat, idx) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, type: "spring", stiffness: 120 }} className="text-center bg-white/70 dark:bg-white/[0.02] backdrop-blur-md border border-gray-200 dark:border-white/5 p-6 rounded-2xl shadow-sm dark:shadow-none hover:border-primary/30 transition-colors">
                <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-800 via-primary to-primary dark:from-white dark:via-primary-light dark:to-primary mb-3">
                  {stat.value}
                </div>
                <div className="text-xs font-bold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
