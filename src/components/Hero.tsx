import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF5]">
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#FDFBF5]/40 to-[#FDFBF5] z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/orig.jpg')`,
          opacity: 0.3,
        }}
      />

      <div className="relative z-20 text-center px-4 fade-in max-w-4xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1A472A] mb-2 hero-title">
            CRUST
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#D4AF37] font-light tracking-wide italic">
            All Day Snacks
          </p>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-[#2C3E2D] mb-8 md:mb-12 font-light leading-relaxed px-2">
          Artizanal Lezzetler, Günün Her Anında.
        </p>

        <button
          onClick={scrollToMenu}
          className="px-8 md:px-10 py-3 md:py-4 bg-[#1A472A] text-[#FDFBF5] font-medium text-base md:text-lg rounded-md hover:bg-[#FDFBF5] hover:text-[#1A472A] border-2 border-[#1A472A] transition-all duration-300 transform hover:scale-105"
        >
          Lezzetlerimizi Keşfet
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-[#D4AF37]" size={40} />
      </div>
    </section>
  );
}
