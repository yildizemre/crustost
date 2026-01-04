import { Heart, Leaf, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Tutku',
    description: 'Her sabah taze hazırladığımız ürünlere koyduğumuz sevgi ve özen, lezzetin temelini oluşturur. Yaptığımız işe olan tutkumuz, her lokmanın mükemmel olmasını sağlar.'
  },
  {
    icon: Leaf,
    title: 'Doğallık',
    description: 'Yerel üreticilerden aldığımız organik malzemeler ve katkısız tariflerimizle, sağlıklı beslenmenin tadını çıkarmanızı sağlıyoruz. Doğadan sofraya taze lezzetler.'
  },
  {
    icon: Users,
    title: 'Topluluk',
    description: 'Sadece bir kafe değiliz; bir araya gelinen, paylaşımların yapıldığı ve anıların biriktiği sıcak bir yuvayız. Her misafirimiz ailemizin bir parçası.'
  },
  {
    icon: Award,
    title: 'Kalite',
    description: 'El yapımı tostlarımızdan özel waffle\'larımıza, taze sıkılmış içeceklerimizden kahvelerimize kadar her detayda kaliteyi önceliğimiz yaparız.'
  }
];

export default function Values() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF5] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A472A] mb-4 md:mb-6">
            Değerlerimiz
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[#2C3E2D]/80 max-w-3xl mx-auto leading-relaxed px-4">
            2015 yılından bu yana, Ankara'nın kalbinde lezzet ve kaliteyi bir araya getiriyoruz.
            Crust olarak, sadece yemek sunmuyoruz; yaşam tarzı yaratıyoruz. Her gün,
            misafirlerimize unutulmaz anlar yaşatmak için çalışıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-fade-in"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1A472A] to-[#2C5234] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1A472A] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#2C3E2D]/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1A472A] rounded-2xl p-8 md:p-12 text-center scroll-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hikayemiz
          </h3>
          <div className="max-w-4xl mx-auto space-y-4 text-white/90 leading-relaxed">
            <p className="text-base md:text-lg">
              Crust'ın hikayesi, iki arkadaşın ortak bir tutkusu ile başladı:
              İnsanları bir araya getiren, sıradan anları özel kılan lezzetler yaratmak.
              Ankara'nın hızlı temposunda, kaliteli ve samimi bir durak olmayı hedefledik.
            </p>
            <p className="text-base md:text-lg">
              Bugün, binlerce mutlu misafire ev sahipliği yapmanın gururunu yaşıyoruz.
              Her sabah fırından yeni çıkan ekmeklerimiz, özenerek hazırladığımız tostlarımız,
              ve özel waffle'larımız ile gününüze güzel bir başlangıç yapmanız için buradayız.
            </p>
            <p className="text-base md:text-lg font-semibold text-[#D4AF37]">
              Çünkü biz inanıyoruz ki, güzel anlar güzel lezzetlerle başlar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
