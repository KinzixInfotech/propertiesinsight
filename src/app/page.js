'use client'

import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCheckCircle, FaHome, FaUsers, FaMapMarkerAlt, FaPlay, FaExpand, FaChevronCircleDown } from 'react-icons/fa';
import {
  FaVideo,
  FaShieldAlt,
  FaChild,
  FaLightbulb,
  FaRoad,
  FaPlaceOfWorship,
  FaWater,
  FaBorderAll,
  FaStore,
  FaSchool,
  FaHospital,
  FaRoute
} from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';

import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
const icons = {
  FaVideo,
  FaShieldAlt,
  FaChild,
  FaLightbulb,
  FaRoad,
  FaPlaceOfWorship,
  FaWater,
  FaBorderAll,
  FaStore,
  FaSchool,
  FaHospital,
  FaRoute,
};


// Content Configuration Object
export const siteContent = {
  // header: {
  //   logo: "TS BUILDTECH",
  //   phone: "+91 9205052600",
  //   email: "info@plotnearjewar.com",
  //   nav: ["Home", "Project", "Amenities", "Plot Size", "Gallery", "Videos", "Location Map", "Why Yeida?", "Contact"]
  // },
  hero: {
    title: "Plot Near Jewar Airport",
    subtitle: "Best Investment Opportunity",
    features: [
      "ADA Approved Property",
      "Minimum Size 100 Sq. Yards",
      "High Return! Investment Guaranteed",
      "Affordable Options with Future Growth Potential",
      "Enhances Connectivity to Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Aligarh, Agra, Mathura",
      "10 Minutes from Jewar International Airport Terminal 2",
    ],
    startingPrice: "Starting Just ₹16000/-",
    formTitle: "BOOK YOUR DREAM PLOT"
  },
  about: {
    title: "About Golden City Township",
    description1: "Golden City is an exclusive 60-acre residential township situated near the rapidly developing Noida International Airport in Jewar. Designed for families and smart investors, the township blends modern living with spacious luxury plots and serene green landscapes, creating an ideal environment for both lifestyle and long-term growth. With full approval from the Aligarh Development Authority (ADA), Golden City guarantees a legally secure, transparent, and future-ready investment, offering registry-ready plots and smooth bank loan processing.",
    description2: "Its strategic location near key destinations—8 km from Jewar Airport’s main entrance and minutes from Pari Chowk, Film City, ICC & Sports Hub, Galgotias University, and Noida Sector 18—ensures unmatched connectivity through major highways. The township also provides easy access to Greater Noida and surrounding regions. Supported by SBI, Canara Bank, and PNB loan availability, Golden City stands as a prime opportunity to build your dream home or invest in the fast-growing Jewar region.",
    images: [
      "./1.png",
      "./2.png",
      "./3.png"
    ],
    // stats: [
    //   { number: "3", label: "Township Sold", icon: "home" },
    //   { number: "307", label: "Our Team", icon: "users" },
    //   { number: "5,600", label: "Acres Area Sold", icon: "check" }
    // ]
  },
  amenities: [
    { title: "CCTV Camera", subtitle: "24-hour surveillance system for enhanced safety", icon: "FaVideo" },
    { title: "24/7 Security", subtitle: "Round-the-clock guards ensuring complete protection", icon: "FaShieldAlt" },
    { title: "Children Park", subtitle: "Safe play area designed for kids’ recreation", icon: "FaChild" },
    { title: "Street Light", subtitle: "Well-lit roads for safe night movement", icon: "FaLightbulb" },
    { title: "Wide Road", subtitle: "30Ft, 40Ft, 60Ft, 100Ft Cobblestone Wide Road", icon: "FaRoad" },
    { title: "Temple", subtitle: "Peaceful spiritual place within the society", icon: "FaPlaceOfWorship" },
    { title: "Lake", subtitle: "Artificial Lake In 7 Bigha", icon: "FaWater" },
    { title: "Society Boundary Walls", subtitle: "Fully secured gated boundary for privacy", icon: "FaBorderAll" },
    { title: "Commercial Shops", subtitle: "Essential daily-needs shops inside the township", icon: "FaStore" },
    { title: "Near By School", subtitle: "Educational institutions located close to the township", icon: "FaSchool" },
    { title: "Near By Hospital", subtitle: "Healthcare facilities available within short distance", icon: "FaHospital" },
    { title: "Near By Highway", subtitle: "Quick access to major highways for easy travel", icon: "FaRoute" },
  ],
  plotSizes: [
    { size: "100 Sq. Yard", oldPrice: "₹38 Lacs", price: "₹36 Lacs*" },
    { size: "200 Sq. Yard", oldPrice: "₹76 Lacs", price: "₹72 Lacs*" },
    {
      size: "300 Sq. Yard",
      oldPrice: "₹1.14 Cr",
      price: "₹1.08 Cr*"
    },
    { size: "400 Sq. Yard", oldPrice: "₹1.52Cr", price: "₹1.14Cr" }
  ],
  whyYeida: {
    title: "Why ADA Approved Plot?",
    subtitle: "At Aligarh’s Most Trusted & Regulated Development Zone",

    description:
      "ADA (Aligarh Development Authority) follows one of the strictest and safest development policies in Uttar Pradesh. The most important factor is ADA’s 20% holding rule: ADA keeps 20% of the total plots with itself and does NOT release them to the developer initially. These 20% plots are only released after the developer fully completes all development work — including roads, drainage, electrification, water supply, and other essential infrastructure. This system ensures guaranteed development, prevents incomplete projects, and protects buyers from fraud. With strict monitoring, verified land titles, and regulated planning, ADA-approved plots are among the safest and most promising real estate investments in Aligarh.",

    features: [
      "Government-approved & legally verified plots",
      "ADA holds 20% of plots until full development is completed",
      "Ensures 100% guaranteed development before final release",
      "Zero risk of incomplete or fake development",
      "Well-planned roads, drainage & electrification",
      "Safe and regulated real estate environment",
      "High appreciation due to planned infrastructure",
      "Stronger resale value compared to normal plots",
      "Transparent documentation with ADA oversight",
      "ADA-monitored progress ensures timely development",
      "Ideal for home buyers & long-term investors",
      "Strict action is taken against developers for any delay or deviation from the approved plan."
    ],

    // sections: [
    //   {
    //     title: "Strict ADA Development Policy",
    //     points: [
    //       "ADA keeps 20% of total plots with itself",
    //       "These plots are NOT released until all development work is finished",
    //       "Forces developers to complete roads, drainage & utilities on time"
    //     ]
    //   },
    //   {
    //     title: "Safe & Transparent Investment",
    //     points: [
    //       "Government-backed land title",
    //       "No illegal plotting or unauthorized construction",
    //       "Fully verified layout plans and approvals"
    //     ]
    //   },
    //   {
    //     title: "Modern & Assured Infrastructure",
    //     points: [
    //       "Wide accessible roads",
    //       "Proper drainage, sewage and electricity network",
    //       "Green spaces and public utility areas as per ADA norms"
    //     ]
    //   },
    //   {
    //     title: "High Investment Growth",
    //     points: [
    //       "ADA zones are rapidly expanding",
    //       "Well-planned residential & commercial development",
    //       "High resale and rental value due to regulated planning"
    //     ]
    //   }
    // ]
  },
  gallery: {
    title: "Project Gallery",
    subtitle: "Explore Our Premium Township Development",
    images: [
      { url: "./1.png", caption: "Shopping Complex" },
      { url: "./2.png", caption: "Modern Infrastructure" },
      { url: "./3.png", caption: "Green Spaces" },
      { url: "./4.png", caption: "Plot Layout" },
      { url: "./5.png", caption: "Enterance  Gate" },
      { url: "./6.png", caption: "Community Center" },
    ]
  },
  videos: {
    title: "Video Gallery",
    subtitle: "Watch Our Township Tours & Customer Reviews",
    items: [
      { id: "wTehen-91NM", title: "Plots near jewar Airport: Sirf 38.5 Lakh Golden City" },
      { id: "dmHhuikH280", title: "Golden City Township: Premium Gated Society " },
      { id: "KuVe0vC6jrU", title: "Golden City Township: A Premium Township Entire NCR Area" },

    ]
  },
  testimonials: [
    {
      name: "Aditya Joshi",
      text: "Properties Insight helped me secure a premium plot effortlessly with clear guidance, trusted support, and complete transparency.",
      rating: 5
    },
    {
      name: "Neha Sharma",
      text: "Amazing experience! My farmhouse plot purchase was smooth, professional, and fully transparent with Properties Insight.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      text: "Highly reliable team. Every detail—from documents to site visit—was handled with trust and professionalism.",
      rating: 5
    },
    {
      name: "Kavya Iyer",
      text: "Buying my plot felt safe and stress-free. Properties Insight guided me perfectly throughout the entire process.",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      text: "Quality service, verified plots, and clear paperwork. Properties Insight made my investment experience truly outstanding.",
      rating: 5
    },
    {
      name: "Priya Patel",
      text: "Professional, trustworthy, and fast. My plot purchase was extremely smooth with Properties Insight.",
      rating: 5
    },
  ],

  faqs: [
    {
      question: "Where is Jewar located, and why is it a good investment for plots?",
      answer: "Jewar is located in Gautam Buddha Nagar district of Uttar Pradesh, approximately 40 km from Greater Noida. It's an excellent investment due to the upcoming Noida International Airport, improved connectivity, and massive infrastructure development in the region."
    },
    {
      question: "What is the current price range for plots in Jewar?",
      answer: "Plot prices in Jewar currently range from ₹800 to ₹3,500 per sq ft depending on location, proximity to the airport, and amenities. Prices are expected to appreciate significantly as development progresses."
    },
    {
      question: "Is the land near Jewar approved by authorities?",
      answer: "Yes, all our plots come with proper RERA registration, clear titles, and necessary approvals from local authorities. We ensure complete documentation transparency for your peace of mind."
    },
    {
      question: "What are the expected returns on investment (ROI) in Jewar plots?",
      answer: "Experts predict 200-300% ROI over the next 3-5 years as the airport becomes operational and infrastructure development accelerates. Early investors stand to gain maximum returns."
    },
    {
      question: "Are there any risks in buying plots near Jewar?",
      answer: "Like any investment, there are considerations. However, with proper due diligence, verified documentation, and buying from RERA-registered projects, risks are minimal. Always verify land titles and approvals before purchasing."
    },
    {
      question: "What are the upcoming infrastructure projects boosting Jewar's growth?",
      answer: "Major projects include Noida International Airport (operational by 2024-25), Film City, Medical Device Park, expansion of Yamuna Expressway, metro connectivity, and several commercial and residential townships."
    }
  ],
  footer: {
    address: "Khasra No 214, 2nd Floor, Vishwakarma Road Sec 49, Barola Noida",
    phone: "+918383091404",
    disclaimer: "Disclaimer – The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice and the availability of properties mentioned are not guaranteed. The images are for representation purposes only.",
    projectTitle: "Hare Krishna Township Phase-2",
    callToAction: "Book Your Site & Visit Today",
    email: 'contact.rashiparjapti@gmail.com',
    paymentOffer: "Same Day Registry on 60 % Payment",
    tagline: "Premium Plot for Sale in Jewar\nA Smart Investment Near Noida International Airport!"
  }
};
const heroImages = [
  "https://jewarproperty.in/wp-content/uploads/2025/06/1-1.png",
  "/gold.png",
];

export default function TSBuildTechLanding() {
  const [showPopup, setShowPopup] = useState(false);

  // Add this at the top of your component, before the return statement
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });

  const heroRef = useRef(null);
  const plotSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', city: '', message: '' });
  };



  return (
    <div className="font-sans ">
      <PopupForm externalShow={showPopup} setExternalShow={setShowPopup} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-6 lg:pt-0"
      >
        {/* Background Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Jewar Township ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentImageIndex === index ? 1 : 0,
                scale: currentImageIndex === index ? 1 : 1.1
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/50 to-black/70"></div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-3 rounded-full transition-all ${currentImageIndex === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75 w-3"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl sm:max-w-3xl lg:max-w-4xl text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-emerald-400/30 via-green-300/20 to-emerald-400/30 backdrop-blur-md border border-emerald-300/50 rounded-full shadow-2xl ring-1 ring-emerald-200/40 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-100%", "200%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10 text-white font-semibold text-sm tracking-wide drop-shadow-lg">
                ✨ Premium Investment Opportunity
              </span>
            </motion.div>

            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {siteContent.hero.title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-10 text-gray-200 max-w-2xl">
              {siteContent.hero.subtitle}
            </h2>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {siteContent.hero.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10"
                >
                  <div className="mt-1 w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-base text-gray-100">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 lg:mb-0 mb-2"
            >
              {/* Price Button */}
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
              >
                <span className="text-sm text-gray-500 line-through">₹38,000</span>
                <span className="text-xl font-bold text-[#165dfc]">₹36,000</span>
              </button>

              {/* Call Button */}
              <button
                onClick={() =>
                  window.location.href = "tel:" + siteContent.footer.phone
                }
                className="bg-gray-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900/70 transition-all border border-white/20"
              >
                Call Now
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* BOOK NOW - Fixed Left */}
        <div className="fixed lg:left-0 right-4 top-1/2 lg:-translate-y-1/2 -translate-y-1/2 z-40 ">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gray-900 text-white lg:px-3 px-1 lg:py-8 py-2 text-sm font-semibold hover:bg-gray-800 transition shadow-lg"
            style={{ writingMode: "vertical-rl" }}
          >
            ENQUIRY NOW
          </button>
        </div>
      </section>
 
      {/* Ticker */}
      <div className="bg-gray-900 text-white py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="text-lg mx-8">
            ✦ Gated Society With CCTV Surveillance ✦ 100, 60, 40 & 35 Feet Road in Society ✦ 10 Bigha Lake & 10 Bigha Shopping Complex ✦ 10 Minutes from Jewar International Airport Terminal 2 ✦ 8 Minutes from Proposed Metro ✦ Buy Back Guarantee 36% ✦ On 6 Lane National Highway 343D ✦
          </span>
          <span className="text-lg mx-8">
            ✦ Gated Society With CCTV Surveillance ✦ 100, 60, 40 & 35 Feet Road in Society ✦ 10 Bigha Lake & 10 Bigha Shopping Complex ✦ 10 Minutes from Jewar International Airport Terminal 2 ✦ 8 Minutes from Proposed Metro ✦ Buy Back Guarantee 36% ✦ On 6 Lane National Highway 343D ✦
          </span>
          <span className="text-lg mx-8">
            ✦ Gated Society With CCTV Surveillance ✦ 100, 60, 40 & 35 Feet Road in Society ✦ 10 Bigha Lake & 10 Bigha Shopping Complex ✦ 10 Minutes from Jewar International Airport Terminal 2 ✦ 8 Minutes from Proposed Metro ✦ Buy Back Guarantee 36% ✦ On 6 Lane National Highway 343D ✦
          </span>
          {/* <span className="text-lg mx-8">
      ✦ Gated Society With CCTV Surveillance ✦ 100, 60, 40 & 35 Feet Road in Society ✦ 10 Bigha Lake & 10 Bigha Shopping Complex ✦ 10 Minutes from Jewar International Airport Terminal 2 ✦ 8 Minutes from Proposed Metro ✦ Buy Back Guarantee 36% ✦ On 6 Lane National Highway 343D ✦
    </span>
    <span className="text-lg mx-8">
      ✦ Gated Society With CCTV Surveillance ✦ 100, 60, 40 & 35 Feet Road in Society ✦ 10 Bigha Lake & 10 Bigha Shopping Complex ✦ 10 Minutes from Jewar International Airport Terminal 2 ✦ 8 Minutes from Proposed Metro ✦ Buy Back Guarantee 36% ✦ On 6 Lane National Highway 343D ✦
    </span> */}
        </div>
      </div>

      {/* About Section */}
      <section id="project" className="py-20 bg-white reveal-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                data-aos="fade-up"
                className="text-center lg:text-left"
              >
                <h2 className="text-4xl font-bold mb-6">{siteContent.about.title}</h2>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {siteContent.about.description1}
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {siteContent.about.description2}
                </p>

                <a href="#contact">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Quick Query
                  </button>
                </a>
              </motion.div>
            </div>

            {/* RIGHT IMAGE GRID */}
            {/* RIGHT IMAGE GRID */}
            <div>
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="top-in-bottom-out"
                videoSrc="./vid.mp4"
                thumbnailSrc="./5.png"
                thumbnailAlt="Golden City"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc="./vid.mp4"
                thumbnailSrc="./5.png"
                thumbnailAlt="Golden City"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-gray-50 reveal-section">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
            data-aos="fade-down"
          >
            Amenities
          </motion.h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 amenities-container">
            {siteContent.amenities.map((amenity, i) => {
              const Icon = icons[amenity.icon];
              return (
                <div
                  key={i}
                  className={`amenity-card rounded-xl p-6 hover:bg-[#f4fdf6] border border-gray-50 transition cursor-pointer bg-white`}
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto">
                    <Icon className="text-4xl text-blue-600" />
                  </div>
                  <h3 className={`text-lg font-bold text-center mb-2 text-gray-800`}>
                    {amenity.title}
                  </h3>
                  <p className={`text-sm text-center text-gray-600`}>
                    {amenity.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Plot Sizes Section */}
      <section
        ref={plotSectionRef}
        id="plot-size"
        className="relative py-16 md:py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium text-sm mb-3">
              🏡 Plot Options
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text">
              Premium Plot Options
            </h2>

            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Select from our range of thoughtfully designed plots with flexible sizing and perfect pricing
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {siteContent.plotSizes.map((plot, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative group plot-card"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity p-[2px]"></div>

                <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-green-100 group-hover:border-transparent transition-all">

                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>

                  {/* Size */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {plot.size}
                  </h3>

                  {/* Prices */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-gray-500">Starting at</span>

                    {plot.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">{plot.oldPrice}</span>
                    )}

                    <span className="text-xl md:text-2xl font-bold text-green-600">
                      {plot.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    <li className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500" />
                      ADA Approved Property
                    </li>
                    <li className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500" />
                      Clear Title Deed
                    </li>
                    <li className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500" />
                      Possession After 30% Payment
                    </li>
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => setShowPopup(true)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition shadow-md"
                  >
                    Book Now
                  </button>

                  {/* Badge */}
                  {i === 1 && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md rotate-6">
                      🔥 Bestseller
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Section */}
      <section className="py-20 bg-white reveal-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-5xl font-bold mb-2">Trusted By 2431+ Buyers</h2>
            <p className="text-xl text-gray-600">Book Your Plot JUST 9 KM FROM JEWAR Airport</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: "On Highway Plot Jewar", desc: "Prime location on the highway. Excellent connectivity & future growth" },
              { title: "Best Rates All Time", desc: "Exclusive deals on plots. Limited-time offer. Affordable investment" },
              { title: "Highly Develop Township", desc: "Modern infrastructure & amenities. Secure & well-planned community" },
              { title: "High Return! Investment", desc: "Fast-growing real estate hotspot. High appreciation potential" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>

                <button onClick={() => setShowPopup(true)} className="text-blue-600 font-semibold mt-4 hover:underline">Get In Touch</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Yeida Section */}
      <section id="why-yeida" className="py-20 bg-gray-50 reveal-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-5xl font-bold mb-4">{siteContent.whyYeida.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{siteContent.whyYeida.subtitle}</p>
            <p className="text-gray-700 leading-relaxed max-w-5xl">{siteContent.whyYeida.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {siteContent.whyYeida.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white reveal-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
              📸 Visual Tour
            </span>
            <h2 className="text-5xl font-bold mb-4">{siteContent.gallery.title}</h2>
            <p className="text-xl text-gray-600">{siteContent.gallery.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteContent.gallery.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={i * 50}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-semibold text-lg">{img.caption}</p>
                  </div>
                </div>

                {/* Expand Icon on Hover */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaExpand className="text-gray-800" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section id="videos" className="py-24 bg-white reveal-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full font-semibold mb-4">
              🎥 Video Gallery
            </span>
            <h2 className="text-5xl font-bold mb-4">{siteContent.videos.title}</h2>
            <p className="text-xl text-gray-600">{siteContent.videos.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">

            {siteContent.videos.items.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden border transition-all bg-gray-100"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative pb-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{video.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaPlay className="text-red-600" />
                    <span className="text-sm">Watch Now</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 reveal-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-5xl font-bold mb-4">Clients Testimonials</h2>
            <p className="text-xl text-gray-600">Your Dream Plot Awaits - Prime Locations, Transparent Deals, Hassle-Free Ownership!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.testimonials.slice(0, 9).map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-gradient-to-b from-white to-gray-50 reveal-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
              Got Questions?
            </span>
            <h2 className="text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about investing in Jewar</p>
          </motion.div>

          <div className="space-y-4">
            {siteContent.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="bg-white rounded-none p-6    transition-all cursor-pointer border-b-2 border-b-[whitesmoke] hover:border-blue-200"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-lg text-gray-800 pr-4">{faq.question}</h4>
                    <span className={`text-2xl text-blue-600 flex-shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                      <FaChevronCircleDown />
                    </span>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ${activeFaq === i ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <p className="text-gray-600 leading-relaxed border-t pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <MasterPlanSection />
      <section id="contact" className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium mb-4 text-sm">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our plots? We're here to help you find your perfect investment.
            </p>
          </motion.div>

          {/* Make both columns equal height */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
            {/* LEFT FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 lg:p-10 h-full flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h3>

              <div className="space-y-5 ">
                <div className='relative overflow-hidden'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="New Delhi"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition bg-white"
                  />
                </div>

                {/* NEW — PLOT SIZE DROPDOWN */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plot Size (in Gaj)</label>
                  <select
                    value={formData.plotSize}
                    onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select Plot Size</option>
                    <option value="100 Gaj">100 Gaj</option>
                    <option value="200 Gaj">200 Gaj</option>
                    <option value="300 Gaj">300 Gaj</option>
                    <option value="400 Gaj">400 Gaj</option>
                    <option value="500 Gaj">500 Gaj</option>
                    <option value="More">More (Tell me your requirement)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => {
                  const mailtoLink =
                    "mailto:" +
                    siteContent.footer.email +
                    "?subject=" +
                    encodeURIComponent("Contact Form - " + formData.name) +
                    "&body=" +
                    encodeURIComponent(
                      "Name: " +
                      formData.name +
                      "\nEmail: " +
                      formData.email +
                      "\nPhone: " +
                      formData.phone +
                      "\nCity: " +
                      formData.city +
                      "\nPlot Size: " +
                      formData.plotSize +
                      "\n\nMessage:\n" +
                      "Customer selected a plot size option."
                    );
                  window.location.href = mailtoLink;
                }}
                className="w-full bg-gray-900 text-white py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 mt-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send Message
              </button>
            </motion.div>

            {/* RIGHT CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 h-full flex flex-col"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <a href={"tel:" + siteContent.footer.phone} className="text-base font-semibold text-gray-900 hover:text-gray-700 transition">
                        {siteContent.footer.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a href={"mailto:" + siteContent.footer.email} className="text-base font-semibold text-gray-900 hover:text-gray-700 transition break-all">
                        {siteContent.footer.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location</p>
                      <p className="text-base font-semibold text-gray-900">Near Noida International Airport</p>
                      <p className="text-base font-semibold text-gray-900">Jewar, Greater Noida</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Working Hours</p>
                      <p className="text-base font-semibold text-gray-900">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-base font-semibold text-gray-900">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 w-12 h-12 bg-gray-800 hover:scale-105 cursor-pointer transition-all text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition z-50"
      >
        ↑
      </button>

      <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-33.33%); }
    }
    .animate-marquee {
      animation: marquee 20s linear infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    
    .floating-feature {
      animation: float 4s ease-in-out infinite;
    }
    
    .floating-feature:nth-child(2) {
      animation-delay: 0.5s;
    }
    
    .floating-feature:nth-child(3) {
      animation-delay: 1s;
    }
    
    .floating-feature:nth-child(4) {
      animation-delay: 1.5s;
    }
    
    .floating-feature:nth-child(5) {
      animation-delay: 2s;
    }
    
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #3b82f6, #2563eb);
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #2563eb, #1d4ed8);
    }
    
    /* Plot card hover effects */
    .plot-card {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .plot-card:hover {
      transform: translateY(-10px);
    }
    
    /* Glassmorphism effect */
    .glass-effect {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
  `}</style>
    </div>
  )
}
function PopupForm({ externalShow, setExternalShow }) {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    plotSize: "",
    city: "",
    budget: "",
  });


  // Combine internal + external control
  const effectiveShow = externalShow || showPopup;

  // ---------------------------
  // ✅ Auto popup logic (your original)
  // ---------------------------
  useEffect(() => {
    if (hasShown) return;
    let canShowPopup = false;

    const timer = setTimeout(() => {
      canShowPopup = true;
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    }, 30000);

    let scrollCount = 0;
    const handleScroll = () => {
      scrollCount++;
      if (scrollCount > 5 && canShowPopup && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShown]);

  // ---------------------------
  // ✅ handleSubmit (you lost this earlier)
  // ---------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink =
      "mailto:contact.rashiparjapti@gmail.com" +
      "?subject=" +
      encodeURIComponent("Quick Inquiry - " + formData.name) +
      "&body=" +
      encodeURIComponent(
        "Name: " +
        formData.name +
        "\nPhone: " +
        formData.phone +
        "\nEmail: " +
        formData.email +
        "\n\nMessage:\n" +
        formData.message
      );

    window.location.href = mailtoLink;

    setShowPopup(false);
    if (setExternalShow) setExternalShow(false);

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  // ---------------------------
  // ✅ Close handler (manual + internal)
  // ---------------------------
  const handleClose = () => {
    setShowPopup(false);
    if (setExternalShow) setExternalShow(false);
  };

  // ---------------------------
  // UI RETURN
  // ---------------------------
  return (
    <AnimatePresence>
      {effectiveShow && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="
  fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
  w-[95%] max-w-lg z-[101]
  max-h-[90vh]
"

          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto w-full">

              {/* Header with gradient */}
              <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                  aria-label="Close popup"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="pr-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3"
                  >
                    <span className="text-2xl">🏡</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Get Free Site Visit!</h3>
                  <p className="text-blue-100 text-sm">
                    Limited time offer to visit the premium plots. Fill the form below to get instant pricing details.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 pt-4 pb-6 max-h-[60vh] overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-4">



                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="City"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  {/* Plot Size */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Plot Size (Optional)
                    </label>
                    <select
                      value={formData.plotSize}
                      onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                    >
                      <option value="">Select a plot size</option>
                      <option value="100 Sq.Yard">100 Sq. Yard</option>
                      <option value="150 Sq.Yard">150 Sq. Yard</option>
                      <option value="200 Sq.Yard">200 Sq. Yard</option>
                      <option value="300 Sq.Yard">300 Sq. Yard</option>
                      <option value="500 Sq.Yard">500 Sq. Yard</option>
                    </select>
                  </div>

                  {/* Budget */}
                  {/* <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                    >
                      <option value="">Select a budget</option>
                      <option value="Under 15 Lakhs">Under 15 Lakhs</option>
                      <option value="15–25 Lakhs">15–25 Lakhs</option>
                      <option value="25–40 Lakhs">25–40 Lakhs</option>
                      <option value="40 Lakhs – 1 Cr">40 Lakhs – 1 Cr</option>
                      <option value="Above 1 Cr">Above 1 Cr</option>
                    </select>
                  </div> */}

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message / Requirements (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition"
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                    >
                      Maybe Later
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                    >
                      Get Details
                    </button>
                  </div>

                  <p className="text-xs text-center text-gray-500 pt-2">
                    🔒 Your information is safe and secure with us
                  </p>
                </form>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
function MasterPlanSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      thumbnail: "./GOLDEN CITY-R6.jpg",
      full: "./GOLDEN CITY-R6.jpg",
      title: "Site Layout Plan",
      subtitle: "Township at Sujanpur",
      description: "Detailed master plan showing plot layouts, amenities, and infrastructure"
    },
    {
      id: 2,
      thumbnail: "./bsp.png",
      full: "./bsp.png",
      title: "Price List",
      subtitle: "Payment Plan Details",
      description: "Complete pricing structure with payment milestones and booking details"
    }
  ];

  return (
    <>
      {/* Master Plan Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 mb-2 text-sm tracking-wider uppercase">Master Plans & Price List</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Vastu Friendly Site Layout Plan.
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </motion.div>

          {/* Images Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Image Container */}
                <div
                  onClick={() => setSelectedImage(image)}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 bg-white"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      <FaExpand className="text-gray-900 text-sm" />
                    </div>
                  </div>
                </div>

                {/* Label Below Image */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6 text-center"
                >
                  <div className="inline-block bg-gray-900 text-white px-8 py-3 rounded font-bold text-lg">
                    {image.subtitle}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 z-[200] cursor-pointer"
            />

            {/* Modal Content - Just Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-0 z-[201] flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-6xl w-full max-h-[95vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 w-10 h-10 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-all z-10 group"
                >
                  <FaTimes className="text-gray-900 text-lg group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Just the Image */}
                <img
                  src={selectedImage.full}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[95vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </>
  );
}