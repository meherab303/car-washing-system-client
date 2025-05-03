"use client";

import {
  FaBullseye,
  FaStar,
  FaClock,
  FaShoppingCart,
  FaHandSparkles,
  FaMapMarkerAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-10"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.7), transparent), url('/carwash.jpg')",
      }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
        About <span className="text-blue-400">Car Wash Booking</span>
      </h2>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
        {/* Our Mission */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center shadow-lg">
          <FaBullseye className="text-blue-400 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            🚗 Our Mission
          </h3>
          <p className="text-gray-300">
            To provide a seamless, time-saving car wash experience through easy
            online booking, high-quality services, and flexible scheduling
            options.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center shadow-lg">
          <FaStar className="text-blue-400 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            🛠️ Why Choose Us?
          </h3>
          <p className="text-gray-300">
            ✅ Easy Booking – Schedule in seconds. ✅ Top-Tier Service –
            Professional-grade cleaning. ✅ Eco-Friendly Products – Safe for
            your car & the planet.
          </p>
        </div>

        {/* No Wait Time */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center shadow-lg">
          <FaClock className="text-blue-400 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            ⏳ No Wait Time
          </h3>
          <p className="text-gray-300">
            Book online and get served instantly at your preferred time.
          </p>
        </div>

        {/* Easy Payment */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center shadow-lg">
          <FaShoppingCart className="text-blue-400 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            {" "}
            💸 Easy Payment
          </h3>
          <p className="text-gray-300">
            Secure and fast transactions for a hassle-free experience.
          </p>
        </div>

        {/* Premium Cleaning */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center shadow-lg">
          <FaHandSparkles className="text-blue-400 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            💦 Premium Cleaning
          </h3>
          <p className="text-gray-300">
            We use eco-friendly products to give your car a spotless shine.
          </p>
        </div>

        {/* Flexible Locations */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center shadow-lg">
          <FaMapMarkerAlt className="text-blue-400 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            📍 Flexible Locations
          </h3>
          <p className="text-gray-300">
            Get a wash at home, office, or visit our center.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
