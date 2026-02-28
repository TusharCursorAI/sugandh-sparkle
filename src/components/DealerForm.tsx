import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const DealerForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="dealer" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm font-semibold uppercase tracking-widest">Partnership</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Become a Dealer
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Join our network of 500+ dealers across India. Contact us directly to get started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="tel:7869083344"
            className="flex items-center justify-center gap-3 gradient-saffron text-primary-foreground px-8 py-5 rounded-full font-body font-semibold text-lg shadow-gold hover-lift transition-all"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="https://wa.me/917869083344"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-whatsapp text-primary-foreground px-8 py-5 rounded-full font-body font-semibold text-lg shadow-lg hover-lift transition-all"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DealerForm;
