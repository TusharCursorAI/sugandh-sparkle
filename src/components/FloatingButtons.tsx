import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
      <a
        href="https://wa.me/9179210310"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg pulse-glow hover-lift"
        style={{ animationDelay: "0.5s" }}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
      <a
        href="tel:9179210310"
        className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg hover-lift"
      >
        <Phone className="w-6 h-6 text-secondary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
