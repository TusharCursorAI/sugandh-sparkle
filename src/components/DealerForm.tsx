import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Building2 } from "lucide-react";

const DealerForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

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
            Join our network of 500+ dealers across India and grow your business with PSM.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-10 shadow-elevated"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="font-body text-muted-foreground">We will contact you soon regarding dealer partnership.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-6 h-6 text-primary" />
                <h3 className="font-heading text-xl font-semibold text-foreground">Dealer Registration</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input required placeholder="Dealer Name" className="w-full px-5 py-3.5 rounded-lg bg-muted/50 border border-border font-body text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" />
                <input required placeholder="Shop Name" className="w-full px-5 py-3.5 rounded-lg bg-muted/50 border border-border font-body text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" />
                <input required placeholder="City" className="w-full px-5 py-3.5 rounded-lg bg-muted/50 border border-border font-body text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" />
                <input required type="tel" placeholder="Phone Number" className="w-full px-5 py-3.5 rounded-lg bg-muted/50 border border-border font-body text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" />
              </div>
              <input required type="email" placeholder="Email Address" className="w-full px-5 py-3.5 rounded-lg bg-muted/50 border border-border font-body text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" />
              <textarea rows={3} placeholder="Message (optional)" className="w-full px-5 py-3.5 rounded-lg bg-muted/50 border border-border font-body text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none" />
              <button type="submit" className="w-full gradient-saffron text-primary-foreground py-4 rounded-full font-body font-semibold text-lg shadow-gold hover-lift transition-all">
                Submit Application
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DealerForm;
