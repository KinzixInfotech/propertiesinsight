'use client'
import React from 'react'
import { FaPhone, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image from 'next/image'

const siteContent = {
    footer: {
        address: "Noida Sector 15 Near Metro Station",
        phone: "+91 83830 91404",
        disclaimer: "Disclaimer – The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice and the availability of properties mentioned are not guaranteed. The images are for representation purposes only.",
        projectTitle: "Hare Krishna Township Phase-2",
        callToAction: "Book Your Site & Visit Today",
        paymentOffer: "Same Day Registry on 60 % Payment",
        tagline: "Premium Plot for Sale in Jewar\nA Smart Investment Near Noida International Airport!"
    },
}

const Footer = () => {
    return (
        <div>
            {/* CTA Section */}
            <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px),
                       repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                    }}></div>
                </div>

                {/* Floating Shapes */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="container mx-auto px-4 text-center text-white relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        data-aos="fade-up"
                    >
                        <span className="inline-block px-4 md:px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full font-semibold mb-4 md:mb-6 text-sm md:text-base lg:text-lg border border-cyan-400/30">
                            ⚡ Limited Time Offer
                        </span>

                        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent px-2">
                            Secure Your Dream Plot Today!
                        </h2>

                        <p className="text-base md:text-xl lg:text-2xl mb-3 md:mb-4 max-w-3xl mx-auto font-light text-gray-200 px-4">
                            Premium Plots Near Noida International Airport
                        </p>

                        <p className="text-lg md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-cyan-300 drop-shadow-md px-4">
                            {siteContent.footer.paymentOffer}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4">
                            <a href={`tel:${siteContent.footer.phone}`}>
                                <button
                                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-bold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 flex items-center justify-center gap-2 md:gap-3"
                                >
                                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span className="whitespace-nowrap">Call Now</span>
                                    <span className="hidden sm:inline">{siteContent.footer.phone}</span>
                                </button>
                            </a>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto bg-white text-slate-900 px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-bold hover:bg-cyan-50 transition-all shadow-2xl hover:shadow-white/30 hover:scale-105 flex items-center justify-center gap-2 md:gap-3"
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                Book Free Site Visit
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm lg:text-base px-4">
                            <div className="flex items-center gap-1 md:gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-cyan-400/30">
                                <span className="text-cyan-300 text-base md:text-xl">✓</span>
                                <span>ADA Approved</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-cyan-400/30">
                                <span className="text-cyan-300 text-base md:text-xl">✓</span>
                                <span>Clear Title</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-cyan-400/30">
                                <span className="text-cyan-300 text-base md:text-xl">✓</span>
                                <span>Prime Location</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2 bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-cyan-400/30">
                                <span className="text-cyan-300 text-base md:text-xl">✓</span>
                                <span>High ROI</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Plot Sizes */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-slate-950 to-gray-900 text-white py-3 md:py-4 overflow-hidden border-t border-cyan-500/20">
                    <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-base lg:text-2xl font-bold flex-wrap px-4">
                        <span className="whitespace-nowrap">✦ 100 Gaj Plot</span>
                        <span className="whitespace-nowrap">✦ 200 Gaj Plot</span>
                        <span className="whitespace-nowrap">✦ 300 Gaj Plot</span>
                        <span className="whitespace-nowrap hidden sm:inline">✦ 400 Gaj Plot</span>
                        <span className="whitespace-nowrap hidden md:inline">✦ 500 Gaj Plot</span>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">

                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                        {/* Logo + About */}
                        <div className="flex flex-col items-center">
                            <Image width={140} height={100} src="/footer.png" priority />
                            <p className="text-gray-400 mt-3 text-sm leading-relaxed max-w-xs">
                                Properties Insight offers verified residential plots in high-growth locations.
                                Transparent deals and trusted support make buying land simple, safe, and future-ready.
                            </p>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <FaMapMarkerAlt /> Address
                            </h4>
                            <p className="text-gray-400 text-sm md:text-base max-w-xs">
                                {siteContent.footer.address}
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <FaPhone /> Call Us
                            </h4>
                            <p className="text-gray-400 text-sm md:text-base">
                                {siteContent.footer.phone}
                            </p>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-800 mt-10 pt-6">

                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

                            {/* Copyright */}
                            <p className="text-gray-400 text-xs md:text-sm">
                                © 2025 Properties Insight. All Rights Reserved.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-5 text-lg">
                                <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />
                                <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
                                <FaLinkedinIn className="cursor-pointer hover:text-blue-600 transition" />
                                <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
                            </div>
                            <p className="text-gray-500 text-xs mt-3 text-center md:text-right">
                                Developed by{" "}
                                <a
                                    href="https://www.kinzix.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-white underline transition font-semibold"
                                >
                                    Kinzix Infotech
                                </a>
                            </p>
                        </div>

                        {/* Disclaimer */}
                        {/* <p className="text-gray-500 text-xs mt-5 leading-relaxed text-center md:text-left max-w-3xl mx-auto md:mx-0">
                            {siteContent.footer.disclaimer}
                        </p> */}
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer