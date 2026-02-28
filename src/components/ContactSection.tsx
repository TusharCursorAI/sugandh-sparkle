import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-24 bg-dark-surface" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">Contact Us</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto"
        >
          <a
            href="tel:9179210310"
            className="flex items-center gap-4 glass-card p-6 hover-lift group bg-dark-surface-light/50 flex-1"
          >
            <div className="w-14 h-14 rounded-full gradient-saffron flex items-center justify-center shadow-gold">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-body text-sm text-primary-foreground/60">Call Us</div>
              <div className="font-heading text-xl font-semibold text-primary-foreground">+91 79210 310</div>
            </div>
          </a>

          <a
            href="https://wa.me/9179210310"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 glass-card p-6 hover-lift group bg-dark-surface-light/50 flex-1"
          >
            <div className="w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-body text-sm text-primary-foreground/60">WhatsApp</div>
              <div className="font-heading text-xl font-semibold text-primary-foreground">Chat with Us</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
