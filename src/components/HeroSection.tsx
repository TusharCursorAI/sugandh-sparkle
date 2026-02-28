import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Premium Incense" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-surface/70" />
      </div>

      {/* Smoke particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="smoke-particle absolute rounded-full bg-primary-foreground/10"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${20 + i * 15}%`,
              bottom: "30%",
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 mb-8">
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="text-sm font-body text-gold">India's Trusted Jay Gopal Brand</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Poonam Sugandh
          <span className="block text-gradient-saffron">Mandir</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 italic"
        >
          "Sugandh jo ghar ko pavitra banaye"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="gradient-saffron px-8 py-4 rounded-full font-body font-semibold text-primary-foreground shadow-gold hover-lift hover:shadow-elevated transition-all"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="border-2 border-gold/50 px-8 py-4 rounded-full font-body font-semibold text-gold hover:bg-gold/10 transition-all"
          >
            Contact Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-slow">
        <ChevronDown className="w-6 h-6 text-primary-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
