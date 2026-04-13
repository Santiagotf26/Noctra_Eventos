import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative w-full pt-12 pb-8 overflow-hidden z-20">
            
            {/* Ambient glows inside footer to simulate dark red lighting */}
            <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
                
                {/* CTA Block Minimalist */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full relative overflow-hidden bg-[#0A0A0A] border border-white/5 py-16 px-6 text-center rounded-[3rem]"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-primary mb-2" />
                        <h2 className="font-display font-medium text-3xl md:text-5xl text-white mb-2 leading-tight tracking-tighter">
                            A un Click de tu Próximo Evento.
                        </h2>
                        
                        <a href="#cotizador" className="mt-8 bg-primary hover:bg-primary-dark text-white shadow-[0_0_20px_rgba(57,255,20,0.6)] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
                            Agendar Equipo
                        </a>
                    </div>
                </motion.div>

                {/* Standard footer content below */}
                <div className="w-full pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-primary shrink-0" />
                        <div className="font-sans font-semibold text-sm tracking-tight text-white">
                          FOLE
                        </div>
                    </div>
                    
                    <div className="flex gap-8 text-gray-500 font-mono uppercase text-[10px] tracking-widest">
                        <a href="#" className="hover:text-primary transition-colors">Políticas</a>
                        <a href="#" className="hover:text-primary transition-colors">Términos</a>
                        <a href="#" className="hover:text-primary transition-colors">Contacto</a>
                    </div>
                    
                    <p className="text-gray-600 text-xs">
                        © 2026 FOLE Eventos. 
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
