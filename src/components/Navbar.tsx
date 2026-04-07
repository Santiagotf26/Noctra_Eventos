import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'PORTAFOLIO', href: '#portfolio' },
    { name: 'SERVICIOS', href: '#servicios' },
  ];

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed w-full top-0 z-50 px-4 pt-4 md:px-6 md:pt-6"
    >
      <nav className={`w-full max-w-7xl mx-auto rounded-2xl transition-all duration-500 overflow-hidden ${
        scrolled 
          ? 'py-3 px-4 md:px-6 bg-darker/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
          : 'py-4 px-4 md:px-6 bg-transparent border border-transparent'
      }`}>
        <div className="flex justify-between items-center relative z-10">
          
          {/* Logo */}
          <a href="#inicio" className="text-xl md:text-2xl font-display font-bold tracking-wider text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:text-primary transition-colors">
            NOCTRA
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium tracking-[0.15em] text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
              </a>
            ))}
            {/* Removed Theme Toggle Button */}
            
            <a
              href="https://wa.me/573114971131?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20eventos."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-primary/80 hover:bg-primary/40 backdrop-blur-md border border-primary/50 text-white font-semibold text-[13px] tracking-[0.1em] transition-all duration-300 shadow-[0_4px_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]"
            >
              RESERVAR
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-4">
            <button
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col items-center space-y-6 pb-6 relative z-0"
            >
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-white tracking-[0.15em]">
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/573114971131?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20eventos." target="_blank" rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 rounded-xl bg-primary text-white font-semibold tracking-[0.1em] shadow-[0_4px_15px_rgba(124,58,237,0.4)]">
                RESERVAR AHORA
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
