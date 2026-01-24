import { useState, useEffect } from "react";
import { X } from "lucide-react";
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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
}

export function EnquiryForm({ isOpen, onClose, initialDestination }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsappSame: true,
    whatsappNumber: "",
    adults: "",
    kids: "",
    travelDate: undefined as Date | undefined,
    destination: initialDestination ? initialDestination.toLowerCase() : "",
    hotelCategory: "",
  });

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination.toLowerCase() }));
    }
  }, [initialDestination, isOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionType, setActionType] = useState<"package" | null>(null);

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


  const hotelCategories = [
    { value: "3star", label: "3⭐" },
    { value: "4star", label: "4⭐" },
    { value: "5star", label: "5⭐" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setActionType("package");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Enquiry form submitted:", { ...formData, action: "package" });

    toast({
      title: "Package Details Requested",
      description: "Our travel specialists will contact you shortly with the details.",
      duration: 3000,
    });

    setIsSubmitting(false);
    setActionType(null);
    onClose();
    setFormData({
      name: "",
      phone: "",
      whatsappSame: true,
      whatsappNumber: "",
      adults: "",
      kids: "",
      travelDate: undefined,
      destination: "",
      hotelCategory: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in transition-all duration-500"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-[28rem] rounded-3xl shadow-2xl p-6 md:p-8 animate-scale-in flex flex-col max-h-[90dvh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">
            Plan Your Dream Trip
          </h2>
          <p className="text-gray-500 text-sm">
            Get personalized travel package details.
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
        <form className="space-y-4 md:space-y-5">
          {/* Name */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF7700] focus:ring-1 focus:ring-[#FF7700] transition-all duration-200 text-sm"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF7700] focus:ring-1 focus:ring-[#FF7700] transition-all duration-200 text-sm"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* WhatsApp Number Checkbox */}
          <div className="relative flex items-center space-x-2">
            <Checkbox
              id="whatsapp-same-enquiry"
              checked={formData.whatsappSame}
              onCheckedChange={(checked) => setFormData({ ...formData, whatsappSame: checked === true, whatsappNumber: checked === true ? "" : formData.whatsappNumber })}
              className="border-gray-300 data-[state=checked]:bg-[#FF7700] data-[state=checked]:border-[#FF7700]"
            />
            <label
              htmlFor="whatsapp-same-enquiry"
              className="text-sm font-medium text-gray-900 cursor-pointer leading-none"
            >
              WhatsApp Number (same as phone)
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
                className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF7700] focus:ring-1 focus:ring-[#FF7700] transition-all duration-200 text-sm"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          )}

          {/* No. of Travellers */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
                Adults
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.adults}
                onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF7700] focus:ring-1 focus:ring-[#FF7700] transition-all duration-200 text-sm"
                placeholder="0"
              />
            </div>
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
                Kids
              </label>
              <input
                type="number"
                min="0"
                value={formData.kids}
                onChange={(e) => setFormData({ ...formData, kids: e.target.value })}
                className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF7700] focus:ring-1 focus:ring-[#FF7700] transition-all duration-200 text-sm"
                placeholder="0"
              />
            </div>
          </div>

          {/* Preferred Travel Date */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Preferred Travel Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "w-full px-4 py-2.5 md:py-3 h-auto bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-none focus:ring-1 focus:ring-[#FF7700] focus:border-[#FF7700] transition-all duration-200 text-sm text-left justify-start font-normal",
                    !formData.travelDate && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 inline" />
                  {formData.travelDate ? format(formData.travelDate, "PPP") : "Select date"}
                </button>
              </PopoverTrigger>
              <PopoverContent 
                className="w-auto p-0 bg-white border-gray-100 rounded-xl shadow-xl z-[150]" 
                align="start"
                sideOffset={5}
              >
                <Calendar
                  mode="single"
                  selected={formData.travelDate}
                  onSelect={(date) => {
                    setFormData({ ...formData, travelDate: date });
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Destination */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Destination
            </label>
            <Select
              value={formData.destination}
              onValueChange={(value) => setFormData({ ...formData, destination: value })}
            >
              <SelectTrigger className="w-full px-4 py-2.5 md:py-3 h-auto bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-none focus:ring-1 focus:ring-[#FF7700] focus:border-[#FF7700] [&>span]:line-clamp-none">
                <SelectValue placeholder="Select Destination" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5} className="min-w-[var(--radix-select-trigger-width)] max-h-[200px] bg-white border-gray-100 rounded-xl shadow-xl z-[150]">
                {destinations.map((destination) => (
                  <SelectItem
                    key={destination.value}
                    value={destination.value}
                    className="cursor-pointer focus:bg-[#FF7700]/10 focus:text-primary whitespace-nowrap"
                  >
                    {destination.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Hotel Category - Optional */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Hotel Category <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <Select
              value={formData.hotelCategory}
              onValueChange={(value) => setFormData({ ...formData, hotelCategory: value })}
            >
              <SelectTrigger className="w-full px-4 py-2.5 md:py-3 h-auto bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-none focus:ring-1 focus:ring-[#FF7700] focus:border-[#FF7700] [&>span]:line-clamp-none">
                <SelectValue placeholder="Select Hotel Category" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5} className="min-w-[var(--radix-select-trigger-width)] bg-white border-gray-100 rounded-xl shadow-xl z-[150]">
                {hotelCategories.map((category) => (
                  <SelectItem
                    key={category.value}
                    value={category.value}
                    className="cursor-pointer focus:bg-[#FF7700]/10 focus:text-primary whitespace-nowrap"
                  >
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={cn(
                "w-full bg-[#FF7700] hover:bg-[#FF7700]/90 text-white font-bold py-3 md:py-3.5 rounded-2xl shadow-lg border border-[#FF7700]/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm",
                isSubmitting && actionType === "package" && "opacity-80 cursor-not-allowed transform-none"
              )}
            >
              {isSubmitting && actionType === "package" ? (
                "Sending..."
              ) : (
                "Send Me Package Details"
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
