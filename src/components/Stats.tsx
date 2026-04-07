import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { label: 'Años de Experiencia', value: '+7', delay: 0 },
  { label: 'Eventos Realizados', value: '+500', delay: 0.2 },
  { label: 'Clientes Satisfechos', value: '100%', delay: 0.4 },
  { label: 'Staff Profesional', value: '+50', delay: 0.6 }
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-primary/5 dark:bg-[#05050A] relative overflow-hidden border-y border-gray-200 dark:border-white/5 transition-colors duration-500">
      
      {/* Background accents */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/20 dark:bg-primary/10 opacity-0 hidden rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: stat.delay, duration: 0.8, type: "spring" }}
              className="flex flex-col items-center group cursor-default"
            >
              <h4 className="text-4xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:from-primary group-hover:to-accent transition-all duration-300 drop-shadow-sm mb-2">
                {stat.value}
              </h4>
              <p className="text-sm md:text-base font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
