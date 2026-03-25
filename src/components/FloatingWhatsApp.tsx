import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/573114971131"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] transition-colors"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: 1, 
        type: 'spring', 
        stiffness: 200, 
        damping: 10 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse effect rings */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 relative z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.786 5.768-.011 1.011.258 1.996.786 2.871l-.804 3 3.092-.803c.854.498 1.815.764 2.812.766 3.181 0 5.767-2.586 5.786-5.768.019-3.181-2.565-5.785-5.747-5.804h-.039zm0-1.748c4.155 0 7.536 3.391 7.555 7.546.019 4.155-3.372 7.555-7.527 7.574h-.051c-1.326-.002-2.624-.343-3.784-1l-4.223 1.096 1.117-4.116c-.722-1.168-1.107-2.494-1.107-3.844 0-4.155 3.381-7.546 7.536-7.546h.048zm3.966 10.334c-.217.585-1.284 1.127-1.782 1.205-.443.069-.974.128-3.078-.716-2.545-.989-4.161-3.601-4.286-3.77-.126-.169-1.025-1.365-1.025-2.604 0-1.239.648-1.849.882-2.096.234-.247.51-3.085.744-.309.215.22.457.576.536.726.079.15.158.324.032.576-.126.252-.189.402-.347.593-.158.191-.324.417-.465.553-.158.15-.324.314-.142.617.182.303.804 1.341 1.708 2.146 1.168 1.042 2.162 1.366 2.478 1.516.316.15.505.126.695-.095.19-.22.821-.955 1.042-1.284.22-.329.442-.275.726-.169.284.106 1.799.851 2.108 1.001.309.15.516.225.592.35.076.126.076.726-.141 1.311z" />
      </svg>
    </motion.a>
  );
};

export default FloatingWhatsApp;
