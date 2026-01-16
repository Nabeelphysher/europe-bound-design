import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import {
    ArrowRight, CheckCircle2, Globe, Award,
    User, Mail, Phone, Clock, Wallet, ShieldCheck, Star, Quote
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Import Images
import germanyImg from "@/assets/destination-germany.jpg";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import polandImg from "@/assets/destination-poland.jpg";
import czechImg from "@/assets/destination-czech.jpg";
import franceImg from "@/assets/france.jpg";
import romaniaImg from "@/assets/destination-romania.jpg";
import azerbaijanImg from "@/assets/a3.png";
import kazakhstanImg from "@/assets/a2 (1).png";
import armeniaImg from "@/assets/a4.png";
import netherlandsImg from "@/assets/destination-netherlands.png";
import georgiaImg from "@/assets/destination-georgia.png";
import kyrgyzstanImg from "@/assets/a1.png";
import uzbekistanImg from "@/assets/uzbekistan.jpg";

interface CountryData {
    title: string;
    name: string;
    tagline: string;
    image: string;
    description: string;
    stats: { price: string; duration: string; visa: string };
    whyChoose: { title: string; description: string }[];
    eligibility: string[];
    benefits: { title: string; description: string }[];
    process: { step: number; title: string; description: string }[];
    testimonials: { name: string; role: string; content: string; location: string }[];
    faqs: { question: string; answer: string }[];
}

const countryData: Record<string, CountryData> = {

    france: {
        title: "France Heritage & Romance",
        name: "France",
        tagline: "Art, Culture & Cuisine",
        image: franceImg,
        description: "France offers a perfect blend of romance, culture, and world-class experiences—from iconic landmarks in Paris to charming villages and stunning coastlines. With rich history, legendary cuisine, and timeless art, it’s a destination that never goes out of style.",
        stats: { price: "€1,250", duration: "6 Days", visa: "Schengen Visa" },
        whyChoose: [
            { title: "Eiffel Tower Visit", description: "Iconic landmark of Paris." },
            { title: "Louvre Museum", description: "Home to the Mona Lisa." },
            { title: "Palace of Versailles", description: "Royal opulence and gardens." },
            { title: "Seine River Cruise", description: "Romantic evening boat ride." },
            { title: "French Cuisine", description: "Gourmet dining experiences." },
            { title: "Riviera Beaches", description: "Sun and style in the south." }
        ],
        eligibility: ["Valid Passport", "Schengen Visa", "Travel Insurance", "Return Ticket", "Hotel Booking", "Funds Proof"],
        benefits: [
            { title: "Central Hotels", description: "Stay near major attractions." },
            { title: "Daily Breakfast", description: "Croissants and coffee included." },
            { title: "Museum Passes", description: "Skip-the-line entry." },
            { title: "Private Transfers", description: "Comfortable travel." },
            { title: "English Guide", description: "Expert local knowledge." },
            { title: "City Tours", description: "Guided walks in Paris." }
        ],
        process: [
            { step: 1, title: "Inquire", description: "Select dates." },
            { step: 2, title: "Plan", description: "Customize itinerary." },
            { step: 3, title: "Book", description: "Secure spot." },
            { step: 4, title: "Visa", description: "Application support." },
            { step: 5, title: "Fly", description: "Arrive in Paris." },
            { step: 6, title: "Enjoy", description: "Bon voyage!" }
        ],
        testimonials: [
            { name: "Sophie M.", role: "Couple", content: "Paris was a dream come true.", location: "Paris" },
            { name: "James L.", role: "History Buff", content: "Versailles is breathtaking.", location: "Versailles" }
        ],
        faqs: [
            { question: "Do I need a visa to visit France?", answer: "If you’re from a Schengen visa-free country, you can enter without a visa for short stays. Others need a Schengen tourist visa." },
            { question: "Is France safe for tourists?", answer: "Yes. France is generally safe for visitors, especially in major tourist areas. As in any big destination, basic precautions against pickpocketing are advised." },
            { question: "When is the best time to visit France?", answer: "The best time is April to June and September to October for pleasant weather, fewer crowds, and great sightseeing." }
        ]
    },
    azerbaijan: {
        title: "Azerbaijan - Land of Fire",
        name: "Azerbaijan",
        tagline: "Where East Meets West",
        image: azerbaijanImg,
        description: "Azerbaijan blends ancient heritage with modern flair—where Silk Road history meets futuristic Baku. From dramatic Caucasus landscapes to warm hospitality, it offers rich culture, unique cuisine, and great value for unforgettable travel experiences.",
        stats: { price: "$650", duration: "5 Days", visa: "E-Visa" },
        whyChoose: [
            { title: "Expert Local Knowledge", description: "Deep insights into local culture and hidden gems." },
            { title: "Tailor-Made Itineraries", description: "Custom travel plans designed for your pace." },
            { title: "Premium Comfort & Safety", description: "Handpicked 4-star hotels and private premium vehicles." },
            { title: "24/7 Dedicated Support", description: "Full assistance from visa to on-ground coordination." }
        ],
        eligibility: ["Valid Passport", "E-Visa (3 days)", "Flight Ticket", "Hotel Voucher", "Vaccine Cert (if any)", "Funds Proof"],
        benefits: [
            { title: "Baku & Shahdag Stay", description: "4 nights premium stay with daily breakfast." },
            { title: "Private Sedan Car", description: "Dedicated private vehicle for all your travels." },
            { title: "Scenic Road Trips", description: "Curated sightseeing and beautiful road trip experiences." },
            { title: "Personal Assistance", description: "Dedicated support for a smooth travel experience." },
            { title: "English Speaking Driver", description: "Professional drivers for easy and clear communication." },
            { title: "Daily Breakfast", description: "Delicious breakfast provided at the hotel every morning." }
        ],
        process: [
            { step: 1, title: "Select", description: "Choose 4 or 5 day pack." },
            { step: 2, title: "Visa", description: "Apply online (easy)." },
            { step: 3, title: "Book", description: "Confirm flights." },
            { step: 4, title: "Pay", description: "Secure booking." },
            { step: 5, title: "Fly", description: "Arrival in Baku." },
            { step: 6, title: "Tour", description: "Airport pickup." }
        ],
        testimonials: [
            { name: "Ahmed K.", role: "Tourist", content: "Baku is dazzling at night. Great service.", location: "Baku" },
            { name: "Sarah L.", role: "Traveler", content: "Very clean city and friendly people.", location: "Gabala" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Azerbaijan?", answer: "Yes, most travelers can easily apply for an e-visa online before travel. The process is quick and simple." },
            { question: "Is Azerbaijan safe for tourists?", answer: "Yes. Azerbaijan is considered a safe country for visitors, especially in major cities like Baku, with friendly locals and good public security." },
            { question: "What is the best time to visit Azerbaijan?", answer: "The best time is April to June and September to October when the weather is pleasant for sightseeing and outdoor activities." }
        ]
    },
    kazakhstan: {
        title: "Kazakhstan Nature Tour",
        name: "Kazakhstan",
        tagline: "Mountains, Lakes & Canyons",
        image: kazakhstanImg,
        description: "Kazakhstan offers vast natural beauty and modern cities in one journey—from the endless steppes and alpine lakes to the futuristic skyline of Astana. Rich nomadic culture, warm hospitality, and great value make it a unique destination for travelers seeking something truly different.",
        stats: { price: "$850", duration: "5 Days", visa: "Visa Free/E-Visa" },
        whyChoose: [
            { title: "Expert Local Guides", description: "Learn more with our professional English-speaking guides." },
            { title: "Private & Premium Travel", description: "Travel in comfort with private sedan vehicles." },
            { title: "Family-Friendly Planning", description: "Itineraries designed for both adults and children." },
            { title: "All-Inclusive Entry", description: "No hidden costs; all entry tickets pre-arranged." }
        ],
        eligibility: ["Valid Passport", "Visa Check", "Return Ticket", "Hotel Booking", "Funds", "Insurance"],
        benefits: [
            { title: "4-Star Hotel Stay", description: "Stay at Ozen Palace with daily breakfast." },
            { title: "Private Sedan Vehicle", description: "Dedicated car for all transfers and tours." },
            { title: "All Entry Tickets", description: "Entry to all mentioned parks and attractions." },
            { title: "Full Cable Car Access", description: "Includes Shymbulak and Kok Tobe cable cars." },
            { title: "Guided Nature Tours", description: "Full-day tours to canyons, lakes, and waterfalls." },
            { title: "Hassle-Free Logistics", description: "Covers all tolls, parking, and eco-charges." }
        ],
        process: [
            { step: 1, title: "Inquire", description: "Check seasonality." },
            { step: 2, title: "Plan", description: "City or Nature focus?" },
            { step: 3, title: "Book", description: "Reserve dates." },
            { step: 4, title: "Visa", description: "If required." },
            { step: 5, title: "Fly", description: "Almaty Airport." },
            { step: 6, title: "Explore", description: "Start adventure." }
        ],
        testimonials: [
            { name: "David R.", role: "Hiker", content: "The lakes are unreal. Amazing trip.", location: "Almaty" },
            { name: "Maria S.", role: "Family", content: "Shymbulak was great for kids.", location: "Astana" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Kazakhstan?", answer: "Many nationalities can enter visa-free for short stays. Others can apply online for an e-visa. Always verify your eligibility before travel." },
            { question: "Is Kazakhstan safe for tourists?", answer: "Yes. Major cities like Almaty and Astana are generally safe, with good infrastructure and helpful locals." },
            { question: "When is the best time to visit Kazakhstan?", answer: "The best time is May to September for pleasant weather, outdoor activities, and sightseeing." }
        ]
    },
    armenia: {
        title: "Armenia Cultural Tour",
        name: "Armenia",
        tagline: "The First Christian Nation",
        image: armeniaImg,
        description: "Armenia is a land of timeless history and heartfelt hospitality, where ancient monasteries meet breathtaking mountain landscapes. With rich culture, soulful cuisine, and deep traditions, it offers an authentic and meaningful travel experience beyond the usual tourist trails.",
        stats: { price: "$700", duration: "5 Days", visa: "Visa on Arrival" },
        whyChoose: [
            { title: "Yerevan City Tour", description: "Visit the pink city." },
            { title: "Lake Sevan", description: "The jewel of Armenia." },
            { title: "Garni Temple", description: "Ancient Hellenistic temple." },
            { title: "Geghard Monastery", description: "Cave monastery architecture." },
            { title: "Brandy Tasting", description: "Legendary Armenian spirits." },
            { title: "Cable Car Ride", description: "World's longest cable car." }
        ],
        eligibility: ["Valid Passport", "Visa on Arrival", "Ticket", "Accommodation", "Funds", "Travel Plan"],
        benefits: [
            { title: "Central Hotel", description: "Stay near major attractions." },
            { title: "Breakfast Daily", description: "Complimentary morning meal." },
            { title: "Private Tour", description: "Exclusive experience for your group." },
            { title: "Tasting Sessions", description: "Sample local delicacies." },
            { title: "Museum Tickets", description: "Entry to all sites included." },
            { title: "Airport Transfers", description: "Pick-up and drop-off provided." }
        ],
        process: [
            { step: 1, title: "Choose", description: "Select package." },
            { step: 2, title: "Custom", description: "Add day trips." },
            { step: 3, title: "Book", description: "Pay advance." },
            { step: 4, title: "Fly", description: "Direct flights available." },
            { step: 5, title: "Visa", description: "Get at airport." },
            { step: 6, title: "Tour", description: "Meet driver." }
        ],
        testimonials: [
            { name: "Elena P.", role: "Tourist", content: "The monasteries are magnificent.", location: "Yerevan" },
            { name: "Mark T.", role: "Foodie", content: "Best bread and wine ever.", location: "Dilijan" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Armenia?", answer: "Many travelers can enter visa-free or get a visa on arrival / e-visa depending on nationality. Check eligibility before you go." },
            { question: "Is Armenia safe for tourists?", answer: "Yes. Armenia is considered very safe, with friendly locals and low crime rates, especially in Yerevan and tourist areas." },
            { question: "When is the best time to visit Armenia?", answer: "The best months are May to October for pleasant weather, sightseeing, and mountain travel." }
        ]
    },
    kyrgyzstan: {
        title: "Kyrgyzstan Exclusive 5-Day Tour",
        name: "Kyrgyzstan",
        tagline: "4 Nights / 5 Days - The Nomadic Spirit",
        image: kyrgyzstanImg,
        description: "Kyrgyzstan is a paradise for nature lovers, offering dramatic mountains, crystal-clear alpine lakes, and vast open landscapes. With its strong nomadic culture, warm hospitality, and peaceful atmosphere, it’s perfect for travelers seeking adventure and authenticity off the beaten path.",
        stats: { price: "$1,210", duration: "5 Days", visa: "E-Visa" },
        whyChoose: [
            { title: "Expert Multi-lingual Guides", description: "Professional Arabic or English-speaking drivers for your trip." },
            { title: "Private Group Travel", description: "Exclusive travel in a private minivan for your group." },
            { title: "Curated Alpine Tours", description: "Handpicked tours to Chunkhurchak, Ala-Archa, and Alameddin." },
            { title: "Hassle-Free Planning", description: "Full-day tours with pre-arranged transfers and hotel stays." }
        ],
        eligibility: [
            "Travel Date: 02 NOV 2025",
            "Group Size: 5 PAX",
            "Valid Passport",
            "E-Visa Confirmation",
            "Standard DBL + Triple Room",
            "Return Ticket"
        ],
        benefits: [
            { title: "Premium Hotel Stay", description: "Comfortable hotel stays with early check-in options." },
            { title: "Private Minivan", description: "Private minivan for all your sightseeing and transfers." },
            { title: "Airport Transfers", description: "Private pick-up and drop-off at the airport included." },
            { title: "Daily Breakfast", description: "Delicious breakfast provided at the hotel every morning." },
            { title: "Professional Driver", description: "Expert Arabic or English-speaking driver for all tours." },
            { title: "Guided Day Tours", description: "Scheduled tours daily from 10:00 AM to 6:00 PM." }
        ],
        process: [
            { step: 1, title: "Day 1", description: "Arrival & Transfer to Bishkek Hotel." },
            { step: 2, title: "Day 2", description: "Chunkhurchank Tour (10 AM - 6 PM)." },
            { step: 3, title: "Day 3", description: "Ala-Archa National Park Tour." },
            { step: 4, title: "Day 4", description: "Alameddin Gorge Tour." },
            { step: 5, title: "Day 5", description: "Transfer to Airport for Departure." },
            { step: 6, title: "Book", description: "Check availability now." }
        ],
        testimonials: [
            { name: "Ahmed A.", role: "Group Leader", content: "Great tailored experience for our group.", location: "UAE" },
            { name: "Sarah K.", role: "Traveler", content: "The driver was excellent and the mountains stunning.", location: "UK" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Kyrgyzstan?", answer: "Many nationalities can enter visa-free for 30–60 days. Others can apply for an e-visa online. Always confirm based on your passport." },
            { question: "Is Kyrgyzstan safe for tourists?", answer: "Yes. Kyrgyzstan is generally safe and peaceful, especially in Bishkek and popular tourist regions. Locals are known for warm hospitality." },
            { question: "When is the best time to visit Kyrgyzstan?", answer: "The best time is June to September for trekking, lake visits, and mountain travel due to good weather conditions." }
        ]
    },
    netherlands: {
        title: "Netherlands Classic Tour",
        name: "Netherlands",
        tagline: "Windmills, Canals & Culture",
        image: netherlandsImg,
        description: "The Netherlands blends charming canals, historic towns, and cutting-edge design into one easy-to-explore destination. From Amsterdam’s culture to peaceful countryside windmills, it offers rich experiences, excellent transport, and a welcoming atmosphere for every traveler.",
        stats: { price: "€1,100", duration: "5 Days", visa: "Schengen Visa" },
        whyChoose: [
            { title: "Amsterdam Canal Cruise", description: "See the city from water." },
            { title: "Zaanse Schans Windmills", description: "Historic Dutch countryside." },
            { title: "Van Gogh Museum", description: "World-class art collection." },
            { title: "Keukenhof Gardens", description: "Millions of blooming tulips." },
            { title: "Cheese Factory Visit", description: "Taste authentic Dutch gouda." },
            { title: "Volendam Village", description: "Traditional fishing village charm." }
        ],
        eligibility: ["Valid Passport", "Schengen Visa", "Travel Insurance", "Return Ticket", "Hotel Booking", "Funds"],
        benefits: [
            { title: "Centrally Located Hotel", description: "Convenient stay options." },
            { title: "Breakfast Daily", description: "Start day with good food." },
            { title: "Public Transport Card", description: "Easy city travel." },
            { title: "Museum Entries", description: "Skip the line tickets." },
            { title: "Canal Cruise Ticket", description: "Experience the city waters." },
            { title: "Airport Transfers", description: "Hassle-free commute." }
        ],
        process: [
            { step: 1, title: "Dates", description: "Pick your season." },
            { step: 2, title: "Package", description: "Select hotel class." },
            { step: 3, title: "Book", description: "Confirm details." },
            { step: 4, title: "Visa", description: "Schengen process." },
            { step: 5, title: "Arrive", description: "Schiphol pick-up." },
            { step: 6, title: "Tour", description: "Explore the Dutch way." }
        ],
        testimonials: [
            { name: "Suresh K.", role: "Tourist", content: "Amsterdam is beautiful. The cruise was highlight.", location: "Amsterdam" },
            { name: "Priya M.", role: "Traveler", content: "Tulips were amazing.", location: "Lisse" }
        ],
        faqs: [
            { question: "Do I need a visa to visit the Netherlands?", answer: "If you’re from a Schengen visa-free country, you can enter for short stays without a visa. Others need a Schengen tourist visa." },
            { question: "Is the Netherlands safe for tourists?", answer: "Yes. It’s one of Europe’s safest destinations, with excellent public transport and well-organized tourist services." },
            { question: "When is the best time to visit the Netherlands?", answer: "The best time is April to September — spring for tulips, summer for festivals and pleasant weather." }
        ]
    },
    georgia: {
        title: "Georgia - Jewel of Caucasus",
        name: "Georgia",
        tagline: "Wine, Mountains & History",
        image: georgiaImg,
        description: "Georgia is where ancient traditions meet stunning natural beauty—from medieval towns and mountain valleys to world-famous wine culture. Warm hospitality, rich history, and incredible food make it a soulful destination for travelers seeking authenticity and adventure.",
        stats: { price: "$600", duration: "5 Days", visa: "Visa on Arrival" },
        whyChoose: [
            { title: "Expert Local Insights", description: "Discover hidden gems in Tbilisi and Kazbegi with our knowledgeable guides." },
            { title: "Handpicked Stays", description: "Enjoy unique accommodations, from premium city hotels to cozy mountain cottages." },
            { title: "Seamless Adventures", description: "Experience iconic sites like the Dashbashi Glass Bridge with all logistics handled." },
            { title: "Reliable Support", description: "Dedicated assistance throughout your journey for a stress-free travel experience." }
        ],
        eligibility: ["Valid Passport", "Visa Check", "Ticket", "Hotel", "Funds", "Insurance"],
        benefits: [
            { title: "Premium Accommodations", description: "Comfortable stays in top-rated hotels and cottages." },
            { title: "Private Guided Tours", description: "Full-day tours to Gudauri, Kazbegi, and Dashbashi." },
            { title: "Airport Transfers", description: "Private airport pick-up and drop-off included." },
            { title: "Scenic Mountain Travel", description: "Private transport along the Georgian Military Highway." },
            { title: "Entry Fees & Activities", description: "Includes entry to Dashbashi Canyon and glass bridge." },
            { title: "Daily Breakfast", description: "Delicious breakfast provided every morning." }
        ],
        process: [
            { step: 1, title: "Select", description: "Choose tour type." },
            { step: 2, title: "Confirm", description: "Dates & Pax." },
            { step: 3, title: "Book", description: "Advance payment." },
            { step: 4, title: "Fly", description: "Tbilisi arrival." },
            { step: 5, title: "Visa", description: "Immigration check." },
            { step: 6, title: "Enjoy", description: "Start exploring." }
        ],
        testimonials: [
            { name: "Chris B.", role: "Tourist", content: "The food is addictive. Loved the mountains.", location: "Tbilisi" },
            { name: "Anna K.", role: "Photographer", content: "Kazbegi is picture perfect.", location: "Kazbegi" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Georgia?", answer: "Many nationalities can enter visa-free for up to 1 year. Others can apply for an e-visa online. Always check your eligibility before travel." },
            { question: "Is Georgia safe for tourists?", answer: "Yes. Georgia is considered very safe, especially in cities like Tbilisi and Batumi, with friendly locals and good tourist support." },
            { question: "When is the best time to visit Georgia?", answer: "The best time is May to October — perfect for sightseeing, mountain trips, and outdoor activities." }
        ]
    },
    uzbekistan: {
        title: "Uzbekistan - Silk Road Jewel",
        name: "Uzbekistan",
        tagline: "Samarkand, Bukhara & Tashkent",
        image: uzbekistanImg,
        description: "Uzbekistan is the heart of the Silk Road, home to breathtaking cities like Samarkand and Bukhara filled with timeless architecture and rich history. With vibrant culture, warm hospitality, and unforgettable flavors, it offers a journey into the soul of Central Asia.",
        stats: { price: "$900", duration: "7 Days", visa: "E-Visa" },
        whyChoose: [
            { title: "All-Inclusive Transport", description: "Private cars and Samarkand train tickets provided." },
            { title: "Expert Local Guides", description: "Professional English-speaking guides for every tour." },
            { title: "4-Star Comfort", description: "Premium 3-night hotel stays with breakfast included." },
            { title: "Diverse Itinerary", description: "A perfect mix of ancient history and mountain nature." }
        ],
        eligibility: ["Valid Passport", "E-Visa", "Return Flight", "Hotel Booking", "Funds", "Travel Insurance"],
        benefits: [
            { title: "4-Star Hotel", description: "3 nights stay with daily breakfast." },
            { title: "Private Car", description: "All ground transfers and city tours." },
            { title: "Express Train", description: "Round-trip tickets to Samarkand." },
            { title: "Pro Guide", description: "Dedicated English-speaking guide/driver." },
            { title: "Mountain Tour", description: "Full-day excursion to Charvak Lake." },
            { title: "Daily Water", description: "Complimentary bottled water during tours." }
        ],
        process: [
            { step: 1, title: "Plan", description: "Choose cities." },
            { step: 2, title: "Visa", description: "Apply online." },
            { step: 3, title: "Book", description: "Reserve package." },
            { step: 4, title: "Fly", description: "Tashkent arrival." },
            { step: 5, title: "Train", description: "Samarkand express." },
            { step: 6, title: "Explore", description: "Discover history." }
        ],
        testimonials: [
            { name: "Kevin L.", role: "Historian", content: "Samarkand exceeded expectations.", location: "Samarkand" },
            { name: "Fatima R.", role: "Traveler", content: "Beautiful architecture.", location: "Bukhara" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Uzbekistan?", answer: "Many nationalities can enter visa-free for short stays. Others can apply for a quick e-visa online. Always check current rules for your passport." },
            { question: "Is Uzbekistan safe for tourists?", answer: "Yes. Uzbekistan is considered very safe, especially in tourist cities like Tashkent, Samarkand, and Bukhara, with welcoming locals." },
            { question: "When is the best time to visit Uzbekistan?", answer: "The best time is April–May and September–October when the weather is comfortable for sightseeing and travel." }
        ]
    }
};

const CountryPage = () => {
    const { country } = useParams();
    const [data, setData] = useState<CountryData | null>(null);
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (country && countryData[country]) {
            setData(countryData[country]);
        } else {
            setData(null);
        }
    }, [country]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Country data not found.</p>
                <Link to="/" className="ml-4 text-primary underline">Go Home</Link>
            </div>
        );
    }

    return (
        <>
            <Header />
            <main>
                {/* --- 1. Immersive Hero Section (Banner) --- */}
                <section className="relative h-[60vh] md:h-[85vh] min-h-[500px] md:min-h-[600px] flex items-end justify-center overflow-hidden">
                    {/* Background Image with optimized scale annimation */}
                    <div className="absolute inset-0 z-0 select-none">
                        <img
                            src={data.image}
                            alt={`${data.name} Landscape`}
                            className="w-full h-full object-cover scale-110 animate-pulse-gentle"
                            style={{ animationDuration: '30s' }}
                        />
                        {/* Modern Gradient Overlays - Darkened for White Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-70" />
                        <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                    </div>

                    <div className="container-wide relative z-10 w-full mb-16 md:mb-24 px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Animated Eyebrow */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 animate-fade-in-up">
                                <Globe className="w-4 h-4 text-gold" />
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">{data.tagline}</span>
                            </div>

                            {/* Main Title */}
                            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-100 drop-shadow-2xl px-2 max-w-[95%] mx-auto">
                                {data.title}
                            </h1>

                            {/* Key Stats Bar - Compact Mobile */}
                            <div className="inline-flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] md:rounded-full py-4 px-6 md:px-10 mt-6 md:mt-10 animate-fade-in-up animation-delay-200 shadow-2xl hover:bg-black/50 transition-all duration-500 max-w-full">

                                <div className="flex items-center gap-3 md:gap-4 text-left group min-w-[120px]">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 shrink-0">
                                        <Clock className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium mb-0.5">Duration</p>
                                        <p className="text-white font-bold text-sm md:text-lg whitespace-nowrap">{data.stats.duration}</p>
                                    </div>
                                </div>

                                <div className="w-px h-8 md:h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden sm:block" />

                                <div className="flex items-center gap-3 md:gap-4 text-left group min-w-[120px]">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shrink-0">
                                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium mb-0.5">Visa Type</p>
                                        <p className="text-white font-bold text-sm md:text-lg whitespace-nowrap">{data.stats.visa}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
                        <ArrowRight className="w-6 h-6 text-white/50 rotate-90" />
                    </div>
                </section>

                {/* --- 2. Overview & Why Choose (Why choose this country) - Premium Redesign --- */}
                <section className="py-10 md:py-20 bg-white relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.4]" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/50 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="container-wide relative z-10 px-4 sm:px-6">
                        <RevealOnScroll animation="fade-up">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                                {/* Content Column */}
                                <div className="order-2 lg:order-1 relative">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-6">
                                        <Globe className="w-3.5 h-3.5" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Tour Overview</span>
                                    </div>

                                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary leading-[1.1]">
                                        Experience the <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-600 italic">Unforgettable</span> in {data.name}
                                    </h2>

                                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl border-l-2 border-gold/30 pl-6">
                                        {data.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                        {/* Premium Button Match */}
                                        <a
                                            href="#booking-form"
                                            className="group relative px-8 py-4 bg-[#0B1E3F] text-white rounded-xl overflow-hidden shadow-[0_10px_20px_-5px_rgba(11,30,63,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(11,30,63,0.4)] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
                                        >
                                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                            <span className="font-bold relative z-10">Check Availability</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 text-gold" />
                                        </a>

                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="max-w-[150px] leading-tight">Best Price Guarantee & Verified Tours</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Cards Grid - Elegant Layout */}
                                <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-5">
                                    {data.whyChoose.slice(0, 4).map((reason, i) => (
                                        <div
                                            key={i}
                                            className={`group p-8 rounded-[2rem] border transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col justify-between h-full relative overflow-hidden
                                                ${i === 1 || i === 2 ? 'bg-[#0B1E3F] text-white border-transparent' : 'bg-white border-gray-100 hover:border-gold/30'}
                                                ${i === 1 ? 'sm:translate-y-8' : ''}
                                                ${i === 2 ? 'sm:-translate-y-8' : ''}
                                            `}
                                        >
                                            {/* Decorative Corner for dark cards */}
                                            {(i === 1 || i === 2) && (
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-[4rem] pointer-events-none" />
                                            )}

                                            <div className="mb-4 relative z-10">
                                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-sm
                                                    ${i === 1 || i === 2 ? 'bg-white/10 text-gold backdrop-blur-sm' : 'bg-gold/10 text-gold'}
                                                `}>
                                                    <Award className="w-7 h-7" />
                                                </div>
                                                <h3 className={`font-heading text-xl font-bold mb-3 ${i === 1 || i === 2 ? 'text-white' : 'text-primary'}`}>{reason.title}</h3>
                                                <p className={`text-sm leading-relaxed ${i === 1 || i === 2 ? 'text-white/70' : 'text-muted-foreground'}`}>
                                                    {reason.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </RevealOnScroll>
                    </div>
                </section>

                {/* --- 3. Eligibility (Travel Requirements) --- */}
                <section className="py-10 md:py-16 bg-slate-50/50">
                    <div className="container-wide px-4 sm:px-6">
                        <RevealOnScroll animation="fade-up" delay={100}>
                            <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16 relative overflow-hidden">
                                {/* Decorative Background */}
                                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-8 h-1 bg-gold rounded-full" />
                                            <span className="text-gold font-bold text-xs uppercase tracking-widest">Essential Documents</span>
                                        </div>
                                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
                                            Travel <span className="text-gold italic">Requirements</span>
                                        </h2>
                                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
                                            Ensure a smooth journey by preparing these necessary documents for {data.title}.
                                            Our team provides full visa assistance and guidance.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                            {/* Primary Action - Premium Dark with Shine */}
                                            <a
                                                href="#booking-form"
                                                className="group relative px-8 py-4 bg-[#0B1E3F] text-white rounded-xl overflow-hidden shadow-[0_10px_20px_-5px_rgba(11,30,63,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(11,30,63,0.4)] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
                                            >
                                                {/* Shine Effect */}
                                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                                <span className="font-bold relative z-10">Start Booking</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 text-gold" />
                                            </a>

                                            {/* Secondary Action - Elegant Outline */}
                                            <Link
                                                to="/contact"
                                                className="group px-8 py-4 bg-white border border-gray-200 text-[#0B1E3F] rounded-xl font-bold hover:border-gold hover:bg-gold/5 transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md w-full sm:w-auto text-center"
                                            >
                                                <span>Talk to an Expert</span>
                                                <div className="hidden xs:flex w-8 h-8 rounded-full bg-gray-100 items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {data.eligibility.map((item, i) => (
                                            <div
                                                key={i}
                                                className="group flex items-center gap-4 bg-gray-50 hover:bg-white p-5 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                                </div>
                                                <span className="font-semibold text-primary group-hover:text-gold transition-colors">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </section>

                {/* --- 4. Process Timeline (Snake/Wave) - Premium Redesign --- */}
                <section className="py-24 md:py-32 bg-[#FDFCF8] relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(#FF6B00_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03]" />

                    <div className="container-wide px-4 sm:px-6 relative z-10">
                        <RevealOnScroll animation="fade-up">
                            <div className="text-center mb-20 md:mb-32">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 mb-4">
                                    <span className="text-xs font-bold uppercase tracking-widest">The Journey</span>
                                </div>
                                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                                    Seamless <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-500">Booking</span> Process
                                </h2>
                            </div>

                            {/* --- Desktop View: Snake Wave --- */}
                            <div className="hidden lg:block relative w-full h-[500px] max-w-7xl mx-auto">
                                {/* SVG Wave Line */}
                                <svg className="absolute top-0 left-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#0B1E3F" stopOpacity="0.1" />
                                            <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.6" />
                                            <stop offset="100%" stopColor="#0B1E3F" stopOpacity="0.1" />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    {/* The Path - Smooth Sine Wave passing through the nodes */}
                                    {/* Nodes approx at: x=5%, 23%, 41%, 59%, 77%, 95%. y alternating 80 (top) and 320 (bottom) */}
                                    <path
                                        d="M50,150 C150,150 180,350 280,350 S 410,150 510,150 S 640,350 740,350 S 870,150 970,150"
                                        fill="none"
                                        stroke="url(#waveGradient)"
                                        strokeWidth="4"
                                        vectorEffect="non-scaling-stroke"
                                        strokeDasharray="12 8"
                                        className="animate-pulse-slow"
                                        transform="scale(1.2 1)"
                                        style={{ transformOrigin: 'center' }} // Adjust scale for mapping
                                    />
                                    {/* Note: Vector path is approximate relative to 1000x400 viewbox concept mapped to %. Using CSS lines logic below is safer for responsiveness, but SVG allows curve. 
                                        Let's switch to a simpler Bezier Curve rendering that matches the absolute positions below.
                                        Points:
                                        1: 8% (Top)
                                        2: 25% (Bottom)
                                        3: 42% (Top)
                                        4: 59% (Bottom)
                                        5: 75% (Top)
                                        6: 92% (Bottom)
                                    */}
                                    <path
                                        d="M80,120 C 150,120, 180,380, 250,380 S 350,120, 420,120 S 520,380, 590,380 S 680,120, 750,120 S 850,380, 920,380"
                                        fill="none"
                                        stroke="url(#waveGradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        vectorEffect="non-scaling-stroke"
                                        // We basically stretch this SVG to fit container
                                        transform-origin="center"
                                    />
                                </svg>

                                {data.process.map((step, i) => {
                                    const isTop = i % 2 === 0; // 0, 2, 4 -> Top
                                    const leftPos = (i * 17) + 8; // Spread out: 8%, 25%, 42%, 59%, 76%, 93%

                                    return (
                                        <div
                                            key={i}
                                            className="absolute w-64 group"
                                            style={{
                                                left: `${leftPos}%`,
                                                top: isTop ? '10%' : '60%', // Top vs Bottom Row
                                                transform: 'translateX(-50%)'
                                            }}
                                        >
                                            <div className={`flex flex-col items-center text-center ${isTop ? 'flex-col' : 'flex-col-reverse'}`}>

                                                {/* Node Point */}
                                                <div className={`relative z-10 w-16 h-16 rounded-full bg-white border-4 border-[#FDFCF8] shadow-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-gold ${isTop ? 'mb-6' : 'mt-6'}`}>
                                                    <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-0 group-hover:opacity-100" />
                                                    <span className="font-heading font-bold text-xl text-primary group-hover:text-gold">{i + 1}</span>
                                                </div>

                                                {/* Content Card */}
                                                <div className={`relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl hover:border-gold/30 transition-all duration-300 ${isTop ? '' : ''}`}>
                                                    <h3 className="font-heading text-lg font-bold text-primary mb-2">{step.title}</h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                                                    {/* Arrow Pointer */}
                                                    <div
                                                        className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45 
                                                        ${isTop ? '-bottom-2' : '-top-2 border-t border-l border-r-0 border-b-0'}`}
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* --- Mobile View: Vertical Timeline --- */}
                            <div className="lg:hidden relative">
                                {/* Vertical Line */}
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-gold/50 to-primary/10" />

                                <div className="space-y-12">
                                    {data.process.map((step, i) => (
                                        <div key={i} className="relative flex gap-8">
                                            {/* Node */}
                                            <div className="sticky top-32 shrink-0 w-16 h-16 rounded-full bg-white border-4 border-[#FDFCF8] shadow-lg flex items-center justify-center z-10">
                                                <span className="font-heading font-bold text-xl text-primary">{i + 1}</span>
                                            </div>

                                            {/* Content */}
                                            <div className="pt-2">
                                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                                    <h3 className="font-heading text-xl font-bold text-primary mb-2">{step.title}</h3>
                                                    <p className="text-muted-foreground">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </RevealOnScroll>
                    </div>
                </section>

                {/* --- 4.5. Benefits (What's Included) --- */}
                <section className="py-24 bg-slate-50/50 relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-40 mx-auto" />
                    <div className="container-wide px-4 sm:px-6 relative z-10">
                        <RevealOnScroll animation="scale-up" delay={200}>
                            <div className="text-center mb-16">
                                <span className="text-gold font-bold text-sm uppercase tracking-widest mb-3 block">Value & Transparency</span>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">What's Included</h2>
                                <div className="w-24 h-1 bg-gold/30 mx-auto rounded-full mb-6" />
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    We believe in complete transparency. Your {data.name} package includes everything you need for a seamless experience.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                                {data.benefits.map((benefit, i) => (
                                    <div
                                        key={i}
                                        className="group flex flex-col sm:flex-row items-start gap-5 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gold/0 group-hover:bg-gold transition-colors duration-300" />

                                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-gold transition-colors">{benefit.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </section>



                {/* --- 4.6 Inquiry Form Section --- */}
                <section className="py-24 bg-slate-50 relative overflow-hidden" id="booking-form">
                    <div className="absolute left-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                    <div className="container-wide px-4 sm:px-6 relative z-10">
                        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
                            <div className="grid md:grid-cols-5 h-full">
                                {/* Form Side */}
                                <div className="md:col-span-3 p-8 md:p-12">
                                    <div className="mb-8">
                                        <h3 className="font-heading text-3xl font-bold text-primary mb-2">Start Your Journey</h3>
                                        <p className="text-muted-foreground">Fill in the details below to get a custom quote for {data.name}.</p>
                                    </div>
                                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast({ title: "Inquiry Sent!", description: "We will contact you shortly." }); }}>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Name</label>
                                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Phone</label>
                                                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Email</label>
                                            <input type="email" placeholder="hello@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Travel Date</label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full px-4 py-3 h-[50px] rounded-xl bg-gray-50 border border-gray-200 text-left font-normal justify-start hover:bg-gray-100 hover:text-black shadow-none",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                            className="rounded-xl border shadow-xl"
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Travelers</label>
                                                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all">
                                                    <option>1 Person</option>
                                                    <option>Couple (2)</option>
                                                    <option>Family (3-5)</option>
                                                    <option>Group (6+)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full btn-primary py-4 text-lg mt-4 shadow-lg shadow-primary/20 hover:scale-[1.02]">
                                            Request Detailed Itinerary
                                        </button>
                                    </form>
                                </div>
                                {/* Visual Side */}
                                <div className="md:col-span-2 bg-[#0B1120] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold mb-6 text-gold">Why Book With Us?</h4>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">Best Price Guarantee</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">24/7 Expert Support</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">Tailored Itineraries</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-12 relative z-10">
                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Need Help?</p>
                                        <p className="text-2xl font-bold text-white">+91 85920 04857</p>
                                        <p className="text-white/60 text-sm">sales@europecalling.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 6. FAQ Section --- */}
                <section className="py-24 bg-white">
                    <div className="container-wide px-4 sm:px-6 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
                            <p className="text-muted-foreground">Everything you need to know about visiting {data.name}.</p>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            {data.faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50">
                                    <AccordionTrigger className="text-left font-bold text-lg hover:text-gold transition-colors py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* --- 7. Call to Action --- */}
                <section id="inquire" className="py-24 bg-primary text-secondary relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                    <div className="container-wide px-4 sm:px-6 text-center relative z-10">
                        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-white">
                            Ready to Visit {data.name}?
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                            Book your {data.stats.duration} tour now. Spots are filling up fast for the upcoming season.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-gold text-primary font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-xl shadow-gold/20">
                                Book This Tour
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors">
                                Download Itinerary
                            </Link>
                        </div>
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
