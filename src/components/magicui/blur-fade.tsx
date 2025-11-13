"use client";

import { motion } from "motion/react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity: number; filter: string };
    visible: { y: number; opacity: number; filter: string };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  blur?: string;
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  blur = "6px",
}: BlurFadeProps) {
  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={combinedVariants}
      transition={{
        duration,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}