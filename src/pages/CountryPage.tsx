import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { DestinationBanner } from "@/components/country/DestinationBanner";
import { CountryHero } from "@/components/country/CountryHero";
import { RoadmapSection } from "@/components/country/RoadmapSection";
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
import uzbekistanCityImg from "@/assets/de (1).jpg";
import uzbekistanSamarkandImg from "@/assets/view-barcelona-from-palau-nacional-cloudy-sky-spain (1).jpg";
import uzbekistanTrainImg from "@/assets/beautiful-czech-passenger-train-with-carriages (1).jpg";
import uzbekistanBukharaImg from "@/assets/modern-arabic-style-building-blue-sky (1).jpg";
import DepartureImg from "@/assets/full-shot-couple-walking-with-baggage (1).jpg";
import russiaImg from "@/assets/russia.jpg";
import azerbaijanBakuImg from "@/assets/background-chinese-illumination-ancient-china (1).jpg";
import azerbaijanShahadagImg from "@/assets/64 (1).jpg";
import azerbaijanQubaImg from "@/assets/5c (1).jpg";
import azerbaijanShakiImg from "@/assets/shaki (1).jpg";
import azerbaijanAbsheronImg from "@/assets/towers-apsheron (1).jpg";
import azerbaijanGabalaImg from "@/assets/gabala (1).jpg";
import azerbaijanMountainImg from "@/assets/mountain.jpg";
import kazakhstanAlmatyImg from "@/assets/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan (1).jpg";
import kazakhstanShymbulak from "@/assets/b5 (1).jpg";
import kazakhstanCanyonImg from "@/assets/image1 (1).jpg";
import kazakhstanMoonCanyonImg from "@/assets/getlstd-property-photo (1).jpg";
import kazakhstanKokImg from "@/assets/Kok-Tobe-Mountain-Almaty (1).jpg";
import kazakhstanAlmarasanImg from "@/assets/images (1).jpg";
import kyrgyzstanHotelImg from "@/assets/images (2) (1).jpg";
import kyrgyzstanChunkImg from "@/assets/chunkurchak-valley-is (1).jpg";
import kyrgyzstanAlarchaImg from "@/assets/fa (1).jpg";
import georgiaTbilisiImg from "@/assets/Untitled design (47).jpg";
import georgiaGudauriImg from "@/assets/e9 (1).jpg";
import georgiaKazbegiImg from "@/assets/dd (1).jpg";
import georgiaGoriImg from "@/assets/uflistsikhe_w_h.jpg";
import georgiaKutaisiImg from "@/assets/kutaisi-georgia-travel-photo-20240912141135261-main-image (1).jpg";
import georgiaBakurianiImg from "@/assets/a0 (1).jpg";
import russiaPetersburgImg from "@/assets/Petersburg.jpg";
import russiaHermitagemuseumImg from "@/assets/Hermitage Museum.jpg";
import russiaPeterhofGrandPalaceImg from "@/assets/PeterhofGrandPalace.jpg";
import russiaPetersburgCityImg from "@/assets/st-petersburg-gezi-rehberi (1).jpg";
import russiaPetersburgHiddenImg from "@/assets/1e_edited (1).jpg";
import russiaPetersburgCapitalImg from "@/assets/St-Petersburg-2.1 (1).jpg";


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
    itinerary?: { day: number; title: string; description?: string; image?: string }[];
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
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paris",
                description: "Touch down in the City of Light. Private transfer to your central hotel. Evening free to explore the Champs-Élysées.",
                image: franceImg
            },
            {
                day: 2,
                title: "Classic Paris City Tour",
                description: "Guided tour of the Eiffel Tower, Arc de Triomphe, and Notre Dame. Afternoon Seine River Cruise.",
                image: franceImg
            },
            {
                day: 3,
                title: "Louvre & Culture",
                description: "Skip-the-line access to the Louvre Museum to see the Mona Lisa. Afternoon walk through Montmartre.",
                image: franceImg
            },
            {
                day: 4,
                title: "Royal Versailles",
                description: "Half-day trip to the Palace of Versailles. Explore the Hall of Mirrors and the magnificent gardens.",
                image: franceImg
            },
            {
                day: 5,
                title: "Shopping & Leisure",
                description: "Free day for shopping at Galeries Lafayette or a food tour in Le Marais.",
                image: franceImg
            },
            {
                day: 6,
                title: "Departure",
                description: "Breakfast at the hotel. Transfer to Charles de Gaulle Airport for your flight home.",
                image: franceImg
            }
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
        stats: { price: "$650", duration: "8 Days", visa: "E-Visa" },
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
        itinerary: [
            { day: 1, title: "Transfer / Panoramic Tour", description: "", image: azerbaijanBakuImg },
            { day: 2, title: "Baku to Gabala Tour", description: "", image: azerbaijanGabalaImg },
            { day: 3, title: "Tufandag Mountain Tour", description: "", image: azerbaijanMountainImg },
            { day: 4, title: "Sheki To Baku", description: "", image: azerbaijanShakiImg },
            { day: 5, title: "Baku City Tour / Absheron Tour", description: "", image: azerbaijanAbsheronImg },
            { day: 6, title: "Shahdag Tour", description: "", image: azerbaijanShahadagImg },
            { day: 7, title: " Guba To Baku / Gobustan", description: "", image: azerbaijanQubaImg },
            { day: 8, title: " Departure", description: "", image: DepartureImg },
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
        stats: { price: "$850", duration: "7 Days", visa: "Visa Free/E-Visa" },
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
        ],
        itinerary: [
            { day: 1, title: "Arrival in Almaty", description: "", image: kazakhstanAlmatyImg },
            { day: 2, title: "Shymbulak & Arbat Street Tour", description: "", image: kazakhstanShymbulak },
            { day: 3, title: "Charyn Canyon – Kolsai Lake – Black Canyon", description: "", image: kazakhstanCanyonImg },
            { day: 4, title: "Moon canyon & kaindly lake", description: "", image: kazakhstanMoonCanyonImg },
            { day: 5, title: "Almaty City Tour KoK-Tobe hill", description: "", image: kazakhstanKokImg },
            { day: 6, title: "Almarasan & Ayusai", description: "", image: kazakhstanAlmarasanImg },
            { day: 7, title: "Airport Transfer", description: "", image: DepartureImg }
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
        ],
        itinerary: [
            { day: 1, title: "Arrival in Yerevan", description: "Arrive in the Pink City. Private transfer to your hotel and evening walk around Republic Square to see the singing fountains.", image: armeniaImg },
            { day: 2, title: "Garni & Geghard", description: "Visit the Hellenistic Garni Temple and the UNESCO-listed cave monastery of Geghard. Bread baking masterclass included.", image: armeniaImg },
            { day: 3, title: "Lake Sevan & Dilijan", description: "Drive to the azure Lake Sevan, then explore the 'Armenian Switzerland' town of Dilijan and Haghartsin Monastery.", image: armeniaImg },
            { day: 4, title: "Khor Virap & Noravank", description: "Enjoy the best views of Mount Ararat from Khor Virap and visit the stunning red-rock monastery of Noravank.", image: armeniaImg },
            { day: 5, title: "Departure", description: "Visit the Vernissage open-air market for unique handicrafts before your transfer to Zvartnots Airport.", image: armeniaImg }
        ]
    },
    kyrgyzstan: {
        title: "Kyrgyzstan Exclusive 5-Day Tour",
        name: "Kyrgyzstan",
        tagline: "3 Nights / 4 Days - The Nomadic Spirit",
        image: kyrgyzstanImg,
        description: "Kyrgyzstan is a paradise for nature lovers, offering dramatic mountains, crystal-clear alpine lakes, and vast open landscapes. With its strong nomadic culture, warm hospitality, and peaceful atmosphere, it’s perfect for travelers seeking adventure and authenticity off the beaten path.",
        stats: { price: "$1,210", duration: "4 Days", visa: "E-Visa" },
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
        ],
        itinerary: [
            { day: 1, title: "TRANSFER TO BISHKEK HOTEL", description: "", image: kyrgyzstanHotelImg },
            { day: 2, title: "CHUNKHURCHANK TOUR", description: "", image: kyrgyzstanChunkImg },
            { day: 3, title: "ALA-ARCHA TOUR", description: "", image: kyrgyzstanAlarchaImg },
            { day: 4, title: "TRANSFER TO AIRPORT", description: "", image: DepartureImg }
        ]
    },
    netherlands: {
        title: "Netherlands - Canals & Culture",
        name: "Netherlands",
        tagline: "Windmills, Art & Iconic Waterways",
        image: netherlandsImg,
        description: "Experience the Netherlands in its full glory—from the UNESCO-listed canals of Amsterdam to the historic windmills of Zaanse Schans. Immerse yourself in a land where artistic heritage meets modern innovation, featuring world-class museums, vibrant tulip fields, and a cycling culture that invites you to explore at your own pace.",
        stats: { price: "€1,250", duration: "6 Days", visa: "Schengen Visa" },
        whyChoose: [
            { title: "Canal Cruise Experience", description: "Navigate the iconic waterways of Amsterdam." },
            { title: "Zaanse Schans Windmills", description: "Step back in time to 18th-century Holland." },
            { title: "Rijksmuseum & Van Gogh", description: "Masterpieces of Dutch art and history." },
            { title: "Keukenhof Gardens", description: "The world's most beautiful spring garden." },
            { title: "Giethoorn Village", description: "The fairytale 'Venice of the North'." },
            { title: "Royal Delft Pottery", description: "Discover the iconic blue and white earthenware." }
        ],
        eligibility: ["Valid Passport", "Schengen Visa", "Travel Insurance", "Return Ticket", "Hotel Booking", "Funds Proof"],
        benefits: [
            { title: "Central 4-Star Stays", description: "Accommodation in the heart of the city." },
            { title: "Daily Buffet Breakfast", description: "Start every day with a premium meal." },
            { title: "Unlimited Travel Card", description: "Access to tram, bus, and metro networks." },
            { title: "Museum Skip-the-Line", description: "Priority entry to major art museums." },
            { title: "Guided Countryside Tour", description: "Expert-led visits to windmills and villages." },
            { title: "Private Airport Transfer", description: "Seamless arrival and departure experience." }
        ],
        process: [
            { step: 1, title: "Inquire", description: "Share your travel dates." },
            { step: 2, title: "Customize", description: "Tailor your Dutch experience." },
            { step: 3, title: "Secure", description: "Book your package." },
            { step: 4, title: "Visa", description: "Assistance with Schengen." },
            { step: 5, title: "Arrive", description: "Welcome to Amsterdam." },
            { step: 6, title: "Discover", description: "Enjoy the Dutch charm." }
        ],
        testimonials: [
            { name: "Emma W.", role: "Art Lover", content: "The museums were breathtaking. Perfectly organized.", location: "The Hague" },
            { name: "Michael R.", role: "Photographer", content: "Giethoorn is a dream. Great itinerary.", location: "Giethoorn" }
        ],
        faqs: [
            { question: "Do I need a visa for the Netherlands?", answer: "Travelers from non-visa-exempt countries need a Schengen Visa. We provide full assistance with your application documentation." },
            { question: "Is English widely spoken?", answer: "Yes, the Netherlands has one of the highest English-proficiency rates in the world, making travel very easy." },
            { question: "When is the tulip season?", answer: "The best time to see tulips, especially at Keukenhof, is from mid-April to early May." }
        ],
        itinerary: [
            { day: 1, title: "Arrival in Amsterdam", description: "Welcome to the Dutch capital! Private transfer to your hotel. Evening canal cruise to see the city lights.", image: netherlandsImg },
            { day: 2, title: "Amsterdam Highlights", description: "Guided walking tour of the historic center, Dam Square, and the Jordaan district. Visit the Anne Frank House.", image: netherlandsImg },
            { day: 3, title: "Windmills & Countryside", description: "Half-day tour to Zaanse Schans to see working windmills, clog making, and cheese farms.", image: netherlandsImg },
            { day: 4, title: "Art & Culture", description: "Priority access to the Rijksmuseum to see the Night Watch. Afternoon at leisure or Van Gogh Museum visit.", image: netherlandsImg },
            { day: 5, title: "Giethoorn Day Trip", description: "Full day excursion to the fairytale village of Giethoorn with a boat ride on its peaceful canals.", image: netherlandsImg },
            { day: 6, title: "Departure", description: "Breakfast at hotel. Private transfer to Schiphol Airport for your onward journey.", image: netherlandsImg }
        ]
    },
    russia: {
        title: "Russia - The Imperial Splendor",
        name: "Russia",
        tagline: "History, Art & Grandeur",
        image: russiaImg,
        description: "Discover the vast beauty of Russia, from the colorful onion domes of St. Basil's in Moscow to the imperial canals of St. Petersburg. A land of deep history, world-class ballet, and architectural marvels, Russia offers a journey through the grandeur of tsars and the soul of the Slavic world.",
        stats: { price: "$1,150", duration: "7 Days", visa: "E-Visa/Consult" },
        whyChoose: [
            { title: "Red Square & Kremlin", description: "The historic heart of Moscow." },
            { title: "Hermitage Museum", description: "One of the world's largest art collections." },
            { title: "Peterhof Palace", description: "The 'Russian Versailles' with stunning fountains." },
            { title: "Moscow Metro Tour", description: "Underground palaces of architecture." },
            { title: "Bolshoi Theatre", description: "Home of the world's most famous ballet." },
            { title: "St. Petersburg Canals", description: "Cruise through the 'Venice of the North'." }
        ],
        eligibility: ["Valid Passport", "Russian Visa", "Travel Insurance", "Return Ticket", "Hotel Booking", "Funds Proof"],
        benefits: [
            { title: "Premium City Hotels", description: "Stay in top-rated central locations." },
            { title: "Sapsan Train Tickets", description: "High-speed train between Moscow & St. Pete." },
            { title: "Private Guided Tours", description: "English-speaking expert guides." },
            { title: "Theater Tickets", description: "Reservation assistance for shows." },
            { title: "Visa Support", description: "Invitation letter for visa application." },
            { title: "All Entry Fees", description: "Tickets to major museums included." }
        ],
        process: [
            { step: 1, title: "Select", description: "Choose your cities." },
            { step: 2, title: "Visa", description: "Apply for entry." },
            { step: 3, title: "Book", description: "Confirm itinerary." },
            { step: 4, title: "Fly", description: "Arrival in Moscow." },
            { step: 5, title: "Explore", description: "Tour the capitals." },
            { step: 6, title: "Depart", description: "Safe styling." }
        ],
        testimonials: [
            { name: "John D.", role: "History Buff", content: "The Kremlin is awe-inspiring. A trip of a lifetime.", location: "Moscow" },
            { name: "Sarah P.", role: "Traveler", content: "St. Petersburg is simply magical. Great service.", location: "St. Petersburg" }
        ],
        faqs: [
            { question: "Do I need a visa for Russia?", answer: "Yes, most travelers require a visa. Electronic visas (E-visas) are available for citizens of many countries." },
            { question: "Is it safe to travel to Russia?", answer: "Yes, major tourist cities like Moscow and St. Petersburg are generally safe with high security, but standard travel precautions apply." },
            { question: "What is the best time to visit?", answer: "Late spring (May-June) for White Nights in St. Petersburg, or winter for a classic snowy experience." }
        ],
        itinerary: [
            { day: 1, title: "Arrival in St. Petersburg", description: "", image: russiaPetersburgImg },
            { day: 2, title: "City Tour of St. Petersburg And Hermitage Museum", description: "", image: russiaHermitagemuseumImg },
            { day: 3, title: "Excursion to Peterhof Grand Palace", description: "", image: russiaPeterhofGrandPalaceImg },
            { day: 4, title: "Free Day in St. Petersburg", description: "", image: russiaPetersburgCityImg },
            { day: 5, title: "Free Day in St. Petersburg", description: "", image: russiaPetersburgHiddenImg },
            { day: 6, title: "Free Day in St. Petersburg", description: "", image: russiaPetersburgCapitalImg },
            { day: 7, title: "Departure from St. Petersburg", description: "", image: DepartureImg }
        ]
    },
    georgia: {
        title: "Georgia - Jewel of Caucasus",
        name: "Georgia",
        tagline: "Wine, Mountains & History",
        image: georgiaImg,
        description: "Georgia is where ancient traditions meet stunning natural beauty—from medieval towns and mountain valleys to world-famous wine culture. Warm hospitality, rich history, and incredible food make it a soulful destination for travelers seeking authenticity and adventure.",
        stats: { price: "$600", duration: "7 Days", visa: "Visa on Arrival" },
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
        ],
        itinerary: [
            { day: 1, title: "TBILISI CITY TOUR", image: georgiaTbilisiImg },
            { day: 2, title: "GUDAURI TOUR", image: georgiaGudauriImg },
            { day: 3, title: "KAZBEGI TOUR", image: georgiaKazbegiImg },
            { day: 4, title: "GORI TOUR", image: georgiaGoriImg },
            { day: 5, title: "KUTAISI TOUR", image: georgiaKutaisiImg },
            { day: 6, title: "BAKURIANI TOUR", image: georgiaBakurianiImg },
            { day: 7, title: "ADIOS GEORGIA", image: DepartureImg }
        ]
    },
    uzbekistan: {
        title: "Uzbekistan - Silk Road Jewel",
        name: "Uzbekistan",
        tagline: "Samarkand, Bukhara & Tashkent",
        image: uzbekistanImg,
        description: "Uzbekistan is the heart of the Silk Road, home to breathtaking cities like Samarkand and Bukhara filled with timeless architecture and rich history. With vibrant culture, warm hospitality, and unforgettable flavors, it offers a journey into the soul of Central Asia.",
        stats: { price: "$900", duration: "6 Days", visa: "E-Visa" },
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
            { step: 1, title: "Day 1", description: "Airport Transfer + Panoramic City Tour." },
            { step: 2, title: "Day 2", description: "Tashkent / Chimgan Mountains / Charvak Lake Excursion." },
            { step: 3, title: "Day 3", description: "Tashkent / Samarkand (by Train)." },
            { step: 4, title: "Day 4", description: "Samarkand / Bukhara (by Bullet Train/Coach)." },
            { step: 5, title: "Day 5", description: "Bukhara / Tashkent." },
            { step: 6, title: "Day 6", description: "Departure from Tashkent." }
        ],
        testimonials: [
            { name: "Kevin L.", role: "Historian", content: "Samarkand exceeded expectations.", location: "Samarkand" },
            { name: "Fatima R.", role: "Traveler", content: "Beautiful architecture.", location: "Bukhara" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Uzbekistan?", answer: "Many nationalities can enter visa-free for short stays. Others can apply for a quick e-visa online. Always check current rules for your passport." },
            { question: "Is Uzbekistan safe for tourists?", answer: "Yes. Uzbekistan is considered very safe, especially in tourist cities like Tashkent, Samarkand, and Bukhara, with welcoming locals." },
            { question: "When is the best time to visit Uzbekistan?", answer: "The best time is April–May and September–October when the weather is comfortable for sightseeing and travel." }
        ],
        itinerary: [
            { day: 1, title: "Airport Transfer + Panoramic City Tour", description: "", image: uzbekistanCityImg },
            { day: 2, title: "Tashkent / Chimgan Mountains / Charvak Lake Excursion", description: "", image: kyrgyzstanImg },
            { day: 3, title: "Tashkent / Samarkand (by Train)", description: "", image: uzbekistanSamarkandImg },
            { day: 4, title: "Samarkand / Bukhara (by Bullet Train/Coach)", description: "", image: uzbekistanTrainImg },
            { day: 5, title: "Bukhara / Tashkent", description: "", image: uzbekistanBukharaImg },
            { day: 6, title: "Departure from Tashkent", description: "", image: DepartureImg }
        ]
    }
}

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


                {/* --- 1. Hero Section --- */}
                <CountryHero
                    image={data.image}
                    name={data.name}
                    tagline={data.tagline}
                    stats={data.stats}
                />

                {/* --- 2. Original Hero (Now Secondary Overview) --- */}


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
                                            className="group relative px-8 py-4 bg-primary text-white rounded-xl overflow-hidden shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
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
                                                ${i === 1 || i === 2 ? 'bg-primary text-white border-transparent' : 'bg-white border-gray-100 hover:border-gold/30'}
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

                {/* --- 3. Roadmap Timeline (Itinerary) --- */}
                {data.itinerary && <RoadmapSection itinerary={data.itinerary} />}











                {/* --- 4.5. Benefits (What's Included) --- */}

                < section className="py-24 bg-slate-50/50 relative" >
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
                </section >



                {/* --- 4.6 Inquiry Form Section --- */}
                < section className="py-24 bg-slate-50 relative overflow-hidden" id="booking-form" >
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
                                <div className="md:col-span-2 bg-primary p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
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
                </section >

                {/* --- 6. FAQ Section --- */}
                < section className="py-24 bg-white" >
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
                </section >

                <DestinationBanner countryName={data.name} image={data.image} />



            </main >
            <Footer />
            <WhatsAppButton />
            <StickyEnquireButton />
        </>
    );
};

export default CountryPage;
