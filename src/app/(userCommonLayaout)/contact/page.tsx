"use client";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6">
      <motion.div
        className="bg-gray-300 shadow-lg p-6 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-black">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have any questions or need assistance? Feel free to reach out to us using the form below.
        </p>

        <form className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="name" className="block text-black font-medium">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label htmlFor="email" className="block text-black font-medium">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="message" className="block text-black font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
              rows={4}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
