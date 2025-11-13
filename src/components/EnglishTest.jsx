"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, Award, RotateCcw, ChevronRight } from "lucide-react";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import BlurFade from "./magicui/blur-fade";
import { BorderBeam } from "./magicui/border-beam";
import { ShimmerButton } from "./magicui/shimmer-button";
import { SparklesText } from "./magicui/sparkles-text";
import { Progress } from "./ui/progress";


export function EnglishTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const questions = [
    {
      id: 1,
      question: "Hello! My name ___ Maria.",
      options: ["am", "is", "are", "be"],
      correct: 1,
      level: "basic",
    },
    {
      id: 2,
      question: "I ___ English every day.",
      options: ["study", "studys", "studying", "studies"],
      correct: 0,
      level: "basic",
    },
    {
      id: 3,
      question: "She ___ to the gym yesterday.",
      options: ["go", "goes", "went", "going"],
      correct: 2,
      level: "basic",
    },
    {
      id: 4,
      question: "If I ___ more time, I would travel around the world.",
      options: ["have", "had", "having", "has"],
      correct: 1,
      level: "intermediate",
    },
    {
      id: 5,
      question: "The project ___ by next Friday.",
      options: ["will complete", "will be completed", "completes", "completing"],
      correct: 1,
      level: "intermediate",
    },
    {
      id: 6,
      question: "I wish I ___ to the concert last night.",
      options: ["went", "had gone", "have gone", "go"],
      correct: 1,
      level: "intermediate",
    },
    {
      id: 7,
      question: "The committee ___ reached a consensus on the matter.",
      options: ["have", "has", "are", "were"],
      correct: 1,
      level: "advanced",
    },
    {
      id: 8,
      question: "Not only ___ speak English, but he also speaks French fluently.",
      options: ["he does", "does he", "he can", "can he"],
      correct: 1,
      level: "advanced",
    },
  ];

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, isCorrect]);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions([]);
  };

  const getLevel = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 75) return { level: "Avançado", color: "from-green-500 to-emerald-500", message: "Excelente! Você tem um domínio avançado do inglês." };
    if (percentage >= 50) return { level: "Intermediário", color: "from-blue-500 to-cyan-500", message: "Muito bem! Você está no nível intermediário." };
    return { level: "Básico", color: "from-amber-500 to-orange-500", message: "Bom começo! Temos o curso perfeito para você evoluir." };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="test" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <BlurFade delay={0.1}>
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <AnimatedGradientText className="px-6 py-2 rounded-full">
                  <span className="text-sm">Descubra Seu Nível</span>
                </AnimatedGradientText>
              </div>

              <SparklesText
                text="Teste Rápido de Inglês"
                className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                sparklesCount={8}
              />

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Responda 8 perguntas e descubra qual curso é ideal para você
              </p>
            </div>
          </BlurFade>

          {/* Test Card */}
          <BlurFade delay={0.3}>
            <div className="relative">
              <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border/50 backdrop-blur-sm overflow-hidden">
                <BorderBeam size={400} duration={20} />

                <AnimatePresence mode="wait">
                  {!showResult ? (
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Progress */}
                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-muted-foreground">
                            Questão {currentQuestion + 1} de {questions.length}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {Math.round(progress)}%
                          </span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>

                      {/* Question */}
                      <h3 className="text-2xl md:text-3xl mb-8">
                        {questions[currentQuestion].question}
                      </h3>

                      {/* Options */}
                      <div className="grid gap-4">
                        {questions[currentQuestion].options.map((option, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            disabled={selectedAnswer !== null}
                            whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                            whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                            className={`p-6 rounded-xl border-2 transition-all duration-300 text-left relative overflow-hidden ${
                              selectedAnswer === null
                                ? "border-border hover:border-primary/50 hover:bg-primary/5"
                                : selectedAnswer === index
                                ? index === questions[currentQuestion].correct
                                  ? "border-green-500 bg-green-500/10"
                                  : "border-red-500 bg-red-500/10"
                                : index === questions[currentQuestion].correct
                                ? "border-green-500 bg-green-500/10"
                                : "border-border opacity-50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-lg">{option}</span>
                              {selectedAnswer === index && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {index === questions[currentQuestion].correct ? (
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                  ) : (
                                    <XCircle className="w-6 h-6 text-red-500" />
                                  )}
                                </motion.div>
                              )}
                              {selectedAnswer !== null &&
                                selectedAnswer !== index &&
                                index === questions[currentQuestion].correct && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                  >
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                  </motion.div>
                                )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      {/* Trophy Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                      >
                        <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${getLevel().color} p-1`}>
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                            <Award className="w-16 h-16 text-foreground" />
                          </div>
                        </div>
                      </motion.div>

                      {/* Result */}
                      <h3 className="text-3xl md:text-4xl mb-4">
                        Você acertou {score} de {questions.length}
                      </h3>

                      <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${getLevel().color} text-white mb-6`}>
                        <span className="text-xl">Nível: {getLevel().level}</span>
                      </div>

                      <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                        {getLevel().message}
                      </p>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ShimmerButton
                          onClick={() => {
                            const element = document.getElementById("courses");
                            if (element) element.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="px-8 py-4"
                        >
                          <span className="flex items-center gap-2">
                            Ver Cursos
                            <ChevronRight className="w-5 h-5" />
                          </span>
                        </ShimmerButton>

                        <motion.button
                          onClick={resetTest}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 rounded-lg border-2 border-border bg-background hover:bg-muted transition-colors flex items-center gap-2 justify-center"
                        >
                          <RotateCcw className="w-5 h-5" />
                          Refazer Teste
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}