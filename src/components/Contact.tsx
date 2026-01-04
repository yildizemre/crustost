import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#FDFBF5] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A472A] mb-4 md:mb-6">
            Bir Kahveye Bekleriz
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-base md:text-lg text-[#2C3E2D]/80 px-2">
            Kapımız herkese açık, lezzetimiz herkese eşit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-2xl scroll-fade-in">
          <div className="bg-[#1A472A] p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6 md:mb-8">Bize Ulaşın</h3>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#D4AF37] p-2 md:p-3 rounded-md flex-shrink-0">
                  <MapPin className="text-[#1A472A]" size={20} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Adres</h4>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    İnönü mahallesi kar sokak kar apartmanı 20/A
                    <br />
                    Ataşehir, İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#D4AF37] p-2 md:p-3 rounded-md flex-shrink-0">
                  <Phone className="text-[#1A472A]" size={20} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Telefon</h4>
                  <p className="text-sm md:text-base text-white/80">+90 545 386 0917</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#D4AF37] p-2 md:p-3 rounded-md flex-shrink-0">
                  <Clock className="text-[#1A472A]" size={20} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Çalışma Saatleri</h4>
                  <p className="text-sm md:text-base text-white/80">
                    Her Gün: 08:00 - 04:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Bizi Takip Edin</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/crusttostwaffle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4AF37] p-3 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="text-[#1A472A]" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2891!2d29.1255!3d40.9914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7f4b5e3c5e7%3A0x0!2zQXRhxZ9laGlyLCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1704400000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'saturate(0.8)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crust Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
