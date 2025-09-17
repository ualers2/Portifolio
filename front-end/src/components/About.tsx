import { CheckCircle, Award, Zap, Target } from 'lucide-react';
import profilePhoto from '@/assets/Imagem.jpg';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['ReactJS', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'Html', 'Css', 'Js(Java Script)'],
    },
    {
      category: 'Backend',
      items: ['Python', 'FlaskAPI', 'Firebase RTDB', 'Uvicorn', 'Waitress', 'Git', 'FFmpeg with GPU', ],
    },
    {
      category: 'IA & Automação',
      items: ['OpenAI API', 'LangChain', 'Selenium', 'Pandas', 'Ultralytics YOLOv11'],
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Docker-Compose', 'Linux'],
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: '80% Redução de Tempo',
      description: 'Automação de edição de vídeo que transforma videos longos em videos curtos com IA',
    },
    {
      icon: Zap,
      title: '3 IA´s em 3 Meses',
      description: 'Record de entrega de 3 ferramentas de IA completas: Audio Transcricao, Selecao de melhores momentos em videos de mais de 1 hora, Auto Reframe de faces empilhando verticalmente em 9:16',
    },
    {
      icon: Zap,
      title: '+54,617 linhas de Diff',
      description: 'IA dentro da pipeline capaz de Sumarizar mais de +54,617 linhas de Diff em um Pull request Profissional',
    },

  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-md text-gradient mb-4">Sobre Mim</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor Experiente em criar soluções que fazem a diferença
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Section */}
            <div className="animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-primary">
                  <img
                    src={profilePhoto}
                    alt="Desenvolvedor Full Stack"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-full p-4 shadow-accent">
                  <CheckCircle size={32} className="text-white" />
                </div>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <h3 className="heading-sm mb-4">Desenvolvedor Full Stack</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Com 3 anos de experiência em desenvolvimento, especializo-me em criar produtos e soluções 
                  completas que automatizam processos e integram inteligência artificial para 
                  maximizar resultados.
                </p>
              </div>
            </div>

            {/* Skills & Achievements */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Skills */}
              <div>
                <h4 className="text-2xl font-bold mb-6">Habilidades Técnicas</h4>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">{skill.category}</span>
                        {/* <span className="text-sm text-muted-foreground">{skill.level}%</span> */}
                      </div>
                      {/* <div className="h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%`, animationDelay: `${index * 0.2}s` }}
                        ></div>
                      </div> */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-2xl font-bold mb-6">Conquistas Recentes</h4>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.title}
                      className="card-hover group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          <achievement.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">
                            {achievement.title}
                          </h5>
                          <p className="text-muted-foreground text-sm">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;