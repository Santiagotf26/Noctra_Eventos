import { motion } from 'framer-motion';

const events = [
  "MATRIMONIOS",
  "CUMPLEAÑOS",
  "EMPRESARIALES",
  "15 AÑOS",
  "BAUTIZOS",
  "FIESTAS PRIVADAS",
  "DECORACIONES",
  "GRADOS",
  "LANZAMIENTOS",
];

const BrandCarousel = () => {
    return (
        <div className="w-full bg-[#030303] py-10 overflow-hidden relative flex z-20 border-b border-white/5">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-darker to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-darker to-transparent z-10 pointer-events-none" />
            
            <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                className="flex items-center gap-16 whitespace-nowrap min-w-max px-10"
            >
                {/* Doble render para scroll infinito impecable */}
                {[...events, ...events].map((evt, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-gray-500 opacity-80 hover:text-primary transition-all duration-300">
                        <span className="w-2 h-2 rounded-full bg-primary/40 mr-2" />
                        <span className="font-sans font-bold tracking-widest text-lg md:text-2xl uppercase">{evt}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default BrandCarousel;
