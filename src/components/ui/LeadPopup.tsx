import { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const useLeadPopup = (delay: number = 5000) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasSeenLeadPopup", "true");
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isOpen, setIsOpen };
};

export function LeadPopup({ isOpen, onClose }: LeadPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = [
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "armenia", label: "Armenia" },
    { value: "netherlands", label: "Netherlands" },
    { value: "georgia", label: "Georgia" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "france", label: "France" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-scale-in flex flex-col overflow-visible">

        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-t-2xl z-20" />

        {/* Header */}
        <div className="bg-primary px-5 py-5 text-center shrink-0 relative rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-1.5 transition-all duration-300"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="mb-2">
            <span className="inline-block py-0.5 px-2 rounded-full bg-gold/10 text-gold text-[10px] font-bold tracking-wider uppercase border border-gold/20">
              Limited Time Offer
            </span>
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">
            Plan Your <span className="text-gold">Dream Trip</span>
          </h3>
          <p className="text-white/70 text-xs max-w-xs mx-auto leading-relaxed">
            Get a 100% free, personalized itinerary.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-50/50 rounded-b-2xl">
          <form onSubmit={handleSubmit} className="p-5 space-y-3">

            <div className="space-y-3">
              <div className="grid gap-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all shadow-sm placeholder:text-gray-300 text-sm"
                  placeholder="e.g. Sarah Jenkins"
                />
              </div>

              <div className="grid gap-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all shadow-sm placeholder:text-gray-300 text-sm"
                  placeholder="sarah@example.com"
                />
              </div>

              <div className="grid gap-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all shadow-sm placeholder:text-gray-300 text-sm"
                  placeholder="+91 85904 04857"
                />
              </div>

              <div className="grid gap-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide ml-1">
                  Destination
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={cn(
                      "w-full px-3 py-2.5 rounded-lg border bg-white text-left text-sm focus:outline-none transition-all shadow-sm flex items-center justify-between",
                      isDropdownOpen ? "border-gold ring-2 ring-gold/20" : "border-gray-200 hover:border-gold/50",
                      formData.country ? "text-gray-900" : "text-gray-400"
                    )}
                  >
                    <span className="truncate">
                      {formData.country
                        ? countries.find(c => c.value === formData.country)?.label
                        : "Select a country..."}
                    </span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isDropdownOpen ? "rotate-180 text-gold" : "text-gray-400")} />
                  </button>

                  {/* Custom Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-100 rounded-lg shadow-xl max-h-[200px] overflow-y-auto z-50 animate-in fade-in zoom-in-95 duration-200 custom-scrollbar">
                      <div className="p-1">
                        {countries.map((country) => (
                          <div
                            key={country.value}
                            onClick={() => {
                              setFormData({ ...formData, country: country.value });
                              setIsDropdownOpen(false);
                            }}
                            className={cn(
                              "px-3 py-2 rounded-md text-sm cursor-pointer flex items-center justify-between transition-colors",
                              formData.country === country.value
                                ? "bg-gold/10 text-gold font-medium"
                                : "text-gray-700 hover:bg-gray-50"
                            )}
                          >
                            {country.label}
                            {formData.country === country.value && (
                              <Check className="w-3.5 h-3.5" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-gold hover:bg-gold/90 text-primary-foreground font-bold py-3 rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm",
                  isSubmitting && "opacity-70 cursor-not-allowed transform-none"
                )}
              >
                {isSubmitting ? (
                  "Sending Request..."
                ) : (
                  <>
                    Get Free Quote
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-gray-400">
                <span>🔒 Secure & Confidential</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
