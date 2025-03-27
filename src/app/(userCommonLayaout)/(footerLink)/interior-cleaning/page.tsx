"use client";
import { FaCar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const InteriorCleaningPage = () => {
  return (
    <div className="container mx-auto p-6">
      <motion.div
        className="bg-gray-300 shadow-lg p-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaCar size={30} className="text-blue-500" />
          <h2 className="text-3xl text-black font-semibold">Interior Cleaning</h2>
        </motion.div>

        <motion.p className="text-gray-600 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Our Interior Cleaning service ensures a fresh and spotless interior. Here is how we do it:
        </motion.p>

        <div className="mb-6">
          <h3 className="text-xl text-black font-semibold">Step-by-Step Process:</h3>
          <ul className="list-inside list-decimal ml-4">
            {[
              "Vacuuming: We start by vacuuming the seats, carpets, and trunk.",
              "Surface Wipe: All interior surfaces are wiped and disinfected.",
              "Glass Cleaning: Interior windows and mirrors are polished for clarity.",
              "Odor Removal: We apply deodorizing treatments to ensure a fresh scent."
            ].map((step, index) => (
              <motion.li key={index} className="text-gray-600" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                <strong>{step.split(":")[0]}:</strong> {step.split(":")[1]}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p className="text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          Enjoy a clean and refreshing car interior with our deep cleaning service!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default InteriorCleaningPage;
