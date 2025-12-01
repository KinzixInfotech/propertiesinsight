'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaPhone, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const siteContent = {
    header: {
        // logo: "TS BUILDTECH",
        phone: "+91-83830-91404",
        email: "contact.rashiparjapti@gmail.com",
        nav: ["Project", "Amenities", "Plot Size", "Gallery", "Videos", "Why ADA?", "Contact"]
    },
}

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    return (
        <div className='sticky top-0 z-50'>
            {/* Top Bar */}
            <div className="bg-white border-b border-gray-200 py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2">
                            <FaPhone className="text-blue-600" />
                            Phone: {siteContent.header.phone}
                        </span>
                        <span>Email: {siteContent.header.email}</span>
                    </div>
                    <div className="flex gap-3">
                        <span>Follow us:</span>
                        <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
                        <FaTwitter className="cursor-pointer hover:text-blue-600 transition" />
                        <FaLinkedinIn className="cursor-pointer hover:text-blue-600 transition" />
                        <FaInstagram className="cursor-pointer hover:text-blue-600 transition" />
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <a href="/">
                            <div className="flex items-center gap-3">
                                <Image width={140} height={100} src={'/logo.png'} priority />
                                <div className="leading-tight">
                                </div>
                            </div>
                        </a>
                        <nav className="hidden lg:flex gap-8">
                            {siteContent.header.nav.map((item, i) => (
                                <a key={i} href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/\?/g, '')}`} className="text-gray-700 hover:text-blue-600 font-medium transition">
                                    {item}
                                </a>
                            ))}
                        </nav>

                        <div className="flex gap-3 items-center">
                            <a href='tel:+918383091404'>
                                <button className="hidden md:block px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                                    Call Now
                                </button>
                            </a>
                            <a href='#contact'>
                                <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                                    Free Site Visit
                                </button>
                            </a>
                            <button className="lg:hidden" onClick={() => setActiveMenu(!activeMenu)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {activeMenu && (
                <div className="lg:hidden fixed inset-0 z-50" onClick={() => setActiveMenu(false)}>
                    <div className="absolute inset-0 bg-black/45 bg-opacity-50"></div>
                    <div
                        className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            {/* <span className="font-bold text-lg">{siteContent.header.logo}</span> */}
                            <button onClick={() => setActiveMenu(false)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col">
                            {siteContent.header.nav.map((item, i) => (
                                <a
                                    key={i}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/\?/g, '')}`}
                                    className="px-6 py-4 text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition border-b border-gray-100"
                                    onClick={() => setActiveMenu(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        <div className="p-6 space-y-3 border-t border-gray-200">
                            <button className="w-full px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                                Call Now
                            </button>
                            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                                Free Visit
                            </button>
                        </div>

                        <div className="p-6 border-t border-gray-200">
                            <div className="space-y-2 text-sm mb-4">
                                <div className="flex items-center gap-2">
                                    <FaPhone className="text-blue-600" />
                                    <span>Phone: {siteContent.header.phone}</span>
                                </div>
                                <div>Email: {siteContent.header.email}</div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <span className="text-sm">Follow us:</span>
                                <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
                                <FaTwitter className="cursor-pointer hover:text-blue-600 transition" />
                                <FaLinkedinIn className="cursor-pointer hover:text-blue-600 transition" />
                                <FaInstagram className="cursor-pointer hover:text-blue-600 transition" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header