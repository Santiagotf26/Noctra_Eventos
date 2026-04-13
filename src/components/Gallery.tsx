import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const collections = [
    {
        title: "Decoraciones",
        count: "Estructuras & Flores",
        images: [
            "/g_decor_3.png",
            "/g_decor_1.png",
            "/g_decor_2.png",
        ]
    },
    {
        title: "Sociales VIP",
        count: "Bodas y 15 Años",
        images: [
            "/g_soc_2.png",
            "/g_soc_1.png",
            "https://images.unsplash.com/photo-1544785316-6e58aed68a50?auto=format&fit=crop&w=600&q=80",
        ]
    },
    {
        title: "Montajes Corporativos",
        count: "Producción Técnica",
        images: [
            "/service_tech_neon.png",
            "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80",
        ]
    }
];

const Gallery = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <section ref={ref} className="py-20 relative max-w-[1400px] mx-auto px-6 border-y border-white/5 my-12">
            <div className="text-center mb-16 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(57,255,20,0.8)]" />
                    <span className="text-white text-xs font-sans font-bold tracking-widest uppercase">Galería Técnica</span>
                </div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="font-display font-medium text-3xl md:text-5xl text-white tracking-tighter"
                >
                    Visuales y Montajes
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {collections.map((col, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="bg-[#0C0C0C] border border-white/5 rounded-3xl p-3 flex flex-col gap-2 cursor-pointer group hover:border-primary/30 transition-colors"
                    >
                        {/* Box layout for images: 1 large bottom, 3 small top */}
                        <div className="w-full flex gap-2 h-24 mb-1">
                            {col.images.slice(1).map((img, i) => (
                                <div key={i} className="flex-1 rounded-xl overflow-hidden bg-black" onClick={() => setSelectedImg(img)}>
                                    <img src={img} alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-48 rounded-2xl overflow-hidden bg-black relative" onClick={() => setSelectedImg(col.images[0])}>
                            <img src={col.images[0]} alt="Main" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                        </div>

                        <div className="px-3 py-4 flex justify-between items-center">
                            <h3 className="text-white font-display text-xl font-bold">{col.title}</h3>
                            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">{col.count}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
                        onClick={() => setSelectedImg(null)}
                    >
                        {/* Close button */}
                        <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-primary transition-colors bg-white/10 p-3 rounded-full" onClick={() => setSelectedImg(null)}>
                            <X size={24} />
                        </button>
                        
                        <motion.img 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={selectedImg} 
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                            alt="Visual de FOLE" 
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
