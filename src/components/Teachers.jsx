"use client";

import { motion } from "motion/react";
import { Award, BookOpen, GraduationCap, Star } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import BlurFade from "./magicui/blur-fade";
import ShineBorder from "./magicui/shine-border";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Teachers() {
  const teachers = [
    {
      name: "Stiliano Pire",
      role: "Diretor & Professor Nativo",
      specialty: "Cambridge & Business English",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      flag: "🇬🇧",
    },
    {
      name: "Prof. Anderson Silva",
      role: "Professor Sênior",
      specialty: "Conversação Avançada",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      flag: "🇧🇷",
    },
    {
      name: "Prof. Mariana Costa",
      role: "Professora de Kids",
      specialty: "Inglês Infantil & Teens",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      flag: "🇧🇷",
    },
    {
      name: "Prof. Ricardo Mendes",
      role: "Professor Especialista",
      specialty: "Preparatório TOEFL & IELTS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      flag: "🇧🇷",
    },
  ];

  const qualifications = [
    {
      icon: Award,
      title: "Certificação Cambridge",
      description: "Todos os professores são certificados pela metodologia Cambridge",
    },
    {
      icon: GraduationCap,
      title: "Formação Continuada",
      description: "Treinamentos regulares e atualizações pedagógicas constantes",
    },
    {
      icon: BookOpen,
      title: "Experiência Comprovada",
      description: "Anos de experiência em ensino de inglês para todas as idades",
    },
    {
      icon: Star,
      title: "Excelência no Ensino",
      description: "Compromisso com resultados e satisfação dos alunos",
    },
  ];

  return (
    <section id="teachers" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <BlurFade delay={0.1}>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <AnimatedGradientText className="px-6 py-2 rounded-full">
                  <span className="text-sm">Nosso Time de Elite</span>
                </AnimatedGradientText>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Professores Qualificados
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                8 professores altamente capacitados dedicados ao seu sucesso
              </p>
            </div>
          </BlurFade>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teachers.map((teacher, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -12 }}
                  className="group relative"
                >
                  <ShineBorder
                    borderRadius={24}
                    borderWidth={2}
                    duration={14 + index * 2}
                    color={["#023e8a", "#c1121f", "#023e8a"]}
                    className="!p-0 overflow-hidden"
                  >
                    <div className="relative">
                      {/* Image */}
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <ImageWithFallback
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Flag badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg">
                          {teacher.flag}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl mb-1">{teacher.name}</h3>
                        <p className="text-sm mb-2 text-blue-200">{teacher.role}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          <span className="text-gray-200">{teacher.specialty}</span>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                        <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <Award className="w-12 h-12 mx-auto mb-4" />
                          <p className="text-sm leading-relaxed">
                            Especialista em {teacher.specialty} com anos de experiência transformando vidas através do inglês.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ShineBorder>
                </motion.div>
              </BlurFade>
            ))}
          </div>

          {/* Team Info */}
          <BlurFade delay={0.6}>
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-border/50 backdrop-blur-sm overflow-hidden mb-16">
              <BorderBeam size={400} duration={20} />

              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mais 4 Professores Dedicados
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Além dos nossos professores principais, contamos com mais 4 educadores altamente qualificados, cada um especializado em diferentes áreas do ensino de inglês. Juntos, formamos um time completo capaz de atender todas as necessidades de aprendizado, desde o nível iniciante até a preparação para certificações internacionais.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Qualifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => (
              <BlurFade key={index} delay={0.7 + index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm text-center h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <qual.icon className="w-8 h-8 text-foreground" />
                      </div>
                    </div>

                    <h4 className="text-lg mb-2">{qual.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {qual.description}
                    </p>
                  </div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}