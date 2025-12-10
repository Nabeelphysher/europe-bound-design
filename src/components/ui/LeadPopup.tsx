import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadPopup({ isOpen, onClose }: LeadPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you within 24 hours.",
    });

    setIsSubmitting(false);
    onClose();
    setFormData({ name: "", email: "", phone: "", country: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-xl shadow-elevated max-w-md w-full animate-scale-in overflow-hidden">
        {/* Header */}
        <div className="bg-primary px-6 py-8 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
            Start Your European Journey
          </h3>
          <p className="text-primary-foreground/70 text-sm">
            Get a free consultation with our travel experts
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              htmlFor="popup-name"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Full Name
            </label>
            <input
              id="popup-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="popup-email"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Email Address
            </label>
            <input
              id="popup-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="popup-phone"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Phone Number
            </label>
            <input
              id="popup-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              placeholder="+49 123 456 789"
            />
          </div>

          <div>
            <label
              htmlFor="popup-country"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Interested Country
            </label>
            <select
              id="popup-country"
              required
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            >
              <option value="">Select a country</option>
              <option value="germany">Germany</option>
              <option value="poland">Poland</option>
              <option value="czech">Czech Republic</option>
              <option value="france">France</option>
              <option value="romania">Romania</option>
              <option value="azerbaijan">Azerbaijan</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full btn-gold mt-2",
              isSubmitting && "opacity-70 cursor-not-allowed"
            )}
          >
            {isSubmitting ? "Submitting..." : "Get Free Consultation"}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      </div>
    </div>
  );
}

export function useLeadPopup(delay = 15000) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasSeenLeadPopup", "true");
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isOpen, setIsOpen };
}
