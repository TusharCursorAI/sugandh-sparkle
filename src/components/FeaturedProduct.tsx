import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, X } from "lucide-react";
import featuredImg from "@/assets/product-gopaldhoop.jpeg";

const features = [
  "Long Lasting Aroma",
  "Premium Natural Ingredients",
  "Ideal for Puja & Daily Rituals",
];

const sizes = [
  { weight: "90GM", price: "₹15" },
  { weight: "200GM", price: "₹40" },
  { weight: "400GM", price: "₹60" },
  { weight: "1KG", price: "₹95" },
];

const FeaturedProduct = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showModal, setShowModal] = useState(false);

  const whatsappMsg = encodeURIComponent(
    "Hello, I am interested in Jay Gopal Dhoop. Please share more details."
  );

  return (
    <>
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

              <button
                onClick={() => setShowModal(true)}
                className="inline-block bg-gold px-8 py-4 rounded-full font-body font-semibold text-accent-foreground shadow-gold hover-lift transition-all cursor-pointer"
              >
                Enquiry Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-md bg-dark-surface border border-gold/30 rounded-2xl overflow-hidden shadow-elevated"
            >
              {/* Header gradient bar */}
              <div className="gradient-saffron h-1.5" />

              <div className="p-6 md:p-8">
                {/* Close button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Title */}
                <h3 className="font-heading text-3xl font-bold text-gold mb-1">
                  Jay Gopal Dhoop
                </h3>
                <p className="font-body text-sm font-semibold text-saffron tracking-wide mb-5">
                  ISO 9001:2015 Certified
                </p>

                {/* Description */}
                <p className="font-body text-primary-foreground/70 text-sm leading-relaxed mb-6">
                  विवाह तथा अन्य शुभ अवसरों पर सुख, शांति और समृद्धि के लिए उत्तम तकनीक द्वारा शुद्ध व पवित्र जड़ी-बूटियों से तैयार की हुई सुमति हवन सामग्री।
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-3">
                    Available Sizes & MRP
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {sizes.map((s) => (
                      <div
                        key={s.weight}
                        className="flex items-center justify-between bg-primary-foreground/5 border border-gold/20 rounded-xl px-4 py-3"
                      >
                        <span className="font-body text-sm text-primary-foreground/80">{s.weight}</span>
                        <span className="font-heading font-bold text-gold">{s.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/917869083344?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-whatsapp text-primary-foreground font-body font-semibold shadow-lg hover:brightness-110 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.126 1.528 5.865L.06 23.487a.5.5 0 00.614.614l5.622-1.468A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.585l-.387-.232-3.334.87.87-3.334-.232-.387A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Send Enquiry on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturedProduct;
