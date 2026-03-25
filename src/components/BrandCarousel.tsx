const brands = [
  "Sony", "Pioneer DJ", "Yamaha", "Shure", "JBL", "Sennheiser", "Chauvet", "Bose", 
  "Sony", "Pioneer DJ", "Yamaha", "Shure", "JBL", "Sennheiser", "Chauvet", "Bose"
];

const BrandCarousel = () => {
  return (
    <div className="w-full bg-darker py-8 border-y border-white/5 overflow-hidden flex relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-darker to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-darker to-transparent z-10" />
      
      <div className="flex animate-[scroll_30s_linear_infinite] w-max">
        {brands.map((brand, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 mx-8 flex items-center justify-center min-w-[120px]"
          >
            <span className="text-xl md:text-2xl font-black text-gray-500/50 uppercase tracking-widest hover:text-gray-300 transition-colors cursor-default">
              {brand}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default BrandCarousel;
