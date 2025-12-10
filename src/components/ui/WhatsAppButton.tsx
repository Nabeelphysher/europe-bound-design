import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const phoneNumber = "49123456789"; // Replace with actual number
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about Europe Calling services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-3 bg-[#25D366] text-primary-foreground px-4 py-3 rounded-full shadow-elevated hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span
          className={cn(
            "font-medium text-sm whitespace-nowrap transition-all duration-300 overflow-hidden",
            isHovered ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
          )}
        >
          Chat with us
        </span>
      </button>
    </div>
  );
}
