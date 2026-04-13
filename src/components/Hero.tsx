import { motion } from 'framer-motion';
import { Music, Music2, Music3, Sparkles, AudioWaveform } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="relative w-full min-h-[100svh] pt-16 md:pt-32 pb-12 overflow-hidden flex flex-col items-center justify-center">
            
            {/* ABSTRACT ART ASSET (Simulating the wavy neon green orb/membrane) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] md:-translate-y-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] opacity-60 z-0 pointer-events-none mix-blend-screen">
                 <img src="/orb.png" alt="Neon Green Blob" className="w-full h-full object-cover mix-blend-screen filter contrast-125 saturate-150" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }} />
            </div>

            <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 relative flex flex-col items-center text-center -mt-32 md:-mt-8 z-20">
                
                {/* FLOATING DECORATIONS (Elegant SVGs) */}
                <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
                    <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[5%] left-[25%] text-primary opacity-60">
                        <Music strokeWidth={1} width={40} height={40} />
                    </motion.div>
                    <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[25%] right-[28%] text-primary opacity-60">
                        <Music2 strokeWidth={1} width={48} height={48} />
                    </motion.div>
                    <motion.div animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-[20%] left-[32%] text-primary opacity-50">
                        <Music3 strokeWidth={1} width={36} height={36} />
                    </motion.div>
                    <motion.div animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[18%] right-[18%] opacity-30 text-white">
                        <Sparkles strokeWidth={1} width={50} height={50} />
                    </motion.div>
                    <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-[28%] left-[15%] opacity-30 text-white">
                        <AudioWaveform strokeWidth={1.5} width={42} height={42} />
                    </motion.div>
                </div>

                {/* MASSIVE CENTERED TYPOGRAPHY */}
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-display text-[3.5rem] sm:text-[5.5rem] lg:text-[7rem] leading-[1.05] text-white tracking-tighter text-center relative z-20 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] mt-0 md:mt-12"
                >
                    Tu Producción <br/>
                    de <span className="text-primary-light">Eventos</span>
                </motion.h1>

                {/* CENTERED SUBTITLE & BUTTONS */}
                <div className="mt-8 flex flex-col items-center gap-10 w-full max-w-3xl relative z-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-300 font-sans text-sm md:text-lg leading-relaxed text-center drop-shadow-md"
                    >
                        Desde el diseño conceptual y la decoración temática más impresionante, hasta la ejecución técnica con audio, iluminación y DJs/animadores de primer nivel. Creamos experiencias que tus invitados realmente amarán.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
                    >
                        <a href="#servicios" className="w-full sm:w-[200px] text-center border border-white/20 hover:border-white/50 text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-full transition-colors bg-black/40 backdrop-blur-md">
                            Explorar Servicios
                        </a>
                        <a href="#cotizador" className="w-full sm:w-[200px] text-center bg-primary hover:bg-primary-light text-black font-sans text-sm font-bold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] transition-all">
                            Ver Cotización
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* NEW LEFT: LASERS (Above Microphone) */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                className="absolute top-[15%] md:top-[8%] left-[-5%] md:left-[4%] w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[350px] md:h-[350px] mix-blend-screen pointer-events-none opacity-40 sm:opacity-50 lg:opacity-70 z-0 lg:z-20"
            >
                <img src="/lasers.png" alt="Laser Lights" className="w-full h-full object-contain filter contrast-[1.5] saturate-200 brightness-[0.9]" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }} />
            </motion.div>

            {/* LEFT: MICROPHONES (Responsive Background Element) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-[8%] md:bottom-[-2%] left-[-5%] md:left-2 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] mix-blend-screen pointer-events-none opacity-30 sm:opacity-50 lg:opacity-90 z-0 lg:z-30"
            >
                <img src="/mics.png" alt="Microphones" className="w-full h-full object-contain filter contrast-[1.4] saturate-150 brightness-[0.8]" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }} />
            </motion.div>

            {/* NEW RIGHT: MOVING HEADS (Above DJ Controller) */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                className="absolute top-[12%] md:top-[5%] right-[-5%] md:right-[4%] w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[350px] md:h-[350px] mix-blend-screen pointer-events-none opacity-40 sm:opacity-50 lg:opacity-80 z-0 lg:z-20"
            >
                <img src="/moving_heads.png" alt="Moving Heads" className="w-full h-full object-contain filter contrast-[1.6] saturate-[1.8]" style={{ maskImage: 'radial-gradient(circle at center, black 35%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 35%, transparent 70%)' }} />
            </motion.div>

            {/* RIGHT: DJ CONTROLLER (Responsive Background Element) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                className="absolute bottom-[8%] md:bottom-[-2%] right-[-5%] md:right-1 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] mix-blend-screen pointer-events-none opacity-40 sm:opacity-60 lg:opacity-100 z-0 lg:z-30"
            >
                <img src="/dj.png" alt="DJ Controller" className="w-full h-full object-contain filter contrast-[1.5] saturate-150 brightness-[0.8]" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }} />
            </motion.div>

            {/* BOTTOM SCROLL INDICATOR */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 opacity-70"
            >
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white/50 mb-1">
                    Desliza
                </span>
                
                {/* Mouse Outline Pill */}
                <div className="w-[20px] h-[34px] border-[1.5px] border-white/40 rounded-full flex justify-center p-[2px]">
                    {/* Scrolling Wheel / Dot */}
                    <motion.div 
                        animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }} 
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[3px] h-[6px] bg-primary rounded-full"
                    />
                </div>
            </motion.div>
            
        </section>
    );
};

export default Hero;
