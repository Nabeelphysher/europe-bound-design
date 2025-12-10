import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function StickyEnquireButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Link
        to="/contact"
        className={cn(
          "flex items-center bg-gold text-gold-foreground font-semibold shadow-glow transition-all duration-300 hover:bg-accent hover:text-accent-foreground",
          isExpanded
            ? "px-6 py-4 rounded-l-lg"
            : "px-3 py-8 rounded-l-lg writing-vertical"
        )}
        style={{
          writingMode: isExpanded ? "horizontal-tb" : "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        {isExpanded ? "Enquire Now →" : "Enquire Now"}
      </Link>
    </div>
  );
}
