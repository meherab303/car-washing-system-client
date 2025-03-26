"use client";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-6">
      <motion.div
        className="bg-gray-300 shadow-lg p-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-black font-semibold mb-4">Terms of Service</h2>
        <p className="text-gray-600 mb-4">
          Welcome to Car Wash Services! These terms govern your use of our website and services.
        </p>
        <h3 className="text-xl text-black font-semibold">1. Acceptance of Terms</h3>
        <p className="text-gray-600 mb-3">
          By accessing our website, you agree to be bound by these Terms of Service.
        </p>
        <h3 className="text-xl text-black font-semibold">2. Service Usage</h3>
        <p className="text-gray-600 mb-3">
          Our car wash services are subject to availability and may change without notice.
        </p>
        <h3 className="text-xl text-black font-semibold">3. Contact Us</h3>
        <p className="text-gray-600">
          If you have any questions, please contact us at support@carwash.com.
        </p>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
