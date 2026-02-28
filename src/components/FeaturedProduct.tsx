import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import featuredImg from "@/assets/featured-dhoop.jpg";

const features = [
  "Long Lasting Aroma",
  "Premium Natural Ingredients",
  "Ideal for Puja & Daily Rituals",
];

const FeaturedProduct = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-dark-surface" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={featuredImg}
                alt="Jay Gopal Dhoop"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-saffron rounded-full flex items-center justify-center shadow-gold">
              <span className="font-heading text-sm font-bold text-primary-foreground text-center leading-tight">Best Seller</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-gold font-body text-sm font-semibold uppercase tracking-widest">Featured Product</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Jay Gopal Dhoop
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Jay Gopal Dhoop is our best-selling premium product known for long-lasting divine fragrance and superior quality. Crafted with devotion and purity for your daily prayers.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-full gradient-saffron flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-body text-primary-foreground/80">{f}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#dealer"
              className="inline-block bg-gold px-8 py-4 rounded-full font-body font-semibold text-accent-foreground shadow-gold hover-lift transition-all"
            >
              Enquiry Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
