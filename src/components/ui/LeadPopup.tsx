import { useState, useEffect } from "react";
import { X, Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in transition-all duration-500"
        onClick={onClose}
      />

      {/* Modal Container - Clean White Card */}
      <div className="relative bg-white w-full max-w-[26rem] rounded-3xl shadow-2xl p-5 md:p-8 animate-scale-in flex flex-col max-h-[90dvh] overflow-y-auto custom-scrollbar">

        {/* Header - Clean & Simple */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Plan Your {initialDestination ? formatDestination(initialDestination) : "Dream"} Trip
          </h2>
          <p className="text-gray-500 text-sm">
            Get a free customized itinerary.
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-gray-900 transition-colors duration-200 z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
          {/* Full Name */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-200 text-sm"
              placeholder="e.g. Sarah Jenkins"
            />
          </div>

          {/* Email Address */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-200 text-sm"
              placeholder="sarah@example.com"
            />
          </div>

          {/* Phone & Destination Row? Or Stacked? Reference shows grid. Let's stack for mobile safety or grid if space allows. */}
          <div className="grid grid-cols-1 gap-3 md:gap-5">
            {/* Phone Number */}
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-200 text-sm"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Destination Dropdown */}
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
                Destination
              </label>
              <Select
                value={formData.country}
                onValueChange={(value) => setFormData({ ...formData, country: value })}
              >
                <SelectTrigger className="w-full px-4 py-2.5 md:py-3 h-auto bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37]">
                  <SelectValue placeholder="Select Destination" />
                </SelectTrigger>
                <SelectContent position="popper" sideOffset={5} className="max-h-[200px] bg-white border-gray-100 rounded-xl shadow-xl z-[150]">
                  {countries.map((country) => (
                    <SelectItem
                      key={country.value}
                      value={country.value}
                      className="cursor-pointer focus:bg-[#D4AF37]/10 focus:text-[#0B1E3F]"
                    >
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full bg-[#D4AF37] hover:bg-[#B8860B] text-white font-bold py-3 md:py-3.5 rounded-2xl shadow-lg border border-[#D4AF37]/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm",
                isSubmitting && "opacity-80 cursor-not-allowed transform-none"
              )}
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                "Get My Free Quote"
              )}
            </button>

            <div className="mt-3 md:mt-4 flex items-center justify-center">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-xs font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
