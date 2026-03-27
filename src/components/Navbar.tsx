import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleTheme }: { isDarkMode: boolean, toggleTheme: () => void }) => {
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
          ? 'py-3 px-6 bg-white/70 dark:bg-darker/40 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
          : 'py-4 px-6 bg-transparent border border-transparent'
      }`}>
        <div className="flex justify-between items-center relative z-10">
          
          {/* Logo */}
          <a href="#inicio" className="text-xl md:text-2xl font-display font-bold tracking-wider text-gray-900 dark:text-white uppercase drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:text-primary transition-colors">
            NOCTRA
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium tracking-[0.15em] text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 shadow-none dark:shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all border border-gray-200 dark:border-transparent"
              aria-label="Alternar tema"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="https://wa.me/573114971131?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20eventos."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark dark:bg-primary/20 dark:backdrop-blur-md dark:border dark:border-primary/50 text-white font-semibold text-[13px] tracking-[0.1em] transition-all duration-300 shadow-[0_4px_15px_rgba(124,58,237,0.3)] dark:hover:bg-primary/40 dark:hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]"
            >
              RESERVAR
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-white"
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
                  className="text-base font-medium text-gray-700 dark:text-gray-300 tracking-[0.15em]">
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
