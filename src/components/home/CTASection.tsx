import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />

      <div className="container-wide relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your{" "}
            <span className="text-gold italic">European</span> Journey?
          </h2>

          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Take the first step today. Our experts are ready to guide you
            towards your European dream with personalized consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2 group"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+49123456789"
              className="btn-secondary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary inline-flex items-center justify-center"
            >
              Call Us Now
            </a>
          </div>

          <p className="text-primary-foreground/50 text-sm mt-8">
            No commitment required • Free initial consultation • Response within
            24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
