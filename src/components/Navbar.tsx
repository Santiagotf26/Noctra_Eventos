import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FoleLogo = () => (
  <svg viewBox="0 0 360 180" className="h-9 md:h-12 drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
    {/* Círculo Perimetral Verde (Esencia del original) */}
    <circle cx="180" cy="90" r="85" stroke="#39FF14" strokeWidth="5" fill="none" opacity="0.8" />
    
    {/* FOLE - Texto Blanco con la O en Verde Neón para resaltar */}
    <text x="180" y="105" textAnchor="middle" fill="#FFFFFF" fontFamily="Syne, sans-serif" fontWeight="900" fontSize="85" style={{ letterSpacing: '-4px' }}>
      F<tspan fill="#39FF14" style={{ letterSpacing: '4px' }}>O</tspan>LE
    </text>

    {/* EVENTOS - Con fondo de contraste para legibilidad absoluta */}
    <rect x="80" y="135" width="200" height="30" rx="15" fill="#000000" />
    <text x="180" y="156" textAnchor="middle" fill="#39FF14" fontFamily="sans-serif" fontWeight="900" fontSize="18" letterSpacing="10">EVENTOS</text>
  </svg>
);

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'trabajos', 'cotizador', 'contacto'];
      let current = 'inicio';
      const scrollY = window.scrollY;
      for(const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollY >= el.offsetTop - 300) {
          current = section;
        }
      }
      setActiveTab(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'trabajos', label: 'Trabajos' },
    { id: 'cotizador', label: 'Cotizador' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <>
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto transition-all duration-300">
        
        {/* PILL HEADER */}
        <div className="bg-darker/80 backdrop-blur-xl border border-white/15 hover:border-primary/40 shadow-2xl rounded-full px-5 md:px-10 py-3 md:py-4 flex items-center justify-between md:justify-center gap-6 md:gap-12 transition-all relative z-50">
          
          <a href="#inicio" className="flex items-center" onClick={() => setMenuOpen(false)}>
             <FoleLogo />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((tab) => (
              <a 
                key={tab.id} 
                href={`#${tab.id}`}
                className={`font-sans text-[12px] font-extrabold uppercase tracking-[0.25em] transition-all duration-300 ${activeTab === tab.id ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
              >
                {tab.label}
              </a>
            ))}
          </nav>

          <button className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-white" onClick={() => setMenuOpen(!menuOpen)}>
             {menuOpen ? <X size={22} className="text-primary"/> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN - SLIDE DOWN ANIMATION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, transformOrigin: 'top center' }}
              animate={{ opacity: 1, y: 10 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-darker/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 flex flex-col gap-1 lg:hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-40 origin-top"
            >
               {navLinks.map((tab) => (
                  <a 
                      key={tab.id}
                      href={`#${tab.id}`} 
                      onClick={() => setMenuOpen(false)} 
                      className={`font-sans text-sm font-black w-full text-center py-4 rounded-2xl transition-all ${activeTab === tab.id ? 'bg-primary/15 text-primary' : 'text-gray-300 active:bg-white/5'}`}
                  >
                      {tab.label}
                  </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
