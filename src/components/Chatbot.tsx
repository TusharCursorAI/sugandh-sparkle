import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone } from "lucide-react";
interface Message {
  from: "user" | "bot";
  text: string;
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Namaste! 🙏 PSM me aapka swagat hai. Kya sahayata chahiye?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { from: "user", text: userMsg }]);
    setInput("");

    // Auto reply (future: replace with n8n webhook call)
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: "Kripya adhik jankari ke liye WhatsApp par sampark karein: wa.me/917869083344 🙏",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* All 3 floating buttons together */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center"
          >
            <button
              onClick={() => setOpen(true)}
              className="w-14 h-14 rounded-full gradient-saffron flex items-center justify-center shadow-gold pulse-glow cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </button>
            <a
              href="https://wa.me/917869083344"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover-lift"
            >
              <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.126 1.528 5.865L.06 23.487a.5.5 0 00.614.614l5.622-1.468A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.585l-.387-.232-3.334.87.87-3.334-.232-.387A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </a>
            <a
              href="tel:+917869083344"
              className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg hover-lift"
            >
              <Phone className="w-6 h-6 text-secondary-foreground" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 rounded-lg overflow-hidden shadow-elevated bg-card border border-border"
          >
            {/* Header */}
            <div className="gradient-saffron px-5 py-4 flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-primary-foreground">PSM Support</div>
                <div className="text-xs text-primary-foreground/70 font-body">Online</div>
              </div>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-background">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl font-body text-sm ${
                      m.from === "user"
                        ? "gradient-saffron text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2 bg-card">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-full bg-muted border-0 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 rounded-full gradient-saffron flex items-center justify-center"
              >
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
