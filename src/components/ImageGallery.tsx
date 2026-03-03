import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import galleryKachaBella from "@/assets/gallery-kachabella.jpeg";
import galleryLuxury from "@/assets/gallery-luxury.jpeg";
import galleryMoment from "@/assets/gallery-moment.jpeg";
import galleryMasterpiece from "@/assets/gallery-masterpiece.jpeg";
import galleryRosePark from "@/assets/gallery-rosepark.jpeg";
import galleryAnupama from "@/assets/gallery-anupama.jpeg";
import galleryBlackForest from "@/assets/gallery-blackforest.jpeg";
import galleryWelcome from "@/assets/gallery-welcome2025.jpeg";
import galleryPineapple from "@/assets/gallery-pineapple.jpeg";
import galleryMahaArti from "@/assets/gallery-mahaarti.jpeg";
import galleryMatarani from "@/assets/gallery-matarani.jpeg";
import galleryMasterpiece2 from "@/assets/gallery-masterpiece2.jpeg";
import galleryRosePark2 from "@/assets/gallery-rosepark2.jpeg";
import galleryFantasia from "@/assets/gallery-fantasia.jpeg";
import galleryGuggal from "@/assets/gallery-guggal.jpeg";
import galleryVedika from "@/assets/gallery-vedika.jpeg";
import gallerySatyaSai from "@/assets/gallery-satyasai.jpeg";
import galleryMysore from "@/assets/gallery-mysore.jpeg";
import galleryGopalDhoop from "@/assets/gallery-gopaldhoop.jpeg";
import gallerySuperSeven from "@/assets/gallery-superseven.jpeg";

const images = [galleryMatarani, galleryGopalDhoop, gallerySuperSeven, galleryKachaBella, galleryLuxury, galleryMoment, galleryMasterpiece, galleryMasterpiece2, galleryRosePark, galleryRosePark2, galleryAnupama, galleryBlackForest, galleryWelcome, galleryPineapple, galleryMahaArti, galleryFantasia, galleryGuggal, galleryVedika, gallerySatyaSai, galleryMysore];

const ImageGallery = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="gallery" className="py-24 bg-dark-surface" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm font-semibold uppercase tracking-widest">Gallery</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            Our Products in Action
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-[300px] md:h-[500px] object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-surface/60 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-surface/60 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-primary-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
