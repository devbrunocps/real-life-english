"use client";

import { motion } from "motion/react";
import { Target, Users, Globe, Award, BookOpen, Zap } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import BlurFade from "./magicui/blur-fade";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    {
      icon: Target,
      title: "Metodologia Cambridge",
      description: "Sistema reconhecido internacionalmente com foco em resultados comprovados",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Professor Nativo Britânico",
      description: "Aprenda com Stiliano Pire, professor nativo com experiência internacional",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Foco em Conversação",
      description: "Desenvolva fluência real para se comunicar em qualquer situação",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Certificação Internacional",
      description: "Prepare-se para exames oficiais como Cambridge, TOEFL e IELTS",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BookOpen,
      title: "Material Atualizado",
      description: "Conteúdo moderno alinhado com as tendências globais do ensino de idiomas",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Zap,
      title: "Turmas Reduzidas",
      description: "Grupos pequenos para maior interação e atenção personalizada",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <AnimatedGradientText className="px-6 py-2 rounded-full">
                  <span className="text-sm">Por que escolher a Real Life?</span>
                </AnimatedGradientText>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Excelência em Ensino de Inglês
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Mais de uma década transformando sonhos em realidade através do domínio do inglês
              </p>
            </div>
          </BlurFade>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative group h-full"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm overflow-hidden">
                    <BorderBeam size={200} duration={12 + index * 2} delay={index * 2} />
                    
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-foreground" />
                      </div>
                    </div>

                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                  </div>
                </motion.div>
              </BlurFade>
            ))}
          </div>

          {/* Highlight Section */}
          <BlurFade delay={0.9}>
            <div className="relative">
              <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-border/50 backdrop-blur-sm overflow-hidden">
                <BorderBeam size={300} duration={15} />
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <h3 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Uma Jornada de Sucesso
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      A Real Life English Center não é apenas uma escola de idiomas - é um centro de transformação pessoal e profissional. Nossa abordagem única combina a metodologia Cambridge com a experiência de professores nativos, criando um ambiente onde o aprendizado acontece naturalmente.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Desde 2012, temos orgulho de fazer parte da jornada de centenas de alunos que alcançaram seus objetivos de falar inglês fluentemente, seja para viajar, trabalhar em empresas internacionais ou realizar o sonho de estudar no exterior.
                    </p>
                  </div>

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <div className="aspect-[4/3] relative">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                          alt="Alunos estudando inglês"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                      </div>
                      <BorderBeam size={250} duration={18} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}