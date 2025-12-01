import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Direction = "left" | "right";

interface ScrollParallaxItemProps {
  children: ReactNode;
  direction?: Direction;
  strength?: number;
  className?: string;
  mobileOnly?: boolean;
  intensity?: "default" | "strong";
}

export const ScrollParallaxItem = ({
  children,
  direction = "left",
  strength = 60,
  className,
  mobileOnly = false,
  intensity = "default",
}: ScrollParallaxItemProps) => {
  const [enabled, setEnabled] = useState<boolean>(true);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setEnabled(!mobileOnly || mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [mobileOnly]);

  const sign = direction === "left" ? -1 : 1;
  const rotate = intensity === "strong" ? sign * 3 : sign * 2;
  const scaleFrom = intensity === "strong" ? 0.94 : 0.97;
  const yFrom = intensity === "strong" ? 28 : 18;

  const initial = enabled
    ? { opacity: 0, x: sign * strength, y: yFrom, rotateZ: rotate, scale: scaleFrom }
    : false;
  const animate = enabled
    ? { opacity: 1, x: 0, y: 0, rotateZ: 0, scale: 1 }
    : undefined;

  return (
    <motion.div
      className={className}
      initial={initial as any}
      whileInView={animate}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      {children}
    </motion.div>
  );
};
