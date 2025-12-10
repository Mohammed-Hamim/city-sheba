import React from 'react';
import { motion } from "motion/react"
import Logo from './Logo';

const Loading = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Rotating Service Icon */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "linear",
                }}
                className="text-green-600 text-6xl sm:text-7xl"
            >
                🛠️
            </motion.div>

            {/* Pulsing Highlight Circle */}
            <motion.div
                className="absolute w-44 h-44 bg-green-400 opacity-10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 text-green-700 font-semibold text-xl sm:text-2xl"
            >
                Preparing Your City Services...
            </motion.p>

            {/* Progress bar */}
            <div className="mt-5 w-48 sm:w-64 h-2 bg-green-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-green-600"
                    initial={{ x: "-100%" }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
            {/* Subtext */}
            <p className="mt-4 text-gray-600 text-sm">
                Optimizing city infrastructure data...
            </p>
        </div>
    );
};

export default Loading;