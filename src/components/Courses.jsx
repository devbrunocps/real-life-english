"use client";

import { motion } from "motion/react";
import { Check, Crown, Users, BookOpen, Clock, Calendar } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import BlurFade from "./magicui/blur-fade";
import ShineBorder from "./magicui/shine-border";
import { ShimmerButton } from "./magicui/shimmer-button";
import { SparklesText } from "./magicui/sparkles-text";

export function Courses() {
  const courses = [
    {
      name: "Kids (4-8 anos)",
      price: "R$ 129,90",
      period: "mensais",
      description: "Aprendizado lúdico e divertido para crianças pequenas",
      features: [
        "Aulas interativas e dinâmicas",
        "Material didático Cambridge Kids",
        "Atividades lúdicas e jogos",
        "Desenvolvimento oral e auditivo",
        "Turmas pequenas (máx. 8 alunos)",
        "2x por semana - 1h por aula",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: "🎨",
    },
    {
      name: "Pré-Teens (9-12 anos)",
      price: "R$ 154,90",
      period: "mensais",
      description: "Desenvolvimento de habilidades essenciais de comunicação",
      features: [
        "Conversação e vocabulário expandido",
        "Gramática aplicada",
        "Material Cambridge for Schools",
        "Preparação para certificações",
        "Turmas reduzidas (máx. 10 alunos)",
        "2x por semana - 1h30 por aula",
      ],
      color: "from-purple-500 to-pink-500",
      icon: "📚",
    },
    {
      name: "Teens (13-17 anos)",
      price: "R$ 169,90",
      period: "mensais",
      description: "Inglês avançado focado em fluência e certificações",
      features: [
        "Conversação avançada",
        "Preparação TOEFL & IELTS",
        "Inglês para viagens e intercâmbio",
        "Debates e apresentações",
        "Turmas otimizadas (máx. 12 alunos)",
        "2x por semana - 2h por aula",
      ],
      color: "from-amber-500 to-orange-500",
      icon: "🎓",
    },
    {
      name: "Adultos (18+ anos)",
      price: "R$ 220,00",
      period: "mensais",
      description: "Inglês profissional e para vida real",
      features: [
        "Business English",
        "Conversação fluente",
        "Inglês para trabalho e carreira",
        "Preparação para entrevistas",
        "Networking em inglês",
        "2x por semana - 2h por aula",
      ],
      color: "from-green-500 to-emerald-500",
      icon: "💼",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <BlurFade delay={0.1}>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <AnimatedGradientText className="px-6 py-2 rounded-full">
                  <span className="text-sm">Cursos para Todas as Idades</span>
                </AnimatedGradientText>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Encontre Seu Curso Ideal
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Programas desenvolvidos especialmente para cada faixa etária e objetivo
              </p>
            </div>
          </BlurFade>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {courses.map((course, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <ShineBorder
                    borderRadius={24}
                    borderWidth={2}
                    duration={14 + index * 2}
                    color={["#023e8a", "#c1121f", "#023e8a"]}
                    className="h-full !p-0"
                  >
                    <div className="p-8 h-full flex flex-col">
                      {/* Icon */}
                      <div className="text-5xl mb-4">{course.icon}</div>

                      {/* Header */}
                      <h3 className="text-2xl mb-2">{course.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {course.description}
                      </p>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {course.price}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">por mês</span>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-grow">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <motion.button
                        onClick={scrollToContact}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                      >
                        Matricular Agora
                      </motion.button>
                    </div>
                  </ShineBorder>
                </motion.div>
              </BlurFade>
            ))}
          </div>

          {/* VIP Section */}
          <BlurFade delay={0.7}>
            <div className="relative">
              <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-accent/20 via-primary/20 to-accent/20 border-2 border-accent/50 backdrop-blur-sm overflow-hidden">
                <BorderBeam size={500} duration={25} color="#c1121f" />

                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      {/* Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/50 mb-6"
                      >
                        <Crown className="w-5 h-5 text-accent" />
                        <span className="text-sm text-accent">Exclusivo & Personalizado</span>
                      </motion.div>

                      <SparklesText
                        text="Modalidade VIP"
                        className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text"
                        sparklesCount={6}
                      />

                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Tenha uma experiência completamente personalizada com aulas particulares 
                        individuais ou em pequenos grupos. Ideal para quem busca atenção total, 
                        flexibilidade de horários e progresso acelerado.
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {[
                          { icon: Users, text: "Aulas 1 a 1 ou pequenos grupos" },
                          { icon: Clock, text: "Horários flexíveis" },
                          { icon: BookOpen, text: "Material personalizado" },
                          { icon: Calendar, text: "Plano de estudos individual" },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-sm text-muted-foreground pt-1">{item.text}</p>
                          </motion.div>
                        ))}
                      </div>

                      <ShimmerButton
                        onClick={scrollToContact}
                        className="px-8 py-4 text-lg"
                        shimmerColor="#c1121f"
                        shimmerSize="0.15em"
                        background="linear-gradient(to right, #c1121f, #023e8a)"
                      >
                        <span className="flex items-center gap-2 text-white">
                          <Crown className="w-5 h-5" />
                          Consultar Valores VIP
                        </span>
                      </ShimmerButton>
                    </div>

                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border"
                      >
                        <h4 className="text-2xl mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                          Benefícios Exclusivos
                        </h4>

                        <ul className="space-y-4">
                          {[
                            "Atenção 100% dedicada ao seu aprendizado",
                            "Progresso até 3x mais rápido",
                            "Conteúdo adaptado aos seus objetivos",
                            "Flexibilidade total de horários",
                            "Professor nativo disponível",
                            "Foco em suas necessidades específicas",
                            "Material premium personalizado",
                            "Suporte contínuo fora das aulas",
                          ].map((benefit, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
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