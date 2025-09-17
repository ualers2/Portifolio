import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL || 'http://localhost:3000';
  const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME || 'http://localhost:3000';
  const VIDEO_ID = import.meta.env.VITE_VIDEO_ID || 'http://localhost:3000';
  const apiKey = import.meta.env.VITE_apiKey || 'http://localhost:3000';
  const USER_ID = import.meta.env.VITE_USER_ID || 'http://localhost:3000';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  function getFilenameFromDisposition(disposition: string | null) {
    if (!disposition) return null;
    const starMatch = /filename\*\s*=\s*UTF-8''([^;]+)/i.exec(disposition);
    if (starMatch?.[1]) {
      try { return decodeURIComponent(starMatch[1].replace(/['"]/g, '')); } catch {}
    }
    const simpleMatch = /filename\s*=\s*("?)([^";]+)\1/i.exec(disposition);
    if (simpleMatch?.[2]) return simpleMatch[2];
    return null;
  }

  const handleDownloadCV = async (e?: React.MouseEvent) => {
    if (e?.preventDefault) e.preventDefault();
    console.log("👉 Clique detectado no botão de download");

    try {
      const url = `${UPLOAD_URL}/api/projects/${encodeURIComponent(PROJECT_NAME)}/videos/${encodeURIComponent(VIDEO_ID)}/download`;

      const resp = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'X-User-Id': USER_ID,
        },
      });

      console.log("status:", resp.status);

      if (!resp.ok) {
        let msg = `Falha no download do CV (HTTP ${resp.status})`;
        try {
          const j = await resp.json();
          if (j?.message) msg = j.message;
        } catch {
          try { msg = await resp.text(); } catch {}
        }
        throw new Error(msg);
      }

      const blob = await resp.blob();
      const cd = resp.headers.get("Content-Disposition");
      const suggested = getFilenameFromDisposition(cd);
      const filename = suggested || "Curriculo.pdf";

      const href = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = href;
      a.download = filename;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(href);

      console.log("✅ Download iniciado:", filename);
    } catch (err: any) {
      console.error("❌ Erro ao baixar CV:", err?.message ?? err);
    }
  };


  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ualers2', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ualerson-rodrigues-de-freitas-749422382/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mediacutsstudio@gmail.com', label: 'Email' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-lg border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
          >
            &lt;Portfolio/&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground dark:text-white hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
            <button
              type="button"
              onClick={handleDownloadCV}
              className="btn-accent ml-4 flex items-center gap-2"
              aria-label="Baixar CV"
            >
              <Download size={18} />
              CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                  <button
                    type="button"
                    onClick={handleDownloadCV}
                    className="btn-accent ml-4 flex items-center gap-2"
                    aria-label="Baixar CV"
                  >
                    <Download size={18} />
                    Baixar CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;