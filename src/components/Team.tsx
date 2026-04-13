import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const team = [
    { name: "Andrés Kramer", score: "Senior", img: "https://i.pravatar.cc/150?img=11" },
    { name: "Camilo Armand", score: "Lighting", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Benjamín Higgins", score: "Audio", img: "https://i.pravatar.cc/150?img=13" },
    { name: "Sarah Foster", score: "Logistics", img: "https://i.pravatar.cc/150?img=14" },
    { name: "Sofía Mckinney", score: "Creative", img: "https://i.pravatar.cc/150?img=15" },
];

const Team = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section ref={ref} className="py-20 relative max-w-[1400px] mx-auto px-6 border-t border-white/5">
            <div className="text-center mb-12 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(57,255,20,0.8)]" />
                    <span className="text-white text-xs font-sans font-bold tracking-widest uppercase">Expertise</span>
                </div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="font-display font-medium text-3xl md:text-5xl text-white tracking-tighter"
                >
                    Nuestros Expertos
                </motion.h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {team.map((member, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        className="bg-[#0C0C0C] hover:bg-[#141414] transition-colors rounded-xl p-3 flex items-center gap-4 cursor-pointer group border border-white/5 min-w-[200px]"
                    >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10 group-hover:border-primary/50 transition-colors">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover img-tint opacity-80" />
                        </div>
                        <div className="overflow-hidden">
                            <h3 className="text-white font-sans font-bold text-sm truncate">{member.name}</h3>
                            <p className="text-primary text-[10px] uppercase tracking-wider font-bold mt-0.5">{member.score}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Team;
