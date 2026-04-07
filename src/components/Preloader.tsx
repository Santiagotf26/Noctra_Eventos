import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50 dark:bg-[#05050A] transition-colors duration-500">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 opacity-0 hidden rounded-full" />

      {/* Barras de Ecualizador (DJ/Fiesta) */}
      <div className="flex items-end gap-2 h-16 mb-8 relative z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 md:w-4 bg-gradient-to-t from-primary via-primary-light to-accent rounded-t-sm shadow-[0_0_15px_rgba(124,58,237,0.5)]"
            animate={{ 
              height: ['20%', '100%', '30%', '90%', '20%'] 
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center relative z-10"
      >
        <p className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2 tracking-widest">NOCTRA</p>
        <p className="text-[10px] font-mono tracking-[0.3em] text-primary dark:text-primary-light uppercase">
          Afinando Frecuencias...
        </p>
      </motion.div>
    </div>
  );
};

export default Preloader;
