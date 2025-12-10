import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";
import germanyImg from "@/assets/destination-germany.jpg";
import polandImg from "@/assets/destination-poland.jpg";
import czechImg from "@/assets/destination-czech.jpg";
import franceImg from "@/assets/destination-france.jpg";
import romaniaImg from "@/assets/destination-romania.jpg";

const countryData: Record<string, {
  name: string;
  tagline: string;
  image: string;
  description: string;
  whyChoose: string[];
  eligibility: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
}> = {
  germany: {
    name: "Germany",
    tagline: "Innovation, Opportunity & Excellence",
    image: germanyImg,
    description: "Germany stands as Europe's economic powerhouse, offering world-class opportunities in technology, engineering, healthcare, and more. With its strong economy, excellent quality of life, and welcoming environment for skilled workers, Germany is a top destination for ambitious professionals.",
    whyChoose: [
      "Europe's largest economy with abundant job opportunities",
      "World-renowned engineering and technology sectors",
      "Excellent healthcare and social security systems",
      "Rich cultural heritage and modern infrastructure",
      "Strong work-life balance culture",
      "Pathway to permanent residency and citizenship",
    ],
    eligibility: [
      "Bachelor's degree or equivalent qualification",
      "Relevant work experience (varies by visa type)",
      "Basic German language skills (recommended)",
      "Valid passport with 6+ months validity",
      "Clean criminal record",
      "Proof of financial stability",
    ],
    benefits: [
      "Access to EU job market",
      "Free or low-cost education for dependents",
      "Comprehensive health insurance",
      "Social security benefits",
      "Family reunification options",
      "Travel within Schengen zone",
    ],
    process: [
      { step: 1, title: "Initial Consultation", description: "Free assessment of your profile and eligibility" },
      { step: 2, title: "Documentation", description: "Complete document collection and verification" },
      { step: 3, title: "Application Prep", description: "Visa application form filling and review" },
      { step: 4, title: "Embassy Submission", description: "Guided embassy appointment and submission" },
      { step: 5, title: "Visa Approval", description: "Track application and receive visa" },
      { step: 6, title: "Arrival Support", description: "Post-arrival assistance and settling in" },
    ],
  },
  poland: {
    name: "Poland",
    tagline: "Historic Charm Meets Modern Opportunity",
    image: polandImg,
    description: "Poland has emerged as one of Europe's fastest-growing economies, offering excellent opportunities in IT, manufacturing, and services. With lower living costs than Western Europe and a rich cultural heritage, Poland is an attractive destination for professionals seeking European experience.",
    whyChoose: [
      "Rapidly growing economy with tech hub status",
      "Lower cost of living compared to Western Europe",
      "Strong IT and business services sector",
      "Rich history and vibrant culture",
      "Central European location",
      "English widely spoken in business",
    ],
    eligibility: [
      "Relevant educational qualifications",
      "Job offer from Polish employer (work visa)",
      "Valid passport",
      "Health insurance coverage",
      "Proof of accommodation",
      "Financial means documentation",
    ],
    benefits: [
      "Gateway to European market",
      "Growing salary standards",
      "Quality public healthcare",
      "Affordable education",
      "Safe and welcoming environment",
      "Schengen zone access",
    ],
    process: [
      { step: 1, title: "Profile Assessment", description: "Evaluate qualifications and opportunities" },
      { step: 2, title: "Job Matching", description: "Connect with Polish employers" },
      { step: 3, title: "Documentation", description: "Prepare and verify all documents" },
      { step: 4, title: "Visa Application", description: "Submit application at embassy" },
      { step: 5, title: "Approval & Travel", description: "Receive visa and plan travel" },
      { step: 6, title: "Integration Support", description: "Help with settling and registration" },
    ],
  },
  "czech-republic": {
    name: "Czech Republic",
    tagline: "Timeless Beauty & Modern Prosperity",
    image: czechImg,
    description: "The Czech Republic offers a unique blend of fairy-tale cities, rich history, and a modern economy. Prague's thriving tech scene and the country's central European location make it an ideal destination for professionals seeking quality of life and career growth.",
    whyChoose: [
      "Stunning architecture and cultural heritage",
      "Strong manufacturing and IT sectors",
      "High quality of life",
      "Central European location",
      "Affordable living costs",
      "Safe and stable environment",
    ],
    eligibility: [
      "Recognized educational qualifications",
      "Relevant work experience",
      "Valid passport",
      "Health insurance",
      "Proof of purpose (work/study)",
      "Financial documentation",
    ],
    benefits: [
      "Access to EU market",
      "Quality healthcare system",
      "Excellent public transport",
      "Rich cultural experiences",
      "Growing expat community",
      "Schengen zone mobility",
    ],
    process: [
      { step: 1, title: "Consultation", description: "Discuss goals and assess eligibility" },
      { step: 2, title: "Opportunity Search", description: "Find suitable positions" },
      { step: 3, title: "Documentation", description: "Prepare required documents" },
      { step: 4, title: "Application", description: "Submit visa application" },
      { step: 5, title: "Processing", description: "Track and follow up" },
      { step: 6, title: "Arrival", description: "Welcome and settling support" },
    ],
  },
  france: {
    name: "France",
    tagline: "Art, Elegance & Endless Possibilities",
    image: franceImg,
    description: "France, the world's most visited country, offers unparalleled cultural richness, excellent quality of life, and diverse career opportunities. From Paris's business districts to the tech hubs of Lyon and Toulouse, France welcomes skilled professionals from around the world.",
    whyChoose: [
      "World-class arts, culture, and cuisine",
      "Strong aerospace and luxury goods sectors",
      "Excellent public services",
      "Mediterranean and Alpine lifestyles",
      "Global business hub",
      "Quality education system",
    ],
    eligibility: [
      "Higher education degree",
      "Professional experience",
      "French language skills (varies)",
      "Valid passport",
      "Clean background",
      "Financial proof",
    ],
    benefits: [
      "Premium healthcare system",
      "35-hour work week culture",
      "Generous vacation days",
      "Family-friendly policies",
      "Cultural immersion",
      "EU mobility rights",
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate profile and goals" },
      { step: 2, title: "Preparation", description: "Gather and translate documents" },
      { step: 3, title: "Application", description: "Complete visa forms" },
      { step: 4, title: "Submission", description: "Embassy appointment" },
      { step: 5, title: "Approval", description: "Receive decision" },
      { step: 6, title: "Integration", description: "Arrival support in France" },
    ],
  },
  romania: {
    name: "Romania",
    tagline: "Hidden Treasures & Emerging Opportunities",
    image: romaniaImg,
    description: "Romania offers an exciting blend of medieval charm, natural beauty, and a rapidly growing economy. With competitive salaries in IT, low living costs, and EU membership benefits, Romania is becoming an increasingly popular destination for international professionals.",
    whyChoose: [
      "Fast-growing IT and tech sector",
      "Very affordable living costs",
      "Beautiful natural landscapes",
      "Rich cultural heritage",
      "EU membership benefits",
      "Friendly and welcoming people",
    ],
    eligibility: [
      "Educational qualifications",
      "Job offer or business plan",
      "Valid travel documents",
      "Health coverage",
      "Accommodation proof",
      "Financial means",
    ],
    benefits: [
      "Low cost of living",
      "Growing expat community",
      "Fast internet infrastructure",
      "EU rights and mobility",
      "Diverse landscapes",
      "Emerging startup scene",
    ],
    process: [
      { step: 1, title: "Consultation", description: "Initial assessment" },
      { step: 2, title: "Documentation", description: "Prepare paperwork" },
      { step: 3, title: "Application", description: "Submit visa request" },
      { step: 4, title: "Processing", description: "Follow up on status" },
      { step: 5, title: "Approval", description: "Collect visa" },
      { step: 6, title: "Arrival", description: "Settling support" },
    ],
  },
  azerbaijan: {
    name: "Azerbaijan",
    tagline: "Where East Meets West",
    image: germanyImg, // Using Germany image as placeholder
    description: "Azerbaijan, the Land of Fire, offers unique opportunities at the crossroads of Europe and Asia. With its booming oil and gas sector, growing tourism industry, and strategic location, Azerbaijan presents exciting prospects for adventurous professionals.",
    whyChoose: [
      "Strategic location between Europe and Asia",
      "Growing economy and infrastructure",
      "Rich cultural heritage",
      "Competitive tax environment",
      "Expanding tourism sector",
      "Unique blend of cultures",
    ],
    eligibility: [
      "Relevant qualifications",
      "Work permit (if employed)",
      "Valid passport",
      "Health insurance",
      "Invitation letter (if applicable)",
      "Financial documentation",
    ],
    benefits: [
      "Low income tax rates",
      "Growing business environment",
      "Unique cultural experience",
      "Modern infrastructure in Baku",
      "Gateway to Central Asia",
      "Affordable living",
    ],
    process: [
      { step: 1, title: "Assessment", description: "Review eligibility" },
      { step: 2, title: "Documentation", description: "Collect documents" },
      { step: 3, title: "Application", description: "Prepare submission" },
      { step: 4, title: "Processing", description: "Track application" },
      { step: 5, title: "Approval", description: "Receive visa" },
      { step: 6, title: "Travel", description: "Arrival assistance" },
    ],
  },
};

const CountryPage = () => {
  const { country } = useParams<{ country: string }>();
  const data = country ? countryData[country] : null;

  if (!data) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Country Not Found</h1>
            <Link to="/" className="text-gold hover:underline">Return to Home</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-end">
          <div className="absolute inset-0">
            <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay-hero" />
          </div>
          <div className="relative container-wide pb-16 pt-32">
            <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
              Destination
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              {data.name}
            </h1>
            <p className="text-primary-foreground/90 text-xl">{data.tagline}</p>
          </div>
        </section>

        {/* Description */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">{data.description}</p>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section-padding bg-champagne">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                  Why Choose
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Why {data.name}?
                </h2>
                <ul className="space-y-4">
                  {data.whyChoose.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-6 text-center shadow-card">
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="font-semibold text-foreground">Prime Location</p>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow-card">
                  <Briefcase className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="font-semibold text-foreground">Job Opportunities</p>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow-card">
                  <GraduationCap className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="font-semibold text-foreground">Quality Education</p>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow-card">
                  <Heart className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="font-semibold text-foreground">Quality of Life</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-widest mb-4 block">
                The Process
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                How We Help You Get to {data.name}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.process.map((step) => (
                <div key={step.step} className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-10 h-10 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container-narrow">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Move to {data.name}?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let our experts guide you through every step of your journey.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 group">
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default CountryPage;
