import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
 

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 text-center px-4">

            {/* Floating 404 */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8 }
                }}
                className="text-8xl font-extrabold text-green-700 drop-shadow-lg"
            >
                404
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.8 }
                }}
                className="text-xl text-gray-600 mt-4"
            >
                Oops! The page you’re looking for doesn’t exist.
            </motion.p>

            {/* Floating SVG Illustration */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    y: [0, -10, 0],
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                className="mt-10"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
                    alt="Not Found"
                    className="w-56 opacity-90"
                />
            </motion.div>

            {/* Home Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{
                    scale: 1,
                    transition: { delay: 0.8, duration: 0.5 }
                }}
            >
                <Link
                    to="/"
                    className="mt-10 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 btn font-semibold shadow-md transition-all"
                >
                    <FaHome /> Go Back Home
                </Link>
            </motion.div>

        </div>
    );
};

export default ErrorPage;