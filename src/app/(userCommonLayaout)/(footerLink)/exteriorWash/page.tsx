"use client"
import { FaCar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExteriorWashPage = () => {
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
          <h2 className="text-3xl text-black font-semibold">Exterior Wash</h2>
        </motion.div>
        
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Exterior Wash service is designed to give your car a sparkling clean look. Here is how we do it:
        </motion.p>

        <div className="mb-6">
          <h3 className="text-xl text-black font-semibold">Step-by-Step Process:</h3>
          <ul className="list-inside list-decimal ml-4">
            {[
              "Pre-wash inspection: We start by inspecting the exterior of your vehicle to identify any areas requiring special attention.",
              "Rinse: We rinse off loose dirt and debris to prepare the car for a deeper clean.",
              "Foam application: We apply a layer of foam that helps break down grime, dirt, and oil.",
              "Scrubbing: We carefully scrub every part of the vehicle with soft mitts and brushes to remove dirt and contaminants.",
              "Rinse again: After scrubbing, we rinse the car thoroughly to remove the foam and any remaining dirt.",
              "Drying: Finally, we dry the car with microfiber towels to avoid any water spots or streaks."
            ].map((step, index) => (
              <motion.li
                key={index}
                className="text-gray-600"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <strong>{step.split(":")[0]}:</strong> {step.split(":")[1]}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          After the exterior wash, your vehicle will look brand new, free of grime and dirt, with a shine that lasts!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ExteriorWashPage;
