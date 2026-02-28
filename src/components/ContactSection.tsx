import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

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

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left - Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex flex-col gap-5 justify-center"
          >
            <a
              href="tel:9179210310"
              className="flex items-center gap-4 glass-card p-6 hover-lift group bg-dark-surface-light/50"
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
              className="flex items-center gap-4 glass-card p-6 hover-lift group bg-dark-surface-light/50"
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

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {sent ? (
              <div className="glass-card p-10 text-center bg-dark-surface-light/50">
                <Send className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-heading text-xl font-bold text-primary-foreground">Message Sent!</h3>
                <p className="font-body text-primary-foreground/60 mt-2">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 bg-dark-surface-light/50">
                <input required placeholder="Your Name" className="w-full px-5 py-3.5 rounded-lg bg-dark-surface/50 border border-border font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-2 focus:ring-primary/50 outline-none" />
                <input required type="tel" placeholder="Phone Number" className="w-full px-5 py-3.5 rounded-lg bg-dark-surface/50 border border-border font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-2 focus:ring-primary/50 outline-none" />
                <textarea required rows={3} placeholder="Your Message" className="w-full px-5 py-3.5 rounded-lg bg-dark-surface/50 border border-border font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-2 focus:ring-primary/50 outline-none resize-none" />
                <button type="submit" className="w-full gradient-saffron text-primary-foreground py-4 rounded-full font-body font-semibold shadow-gold hover-lift">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
