import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageSquare, Globe, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import contactBanner from "@/assets/destination-czech.jpg";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { submitLead } from "@/lib/api";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    rating: 0,
  });
  const [activeTab, setActiveTab] = useState<'contact' | 'feedback'>('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (activeTab === 'feedback') {
        // Feedback Submission using Lead API
        const result = await submitLead({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          rating: formData.rating === 0 ? 5 : formData.rating,
          form_type: "Feedback Form",
          source: "Website Form"
        });

        if (result.status === "success") {
          toast({
            title: "Thank You!",
            description: "Your feedback has been successfully submitted.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Submission Failed",
            description: result.message || "Failed to submit feedback",
          });
          setIsSubmitting(false);
          return;
        }
      } else {
        // Contact Form Submission
        const result = await submitLead({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          country: formData.country,
          form_type: "Contact Us Form",
        });

        if (result.status === "success") {
          toast({
            title: "Message Sent Successfully!",
            description: "Our team will review your inquiry and respond within 24 hours.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Submission Failed",
            description: result.message || "There was a problem sending your message.",
          });
          // Don't throw here to avoid generic catch block overriding specific error
          setIsSubmitting(false);
          return;
        }
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        rating: 0,
      });

    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: (
        <>
          <span className="block">+91 85904 04857</span>
          <span className="block">+91 85920 04857</span>
        </>
      ),
      description: "Speak directly with our expert consultants.",
      link: "tel:+918590404857",
      subtext: "Mon-Fri 9am-6pm"
    },
    {
      icon: Mail,
      title: "Email",
      content: "sales@europecalling.co",
      description: "Get a detailed quote or support for your application.",
      link: "mailto:sales@europecalling.co",
      subtext: "Online 24/7"
    },
    {
      icon: MapPin,
      title: "Office",
      content: (
        <div className="flex flex-col gap-2 text-xs md:text-sm w-full">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bashir+safar-oghlu,+Baku,+Azerbaijan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border-b border-gray-100 pb-2 hover:bg-gray-50/50 rounded-lg transition-colors p-1 block group/link"
          >
            <span className="flex items-center justify-center gap-1.5 font-bold text-[#FF7700] mb-0.5 group-hover/link:underline">
              <MapPin className="w-3.5 h-3.5" /> Baku, Azerbaijan
            </span>
            <span className="block opacity-80 text-xs leading-tight">Bashir safar-oghlu, Baku, Azerbaijan</span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Calicut+rd,+opposite+Budget+hyper+market,+Varangod,+Down+Hill,+Malappuram,+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:bg-gray-50/50 rounded-lg transition-colors p-1 block group/link"
          >
            <span className="flex items-center justify-center gap-1.5 font-bold text-[#FF7700] mb-0.5 group-hover/link:underline">
              <MapPin className="w-3.5 h-3.5" /> Kerala, India
            </span>
            <span className="block opacity-80 text-xs leading-tight">Calicut rd, opposite Budget hyper market, Varangod, Down Hill, Malappuram, Kerala</span>
          </a>
        </div>
      ),
      description: "",
      link: "#",
      subtext: ""
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-[#faf4e5] min-h-screen pt-20">
        <PageHeader
          eyebrow="Contact Us"
          title="Get in Touch"
          description="We're here to answer your questions and help you start your journey."
        />

        {/* Contact Info Cards */}
        <section className="relative z-20 -mt-16 sm:-mt-20 px-4 mb-32 lg:mb-40">
          <div className="container-wide">
            <div className="flex flex-wrap justify-center items-stretch gap-6">
              {contactInfo.map((info, index) => (
                <RevealOnScroll
                  className="h-full w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  delay={index * 100}
                  key={index}
                >
                  {(() => {
                    const isOffice = info.title === "Office";
                    const Wrapper = isOffice ? "div" : "a";
                    const wrapperProps = isOffice ? {} : { href: info.link };

                    return (
                      <Wrapper
                        {...wrapperProps}
                        className="group bg-card hover:bg-white p-5 pt-8 rounded-2xl shadow-xl hover:shadow-2xl border border-white/10 hover:border-gold/30 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center justify-start text-center backdrop-blur-sm h-full min-h-[350px]"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gold text-primary flex items-center justify-center mb-4 transition-all duration-500 shadow-glow group-hover:bg-primary group-hover:text-gold">
                          <info.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading text-lg font-bold mb-2 text-gold transition-colors">{info.title}</h3>
                        <div className="text-foreground font-medium text-base mb-2 break-words w-full px-1">{info.content}</div>
                        <p className="text-muted-foreground/80 text-xs mb-3 px-2">{info.description}</p>
                        <p className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider">{info.subtext}</p>
                      </Wrapper>
                    );
                  })()}
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* --- Main Content Split --- */}
        < section className="section-padding pt-0 relative overflow-hidden" >
          {/* Decorative Elements */}
          < div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Left Column: Form - Balanced Width (6 cols) */}
              <RevealOnScroll className="lg:col-span-6" animation="slide-in-left" delay={300}>
                <div className="bg-white rounded-3xl shadow-xl border border-border/50 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#C6A87C] via-[#F3E7C9] to-[#C6A87C]" />

                  <div className="p-5 sm:p-6">
                    {/* Tab Switcher */}
                    <div className="flex bg-muted/50 p-1 rounded-xl mb-6 relative">
                      <button
                        onClick={() => setActiveTab('contact')}
                        className={cn(
                          "flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300 z-10",
                          activeTab === 'contact' ? "text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        Contact
                      </button>
                      <button
                        onClick={() => setActiveTab('feedback')}
                        className={cn(
                          "flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300 z-10",
                          activeTab === 'feedback' ? "text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        Feedback
                      </button>
                      {/* Sliding Bg */}
                      <div
                        className={cn(
                          "absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#FF7700] rounded-lg transition-all duration-300 ease-out shadow-sm",
                          activeTab === 'feedback' ? "left-[calc(50%)]" : "left-1"
                        )}
                      />
                    </div>

                    <div className="mb-4">
                      <h2 className="font-heading text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                        {activeTab === 'contact' ? <MessageSquare className="w-5 h-5 text-gold" /> : <Star className="w-5 h-5 text-gold" />}
                        {activeTab === 'contact' ? 'Send a Message' : 'Share Feedback'}
                      </h2>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {activeTab === 'contact'
                          ? "Fill out the form below and verify your specific requirements. We respect your privacy."
                          : "We value your opinion. Please let us know about your experience with us."}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {activeTab === 'contact' ? (
                        /* Contact Form Fields */
                        <>
                          <div className="grid grid-cols-1 gap-3">
                            {/* Name Input */}
                            <div className="relative">
                              <input
                                id="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                onFocus={() => setActiveField('name')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Full Name"
                              />
                              <label
                                htmlFor="name"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.name && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Full Name
                              </label>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                              <input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                onFocus={() => setActiveField('email')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Email Address"
                              />
                              <label
                                htmlFor="email"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.email && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Email Address
                              </label>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                            {/* Phone Input */}
                            <div className="relative">
                              <input
                                id="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                onFocus={() => setActiveField('phone')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Phone Number"
                              />
                              <label
                                htmlFor="phone"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.phone && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Phone Number
                              </label>
                            </div>

                            {/* Country Input */}
                            <div className="relative">
                              <select
                                id="country"
                                required
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                onFocus={() => setActiveField('country')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium shadow-sm hover:border-gray-300 appearance-none cursor-pointer"
                              >
                                <option value=""></option>
                                <option value="germany">Germany</option>
                                <option value="poland">Poland</option>
                                <option value="czech">Czech Republic</option>
                                <option value="france">France</option>
                                <option value="romania">Romania</option>
                                <option value="azerbaijan">Azerbaijan</option>
                                <option value="other">Other</option>
                              </select>
                              <label
                                htmlFor="country"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.country && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Country of Interest
                              </label>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                                <Globe className="w-4 h-4 opacity-50" />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        /* Feedback Form Fields */
                        <>
                          <div className="grid grid-cols-1 gap-3">
                            {/* Name Input */}
                            <div className="relative">
                              <input
                                id="feedback-name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                onFocus={() => setActiveField('feedback-name')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Full Name"
                              />
                              <label
                                htmlFor="feedback-name"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.name && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Full Name
                              </label>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                              <input
                                id="feedback-email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                onFocus={() => setActiveField('feedback-email')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Email Address"
                              />
                              <label
                                htmlFor="feedback-email"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.email && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Email Address
                              </label>
                            </div>

                            {/* Phone Input (Required for API) */}
                            <div className="relative">
                              <input
                                id="feedback-phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                onFocus={() => setActiveField('feedback-phone')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Phone Number"
                              />
                              <label
                                htmlFor="feedback-phone"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.phone && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Phone Number
                              </label>
                            </div>

                            {/* Rating */}
                            <div className="flex flex-col gap-2">
                              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Your Rating</label>
                              <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, rating: star })}
                                    className="focus:outline-none transition-transform hover:scale-110 active:scale-90"
                                  >
                                    <Star
                                      className={cn(
                                        "w-8 h-8 transition-colors duration-300",
                                        formData.rating >= star ? "fill-[#FF7700] text-[#FF7700]" : "text-gray-300 hover:text-[#FF7700]/50"
                                      )}
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Message Input (Shared) */}
                      <div className="relative">
                        <textarea
                          id="message"
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField(null)}
                          className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 resize-none pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                          placeholder={activeTab === 'contact' ? "Your Message" : "Tell us about your experience"}
                        />
                        <label
                          htmlFor="message"
                          className={cn(
                            "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                            "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                            formData.message && "top-1 text-[10px] font-semibold"
                          )}
                        >
                          {activeTab === 'contact' ? "Your Message" : "Additional Comments"}
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full bg-[#FF7700] hover:bg-[#e66b00] text-white font-bold py-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_-15px_rgba(255,119,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group text-sm",
                          isSubmitting && "opacity-70 cursor-not-allowed"
                        )}

                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Inquiry
                            <Send className="w-5 h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Right Column: Content/Map - Balanced Width (6 cols) */}
              <RevealOnScroll className="lg:col-span-6 flex flex-col gap-8" animation="slide-in-right" delay={500}>
                {/* Office Info Card */}
                <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-colors" />

                  <h3 className="font-heading text-2xl font-bold mb-6">Visit Our Office</h3>
                  <div className="space-y-4 mb-8 relative z-10">
                    <p className="opacity-90 leading-relaxed">
                      We always welcome clients to our office for a personal consultation. Please schedule an appointment in advance.
                    </p>
                  </div>

                  {/* Decorative Map Image */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block h-48 rounded-2xl overflow-hidden shadow-inner border border-white/10 hover:border-gold/50 transition-colors cursor-pointer group/map"
                  >
                    <img
                      src={contactBanner}
                      alt="Map Location"
                      className="w-full h-full object-cover opacity-80 group-hover/map:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover/map:bg-primary/20 transition-colors flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40 group-hover/map:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 items-center gap-2 text-sm text-gold font-medium cursor-pointer hover:underline inline-flex"
                  >
                    Get Directions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* FAQ Teaser */}
                <div className="bg-muted/50 border border-border rounded-3xl p-8 hover:bg-muted transition-colors">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Find quick answers to common questions about visas, processing times, and documents.
                  </p>
                  <Link to="/about" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Visit FAQ Page <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </RevealOnScroll>

            </div>
          </div>
        </section >
      </main >
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
