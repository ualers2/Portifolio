import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Vamos criar algo incrível juntos?
              </span>
            </h3>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Especializado em transformar ideias em soluções reais com tecnologia de ponta, 
              automação inteligente e resultados mensuráveis.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-accent"
            >
              Iniciar um projeto
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Quick Links */}
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#about"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Sobre
                </a>
                <a
                  href="#projects"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Projetos
                </a>
                <a
                  href="#experience"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Experiência
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack Info */}
          <div className="mt-6 pt-6 border-t border-neutral-700 text-center text-sm text-neutral-500">
            <p>
              Stack: React 18 • TypeScript • Tailwind CSS • Framer Motion • Vite
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-6 right-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;