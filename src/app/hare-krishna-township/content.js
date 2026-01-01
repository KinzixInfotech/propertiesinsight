'use client'

import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCheckCircle, FaHome, FaUsers, FaMapMarkerAlt, FaPlay, FaExpand, FaChevronCircleDown, FaArrowDown, FaStar } from 'react-icons/fa';
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
import { Mail, MessageCircle, Phone } from 'lucide-react';
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
    FaHome,
};
// Content Configuration Object
export const siteContent = {
    hero: {
        title: "Hare Krishna Township",
        subtitle: "Residential Plots on Yamuna Expressway",
        features: [
            "Project Area – 80 Bighas of Land",
            "Gated Society with CCTV Surveillance",
            "30 & 40 Feet Road in Society",
            "Bang on Yamuna Expressway",
            "10 Minutes from Jewar International Airport",
            "8 Minutes from Proposed Metro",
        ],
        startingPrice: "Starting at ₹18 Lacs",
        formTitle: "BOOK YOUR DREAM PLOT"
    },
    about: {
        title: "Hare Krishna Township Yamuna Expressway",
        description1: "Hare Krishna Township is an urban lifestyle affordable residential project which is spreading over more than 38 Bighas of land. Hare Krishna Township is a home to many economical residential plots with the non stop rising demand for the residen al plots. A much awaited project is situated at Tappal Bang on Yamuna Expressway 52.5 km. Hare Krishna Township is an internally well connected and well situated nearby residential colonies these plots are well connected to Mathura, Vrindavan, Agra, Gurugram, Noida International Airport and Delhi NCR.",
        description2: "Hare Krishna Township is an lush green affordable residen ai project which is spreading over more than 55 Bighaas at main tappal town.",
        images: [
            "./1.png",
            "./2.png",
            "./3.png"
        ],
    },
    amenities: [
        { title: "Club House", subtitle: "Modern club facilities for recreation and social gatherings", icon: "FaHome" },
        { title: "Commercial Area", subtitle: "Shopping and business zone within the township", icon: "FaStore" },
        { title: "CCTV Security", subtitle: "24/7 surveillance for complete safety and peace of mind", icon: "FaVideo" },
        { title: "Kids Play Area", subtitle: "Safe and fun play zones designed for children", icon: "FaChild" },
        { title: "Jogging Track", subtitle: "Dedicated tracks for morning walks and fitness", icon: "FaRoute" },
        { title: "Park", subtitle: "Lush green parks for relaxation and outdoor activities", icon: "FaPlaceOfWorship" },
    ],
    plotSizes: [
        { size: "100 Sq.Yd.", price: "₹ On Request", type: "Residential Plot" },
        { size: "150 Sq.Yd.", price: "₹ On Request", type: "Residential Plots" },
        { size: "200 Sq.Yd.", price: "₹ On Request", type: "Residential Plots" },
        { size: "400 Sq.Yd.", price: "₹ On Request", type: "Residential Plots" }
    ],
    whyYeida: {
        title: "Why Choose Hare Krishna Township?",
        subtitle: "Nearby Attractions and Upcoming Developments",
        description: "Hare Krishna Township benefits from its proximity to some of the most exciting upcoming projects and attractions:",
        features: [
            "Defence Corridor (300 acres): Boosting the region's economy and infrastructure",
            "Sports Zone for Olympics: A future hub for international sporting events",
            "Institutional Zone (500 acres): Hosting prestigious institutions and fostering education and innovation",
            "Film City (1000 acres): A premier entertainment hub driving creative and economic growth",
            "Manufacturing Hub: Home to industrial giants like Adani and telecom leaders Vivo and Oppo",
            "Patanjali Food Park (100 acres): A flagship project promoting agricultural and food processing industries",
        ],
    },
    gallery: {
        title: "Project Gallery",
        subtitle: "Explore Our Premium Township Development",
        images: [
            { url: "./1.png", caption: "Township View" },
            { url: "./2.png", caption: "Modern Infrastructure" },
            { url: "./3.png", caption: "Green Spaces" },
            { url: "./4.png", caption: "Plot Layout" },
            { url: "./5.png", caption: "Entrance Gate" },
            { url: "./6.png", caption: "Community Center" },
        ]
    },
    videos: {
        title: "Video Gallery",
        subtitle: "Watch Our Township Tours & Customer Reviews",
        items: [
            { id: "wTehen-91NM", title: "Hare Krishna Township Overview" },
            { id: "dmHhuikH280", title: "Premium Gated Society Tour" },
            { id: "KuVe0vC6jrU", title: "Residential Plots Walkthrough" },
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
            question: "Where is Hare Krishna Township located?",
            answer: "Hare Krishna Township is located at Tappal Bang on Yamuna Expressway 52.5 km, with excellent connectivity to Mathura, Vrindavan, Agra, Gurugram, Noida International Airport and Delhi NCR."
        },
        {
            question: "What is the project size?",
            answer: "The township is spreading over 80 Bighas of land at main Tappal town on Yamuna Expressway."
        },
        {
            question: "What plot sizes are available?",
            answer: "We offer residential plots in sizes of 100, 150, 200, and 400 Sq.Yd. Pricing is available on request."
        },
        {
            question: "What are the key amenities?",
            answer: "The township features Club House, Commercial Area, CCTV Security, Kids Play Area, Jogging Track, Park, 30 & 40 feet roads, and gated society with complete surveillance."
        },
        {
            question: "How far is Jewar International Airport?",
            answer: "The township is just 10 minutes away from Jewar International Airport, making it an ideal investment location."
        },
        {
            question: "What nearby attractions are planned?",
            answer: "Upcoming developments include Defence Corridor (300 acres), Film City (1000 acres), Asia's Largest Amusement Park, F1 Track, Noida International Cricket Stadium, and major manufacturing hubs."
        }
    ],
    footer: {
        address: "Khasra No 214, 2nd Floor, Vishwakarma Road Sec 49, Barola Noida",
        phone: "+918383091404",
        disclaimer: "Disclaimer – The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice and the availability of properties mentioned are not guaranteed. The images are for representation purposes only.",
        projectTitle: "Hare Krishna Township",
        callToAction: "Book Your Site & Visit Today",
        email: 'info@propertiesinsight.com',
        paymentOffer: "Same Day Registry on 60% Payment",
        tagline: "Premium Residential Plots on Yamuna Expressway\nA Smart Investment Near Jewar Airport!"
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
        plotSize: '',
        budget: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setLoading(true);

        try {
            const response = await fetch('https://jewarproperty.in/api/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                window.location.href = '/thank-you';
            } else {
                alert('Failed to send message: ' + (data.error || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="font-sans ">
            <PopupForm externalShow={showPopup} setExternalShow={setShowPopup} />

            {/* Hero Section */}
            {/* NEW HERO SECTION UI */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden"
            >

                {/* Background Image - Fixed/Absolute */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using the first township image
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Vertical Sidebar - Left */}
                <div className="absolute left-0 top-0 bottom-0 w-10 md:w-14 bg-white z-20 flex items-center justify-center shadow-2xl">
                    <div className="transform -rotate-180 text-gray-900 font-bold tracking-[0.2em] text-xs md:text-sm whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                        YAMUNA EXPRESSWAY, NEAR JEWAR AIRPORT
                    </div>
                </div>

                <div className="container mx-auto px-4 pl-16 md:pl-20 relative z-10 py-20">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">

                        {/* LEFT CONTENT - 8 Cols */}
                        <div className="lg:col-span-7 text-white">

                            {/* Title Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                                    {siteContent.hero.title}
                                </h1>

                                {/* Green Badge/Subtitle */}
                                <div className="inline-flex items-center gap-2 bg-[#4ade80] text-black px-4 py-1.5 md:skew-x-[-15deg] mb-8">
                                    <span className="font-bold text-sm md:text-base md:skew-x-[15deg] uppercase tracking-wider">
                                        {siteContent.hero.subtitle}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Price Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <div className="border-l-4 border-[#4ade80] pl-4">
                                    <p className="text-gray-300 uppercase tracking-widest text-sm mb-1">Starting At</p>
                                    <div className="flex items-baseline gap-2">
                                        <h2 className="text-5xl md:text-6xl font-bold text-[#4ade80]">
                                            18 Lacs
                                        </h2>
                                        <span className="text-xl text-gray-400">Onwards</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Info Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-700 bg-black/50 backdrop-blur-sm max-w-2xl"
                            >
                                <div className="p-4 border-b md:border-b-0 md:border-r border-gray-700">
                                    <p className="text-gray-400 text-xs uppercase mb-1">Project Area</p>
                                    <p className="font-semibold text-white">80 Bighas of Land</p>
                                </div>
                                <div className="p-4 border-b border-gray-700">
                                    <p className="text-gray-400 text-xs uppercase mb-1">Security</p>
                                    <p className="font-semibold text-white">Gated Society with CCTV</p>
                                </div>
                                <div className="p-4 md:border-r border-gray-700">
                                    <p className="text-gray-400 text-xs uppercase mb-1">Connectivity</p>
                                    <p className="font-semibold text-white">10 Min from Jewar Airport</p>
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-400 text-xs uppercase mb-1">Infrastructure</p>
                                    <p className="font-semibold text-white">30 & 40 Feet Wide Roads</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT FORM - 4 Cols - Floating Dark Form */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="bg-black p-6 md:p-8 shadow-2xl border-t-4 border-[#4ade80]"
                            >
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">Have a Question?</h3>
                                    <p className="text-gray-400 text-sm">ENQUIRE NOW</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-300 mb-1">Name*</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-white text-gray-900 focus:outline-none"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-300 mb-1">Email*</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-white text-gray-900 focus:outline-none"
                                            placeholder="Email Id"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-300 mb-1">Mobile Number*</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 bg-white text-gray-900 focus:outline-none"
                                            placeholder="Mobile Number"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-300 mb-1">Plot Size*</label>
                                        <select
                                            value={formData.plotSize}
                                            onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                                            className="w-full px-4 py-3 bg-white text-gray-900 focus:outline-none appearance-none"
                                        >
                                            <option value="">Select Plot Size</option>
                                            <option value="100 Sq.Yard">100 Sq. Yard</option>
                                            <option value="150 Sq.Yard">150 Sq. Yard</option>
                                            <option value="200 Sq.Yard">200 Sq. Yard</option>
                                            <option value="400 Sq.Yard">400 Sq. Yard</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-3 uppercase tracking-wider transition-colors mt-2"
                                    >
                                        {loading ? 'Sending...' : 'SUBMIT'}
                                    </button>
                                </form>
                            </motion.div>
                        </div>

                    </div>

                </div>
            </section>
            {/* About Section */}
            {/* About Section */}
            <section id="project" className="relative py-24 bg-white overflow-hidden">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50/50 to-transparent pointer-events-none"></div>

                {/* Floating Elements (Retained but simpler) */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 left-10 text-green-500/5 text-9xl font-black select-none"
                    >
                        HKT
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* LEFT COLUMN - Image Composition */}
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative z-10 grid grid-cols-2 gap-4"
                            >
                                <div className="space-y-4 mt-8">
                                    <img src="./1.png" alt="Township View 1" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" />
                                    <div className="bg-black p-6 rounded-2xl text-white shadow-xl">
                                        <p className="text-3xl font-bold text-green-400">80+</p>
                                        <p className="text-sm text-gray-400 uppercase tracking-wider">Bighas of Land</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-green-100 p-6 rounded-2xl text-green-900 border border-green-200">
                                        <FaCheckCircle className="text-3xl mb-2 text-green-600" />
                                        <p className="font-bold">RERA Approved</p>
                                    </div>
                                    <img src="./2.png" alt="Township View 2" className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500" />
                                </div>

                                {/* Decorative Circle */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN - Content */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full font-bold text-xs uppercase tracking-widest mb-6 border border-green-100">
                                    About The Project
                                </span>

                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                                    Experience <span className="text-green-600">Premium Living</span> on Yamuna Expressway
                                </h2>

                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    {siteContent.about.description1}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        { title: "Strategic Location", desc: "Bang on Yamuna Expressway & near Jewar Airport" },
                                        { title: "Modern Infrastructure", desc: "Wide roads, underground electricity & drainage" },
                                        { title: "Secure Gated Community", desc: "24/7 CCTV surveillance & walled boundaries" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                                                <FaCheckCircle />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                <p className="text-sm text-gray-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={() => setShowPopup(true)}
                                        className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                                    >
                                        Download Brochure
                                        <FaArrowDown className="text-xs" />
                                    </button>
                                    <button
                                        onClick={() => setShowPopup(true)}
                                        className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold hover:border-green-500 hover:text-green-600 transition-all duration-300"
                                    >
                                        Plan A Visit
                                    </button>
                                </div>
                            </motion.div>
                        </div>

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
                    {/* Minimal Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            PLOT SIZES
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Choose the perfect dimension for your dream home.
                        </p>
                    </div>

                    {/* Clean Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
                        {siteContent.plotSizes.map((plot, i) => (
                            <div
                                key={i}
                                className="group relative bg-white p-8 border-b border-r border-gray-200 hover:bg-gray-50 transition-colors duration-300"
                            >
                                {/* Plot Icon */}
                                <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-3xl font-black text-black">
                                            {plot.size}
                                        </h3>
                                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                                            {plot.type}
                                        </p>
                                    </div>

                                    <div className="py-4 border-t border-b border-gray-100">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-xl font-bold text-gray-900">{plot.price}</span>
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <button
                                        onClick={() => setShowPopup(true)}
                                        className="w-full py-3 bg-white border-2 border-black text-black font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                                    >
                                        Enquire Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-gray-50 overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

                        {/* Left Column Highlights (01-04) */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-6 order-2 lg:order-1">
                            {[
                                "Society Park & Kids Play",
                                "All Modern Amenities",
                                "Departmental Store in the Society Complex",
                                "Greenery both side Road"
                            ].map((item, i) => (
                                <motion.div
                                    key={`left-${i}`}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group transition-all"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm flex-shrink-0">
                                        0{i + 1}
                                    </div>
                                    <span className="text-gray-900 font-bold text-lg group-hover:text-green-600 transition-colors">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Center Image Module */}
                        <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
                            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl group">
                                <img
                                    src="./2.png"
                                    alt="Highlights"
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* Vertical Text Bar */}
                                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-16 md:w-20 bg-green-500/90 backdrop-blur-sm flex items-center justify-center">
                                    <h2 className="text-white text-3xl md:text-4xl font-bold tracking-widest uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                        Highlights
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Right Column Highlights (05-08) */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-6 order-3">
                            {[
                                "Yoga/Meditation Garden",
                                "CCTV Surveillance",
                                "6 Feet Boundary Wall",
                                "Street Lights & Speed Breaker"
                            ].map((item, i) => (
                                <motion.div
                                    key={`right-${i}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group transition-all justify-end text-right"
                                >
                                    <span className="text-gray-900 font-bold text-lg group-hover:text-green-600 transition-colors">{item}</span>
                                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm flex-shrink-0">
                                        0{i + 5}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Yeida Section - Revamped */}
            {/* Why Yeida Section - Revamped Full Width */}
            <section id="why-hare-krishna" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* Header Content - Centered Top */}
                    <div className="text-center max-w-5xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="text-green-500 font-bold tracking-widest text-sm uppercase mb-4 block">
                                {siteContent.whyYeida.subtitle}
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
                                {siteContent.whyYeida.title?.split(' ').map((word, i) => (
                                    <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200" : ""}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h2>
                            <div className="p-6 bg-white/5 border-x-4 border-green-500 backdrop-blur-sm rounded-lg mx-auto inline-block">
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
                                    "{siteContent.whyYeida.description}"
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid - Full Width Horizontal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {siteContent.whyYeida.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                {/* Green Square Number Badge */}
                                <div className="w-12 h-12 bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-xl">{i + 1}</span>
                                </div>

                                {/* Text */}
                                <div className="flex-1 text-left">
                                    <p className="text-gray-100 text-lg font-medium leading-relaxed">{feature}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button Centered */}
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowPopup(true)}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:shadow-green-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore Opportunities
                            <FaArrowDown className="transform -rotate-90" />
                        </button>
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            {/* Testimonials - Revamped Premium Style */}
            <section className="py-24 bg-gray-50/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-green-600 font-bold tracking-widest text-sm uppercase mb-3 block">
                            Success Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            What Our Clients Say
                        </h2>
                        <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {siteContent.testimonials.slice(0, 3).map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative group"
                            >
                                <div className="absolute top-6 right-8 text-6xl text-green-100 font-serif leading-none group-hover:text-green-200 transition-colors">"</div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, j) => (
                                        <FaStar key={j} className="text-amber-400 text-lg" />
                                    ))}
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed text-lg italic relative z-10">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                                        <p className="text-green-600 text-sm font-medium">Verified Buyer</p>
                                    </div>
                                </div>
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
            {/* WhatsApp Floating Button - Mobile Only */}
            <a
                href="https://wa.me/918383091404"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed hidden right-6 bottom-20 w-12 h-12 bg-green-500 hover:scale-105 cursor-pointer transition-all text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 z-50 md:hidden"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-2xl" />
            </a>
            {/* Mobile Popup Action Bar */}

            <div className="fixed bottom-0 left-0 right-0 w-full bg-black shadow-2xl z-50 md:hidden">
                <div className="flex items-center justify-around px-3 py-2.5">
                    {/* Call Button */}
                    <a href='tel:918383091404'>
                        <button
                            // onClick={handleCall}

                            className="flex flex-col items-center justify-center space-y-0.5 hover:opacity-80 transition-opacity"
                        >
                            <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                            <span className="text-white text-xs font-medium">Call</span>
                        </button>
                    </a>
                    {/* WhatsApp Button */}
                    <a href="https://wa.me/918383091404" target="_blank" rel="noopener noreferrer">
                        <button
                            // onClick={handleWhatsApp}
                            className="flex flex-col items-center justify-center space-y-0.5 hover:opacity-80 transition-opacity"
                        >
                            <MessageCircle className="w-5 h-5 text-white" strokeWidth={2} />

                            <span className="text-white text-xs font-medium">WhatsApp</span>
                        </button>
                    </a>

                    {/* Enquiry Button */}
                    <button
                        onClick={() => setShowPopup(true)}
                        // onClick={handleEnquiry}
                        className="flex flex-col items-center justify-center space-y-0.5 hover:opacity-80 transition-opacity"
                    >
                        <Mail className="w-5 h-5 text-white" strokeWidth={2} />
                        <span className="text-white text-xs font-medium">Enquiry Now</span>
                    </button>
                </div>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed right-6 md:block hidden bottom-6 w-12 h-12 bg-gray-800 hover:scale-105 cursor-pointer transition-all text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition z-50"
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
    const [loading, setLoading] = useState(false);

    // Combine internal + external control
    const effectiveShow = externalShow || showPopup;

    useEffect(() => {
        if (hasShown) return;
        let canShowPopup = false;

        const timer = setTimeout(() => {
            canShowPopup = true;
            if (!hasShown) {
                setShowPopup(true);
                setHasShown(true);
            }
        }, 20000);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://jewarproperty.in/api/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setShowPopup(false);
                if (setExternalShow) setExternalShow(false);
                setFormData({ name: "", phone: "", email: "", message: "", plotSize: "", city: "", budget: "" });
                window.location.href = '/thank-you';
            } else {
                alert('Failed to send message: ' + (data.error || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setShowPopup(false);
        if (setExternalShow) setExternalShow(false);
    };

    return (
        <AnimatePresence>
            {effectiveShow && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md md:max-w-lg z-[101] px-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-h-[90vh] flex flex-col border border-gray-100">
                            {/* Premium Header */}
                            <div className="relative bg-[#0a0a0a] border-b-4 border-green-500 p-6 flex-shrink-0">
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-white/70 hover:text-white"
                                >
                                    <FaTimes />
                                </button>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 text-white text-2xl">
                                        <FaHome />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">Site Visit Booking</h3>
                                        <p className="text-gray-400 text-sm">Get Exclusive Offers & Priority Allotment</p>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="p-6 overflow-y-auto custom-scrollbar bg-gray-50/50">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Enter your name"
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block ml-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="+91..."
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block ml-1">City</label>
                                                <input
                                                    required
                                                    value={formData.city}
                                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                    placeholder="Your City"
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block ml-1">Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="your@email.com"
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block ml-1">Plot Size</label>
                                                <select
                                                    value={formData.plotSize}
                                                    onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-gray-700 appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select Size</option>
                                                    <option value="100 Sq.Yard">100 Sq. Yard</option>
                                                    <option value="150 Sq.Yard">150 Sq. Yard</option>
                                                    <option value="200 Sq.Yard">200 Sq. Yard</option>
                                                    <option value="400 Sq.Yard">400 Sq. Yard</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block ml-1">Message</label>
                                            <textarea
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="I am interested in..."
                                                rows={2}
                                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                    >
                                        {loading ? 'Submitting...' : 'Request Callback'}
                                    </button>

                                    <p className="text-xs text-center text-gray-400 flex items-center justify-center gap-2">
                                        <FaShieldAlt className="text-green-500" />
                                        Your data is secure with us
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
            thumbnail: "https://jewarproperty.in/hare-krishna-township-phase2/images/floor-plans/nirvana-homes-layout-plan-sm.jpg",
            full: "https://jewarproperty.in/hare-krishna-township-phase2/images/floor-plans/nirvana-homes-layout-plan-sm.jpg",
            title: "Site Layout Plan",
            subtitle: "Site Layout Plan",
            description: "Detailed master plan showing plot layouts, amenities, and infrastructure"
        },
        {
            id: 2,
            thumbnail: "./bsp.png",
            full: "./bsp.png",
            title: "Price List",
            subtitle: "Price List",
            description: "Complete pricing structure"
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