import { useState, useEffect } from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: true,
    caption: 'Her Tost Bir Sanat Eseri'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
    caption: 'Ekşi Mayalı Ekmek Yapımı'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
    caption: 'Taze Malzemeler'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: true,
    caption: 'El Yapımı Peynirler'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
    caption: 'Tatlı Kaçamaklar'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/1398688/pexels-photo-1398688.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
    caption: 'Sıcak Atmosfer'
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: true,
    caption: 'Avokado Sevgisi'
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/1395319/pexels-photo-1395319.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
    caption: 'Bahçeden Soframıza'
  },
  {
    id: 9,
    url: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: false,
    caption: 'Afyon\'dan Gelen Lezzet'
  },
  {
    id: 10,
    url: 'https://images.pexels.com/photos/8629148/pexels-photo-8629148.jpeg?auto=compress&cs=tinysrgb&w=800',
    tall: true,
    caption: 'Detayda Kusursuzluk'
  },
];

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleImages((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = document.querySelectorAll('.gallery-item');
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A472A] mb-4 md:mb-6">
            İçimizden Kareler
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-base md:text-lg text-[#2C3E2D]/80 px-2">
            Lezzetin arkasındaki hikayeler
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              data-id={image.id}
              className={`gallery-item break-inside-avoid overflow-hidden rounded-sm shadow-xl transition-all duration-700 ${
                visibleImages.includes(image.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative group cursor-pointer">
                <img
                  src={image.url}
                  alt={image.caption}
                  className={`w-full ${
                    image.tall ? 'h-96' : 'h-64'
                  } object-cover transition-transform duration-500 group-hover:scale-110`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A472A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[#D4AF37] font-semibold text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
