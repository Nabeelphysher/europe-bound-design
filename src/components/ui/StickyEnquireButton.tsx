import { useState } from "react";
import { LeadPopup } from "./LeadPopup";

export function StickyEnquireButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center bg-gold text-gold-foreground font-semibold shadow-glow transition-all duration-300 hover:bg-accent hover:text-accent-foreground px-3 py-8 rounded-l-lg hover:pr-4 hover:pl-5 hover:tracking-wide"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Enquire Now
        </button>
      </div>

      <LeadPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
