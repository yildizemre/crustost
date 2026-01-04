import { Wheat, MapPin, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-screen bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A472A] mb-4 md:mb-6">
            İyi Malzeme, Gerçek Lezzet
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-base md:text-lg text-[#2C3E2D]/80 max-w-3xl mx-auto px-2">
            Felsefemiz basit: Doğal, kaliteli ve yerel ürünlerle, her lokmada hissedeceğiniz lezzetler yaratmak.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="scroll-fade-in text-center">
            <div className="mb-4 md:mb-6 flex justify-center">
              <Wheat className="text-[#D4AF37]" size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A472A] mb-3 md:mb-4">
              Ekşi Mayalı Ekmeğimiz
            </h3>
            <p className="text-sm md:text-base text-[#2C3E2D]/70 leading-relaxed px-2">
              Her güne, geleneksel yöntemlerle, sabırla mayaladığımız artizanal ekşi mayalı ekmeklerimizle başlıyoruz.
            </p>
          </div>

          <div className="scroll-fade-in text-center">
            <div className="mb-4 md:mb-6 flex justify-center">
              <MapPin className="text-[#D4AF37]" size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A472A] mb-3 md:mb-4">
              Yerel Üreticilerden
            </h3>
            <p className="text-sm md:text-base text-[#2C3E2D]/70 leading-relaxed px-2">
              Lezzetimizin temelini, Afyon'un meşhur sucuğu ve Ezine'nin en kaliteli peynirleri gibi yerel hazinelerimiz oluşturuyor.
            </p>
          </div>

          <div className="scroll-fade-in text-center sm:col-span-2 md:col-span-1">
            <div className="mb-4 md:mb-6 flex justify-center">
              <Leaf className="text-[#D4AF37]" size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A472A] mb-3 md:mb-4">
              Taze ve Yaratıcı
            </h3>
            <p className="text-sm md:text-base text-[#2C3E2D]/70 leading-relaxed px-2">
              Klasiklerin ruhunu korurken, taze ve yaratıcı dokunuşlarla alışılmışın dışında, unutulmaz atıştırmalıklar hazırlıyoruz.
            </p>
          </div>
        </div>

        <div className="scroll-fade-in">
          <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img
              src="/waffle.png"
              alt="Crust Artizanal Experience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A472A]/80 via-transparent to-transparent flex items-end justify-center pb-8 md:pb-12 px-4">
              <div className="text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Her Lokma Bir Hikaye
                </p>
                <p className="text-base md:text-lg text-[#D4AF37]">Doğallık ve lezzet bir arada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
