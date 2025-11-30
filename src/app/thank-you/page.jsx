'use client';

import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYou() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-5xl text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
                <p className="text-gray-600 mb-8">
                    Your message has been sent successfully. We will get back to you shortly.
                </p>
                <Link
                    href="/"
                    className="inline-block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
