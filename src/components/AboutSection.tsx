import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Smile, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years of Trust", value: 10, suffix: "+" },
  { icon: Users, label: "Retail Partners", value: 500, suffix: "+" },
  { icon: Smile, label: "Happy Customers", value: 10000, suffix: "+" },
  { icon: MapPin, label: "Cities Served", value: 50, suffix: "+" },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count.toLocaleString()}</>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-body text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Poonam Sugandh Mandir
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Poonam Sugandh Mandir (PSM) is a trusted fragrance brand delivering premium-quality incense and dhoop products crafted with devotion and purity.
          </p>
          <p className="font-body text-primary font-semibold text-lg mt-4 italic">
            "Har ghar me pavitra sugandh pahuchana"
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                <Counter target={s.value} inView={inView} />{s.suffix}
              </div>
              <div className="font-body text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
