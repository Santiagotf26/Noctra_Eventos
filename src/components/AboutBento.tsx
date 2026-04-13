import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zap } from 'lucide-react';

const AboutBento = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Quote Simulator State
    const [eventType, setEventType] = useState('matrimonios');
    const [guests, setGuests] = useState('100');
    const [extraSound, setExtraSound] = useState(false);
    const [robot, setRobot] = useState(false);

    // Base minimum is 900,000 + additional factors
    const basePrices: Record<string, number> = { 
        'matrimonios': 1200000, 
        'cumpleaños': 900000, 
        'empresarial': 1500000,
        'fiestas privadas': 900000,
        'decoraciones': 1000000
    };
    
    // Scale slightly by guests to not bloat the 900k minimum
    const guestMultiplier = parseInt(guests) > 100 ? (parseInt(guests) - 100) * 8000 : 0; 
    let extrasTotal = (extraSound ? 450000 : 0) + (robot ? 350000 : 0);
    
    const totalEstimate = (basePrices[eventType] || 900000) + guestMultiplier + extrasTotal;

    const handleWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();
        const formattedPrice = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(totalEstimate);
        const msg = `Hola FOLE, quiero cotizar un evento tipo ${eventType} para aproximadamente ${guests} personas.` + 
                    (extraSound || robot ? ` También me gustaría incluir: ${extraSound ? 'Equipos Premium, ' : ''}${robot ? 'Animación DJ/Show' : ''}.` : '') +
                    `\n\nPresupuesto base estimado que vi en la web: ${formattedPrice} COP + Viáticos.`;
        window.open(`https://wa.me/573114971131?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section ref={ref} id="cotizador" className="py-20 relative max-w-[1600px] mx-auto px-8 flex flex-col items-end border-t border-white/5 pt-32">
            
            {/* LARGE TEXT STATEMENT */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[65%] mb-16"
            >
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary border border-primary/20 shadow-[0_0_8px_rgba(57,255,20,0.8)]" />
                    <span className="text-white text-xs font-sans font-bold tracking-widest uppercase">Sobre Nosotros</span>
                </div>
                
                <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl tracking-tight text-gray-300 font-light leading-snug">
                    Realizamos <span className="text-primary font-semibold">producciones</span> tecnológicas para eventos poniendo la calidad como prioridad, asegurando que cada <span className="text-primary font-semibold">montaje mejore</span> las experiencias de los asistentes.
                </h2>
            </motion.div>

            {/* BENTO GRID */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">

                {/* LEFT LARGE BOX - QUOTE SIMULATOR */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col relative overflow-hidden"
                >
                    <div className="flex items-center justify-between mb-8 relative z-10">
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                             <span className="text-gray-400 text-xs font-sans font-bold tracking-widest uppercase">Simulador de Cotizaciones</span>
                        </div>
                        <span className="text-gray-600 text-xs font-mono">Disponibilidad Inmediata</span>
                    </div>

                    <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                         {/* Form Area */}
                         <form onSubmit={handleWhatsApp} className="space-y-6 flex flex-col justify-center">
                            
                            <div>
                                <h3 className="font-display text-3xl text-white mb-2 font-bold tracking-tight">Arma tu cotización</h3>
                                <p className="text-gray-500 text-sm">Escoge opciones base para tu montaje.</p>
                            </div>

                            {/* Event Type */}
                            <div>
                                <label className="block text-gray-500 text-xs uppercase font-bold tracking-wider mb-2">Tipo de Evento</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {['Matrimonios', 'Cumpleaños', 'Empresarial', 'Fiestas Privadas', 'Decoraciones'].map((type) => (
                                        <div 
                                            key={type}
                                            onClick={() => setEventType(type.toLowerCase())}
                                            className={`cursor-pointer text-center py-2 px-1 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${eventType === type.toLowerCase() ? 'bg-primary border-primary text-black' : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'}`}
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Guests */}
                            <div>
                                <label className="block text-gray-500 text-xs uppercase font-bold tracking-wider mb-2 flex justify-between">
                                    <span>Asistentes</span>
                                    <span className="text-primary font-bold text-sm">{guests}</span>
                                </label>
                                <input 
                                    type="range" 
                                    min="50" max="1000" step="50" 
                                    value={guests} 
                                    onChange={(e) => setGuests(e.target.value)}
                                    className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" 
                                />
                            </div>

                            {/* Total and Button */}
                            <div className="pt-2 flex flex-col gap-2">
                                 <div className="bg-primary/5 border border-primary/20 text-gray-400 text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded inline-block w-max mb-1">
                                     * Los precios varían según la dificultad del montaje
                                 </div>
                                 <div className="flex items-center justify-between">
                                     <div>
                                          <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Estimado Desde (COP)</span>
                                          <div className="flex items-baseline gap-2">
                                            <span className="font-display text-2xl md:text-3xl text-white">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(totalEstimate)}</span>
                                            <span className="text-gray-500 text-xs">+ Viáticos</span>
                                          </div>
                                     </div>
                                     <button type="submit" className="bg-transparent border border-primary hover:bg-primary hover:text-black text-white py-2.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                                         Solicitar Cotización
                                     </button>
                                 </div>
                            </div>
                         </form>

                         {/* Image/Visual Representation in Simulator */}
                         <div className="relative rounded-2xl overflow-hidden hidden md:block">
                              {/* Background normal image sin el img-tint */}
                              <img src="https://images.unsplash.com/photo-1470229722913-7c090be18f4a?auto=format&fit=crop&w=600&q=80" alt="Evento" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
                              
                              {/* Overlay content*/}
                              <div className="absolute inset-0 flex flex-col p-6">
                                   <div className="mt-auto">
                                        <h4 className="font-display text-xl text-white mb-2 font-bold flex items-center gap-2">
                                            <Zap className="text-primary w-5 h-5" /> Extras Premium
                                        </h4>
                                        <p className="text-gray-300 text-xs mb-4">Adiciona servicios especiales para elevar el valor de producción de tu evento.</p>
                                        
                                        <div className="flex flex-col gap-3">
                                            <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setExtraSound(!extraSound)}>
                                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${extraSound ? 'bg-primary border-primary text-black' : 'border-white/30 group-hover:border-primary/50'}`}>
                                                    {extraSound && <span className="text-xs font-bold font-sans">✓</span>}
                                                </div>
                                                <span className="text-sm font-sans font-medium text-white group-hover:text-primary transition-colors">Decoración & Equipos Premium</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setRobot(!robot)}>
                                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${robot ? 'bg-primary border-primary text-black' : 'border-white/30 group-hover:border-primary/50'}`}>
                                                    {robot && <span className="text-xs font-bold font-sans">✓</span>}
                                                </div>
                                                <span className="text-sm font-sans font-medium text-white group-hover:text-primary transition-colors">Animación Especial & DJ</span>
                                            </label>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN (Stats & Testimonial) */}
                <div className="grid grid-rows-[auto_1fr] gap-6 h-full">
                    
                    {/* Top Right - Big Stat */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="bg-transparent border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden"
                    >
                        <p className="text-gray-400 text-xs font-sans mb-4 max-w-[200px] leading-relaxed">Avalados por más de 120 clientes en 4 categorías distintas, organizamos montajes desde la idea hasta el desarrollo logístico en 8-10 días.</p>
                        <div className="mt-auto flex justify-between items-end">
                            <div className="flex gap-1 text-gray-500 text-xs">★★★★★</div>
                            <span className="font-display text-[5rem] leading-[0.8] tracking-tighter text-white">120+</span>
                        </div>
                    </motion.div>

                    {/* Bottom Right - Testimonial Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="border border-white/5 rounded-[2rem] p-6 flex flex-col relative overflow-hidden"
                    >
                         <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent z-0 pointer-events-none" />

                         <div className="relative z-10 flex gap-4 h-full">
                              <div className="w-24 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-[#1A1A1A]">
                                   <img src="https://i.pravatar.cc/150?img=11" alt="Reviewer" className="w-full h-full object-cover opacity-90" />
                              </div>
                              <div className="flex flex-col justify-between py-1">
                                   <span className="text-gray-600 text-4xl leading-[0.5] font-serif">"</span>
                                   <p className="text-white font-sans text-xs italic opacity-90">La profesionalidad e impecable atención que tienen con la decoración y la animación hace que el evento se luzca al 100%.</p>
                                   <div className="mt-2 text-[10px]">
                                        <span className="text-white font-bold block">Juan Pérez</span>
                                        <span className="text-gray-500">Director de Ventas</span>
                                   </div>
                              </div>
                         </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutBento;
