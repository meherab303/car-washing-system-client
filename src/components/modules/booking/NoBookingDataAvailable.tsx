"use client";
import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";

const NoBookingDataAvailable = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md border border-white/30 shadow-lg p-10 rounded-2xl flex flex-col items-center"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="No Data"
          width={150}
          height={150}
          className="mb-6"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No Booking Data Available
        </h2>
        <p className="text-gray-600 text-center mb-4">
          It looks like we couldn not find any booking details. Please check
          your inputs or try again later.
        </p>
        <Button
          onPress={() => window.history.back()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </Button>
      </motion.div>
    </div>
  );
};

export default NoBookingDataAvailable;
