import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 mt-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo + Name */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src="/citysheba-logo.png"
                            alt="CitySheba Logo"
                            className="w-12 h-12 rounded-xl shadow"
                        />
                        <h2 className="text-2xl font-bold text-gray-800">CitySheba</h2>
                    </div>
                    <p className="text-gray-600 leading-6">
                        Smart city service platform to report, track, and resolve public infrastructure issues.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="hover:text-gray-900 cursor-pointer">Report Issue</li>
                        <li className="hover:text-gray-900 cursor-pointer">Track Status</li>
                        <li className="hover:text-gray-900 cursor-pointer">About Us</li>
                        <li className="hover:text-gray-900 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-3">
                            <FaLocationArrow /> Dhaka, Bangladesh
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt /> +880 1234 567890
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope /> support@citysheba.com
                        </li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                    <div className="flex gap-4 text-gray-700">
                        <a className="bg-white p-3 rounded-full shadow hover:bg-gray-200">
                            <FaFacebookF />
                        </a>
                        <a className="bg-white p-3 rounded-full shadow hover:bg-gray-200">
                            <FaInstagram />
                        </a>
                        <a className="bg-white p-3 rounded-full shadow hover:bg-gray-200">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 py-5 text-center">
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} CitySheba — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;