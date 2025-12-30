import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageSquare, Globe } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import contactBanner from "@/assets/destination-czech.jpg";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "Our team will review your inquiry and respond within 24 hours.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", country: "", message: "" });
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
      link: "tel:+918590404857",
      subtext: "Mon-Fri 9am-6pm"
    },
    {
      icon: Mail,
      title: "Email",
      content: "sales@europecalling.co",
      link: "mailto:sales@europecalling.co",
      subtext: "Online 24/7"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Kerala, India",
      link: "https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519",
      subtext: "2nd Floor, Paravath Arcade, opp. Budget Hypermarket, Varangode, Down Hill, Malappuram, Kerala 676519"
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        <PageHeader
          eyebrow="Contact Us"
          title="Get in Touch"
          description="We're here to answer your questions and help you start your journey."
        />

        {/* Contact Info Cards */}
        <section className="relative z-20 -mt-16 sm:-mt-20 px-4 mb-20">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <RevealOnScroll className="h-full" delay={index * 100} key={index}>
                  <a
                    href={info.link}
                    className="group bg-card hover:bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-white/10 hover:border-gold/30 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center backdrop-blur-sm h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gold text-primary flex items-center justify-center mb-6 transition-all duration-500 shadow-glow group-hover:bg-primary group-hover:text-gold">
                      <info.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2 text-gold transition-colors">{info.title}</h3>
                    <p className="text-foreground font-medium text-lg mb-1">{info.content}</p>
                    <p className="text-muted-foreground text-sm">{info.subtext}</p>
                  </a>
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

              {/* Left Column: Form */}
              <RevealOnScroll className="lg:col-span-7" animation="slide-in-left" delay={300}>
                <div className="bg-white rounded-3xl shadow-xl border border-border/50 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold via-primary to-gold" />

                  <div className="p-8 sm:p-10 md:p-12">
                    <div className="mb-10">
                      <h2 className="font-heading text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                        <MessageSquare className="w-6 h-6 text-gold" />
                        Send a Message
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and verify your specific requirements. We respect your privacy.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-8">
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
                            className="peer w-full px-4 py-4 rounded-xl border border-border bg-background/50 focus:bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all pt-6"
                            placeholder=" "
                          />
                          <label
                            htmlFor="name"
                            className={cn(
                              "absolute left-4 top-4 text-muted-foreground text-sm transition-all pointer-events-none",
                              "peer-focus:top-1 peer-focus:text-xs peer-focus:text-gold peer-focus:font-semibold",
                              formData.name && "top-1 text-xs font-semibold"
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
                            className="peer w-full px-4 py-4 rounded-xl border border-border bg-background/50 focus:bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all pt-6"
                            placeholder=" "
                          />
                          <label
                            htmlFor="email"
                            className={cn(
                              "absolute left-4 top-4 text-muted-foreground text-sm transition-all pointer-events-none",
                              "peer-focus:top-1 peer-focus:text-xs peer-focus:text-gold peer-focus:font-semibold",
                              formData.email && "top-1 text-xs font-semibold"
                            )}
                          >
                            Email Address
                          </label>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-8">
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
                            className="peer w-full px-4 py-4 rounded-xl border border-border bg-background/50 focus:bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all pt-6"
                            placeholder=" "
                          />
                          <label
                            htmlFor="phone"
                            className={cn(
                              "absolute left-4 top-4 text-muted-foreground text-sm transition-all pointer-events-none",
                              "peer-focus:top-1 peer-focus:text-xs peer-focus:text-gold peer-focus:font-semibold",
                              formData.phone && "top-1 text-xs font-semibold"
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
                            className="peer w-full px-4 py-4 rounded-xl border border-border bg-background/50 focus:bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all pt-6 appearance-none cursor-pointer"
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
                              "absolute left-4 top-4 text-muted-foreground text-sm transition-all pointer-events-none",
                              "peer-focus:top-1 peer-focus:text-xs peer-focus:text-gold peer-focus:font-semibold",
                              formData.country && "top-1 text-xs font-semibold"
                            )}
                          >
                            Country of Interest
                          </label>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                            <Globe className="w-5 h-5 opacity-50" />
                          </div>
                        </div>
                      </div>

                      {/* Message Input */}
                      <div className="relative">
                        <textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField(null)}
                          className="peer w-full px-4 py-4 rounded-xl border border-border bg-background/50 focus:bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all resize-none pt-6"
                          placeholder=" "
                        />
                        <label
                          htmlFor="message"
                          className={cn(
                            "absolute left-4 top-4 text-muted-foreground text-sm transition-all pointer-events-none",
                            "peer-focus:top-1 peer-focus:text-xs peer-focus:text-gold peer-focus:font-semibold",
                            formData.message && "top-1 text-xs font-semibold"
                          )}
                        >
                          Your Message
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 group",
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

              {/* Right Column: Content/Map */}
              <RevealOnScroll className="lg:col-span-5 flex flex-col gap-8" animation="slide-in-right" delay={500}>
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
                  <a href="#" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Visit FAQ Page <ArrowRight className="w-3 h-3" />
                  </a>
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
