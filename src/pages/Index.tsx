import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProduct from "@/components/FeaturedProduct";
import NavratriSpecial from "@/components/NavratriSpecial";
import ProductGrid from "@/components/ProductGrid";
import PremiumProducts from "@/components/PremiumProducts";
import ImageGallery from "@/components/ImageGallery";
import DealerForm from "@/components/DealerForm";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedProduct />
      <PremiumProducts />
      <ImageGallery />
      <DealerForm />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
      <Chatbot />
    </div>
  );
};

export default Index;
