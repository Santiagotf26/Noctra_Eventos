import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#05050A] pt-24 pb-12 border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      
      {/* Glow de fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 opacity-0 hidden rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 text-center md:text-left">
          
          {/* Columna Info / Marca */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-4">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              {/* Logo gráfico (N) */}
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <svg viewBox="0 0 100 100" className="w-8 h-8 relative z-10" fill="none">
                  <path d="M25 75V25L75 75V25" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-3xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-light uppercase">
                NOCTRA
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
              Transformamos espacios convencionales en memorias electrizantes. Ingeniería audiovisual, escenografía y diseño técnico de alto nivel.
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-primary hover:to-accent hover:border-transparent transition-all shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:bg-[#FF0000] hover:border-transparent transition-all shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:bg-[#1877F2] hover:border-transparent transition-all shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Columna Navegación */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-3">
             <h4 className="text-xs font-bold tracking-[0.25em] text-gray-900 dark:text-white uppercase mb-6 flex items-center justify-center md:justify-start gap-2">
               ENLACES
             </h4>
             <ul className="space-y-4">
               {['Inicio', 'Tipos de Evento', 'Servicios', 'Portafolio'].map(link => (
                 <li key={link}>
                   <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary dark:hover:text-primary-light hover:translate-x-1 inline-block transition-all font-medium">
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
          </motion.div>

          {/* Columna Contacto */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.25em] text-gray-900 dark:text-white uppercase mb-6 flex items-center justify-center md:justify-start gap-2">
              CONTACTO CENTRAL
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-primary dark:text-primary-light shrink-0">
                  <Phone size={18} />
                </div>
                <a href="https://wa.me/573114971131?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20eventos." target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm font-semibold truncate">
                  +57 311 497 1131
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-primary dark:text-primary-light shrink-0">
                  <Mail size={18} />
                </div>
                <a href="mailto:contacto@noctra.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm font-semibold truncate">
                  contacto@noctra.com
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-primary dark:text-primary-light shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed text-left">
                  Bogotá, Colombia.<br/>
                  Operaciones Nivel Nacional.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Separador Base */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-xs font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} NOCTRA EVENT PRODUCTIONS
          </p>
          <div className="flex gap-6 text-gray-500 text-xs font-mono lowercase tracking-wide">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">/privacidad</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">/terminos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
