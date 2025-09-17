import { Calendar, MapPin, TrendingUp, Code, Zap } from 'lucide-react';

const Experience = () => {
  const timeline = [

    {
      year: '2026',
      title: 'Desenvolvedor Full Stack Senior',
      company: 'Projetos Próprios',
      location: 'Remoto',
      period: '2025/09 - 2026/09',
      description: '',
      achievements: [
        'Nginx com SSL para toda a aplicacao Media Cuts Studio',
        'IA de Transcricao de audio com modelos capazes de rodar em qualquer servidor',
        'IA de Selecao de melhores momentos de um video capaz de consumir videos de horas e retornar varios trechos impactantes',
        'IA de Auto Reframe capaz de analisar 1 e ou 2 rostos e recortar e alinhar em formato vertical',
        'Integracao Oficial com publicacoes no youtube em modo teste',
        'Plataforma de Suporte ao Cliente no WhatsApp, Discord e Telegram com IA',
        'Build FFmpeg com suporte a GPU',
        'API de Pipeline CI/CD com IA para Sumarizar Alteracoes',
        'API de Upload de video em massa',
        'API de Agendamento de videos para Youtube',
        'API de Servidor De Arquivos',
        'API de Uptime de todas as apis e sites',
        'API de Webhook para eventos de progresso em tempo real das tarefas',
      ],
      technologies: [
        'React', 
        'ReactJS', 
        'TypeScript', 
        'Node.js',
        'Python', 
        'OpenAI API',
        'Open AI AGENTS SDK', 
        'Open AI whisper',
        'FFmpeg with GPU', 
        'Ultralytics YOLLOv11',
        'Firebase RTDB',
        'Linux',
        'Docker', 
        'Docker-Compose', 
        'Git', 
        'Nginx',
        'SSL',
        'APScheduler',
        'Waitress',
        'Uvicorn',

      ],
      color: 'from-accent to-primary',
      icon: Code,
    },
    
    {
      year: '2025',
      title: 'Desenvolvedor Junior',
      company: 'Projetos Próprios',
      location: 'Remoto',
      period: '2024/09 - 2025/09',
      description: 'Aprendendo a criar aplicacoes com interfaces modernas, Inicio da prototipagem do Media Cuts Studio, Criacao da biblioteca SoftwareAI Library Hub',
      achievements: [
        'Prototipagem do Media Cuts Studio',
        'Desenvolvimento das API´s de landingpage e enfileiramento de tasks no celery',
        'Criação do SoftwareAI Library Hub com 27 Ferramentas para IA',
        'IA que cria sons musicais com modelos locais disponibilizado pelo Facebook',
        'IA que cria PixelArt com modelos disponibilizados no HugFace',
      ],
      technologies: ['Python', 'React', 'TypeScript', 'OpenAI API'],
      color: 'from-secondary to-accent',
      icon: Code,
    },
    {
      year: '2024',
      title: 'Desenvolvedor Junior',
      company: 'Projetos Próprios',
      location: 'Remoto',
      period: '2023/09 - 2024/09',
      description: 'Aprendendo a criar aplicacoes com interfaces modernas, Inicio da prototipagem do Media Cuts Studio, Criacao da biblioteca SoftwareAI Library Hub',
      achievements: [
        'Prototipagem do Media Cuts Studio',
        'Desenvolvimento das API´s de landingpage e enfileiramento de tasks no celery',
        'Criação do SoftwareAI Library Hub com 27 Ferramentas para IA',
        'IA que cria sons musicais com modelos locais disponibilizado pelo Facebook',
        'IA que cria PixelArt com modelos disponibilizados no HugFace',
      ],
      technologies: ['Python', 'React', 'TypeScript', 'OpenAI API'],
      color: 'from-secondary to-accent',
      icon: Code,
    },
    {
      year: '2023',
      title: 'Desenvolvedor Aprendiz',
      company: 'Projetos Diversos',
      location: 'Remoto',
      period: '2023/09 - 2022/09',
      description: 'Especialização em desenvolvimento de APIs, automação de processos e integração de sistemas.',
      achievements: [
        'Desenvolvimento do SoftwareAI Chat',
        'Desenvolvimento do SoftwareAI Library Hub',
        'Criação de 10+ APIs Flask',
        'Implementação de sistemas de automação com 99.9% uptime',
      ],
      technologies: ['Python', 'FlaskAPI', 'Firebase RTDB', 'Docker', 'ReactJS'],
      color: 'from-secondary to-accent',
      icon: Zap,
    },
    {
      year: '2022',
      title: 'Aprendiz',
      company: 'Início da Jornada',
      location: 'Remoto',
      period: '2022/09',
      description: 'Início da carreira com foco em aprendizado de conceitos da linguagem python, desenvolvimento de micro projetos para aprender conceitos como: Variaveis, Variaveis de ambiente, Classes, Funcoes, Threading, MultiProcess, Requests',
      achievements: [
        'Aprendizado de conceitos da linguagem python',
        'Criação dos primeiros projetos de automação com interface legada pyside2 e pyqt5',
        'Base sólida em Syntaxe e Logica da linguagem python e Banco de Dados',
      ],
      technologies: ['Python', 'Pyside2', 'Pyqt5', 'Firebase RTDB', 'Selenium', 'Pandas'],
      color: 'from-accent to-primary',
      icon: TrendingUp,
    },
  ];

  const stats = [
    { label: 'Anos de Experiência', value: '3+', icon: Calendar },
    { label: 'Projetos Concluídos', value: '7', icon: Code },
    { label: 'Clientes Satisfeitos', value: '15+', icon: TrendingUp },
    { label: 'Uptime Médio', value: '99.9%', icon: Zap },
  ];

  const toNumYM = (s?: string) => {
    if (!s) return 0;
    const parts = String(s).split('/');
    const y = parseInt(parts[0], 10) || 0;
    const m = parseInt(parts[1], 10) || 0;
    return y * 100 + m;
  };

  const endOf = (it: any) => {
    if (it.period && it.period.includes(' - ')) {
      const [, end] = it.period.split(' - ').map((p: string) => p.trim());
      return toNumYM(end);
    }
    // se não tem intervalo, usa year ou period
    return toNumYM(it.period) || toNumYM(it.year);
  };

  // ordena desc (mais recente primeiro)
  const orderedTimeline = [...timeline].sort((a, b) => endOf(b) - endOf(a));


  const CardContent = ({ item }: { item: any }) => (
    <div className="card-hover group">
      <div className="flex items-start gap-3 mb-4">
        <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
          <item.icon className="text-white" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
          <div className="flex flex-col gap-1">
            <span className="text-primary font-medium">{item.company}</span>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {item.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {item.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed">
        {item.description}
      </p>

      <div className="mb-4">
        <h4 className="font-semibold text-foreground mb-2">Principais Conquistas:</h4>
        <ul className="space-y-1">
          {item.achievements.map((achievement: string, idx: number) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <TrendingUp className="mt-0.5 flex-shrink-0" size={14} />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech: string) => (
          <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-md text-gradient mb-4">Experiência Profissional</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              3 anos de projetos e produtos que fazem a diferença
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="card-hover text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="text-primary mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Linha vertical contínua */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {orderedTimeline.map((item, index) => {
                const badge = item.period?.includes(' - ') ? item.period : item.year;
                const isLeft = index % 2 === 0;
                const key = `${index}-${item.period}-${item.title}`;

                return (
                  <div key={key} className="relative">
                    {/* Nó móvel (mobile) */}
                    <div className="absolute left-8 md:hidden transform -translate-y-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                    {/* Card para mobile (stacked) */}
                    <div className="md:hidden ml-16">
                      <CardContent item={item} />
                    </div>

                    {/* Layout Desktop: grid 3 colunas (left / center / right) */}
                    <div className="hidden md:grid md:grid-cols-12 items-start gap-4">
                      {isLeft ? (
                        <>
                          <div className="md:col-span-5 md:pr-8 md:text-right">
                            <CardContent item={item} />
                          </div>

                          <div className="md:col-span-2 flex flex-col items-center">
                            <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                            <span className="mt-2 bg-primary text-primary-foreground text-lg font-bold px-4 py-2 rounded-full shadow-primary text-center">
                              {badge}
                            </span>
                          </div>

                          <div className="md:col-span-5" />
                        </>
                      ) : (
                        <>
                          <div className="md:col-span-5" />

                          <div className="md:col-span-2 flex flex-col items-center">
                            <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                            <span className="mt-2 bg-primary text-primary-foreground text-lg font-bold px-4 py-2 rounded-full shadow-primary text-center">
                              {badge}
                            </span>
                          </div>

                          <div className="md:col-span-5 md:pl-8 md:text-left">
                            <CardContent item={item} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;