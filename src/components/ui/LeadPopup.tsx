import { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Check, Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
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

export function LeadPopup({ isOpen, onClose, initialDestination }: LeadPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: initialDestination ? initialDestination.toLowerCase() : "",
  });

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, country: initialDestination.toLowerCase() }));
    }
  }, [initialDestination, isOpen]);

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
      title: "Request Received",
      description: "Our travel specialists will contact you shortly.",
      duration: 3000,
    });

    setIsSubmitting(false);
    onClose();
    setFormData({ name: "", email: "", phone: "", country: "" });
  };

  if (!isOpen) return null;

  // Helper to format title case
  const formatDestination = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with darker blur for focus */}
      <div
        className="absolute inset-0 bg-[#050511]/80 backdrop-blur-sm animate-fade-in transition-all duration-500"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-[24rem] rounded-xl shadow-2xl overflow-hidden animate-scale-in flex flex-col">

        {/* Premium Header Section */}
        <div className="relative bg-[#0B1E3F] px-5 pt-5 pb-4 text-center shrink-0 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors duration-300 p-2 hover:bg-white/5 rounded-full"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-2 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.15em] text-[#D4AF37] uppercase">
              Exclusive Offer
            </span>
          </div>

          <h3 className="font-heading text-2xl font-bold text-white mb-1 tracking-wide leading-tight">
            Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
              {initialDestination ? `${formatDestination(initialDestination)} Trip` : "Dream Trip"}
            </span>
          </h3>
          <p className="text-white/60 text-sm font-light tracking-wide max-w-[80%] mx-auto">
            Get a 100% free, {initialDestination ? "customized" : "personalized"} itinerary crafted by our experts.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-5 bg-white relative">
          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Input Group */}
            <div className="space-y-2">
              <div className="group relative">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1 transition-colors group-focus-within:text-[#0B1E3F]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-300 shadow-sm text-sm"
                  placeholder="e.g. Sarah Jenkins"
                />
              </div>

              <div className="group relative">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1 transition-colors group-focus-within:text-[#0B1E3F]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-300 shadow-sm text-sm"
                  placeholder="sarah@example.com"
                />
              </div>

              <div className="group relative">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1 transition-colors group-focus-within:text-[#0B1E3F]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-300 shadow-sm text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="group relative">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1 transition-colors group-focus-within:text-[#0B1E3F]">
                  Destination
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={cn(
                      "w-full px-3 py-2 bg-gray-50 border rounded-xl text-left text-sm focus:outline-none transition-all duration-300 shadow-sm flex items-center justify-between",
                      isDropdownOpen
                        ? "bg-white border-[#D4AF37] ring-1 ring-[#D4AF37]/50 text-gray-900"
                        : "border-gray-100 hover:border-gray-200 text-gray-400",
                      formData.country && !isDropdownOpen && "text-gray-900"
                    )}
                  >
                    <span className="truncate">
                      {formData.country
                        ? countries.find(c => c.value === formData.country)?.label
                        : "Select your destination"}
                    </span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isDropdownOpen ? "rotate-180 text-[#D4AF37]" : "text-gray-400")} />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] max-h-[220px] overflow-y-auto z-50 animate-in fade-in zoom-in-95 duration-200 custom-scrollbar">
                      <div className="p-1.5">
                        {countries.map((country) => (
                          <div
                            key={country.value}
                            onClick={() => {
                              setFormData({ ...formData, country: country.value });
                              setIsDropdownOpen(false);
                            }}
                            className={cn(
                              "px-3 py-2 rounded-lg text-sm cursor-pointer flex items-center justify-between transition-all duration-200",
                              formData.country === country.value
                                ? "bg-[#D4AF37]/10 text-[#0B1E3F] font-semibold"
                                : "text-gray-600 hover:bg-gray-50 hover:text-[#0B1E3F]"
                            )}
                          >
                            {country.label}
                            {formData.country === country.value && (
                              <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white font-bold py-3 rounded-xl shadow-[0_10px_20px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm tracking-wide uppercase",
                  isSubmitting && "opacity-80 cursor-not-allowed transform-none"
                )}
              >
                {isSubmitting ? (
                  "Processing Request..."
                ) : (
                  <>
                    <Plane className="w-4 h-4 fill-white/20" />
                    Get My Free Quote
                  </>
                )}
              </button>

              <div className="mt-2 flex items-center justify-center gap-2 text-[9px] text-gray-400 font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Your data is secure & confidential
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
