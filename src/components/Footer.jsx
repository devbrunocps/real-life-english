"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import BlurFade from "./magicui/blur-fade";

export function Footer() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. 7 de Setembro, 519",
      subtitle: "Centro - Matão/SP",
      link: "https://maps.google.com/?q=Av.+7+de+Setembro,+519,+Centro,+Matão,+SP",
    },
    {
      icon: Phone,
      title: "Telefones",
      content: "(16) 3382-2097",
      subtitle: "(16) 99207-6693",
      link: "tel:1633822097",
    },
    {
      icon: Mail,
      title: "Email",
      content: "reallifematao@yahoo.com.br",
      subtitle: "Resposta em até 24h",
      link: "mailto:reallifematao@yahoo.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 8h às 20h",
      subtitle: "Sáb: 8h às 12h",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  const quickLinks = [
    { label: "Sobre Nós", href: "#about" },
    { label: "Nossa História", href: "#story" },
    { label: "Professores", href: "#teachers" },
    { label: "Cursos", href: "#courses" },
    { label: "Teste de Nível", href: "#test" },
  ];

  const scrollToSection = (href) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Contact Cards */}
          <BlurFade delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      <div className="relative p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm h-full overflow-hidden">
                        <BorderBeam size={150} duration={12 + index * 2} delay={index * 2} />

                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                          <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                            <info.icon className="w-7 h-7 text-foreground" />
                          </div>
                        </div>

                        <h4 className="text-sm text-muted-foreground mb-2">{info.title}</h4>
                        <p className="mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="relative p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm h-full overflow-hidden">
                      <BorderBeam size={150} duration={12 + index * 2} delay={index * 2} />

                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                          <info.icon className="w-7 h-7 text-foreground" />
                        </div>
                      </div>

                      <h4 className="text-sm text-muted-foreground mb-2">{info.title}</h4>
                      <p className="mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </BlurFade>

          {/* Main Footer Content */}
          <BlurFade delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-border">
              {/* About */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/50">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <div>
                    <div className="text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Real Life English Center
                    </div>
                    <div className="text-sm text-muted-foreground">Desde 2012</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Transformando vidas através do ensino de inglês de qualidade. Com metodologia Cambridge e professores nativos, preparamos você para conquistar o mundo.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg mb-6">Links Rápidos</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        whileHover={{ x: 4 }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div>
                <h4 className="text-lg mb-6">Comece Hoje</h4>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Agende uma aula experimental gratuita e descubra como podemos ajudá-lo a alcançar a fluência.
                </p>
                <motion.a
                  href="https://wa.me/5516992076693"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg hover:shadow-green-600/50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Fale Conosco</span>
                </motion.a>
              </div>
            </div>
          </BlurFade>

          {/* Bottom Bar */}
          <BlurFade delay={0.5}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} Real Life English Center. Todos os direitos reservados.
              </p>
              <p>
                Desenvolvido com 💙 para transformar vidas através do inglês
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </footer>
  );
}