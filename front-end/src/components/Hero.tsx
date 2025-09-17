import { ArrowDown, Code, Zap, Target } from 'lucide-react';
import heroBg from '@/assets/hero-bg-purple.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(239, 237, 241, 0.9), rgba(255, 255, 255, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-black animate-fade-in">
          {/* Main Heading */}
          <h1 className="heading-lg mb-6">
            Full Stack Developer
            <br />
            <span className="text-accent font-bold">Especializado em Back-End Python</span>
            <br />
            <span className="text-primary font-bold">e Inteligência Artificial</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 text-black/90 max-w-3xl mx-auto leading-relaxed">
            3 anos transformando ideias em soluções reais que geram resultados mensuráveis
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-2 bg-black/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Code className="text-accent" size={20} />
              <span className="font-semibold">3+ Anos</span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="text-accent" size={20} />
              <span className="font-semibold">20+ Projetos</span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Target className="text-accent" size={20} />
              <span className="font-semibold">Remoto</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="btn-hero group"
            >
              Vamos Conversar
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </button>
            <button 
              onClick={scrollToAbout}
              className="btn-outline text-black border-white hover:bg-white hover:text-primary"
            >
              Conhecer meu trabalho
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-black/60" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;