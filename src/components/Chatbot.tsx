import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

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
          text: "Kripya adhik jankari ke liye WhatsApp par sampark karein: wa.me/9179210310 🙏",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Toggle */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full gradient-saffron flex items-center justify-center shadow-gold pulse-glow"
          >
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
          </motion.button>
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
