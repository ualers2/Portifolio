import { ExternalLink, Github, TrendingUp, Clock, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Media Cuts Studio',
      subtitle: 'Edicao com IA e Agendamento Para Tiktok, Youtube e Instagram',
      description: 'IA que transforma videos longos em videos verticais, alem de permitir agendamento de posts para as principais redes sociais possibilitando a redução em 80% do tempo de produção e aumentando 80% as visualizações devido a alta produção e consistencia de publicacoes.',
      image: '/logo-branco-removebg-preview4.png',
      tags: [
          'Python', 
          'FlaskAPI', 
          'FFmpeg with GPU',
          'OpenAI API', 
          'Ultralytics YOLOv11',
          'ReactJS', 
          'TypeScript', 
          'Firebase RTDB', 
          'Celery',
          'Redis',
          'Docker',
          'Docker-Compose',
          
        ],
      metrics: [
        { icon: TrendingUp, label: '80% aumento visualizações', value: '+80%' },
        { icon: Clock, label: '80% redução tempo edição', value: '-80%' },
        { icon: Users, label: 'Criadores ativos', value: '5' },
      ],
      links: {
        github: '',
        demo: 'https://mediacutsstudio.com',
      },
      status: 'Produto Lançado',
      color: 'from-primary to-secondary',
    },
    {
      id: 2,
      title: 'Employers AI Support',
      subtitle: 'Plataforma de Suporte ao Cliente Com IA',
      description: 'Controle do Agente Alfred Inicialize, reinicie, pause ou delete os agentes Alfred nas plataformas de comunicação.',
      image: '',
      tags: [
        'Python', 
        'FlaskAPI', 
        'OpenAI API', 
        'ReactJS', 
        'TypeScript', 
        'Firebase RTDB', 
        'Redis',
        'Docker',
        'Docker-Compose',
      ],
      metrics: [
        { icon: Clock, label: 'Suporte', value: '24/7' },
        { icon: TrendingUp, label: 'Disponibilidade em Múltiplos Canais', value: 'Telegram, Discord e WhatsApp' },
        // { icon: Users, label: 'Desenvolvedores usando', value: '80+' },
      ],
      links: {
        github: 'https://github.com/ualers2/Employers-AI-Support',
        demo: 'https://support.mediacutsstudio.com',
      },
      status: 'Mvp lançado',
      color: 'from-secondary to-accent',
    },
    {
      id: 3,
      title: 'SoftwareAI Library Hub',
      subtitle: 'MCP/Hub de Ferramentas para Agentes de IA',
      description: 'Biblioteca centralizada de ferramentas e Agentes de IA para desenvolvedores com APIs integradas, documentação automática e sistema de versionamento.',
      image: '',
      tags: [
        'Python', 
        'FlaskAPI', 
        'HTML', 
        'CSS', 
        'JINJA', 
        'Firebase RTDB', 
        'OpenAI API', 
        'Docker',
        'Docker-Compose',
      ],
      metrics: [
        { icon: Clock, label: 'Desenvolvimento recorde', value: '48h' },
        // { icon: TrendingUp, label: 'Economia por consulta', value: '30min' },
        { icon: Users, label: 'Desenvolvedores usando', value: '80+' },
      ],
      links: {
        github: 'https://github.com/SoftwareAI-Company/SoftwareAI-Library-Web/tree/main',
        demo: 'https://softwareai-library-hub.rshare.io',
      },
      status: 'Projeto lançado',
      color: 'from-secondary to-accent',
    }
    
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <div
      className="card-project animate-slide-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Project Image */}
      <div className="relative h-64 bg-gradient-to-br from-muted to-border overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
        <div className="absolute top-4 right-4">
          <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {project.status}
          </span>
        </div>

        {/* Imagem real do projeto */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-contain p-6"
        />
      </div>


      {/* Project Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="space-y-3 mb-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <metric.icon className="text-primary" size={16} />
              <span className="text-sm text-muted-foreground flex-1">{metric.label}</span>
              <span className="text-sm font-semibold text-foreground">{metric.value}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-border/50">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Github size={16} />
              Ver Código do Projeto
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <ExternalLink size={16} />
              Ver Url do Projeto
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-md text-gradient mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas que demonstram capacidade técnica e geram resultados reais
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Quer ver mais projetos ou discutir uma colaboração?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Vamos conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;