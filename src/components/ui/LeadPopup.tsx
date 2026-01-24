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
import { Checkbox } from "@/components/ui/checkbox";

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
    phone: "",
    whatsappSame: true,
    whatsappNumber: "",
    travelMonth: "",
    destination: initialDestination ? initialDestination.toLowerCase() : "",
  });

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination.toLowerCase() }));
    }
  }, [initialDestination, isOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const destinations = [
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "georgia", label: "Georgia" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "russia", label: "Russia" },
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "armenia", label: "Armenia" },
    { value: "france", label: "France" },
  ];

  const travelMonths = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
    { value: "april", label: "April" },
    { value: "may", label: "May" },
    { value: "june", label: "June" },
    { value: "july", label: "July" },
    { value: "august", label: "August" },
    { value: "september", label: "September" },
    { value: "october", label: "October" },
    { value: "november", label: "November" },
    { value: "december", label: "December" },
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
    setFormData({ name: "", phone: "", whatsappSame: true, whatsappNumber: "", travelMonth: "", destination: "" });
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
      <div className="relative bg-white w-full max-w-[26rem] rounded-3xl shadow-2xl p-5 md:p-6 animate-scale-in flex flex-col max-h-[90dvh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

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
              className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 text-sm"
              placeholder="e.g. Sarah Jenkins"
            />
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Mobile Number (with country code)
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 text-sm"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* WhatsApp Number Checkbox */}
          <div className="relative flex items-center space-x-2">
            <Checkbox
              id="whatsapp-same"
              checked={formData.whatsappSame}
              onCheckedChange={(checked) => setFormData({ ...formData, whatsappSame: checked === true, whatsappNumber: checked === true ? "" : formData.whatsappNumber })}
              className="border-gray-300 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
            />
            <label
              htmlFor="whatsapp-same"
              className="text-sm font-medium text-gray-900 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              WhatsApp Number (same as mobile)
            </label>
          </div>

          {/* WhatsApp Number Input - Show when checkbox is unchecked */}
          {!formData.whatsappSame && (
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
                WhatsApp Number (with country code)
              </label>
              <input
                type="tel"
                required={!formData.whatsappSame}
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 text-sm"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          )}

          {/* Travel Month */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Travel Month
            </label>
            <Select
              value={formData.travelMonth}
              onValueChange={(value) => setFormData({ ...formData, travelMonth: value })}
            >
              <SelectTrigger className="w-full px-4 py-2.5 md:py-3 h-auto bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-none focus:ring-1 focus:ring-gold focus:border-gold [&>span]:line-clamp-none">
                <SelectValue placeholder="Select Travel Month" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5} className="min-w-[var(--radix-select-trigger-width)] max-h-[200px] bg-white border-gray-100 rounded-xl shadow-xl z-[150]">
                {travelMonths.map((month) => (
                  <SelectItem
                    key={month.value}
                    value={month.value}
                    className="cursor-pointer focus:bg-gold/10 focus:text-primary whitespace-nowrap"
                  >
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Destination of Interest */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Destination of Interest
            </label>
            <Select
              value={formData.destination}
              onValueChange={(value) => setFormData({ ...formData, destination: value })}
            >
              <SelectTrigger className="w-full px-4 py-2.5 md:py-3 h-auto bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-none focus:ring-1 focus:ring-gold focus:border-gold [&>span]:line-clamp-none">
                <SelectValue placeholder="Select Destination" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5} className="min-w-[var(--radix-select-trigger-width)] max-h-[200px] bg-white border-gray-100 rounded-xl shadow-xl z-[150]">
                {destinations.map((destination) => (
                  <SelectItem
                    key={destination.value}
                    value={destination.value}
                    className="cursor-pointer focus:bg-gold/10 focus:text-primary whitespace-nowrap"
                  >
                    {destination.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full bg-gold hover:bg-gold/90 text-white font-bold py-3 md:py-3.5 rounded-2xl shadow-lg border border-gold/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm",
                isSubmitting && "opacity-80 cursor-not-allowed transform-none"
              )}
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                "Talk to Travel Expert"
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
