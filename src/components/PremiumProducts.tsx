import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Eye, X, Phone, Mail, MapPin } from "lucide-react";

import imgMaharani from "@/assets/product-maharani.jpeg";
import imgDeepak from "@/assets/product-deepak.jpeg";
import img4in1 from "@/assets/product-4in1.jpeg";
import imgSuperSeven from "@/assets/product-superseven.jpeg";
import imgMasterPiece from "@/assets/product-masterpiece.jpeg";
import imgVedika from "@/assets/product-vedika.jpeg";
import imgKachaBella from "@/assets/product-kachabella.jpeg";
import imgSatyaSai from "@/assets/product-satyasai.jpeg";
import imgPineapple from "@/assets/product-pineapple.jpeg";
import imgMysore from "@/assets/product-mysore.jpeg";

interface Product {
  name: string;
  image: string;
  mrp: string;
  weight?: string;
}

const products: Product[] = [
  { name: "MataRani Phool Batti", image: imgMaharani, mrp: "₹20" },
  { name: "Deepak Ghee Batti", image: imgDeepak, mrp: "₹120", weight: "100 gm" },
  { name: "4 in 1 Charcoal Free Dhoop", image: img4in1, mrp: "₹580", weight: "1 Kg" },
  { name: "Super Seven Agarbatti", image: imgSuperSeven, mrp: "₹220", weight: "250 gm" },
  { name: "Master Piece Cone Dhoop", image: imgMasterPiece, mrp: "₹360", weight: "500 gm" },
  { name: "Vedika Handmade Flora Batti", image: imgVedika, mrp: "₹320", weight: "250 gm" },
  { name: "Kacha Bella Premium Agarbatti", image: imgKachaBella, mrp: "₹220", weight: "250 gm" },
  { name: "Satya Sai Handmade Flora Batti", image: imgSatyaSai, mrp: "₹320", weight: "250 gm" },
  { name: "Pineapple Charcoal Free Dhoop Sticks", image: imgPineapple, mrp: "₹80" },
  { name: "Mysore Handmade Flora Batti", image: imgMysore, mrp: "₹320", weight: "250 gm" },
];

const PremiumProducts = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const whatsappMsg = (name: string) =>
    encodeURIComponent(`Hello, I am interested in ${name}. Please share more details.`);

  return (
    <section id="premium-products" className="py-24 bg-dark-surface" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm font-semibold uppercase tracking-widest">
            Jay Gopal Brand
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            Our Premium Range
          </h2>
          <p className="font-body text-primary-foreground/60 mt-4 max-w-2xl mx-auto">
            Handcrafted with devotion — premium incense, dhoop & batti for your sacred rituals
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden hover-lift hover-glow group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-br from-deep-red to-deep-red/90 text-cream px-3 py-1.5 rounded-full shadow-lg border border-gold/40">
                  <span className="font-heading font-bold text-sm drop-shadow-md">{p.mrp}</span>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{p.name}</h3>
                <button
                  onClick={() => setSelected(p)}
                  className="inline-flex items-center gap-2 bg-deep-red hover:bg-deep-red/90 text-cream px-6 py-2.5 rounded-full font-body text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-gold/20 transition-all duration-300 cursor-pointer"
                >
                  <Eye className="w-4 h-4" /> View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/80" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-lg bg-dark-surface border border-gold/30 rounded-2xl overflow-hidden shadow-elevated"
            >
              <div className="gradient-saffron h-1.5" />

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-gold mb-1">
                  {selected.name}
                </h3>

                <div className="flex flex-wrap gap-4 mt-3 mb-5">
                  {selected.weight && (
                    <div className="bg-primary-foreground/5 border border-gold/20 rounded-xl px-4 py-2">
                      <span className="font-body text-xs text-primary-foreground/50 block">Net Weight</span>
                      <span className="font-heading font-bold text-primary-foreground">{selected.weight}</span>
                    </div>
                  )}
                  <div className="bg-gradient-to-br from-deep-red to-deep-red/80 border border-gold/30 rounded-xl px-4 py-2">
                    <span className="font-body text-xs text-cream/70 block">M.R.P.</span>
                    <span className="font-heading font-bold text-gold text-lg">{selected.mrp}</span>
                  </div>
                </div>

                {/* Manufacturer */}
                <div className="border-t border-gold/10 pt-4 mb-5 space-y-2">
                  <h4 className="font-heading text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">
                    Manufactured & Marketed By
                  </h4>
                  <p className="font-body text-primary-foreground font-semibold">Poonam Sugandh Mandir</p>
                  <div className="flex items-start gap-2 text-primary-foreground/60 font-body text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    P.O.B No. 07, M.G. Road, Indore 452001 (M.P.) India
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
                    <Phone className="w-4 h-4 shrink-0" />
                    +91 7869083344
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
                    <Mail className="w-4 h-4 shrink-0" />
                    poonam16.mandir@rediffmail.com
                  </div>
                </div>

                <a
                  href={`https://wa.me/917869083344?text=${whatsappMsg(selected.name)}`}
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
    </section>
  );
};

export default PremiumProducts;
