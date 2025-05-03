/* eslint-disable prettier/prettier */
"use client";

import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div
      className="relative h-[calc(100vh-64px)] bg-fixed -m-9 w-full bg-cover bg-center flex justify-center items-center text-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.7), transparent), url('/carwash.jpg')",
      }}
    >
      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative flex flex-col items-center">
        {/* Animated Sliding Title */}
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 10 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider drop-shadow-2xl 
          bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <span className="text-blue-500">Premium</span>
          </motion.span>
          Car Wash
        </motion.h1>

        {/* Subtext (Perfectly Positioned Below) */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mt-1 sm:mt-2"
        >
          Experience the shine like never before! 🚗✨
        </motion.p>
      </div>
    </div>
  );
}
