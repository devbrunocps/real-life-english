"use client";

import { motion } from "motion/react";
import { Award, Heart, Globe2, TrendingUp } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import BlurFade from "./magicui/blur-fade";
import { SparklesText } from "./magicui/sparkles-text";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Ripple from "./magicui/ripple";

export function Story() {
  const timeline = [
    {
      year: "2012",
      title: "A Fundação",
      description: "Stiliano Pire, professor britânico nativo, funda a Real Life English Center em Matão/SP com a visão de trazer ensino de qualidade internacional para o interior paulista.",
      icon: Award,
    },
    {
      year: "2015",
      title: "Expansão do Time",
      description: "Com o crescimento da escola, a equipe se expande para 8 professores qualificados, todos comprometidos com a excelência no ensino.",
      icon: TrendingUp,
    },
    {
      year: "2018",
      title: "Certificação Cambridge",
      description: "A escola se torna centro autorizado da metodologia Cambridge, reforçando seu compromisso com padrões internacionais de qualidade.",
      icon: Globe2,
    },
    {
      year: "2025",
      title: "Impacto na Comunidade",
      description: "Mais de 500 alunos já transformaram suas vidas através do domínio do inglês, conquistando oportunidades ao redor do mundo.",
      icon: Heart,
    },
  ];

  return (
    <section id="story" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with ripple effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Ripple mainCircleSize={300} numCircles={6} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <BlurFade delay={0.1}>
            <div className="text-center mb-20">
              <div className="flex flex-col">

                <div className="inline-block mb-4">
                  <AnimatedGradientText className="px-6 py-2 rounded-full">
                    <span className="text-sm">Nossa História</span>
                  </AnimatedGradientText>
                </div>

                <SparklesText
                  text="Uma Jornada de Excelência"
                  className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text"
                  sparklesCount={8}
                />
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Desde 2012, a Real Life English Center vem escrevendo histórias de sucesso
              </p>
            </div>
          </BlurFade>

          {/* Founder Section */}
          <BlurFade delay={0.3}>
            <div className="relative mb-24">
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-border/50 backdrop-blur-sm overflow-hidden">
                <BorderBeam size={400} duration={20} />

                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="aspect-[3/4] relative">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1698337927729-fac31eabbd6c?w=600&h=800&fit=crop"
                          alt="Stiliano Pire - Fundador"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                        {/* Badge */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                            <p className="text-sm mb-1 text-muted-foreground">Fundador & Professor</p>
                            <p className="text-lg">Stiliano Pire</p>
                            <p className="text-sm text-primary">Professor Britânico Nativo</p>
                          </div>
                        </div>
                      </div>
                      <BorderBeam size={250} duration={16} />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      O Visionário por Trás da Real Life
                    </h3>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Stiliano Pire é um professor britânico nativo com uma paixão genuína por ensinar e transformar vidas através do inglês. Natural do Reino Unido, ele trouxe para o Brasil sua vasta experiência internacional e metodologias de ensino comprovadas.
                    </p>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Com formação acadêmica em linguística e anos de experiência lecionando em diversos países, Stiliano fundou a Real Life English Center em 2012 com um objetivo claro: proporcionar aos alunos de Matão e região um ensino de inglês com o mesmo padrão de qualidade encontrado nas melhores escolas internacionais.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Sua abordagem única combina técnicas modernas de ensino com uma atenção especial à conversação e fluência natural, preparando alunos não apenas para passar em provas, mas para se comunicarem com confiança em qualquer situação real.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <BlurFade key={index} delay={0.5 + index * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                      }`}
                  >
                    {/* Content */}
                    <div
                      className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                        }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm overflow-hidden group"
                      >
                        <BorderBeam size={200} duration={12 + index * 2} delay={index * 3} />

                        <div className="flex items-center gap-4 mb-4">
                          {index % 2 === 0 ? (
                            <>
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {item.year}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {item.year}
                              </div>
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-6 h-6 text-white" />
                              </div>
                            </>
                          )}
                        </div>

                        <h4 className="text-2xl mb-3">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/50"
                      />
                    </div>
                  </motion.div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}