"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "História", href: "#story" },
    { label: "Professores", href: "#teachers" },
    { label: "Cursos", href: "#courses" },
    { label: "Teste", href: "#test" },
    { label: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("#hero")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Real Life
                </div>
                <div className="text-xs text-muted-foreground -mt-1">English Center</div>
              </div>
            </motion.button>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-sm"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>

              {/* WhatsApp Button (Desktop) */}
              <motion.a
                href="https://wa.me/5516992076693"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors text-left"
                    >
                      {item.label}
                    </motion.button>
                  ))}

                  {/* Mobile Contact Buttons */}
                  <div className="pt-4 border-t border-border mt-2 space-y-2">
                    <motion.a
                      href="https://wa.me/5516992076693"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-600 text-white"
                    >
                      <Phone className="w-5 h-5" />
                      <span>(16) 99207-6693</span>
                    </motion.a>

                    <motion.a
                      href="tel:1633822097"
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white"
                    >
                      <Phone className="w-5 h-5" />
                      <span>(16) 3382-2097</span>
                    </motion.a>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}