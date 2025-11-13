import { CSSProperties, ReactElement, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../ui/utils";

type SparklesTextProps = {
  text: string;
  colors?: {
    first: string;
    second: string;
  };
  className?: string;
  sparklesCount?: number;
};

const DEFAULT_COLORS = {
  first: "#000",
  second: "#FE8BBB",
};

export const SparklesText = ({
  text,
  colors = DEFAULT_COLORS,
  className,
  sparklesCount = 10,
}: SparklesTextProps): ReactElement => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const generateSparkle = () => {
      const newSparkle = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setSparkles((current) => [...current.slice(-sparklesCount), newSparkle]);
    };

    const interval = setInterval(generateSparkle, 150);
    return () => clearInterval(interval);
  }, [sparklesCount]);

  return (
    <span className={cn("relative inline-block", className)} style={{ fontFamily: 'var(--font-family)' }}>
      <span className="relative z-10">{text}</span>
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 0.6 }}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        >
          <svg
            className="animate-spin-slow"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M5 0L5.5 4.5L10 5L5.5 5.5L5 10L4.5 5.5L0 5L4.5 4.5L5 0Z"
              fill={sparkle.id % 2 === 0 ? colors.first : colors.second}
            />
          </svg>
        </motion.span>
      ))}
    </span>
  );
};
