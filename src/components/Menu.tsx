import { useState } from 'react';
import { Wheat, Sandwich, ChefHat, Droplet, Coffee } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
  icon: JSX.Element;
  items: MenuItem[];
  categoryImage: string;
}

const menuData: MenuCategory[] = [
  {
    id: 'tostlar',
    name: 'Tostlar',
    subtitle: 'Ekşi mayalı köy ekmeğinde tereyağı ve el yapımı soslarımızla hazırlanan özenli lezzetler.',
    icon: <Wheat size={32} strokeWidth={1.5} />,
    categoryImage: '/tost.jpg',
    items: [
      {
        id: 1,
        name: 'Klasik',
        description: 'Ekşi mayalı köy ekmeğinde tereyağı, el yapımı sos, %100 Dana Afyon Sucuğu ve taze kaşarlı lezzetimiz.',
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 2,
        name: 'Kavurmalı',
        description: 'Ekşi mayalı köy ekmeğinde; lokum gibi yumuşacık Afyon kavurması ve kaşarının buluştuğu, tereyağlı iz bırakan unutulmaz lezzet.',
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 3,
        name: 'Gurme',
        description: '%100 Dana Afyon Sucuğu, Afyon Pastırması ve yumuşacık Dana Kavurma; tereyağı, erimiş Cheddar peyniri ve taze roka ile buluşuyor.',
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 4,
        name: 'Peynirli',
        description: "Kolay eriyen Kars kaşarı, tadıyla fark yaratan Ezine beyaz peyniri ve cheddar'ın muhteşem üçlüsü, dağ kekiği dokunuşuyla altın lezzetimiz.",
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 5,
        name: 'Fesleğen',
        description: 'Taze ezine peyniri, dalından koparılmış domates dilimleri ve ev yapımı fesleğenli pesto soslu lezzetimiz.',
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 6,
        name: 'Sebzeli',
        description: 'Közlenmiş kapya biber ve yeşil biber, roka ve kaşar peynirin enfes uyumu, birleşerek vejetaryen bir ziyafet sunuyor.',
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
  {
    id: 'bazlama',
    name: 'Bazlama',
    subtitle: 'Geleneksel puf puf bazlama ekmeğinin yumuşacık dokunuşuyla hazırlanan, gözleme tadında tostlar.',
    icon: <Sandwich size={32} strokeWidth={1.5} />,
    categoryImage: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: [
      {
        id: 7,
        name: 'Klasik',
        description: 'Baharatı tam yerinde %100 Dana Afyon Sucuğu ve eridikçe lezzetlenen Bursa Kaşarı ile bildiğiniz klasiğin en sıcak hali.',
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 8,
        name: 'Kavurmalı',
        description: 'Pamuk gibi bazlamanın içindeki yumuşacık dana kavurma ve Kars kaşarı.',
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 9,
        name: 'Gurme',
        description: '%100 Dana Afyon Sucuğu ve Meşhur Afyon Pastırması ile buluşan yumuşacık Dana Kavurma Kars Kaşarı ve Ağlayan Cheddar ile şenlenen tostumuz.',
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 10,
        name: 'Peynirli',
        description: 'Puf bazlama ekmeği arasında eriyip bütünleşen üç peynirli karışımımız.',
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
  {
    id: 'patates',
    name: 'Patates',
    subtitle: 'Dışı çıtır çıtır ünlü Afyon agria patates, taze baharatlarla lezzeti katlanan klasikler.',
    icon: <ChefHat size={32} strokeWidth={1.5} />,
    categoryImage: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: [
      {
        id: 11,
        name: 'Çubuk',
        description: 'Dışı çıtır çıtır ünlü Afyon agria patates, taze baharatlarla lezzeti katlanan bir klasik.',
        image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 12,
        name: 'Cheddar Soslu',
        description: 'Dışı çıtır çıtır ünlü Afyon agria patates, taze baharatlarla lezzeti katlanan bir klasik üstüne cheddar sosu.',
        image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
  {
    id: 'soslar',
    name: 'Soslar',
    subtitle: 'Lezzetlerinizi tamamlayacak ev yapımı özel soslarımız.',
    icon: <Droplet size={32} strokeWidth={1.5} />,
    categoryImage: '/sosyal.png',
    items: [
      {
        id: 13,
        name: 'Acı Tatlı',
        description: 'Ev yapımı acı tatlı sosumuz.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 14,
        name: 'Sebzeli Beyaz',
        description: 'Taze sebzelerle hazırlanmış beyaz sosumuz.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 15,
        name: 'Cheddar',
        description: 'Gerçek cheddar peynirinden hazırlanmış kremalı sosumuz.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 16,
        name: 'Acılı Mayonez',
        description: 'Baharatlı ve acılı ev yapımı mayonezimiz.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
  {
    id: 'icecekler',
    name: 'İçecekler',
    subtitle: 'Serinletici ve ferahlatıcı içecek seçeneklerimiz.',
    icon: <Coffee size={32} strokeWidth={1.5} />,
    categoryImage: '/icecek.png',
    items: [
      {
        id: 17,
        name: 'Coca Cola',
        description: 'Klasik kola.',
        image: 'https://images.pexels.com/photos/1649337/pexels-photo-1649337.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 18,
        name: 'Pepsi',
        description: 'Serinletici kola.',
        image: 'https://images.pexels.com/photos/1649337/pexels-photo-1649337.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 19,
        name: 'Fanta',
        description: 'Portakallı gazoz.',
        image: 'https://images.pexels.com/photos/1649337/pexels-photo-1649337.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 20,
        name: 'Ayran',
        description: 'Geleneksel yoğurt içeceği.',
        image: 'https://images.pexels.com/photos/1649337/pexels-photo-1649337.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 21,
        name: 'Su',
        description: 'Sade su.',
        image: 'https://images.pexels.com/photos/1649337/pexels-photo-1649337.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('tostlar');

  const currentCategory = menuData.find((cat) => cat.id === selectedCategory);

  return (
    <section id="menu" className="min-h-screen bg-[#FDFBF5] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A472A] mb-4 md:mb-6">
            Menümüz
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-base md:text-lg text-[#2C3E2D]/80 px-4">
            Artizanal ekmeğimiz ve özenle seçilmiş malzemelerle hazırlanan lezzetler
          </p>
        </div>

        <div className="flex justify-center gap-3 md:gap-4 mb-12 md:mb-16 scroll-fade-in flex-wrap px-2">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#1A472A] text-white shadow-lg transform scale-105'
                  : 'bg-white text-[#1A472A] border-2 border-[#D4AF37] hover:border-[#1A472A]'
              }`}
            >
              <span className={selectedCategory === category.id ? 'text-[#D4AF37]' : ''}>
                {category.icon}
              </span>
              <span className="font-semibold text-base md:text-lg">{category.name}</span>
            </button>
          ))}
        </div>

        {currentCategory && (
          <div className="text-center mb-8 md:mb-12 scroll-fade-in px-4">
            <p className="text-base md:text-lg text-[#2C3E2D]/70 italic max-w-3xl mx-auto">
              {currentCategory.subtitle}
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start scroll-fade-in">
          <div className="space-y-4 md:space-y-6">
            {currentCategory?.items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4AF37]/20 hover:border-[#D4AF37]"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#1A472A] mb-3">{item.name}</h3>
                <p className="text-sm md:text-base text-[#2C3E2D]/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 order-first lg:order-last">
            <div className="relative h-64 md:h-96 lg:h-[600px] overflow-hidden rounded-lg shadow-2xl">
              <img
                src={currentCategory?.categoryImage}
                alt={currentCategory?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A472A]/60 via-transparent to-transparent flex items-end justify-center pb-8 md:pb-12">
                <p className="text-2xl md:text-3xl font-bold text-white">{currentCategory?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
