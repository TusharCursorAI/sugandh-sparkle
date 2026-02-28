import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Send } from "lucide-react";

import featuredImg from "@/assets/featured-dhoop.jpg";
import productRose from "@/assets/product-rose.jpg";
import productSandal from "@/assets/product-sandal.jpg";
import productMogra from "@/assets/product-mogra.jpg";
import productCone from "@/assets/product-cone.jpg";
import productFestival from "@/assets/product-festival.jpg";
import productGold from "@/assets/product-gold.jpg";
import productTemple from "@/assets/product-temple.jpg";
import productExport from "@/assets/product-export.jpg";

type Category = "All" | "Dhoop" | "Agarbatti" | "Cone" | "Premium Pack";

interface Product {
  name: string;
  category: Category;
  description: string;
  image: string;
}

const products: Product[] = [
  { name: "Jay Gopal Dhoop", category: "Dhoop", description: "Classic divine fragrance dhoop for daily puja rituals.", image: featuredImg },
  { name: "Jay Gopal Premium Dhoop", category: "Dhoop", description: "Enhanced premium formula with long-lasting aroma.", image: productSandal },
  { name: "Jay Gopal Rose Dhoop", category: "Dhoop", description: "Beautiful rose scented dhoop for a calming atmosphere.", image: productRose },
  { name: "Jay Gopal Sandal Dhoop", category: "Dhoop", description: "Pure sandalwood fragrance for spiritual meditation.", image: productSandal },
  { name: "Jay Gopal Agarbatti Classic", category: "Agarbatti", description: "Traditional hand-rolled incense sticks.", image: productMogra },
  { name: "Jay Gopal Agarbatti Premium", category: "Agarbatti", description: "Premium quality agarbatti with rich fragrance.", image: productRose },
  { name: "Jay Gopal Mogra Agarbatti", category: "Agarbatti", description: "Sweet mogra jasmine scented incense sticks.", image: productMogra },
  { name: "Jay Gopal Cone Dhoop", category: "Cone", description: "Convenient cone-shaped dhoop for easy use.", image: productCone },
  { name: "Jay Gopal Festival Pack", category: "Premium Pack", description: "Special assorted pack for festive occasions.", image: productFestival },
  { name: "Jay Gopal Gold Edition", category: "Premium Pack", description: "Luxury gold edition with finest ingredients.", image: productGold },
  { name: "Jay Gopal Temple Special", category: "Premium Pack", description: "Bulk temple-grade incense for sacred spaces.", image: productTemple },
  { name: "Jay Gopal Export Quality", category: "Premium Pack", description: "International standard premium incense pack.", image: productExport },
];

const categories: Category[] = ["All", "Dhoop", "Agarbatti", "Cone", "Premium Pack"];

const ProductGrid = () => {
  const [active, setActive] = useState<Category>("All");
  const [quickView, setQuickView] = useState<Product | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm font-semibold uppercase tracking-widest">Our Collection</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Premium Products
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-6 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                active === c
                  ? "gradient-saffron text-primary-foreground shadow-gold"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden hover-lift hover-glow group"
            >
              <div className="relative overflow-hidden h-52">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-primary-foreground text-xs font-body font-medium px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <button
                  onClick={() => setQuickView(p)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-dark-surface/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Eye className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">{p.description}</p>
                <a
                  href="#dealer"
                  className="inline-flex items-center gap-2 gradient-saffron text-primary-foreground px-5 py-2.5 rounded-full font-body text-sm font-medium shadow-gold hover-lift transition-all"
                >
                  <Send className="w-3.5 h-3.5" /> Enquiry
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-surface/80 backdrop-blur-sm p-4" onClick={() => setQuickView(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card max-w-lg w-full p-6 bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={quickView.image} alt={quickView.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <span className="text-gold font-body text-xs font-semibold uppercase tracking-wider">{quickView.category}</span>
            <h3 className="font-heading text-2xl font-bold text-foreground mt-1 mb-3">{quickView.name}</h3>
            <p className="font-body text-muted-foreground mb-6">{quickView.description}</p>
            <div className="flex gap-3">
              <a href="#dealer" className="gradient-saffron text-primary-foreground px-6 py-3 rounded-full font-body font-medium shadow-gold">
                Enquiry Now
              </a>
              <button onClick={() => setQuickView(null)} className="px-6 py-3 rounded-full border border-border text-foreground font-body">
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
