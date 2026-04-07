import { motion } from 'framer-motion';

const words = ["LÁSERES", "•", "SONIDO LINE ARRAY", "•", "PANTALLAS LED", "•", "EFECTOS ESPECIALES", "•", "DJ SETUPS", "•", "ESTRUCTURAS TRUSS", "•"];

const Marquee = () => {
  return (
    <div className="py-6 bg-primary/10 border-y border-primary/20 overflow-hidden relative flex">
      {/* Gradient fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030305] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030305] to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {/* Double the words to ensure smooth looping */}
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span 
            key={index} 
            className={`mx-8 text-2xl md:text-4xl font-display font-black tracking-widest ${
              word === "•" ? "text-primary" : "text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white"
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
