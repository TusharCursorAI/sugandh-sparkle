import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, Phone, X, Sparkles, Share2 } from "lucide-react";
import { toast } from "sonner";
import maaDurgaImg from "@/assets/product-maadurga.jpeg";

const kitContents = [
  "Haldi – 50 gm", "Supari – 50 gm", "Janew – 5 pcs", "Kumkum – 1 box",
  "Sindoor – 1 box", "Chandan – 1 pkt", "Agarbatti – 1 Box", "Gila Dhoop – 20 pcs",
  "Lal Kapda – 1.25 mtr", "White Kapda – 0.5 mtr", "Tus Kapda – 0.5 mtr", "Kapoor – 50 gm",
  "Phool Batti – Mata Rani", "Lambi Batti – Kanchan", "Akhand Jyot – 1 pcs", "Panchmawa – 1 pcs",
  "Sabut Chawal – 50 gm", "Moli Kalawa – 1 pcs", "Gopal Dhoop – 400 gm", "Nariyal – 2 pcs",
  "Jhandha – 1 pcs", "Aam Ki Lakdi – 2 pkt", "Match Box – 1 pcs", "Divya Amrit – 100 gm",
  "Haldi Powder – 1 pkt", "Honey – 1 pcs", "Long – 1 pkt", "Elaichi – 1 pkt",
  "Itra Perfume – 1 pcs", "Samida Lakdi – 1 pkt", "Lal Chandan – 1 pcs", "Shringar – 1 pcs",
  "Chunri – 1 pcs", "Bag – 1 pcs",
];

const whatsappMsg = encodeURIComponent(
  "Hello, I am interested in Navratri Special Maa Durga Sthapna Kit (MRP ₹1050). Please share more details."
);

const NavratriSpecial = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [showModal, setShowModal] = useState(false);

  const shareProduct = async () => {
    const shareData = {
      title: "Maa Durga Sthapna Kit – Navratri Special ₹999",
      text: "🪔 Navratri Special! Maa Durga Sthapna Evam Havan Pujan Samagri Kit – MRP ₹1050, Offer ₹999 only! 34 items included. Order now:",
      url: window.location.origin,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
        toast.success("Link copied! Share it with your friends.");
      }
    } catch {
      // user cancelled share
    }
  };

  return (
    <>
      <section className="py-24 relative overflow-hidden" ref={ref} style={{ background: "linear-gradient(135deg, hsl(var(--dark-surface)) 0%, hsl(15 60% 8%) 50%, hsl(var(--dark-surface)) 100%)" }}>
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(var(--saffron)), transparent 70%)" }} />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-deep-red/30 border border-deep-red/50 text-saffron px-5 py-2 rounded-full font-body text-sm font-semibold tracking-wider mb-4">
              <Sparkles className="w-4 h-4" /> NAVRATRI SPECIAL <Sparkles className="w-4 h-4" />
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
              Festival <span className="text-gold">Collection</span>
            </h2>
          </motion.div>

          {/* Product Card */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative group"
              >
                <div className="overflow-hidden rounded-2xl border-2 border-gold/30 shadow-gold">
                  <img
                    src={maaDurgaImg}
                    alt="Maa Durga Sthapna Kit"
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-deep-red border border-gold/50 text-gold px-4 py-1.5 rounded-full font-body text-xs font-bold tracking-wider shadow-lg">
                  🪔 Navratri Special
                </div>
                {/* Price Badge */}
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gold rounded-full flex items-center justify-center shadow-gold">
                  <div className="text-center">
                    <span className="font-body text-xs text-accent-foreground/70 line-through block">₹1050</span>
                    <span className="font-heading text-xl font-bold text-deep-red">₹999</span>
                    <span className="font-body text-[9px] font-bold text-accent-foreground block">OFFER</span>
                  </div>
                </div>
                {/* Offer Badge */}
                <div className="absolute top-4 right-4 bg-saffron text-primary-foreground px-3 py-1 rounded-full font-body text-[10px] font-bold tracking-wider shadow-lg animate-pulse">
                  🎉 Special Price
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  Maa Durga Sthapna Kit
                </h3>
                <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                  Havan Pujan Samagri
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-body text-lg text-primary-foreground/50 line-through">₹1050</span>
                  <span className="font-heading text-3xl font-bold text-saffron">₹999</span>
                  <span className="bg-deep-red/80 text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">SAVE ₹51</span>
                </div>
                <p className="font-body text-primary-foreground/70 text-base leading-relaxed mb-8">
                  माँ दुर्गा की स्थापना एवं हवन पूजन के लिए विशेष रूप से तैयार की गई सम्पूर्ण पूजा किट। नवरात्रि पूजा को सरल और पूर्ण बनाने के लिए सभी आवश्यक सामग्री शामिल।
                </p>

                <p className="font-body text-primary-foreground/50 text-sm mb-8">
                  Manufactured & Marketed by <span className="text-saffron font-semibold">Poonam Sugaandh Mandir</span>, Indore
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 rounded-full font-body font-semibold text-accent-foreground shadow-gold hover-lift transition-all cursor-pointer"
                  >
                    <Eye className="w-5 h-5" /> View Details
                  </button>
                  <a
                    href={`https://wa.me/917869083344?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-whatsapp px-7 py-3.5 rounded-full font-body font-semibold text-primary-foreground shadow-lg hover:brightness-110 transition-all"
                  >
                    Enquiry Now
                  </a>
                  <button
                    onClick={shareProduct}
                    className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-gold/30 px-6 py-3.5 rounded-full font-body font-semibold text-gold hover:bg-primary-foreground/20 transition-all cursor-pointer"
                  >
                    <Share2 className="w-5 h-5" /> Share
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div className="absolute inset-0 bg-black/85" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-dark-surface border border-gold/30 rounded-2xl shadow-elevated"
            >
              {/* Header gradient */}
              <div className="h-2" style={{ background: "linear-gradient(90deg, hsl(var(--deep-red)), hsl(var(--saffron)), hsl(var(--gold)))" }} />

              <div className="p-6 md:p-8">
                {/* Close */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Title */}
                <div className="mb-6">
                  <span className="inline-block bg-deep-red/30 border border-deep-red/50 text-saffron px-3 py-1 rounded-full font-body text-xs font-bold tracking-wider mb-3">
                    🪔 Navratri Special
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-gold leading-tight">
                    Maa Durga Sthapna Evam Havan Pujan Samagri Kit
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-body text-base text-primary-foreground/40 line-through">₹1,050/-</span>
                    <span className="font-heading text-2xl font-bold text-saffron">₹999/-</span>
                    <span className="bg-deep-red/80 text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">NAVRATRI OFFER</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-primary-foreground/70 text-sm leading-relaxed mb-6">
                  यह किट माँ दुर्गा की स्थापना एवं हवन पूजन के लिए विशेष रूप से तैयार की गई है। इसमें पूजा के लिए आवश्यक सभी सामग्री शामिल है जिससे नवरात्रि पूजा सरल और पूर्ण हो सके।
                </p>

                {/* Kit Contents */}
                <div className="mb-6">
                  <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold" /> Kit Contents ({kitContents.length} Items)
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {kitContents.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 bg-primary-foreground/5 border border-gold/10 rounded-lg px-3 py-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                        <span className="font-body text-xs text-primary-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/917869083344?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-whatsapp text-primary-foreground font-body font-semibold shadow-lg hover:brightness-110 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.126 1.528 5.865L.06 23.487a.5.5 0 00.614.614l5.622-1.468A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.585l-.387-.232-3.334.87.87-3.334-.232-.387A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Enquiry on WhatsApp
                  </a>
                  <a
                    href="tel:+917869083344"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-saffron text-primary-foreground font-body font-semibold shadow-lg hover:brightness-110 transition-all"
                  >
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                </div>
                <button
                  onClick={shareProduct}
                  className="flex items-center justify-center gap-2 w-full mt-3 py-3 rounded-full border border-gold/30 text-gold font-body font-semibold hover:bg-primary-foreground/10 transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" /> Share This Product
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavratriSpecial;
