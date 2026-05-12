import { m } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  amount?: number;
}

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  y = 20,
  x = 0,
  direction = "up",
  once = true,
  amount = 0.1,
}: ScrollRevealProps) => {
  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y };
      case "down": return { opacity: 0, y: -y };
      case "left": return { opacity: 0, x: y };
      case "right": return { opacity: 0, x: -y };
      default: return { opacity: 0, y };
    }
  };

  return (
    <m.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </m.div>
  );
};