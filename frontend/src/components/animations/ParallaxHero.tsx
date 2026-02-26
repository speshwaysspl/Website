import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxHeroProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
}

export const ParallaxHero = ({ children, backgroundImage, className }: ParallaxHeroProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className={`relative min-h-[80vh] sm:min-h-[70vh] md:min-h-[calc(100dvh-80px)] lg:min-h-screen w-full flex items-center justify-center overflow-hidden ${className || ""}`}>
      {backgroundImage && (
        <AnimatePresence mode="wait">
          <motion.div
            key={backgroundImage}
            className="absolute top-0 left-0 right-0 h-[120%] z-0 parallax-bg"
            style={{ 
              y: bgY, 
              willChange: "transform" 
            }}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img 
              src={backgroundImage} 
              alt="Hero Background" 
              className="w-full h-full object-cover"
              // @ts-ignore
              fetchPriority="high"
              loading="eager"
            />
          </motion.div>
          {/* Mobile optimized overlay for better image visibility */}
          <div className="absolute inset-0 z-0 sm:hidden bg-black/10" />
        </AnimatePresence>
      )}
      <motion.div
        className="absolute inset-0 z-0 bg-black/30 md:bg-transparent"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10 pt-4 sm:pt-24 md:pt-32">{children}</div>
      
      {/* Add custom CSS for mobile responsiveness of the background */}
      <style>{`
        @media (max-width: 640px) {
          .parallax-bg {
            background-size: cover !important;
            background-position: center 20% !important;
            background-repeat: no-repeat !important;
            height: 100% !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
