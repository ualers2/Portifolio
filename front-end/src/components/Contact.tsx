import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erro no servidor");

      const result = await res.json();

      toast({
        title: "Mensagem enviada com sucesso! 🚀",
        description: "Entrarei em contato em até 24 horas.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mediacutsstudio@gmail.com',
      href: 'mailto:mediacutsstudio@gmail.com',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 (31) 7304-9318',
      href: 'https://wa.me/553173049318',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Belo Horizonte, MG',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ualers2',
      color: 'hover:text-neutral-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ualerson-rodrigues-de-freitas-749422382/',
      color: 'hover:text-blue-600',
    }
    
  ];

  const budgetRanges = [
    { value: '', label: 'Selecione o orçamento' },
    { value: '1k-3k', label: 'R$ 1.000 - R$ 3.000' },
    { value: '3k-5k', label: 'R$ 3.000 - R$ 5.000' },
    { value: '5k-10k', label: 'R$ 5.000 - R$ 10.000' },
    { value: '10k+', label: 'R$ 10.000+' },
    { value: 'negociar', label: 'Valor a negociar' },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-md text-gradient mb-4">Vamos Trabalhar Juntos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pronto para transformar sua ideia em realidade? Entre em contato e vamos conversar!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 animate-slide-up">
              <div className="card-hover">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 group hover:text-primary transition-colors duration-300"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-muted-foreground">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="border-t border-border/50 pt-6">
                  <h4 className="font-semibold mb-4">Redes Sociais</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-muted p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-8 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <div className="flex items-center gap-2 text-secondary font-medium mb-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    Disponível para projetos
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Resposta em até 24 horas • Início imediato
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="card-hover">
                <h3 className="text-2xl font-bold mb-6">Envie sua Proposta</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa/Projeto
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                      placeholder="Nome da empresa ou projeto"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Orçamento/Tipo
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Conte-me sobre seu projeto, suas necessidades e objetivos..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Proposta
                    </>
                  )}
                </button>

                <p className="text-sm text-muted-foreground mt-4">
                  * Campos obrigatórios. Seus dados são privados e seguros.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;