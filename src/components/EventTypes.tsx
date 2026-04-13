import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart } from 'lucide-react';

const events = [
    {
        title: "Gala Corporativa",
        author: "by FOLE Pro",
        price: "2.4k C",
        likes: "12k",
        img: "/service_tech_neon.png",
        color: "from-primary/80"
    },
    {
        title: "Boda de Lujo",
        author: "by Event Studio",
        price: "1.8k C",
        likes: "9.2k",
        img: "/g_decor_3.png",
        color: "from-primary/50"
    },
    {
        title: "Festival Electro",
        author: "by SoundMax",
        price: "4.5k C",
        likes: "34k",
        img: "/service_dj_neon.png",
        color: "from-primary-dark/80"
    },
    {
        title: "Activación de Marca",
        author: "by Marketing VIP",
        price: "1.2k C",
        likes: "5.5k",
        img: "/g_soc_2.png",
        color: "from-primary-light/80"
    }
];

const EventTypes = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 relative max-w-[1400px] mx-auto px-6">
            
            <div className="text-center mb-16 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(57,255,20,0.8)]" />
                    <span className="text-white text-xs font-sans font-bold tracking-widest uppercase">Servicios Populares</span>
                </div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="font-display font-medium text-3xl md:text-5xl text-white tracking-tighter"
                >
                    Servicios Especializados
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((ev, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                        className={`relative rounded-3xl overflow-hidden bg-[#0A0A0A] p-3 group border border-white/5 hover:border-primary/30 transition-colors ${idx === 1 ? 'transform md:-translate-y-6' : ''}`}
                    >
                        {/* Glow Behind Image */}
                        <div className={`absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b ${ev.color} opacity-10 blur-xl pointer-events-none group-hover:opacity-30 transition-opacity duration-500`} />
                        
                        <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-4 bg-black">
                            <img src={ev.img} alt={ev.title} className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-90" />
                        </div>
                        
                        <div className="px-2 pb-2 relative z-10">
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-white font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors">{ev.title}</h3>
                                    <p className="text-gray-500 text-xs font-sans mt-2">{ev.author}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-white font-mono font-bold text-xs bg-white/5 px-2 py-1 rounded border border-white/10">{ev.price}</div>
                                    <div className="flex items-center gap-1 text-primary text-xs font-semibold mt-2 justify-end">
                                        <Heart size={12} className="fill-primary" />
                                        {ev.likes}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default EventTypes;
