import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Galería', href: '#galeria' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="text-3xl font-syne font-bold tracking-tighter liquid-glass-text">
          Noctra
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/573114971131"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-white/10 bg-gradient-to-r from-primary/80 to-accent/80 text-white font-medium tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(109,40,217,0.5)] hover:border-white/30"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass flex flex-col items-center space-y-6 py-8 transition-transform duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-gray-200 hover:text-white"
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://wa.me/573114971131"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="px-8 py-3 rounded-full border border-white/10 bg-gradient-to-r from-primary/80 to-accent/80 text-white font-medium tracking-wide"
        >
          Contáctanos
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
