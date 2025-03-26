"use client";
import { FaCar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PolishingPage = () => {
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
          <h2 className="text-3xl font-semibold">Polishing</h2>
        </motion.div>

        <motion.p className="text-gray-600 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Our Polishing service restores the shine of your car’s paint. Here is how we do it:
        </motion.p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Step-by-Step Process:</h3>
          <ul className="list-inside list-decimal ml-4">
            {[
              "Surface Prep: The car is thoroughly washed and dried.",
              "Clay Bar Treatment: Removes embedded contaminants.",
              "Machine Polishing: Enhances shine and removes minor scratches.",
              "Final Buffing: We apply a finishing compound for a glossy look."
            ].map((step, index) => (
              <motion.li key={index} className="text-gray-600" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                <strong>{step.split(":")[0]}:</strong> {step.split(":")[1]}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p className="text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          Get a smooth, mirror-like finish with our professional polishing service!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default PolishingPage;
