"use client";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <motion.div
        className="bg-gray-300 shadow-lg p-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-black font-semibold mb-4">Privacy Policy</h2>
        <p className="text-gray-600 mb-4">
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information.
        </p>
        <h3 className="text-xl text-black font-semibold">1. Information We Collect</h3>
        <p className="text-gray-600 mb-3">
          We collect personal data such as your name, email, and payment details when you use our services.
        </p>
        <h3 className="text-xl text-black font-semibold">2. How We Use Your Data</h3>
        <p className="text-gray-600 mb-3">
          We use your data to improve our services and process transactions securely.
        </p>
        <h3 className="text-xl text-black font-semibold">3. Contact Us</h3>
        <p className="text-gray-600">
          If you have any concerns about your privacy, reach out to privacy@carwash.com.
        </p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
