import { motion } from "framer-motion";
import { Spinner, Card } from "@nextui-org/react";

const BookingPageLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/10 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-white/5 blur-3xl rounded-full"
      ></motion.div>

      {/* Glassmorphism Loading Card */}
      <Card className="p-8 shadow-lg rounded-xl backdrop-blur-md bg-white/10 border border-white/30 flex flex-col items-center text-white">
        <Spinner size="lg" color="white" />
        <motion.h2
          className="text-xl font-semibold mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Loading Booking Page...
        </motion.h2>
      </Card>
    </div>
  );
};

export default BookingPageLoading;
