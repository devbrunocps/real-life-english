"use client";

import { motion } from "motion/react";
import { ChevronRight, Globe, BookOpen, Users } from "lucide-react";
import { SparklesText } from "./magicui/sparkles-text";
import { ShimmerButton } from "./magicui/shimmer-button";
import { Meteors } from "./magicui/meteors";
import DotPattern from "./magicui/dot-pattern";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import NumberTicker from "./magicui/number-ticker";

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <DotPattern className="opacity-50 dark:opacity-30" />
      <Meteors number={30} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <AnimatedGradientText className="inline-flex items-center gap-2 px-6 py-2 rounded-full">
              <span className="text-sm">🎓 Desde 2012 transformando vidas através do inglês</span>
              <ChevronRight className="w-4 h-4" />
            </AnimatedGradientText>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-6"
          >
            <SparklesText
              text="Real Life English Center"
              className="text-5xl md:text-7xl lg:text-8xl mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text"
              sparklesCount={10}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-center mb-4 text-muted-foreground max-w-3xl mx-auto"
          >
            Metodologia Cambridge com Professores Nativos
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-center mb-12 text-muted-foreground max-w-2xl mx-auto"
          >
            Aprenda inglês de verdade com foco em conversação e fluência real
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <ShimmerButton
              onClick={() => scrollToSection("courses")}
              className="px-8 py-6 text-lg text-white"
              shimmerSize="0.15em"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Ver Cursos
              </span>
            </ShimmerButton>
            
            <motion.a
              href="https://wa.me/5516992076693"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-6 rounded-lg border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 text-lg"
            >
              <Globe className="w-5 h-5" />
              Fale Conosco
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, label: "Anos de Excelência", value: 13, suffix: "+" },
              { icon: BookOpen, label: "Professores Qualificados", value: 8, suffix: "" },
              { icon: Globe, label: "Alunos Satisfeitos", value: 500, suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    <NumberTicker value={stat.value} delay={0.5 + index * 0.2} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}