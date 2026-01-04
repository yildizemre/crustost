import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FDFBF5]">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />

      <footer className="bg-[#1A472A] py-8 text-center">
        <p className="text-white/60">
          © 2024 Crust - All Day Snacks. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}

export default App;
