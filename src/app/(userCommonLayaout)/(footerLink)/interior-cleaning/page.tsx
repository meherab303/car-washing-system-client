"use client";
import { FaCar } from "react-icons/fa";

const InteriorCleaningPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-300 shadow-lg p-6 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <FaCar size={30} className="text-blue-500" />
          <h2 className="text-3xl text-black font-semibold">
            Interior Cleaning
          </h2>
        </div>

        <p className="text-gray-600 mb-6">
          Our Interior Cleaning service ensures a fresh and spotless interior.
          Here is how we do it:
        </p>

        <div className="mb-6">
          <h3 className="text-xl text-black font-semibold">
            Step-by-Step Process:
          </h3>
          <ul className="list-inside list-decimal ml-4">
            {[
              "Vacuuming: We start by vacuuming the seats, carpets, and trunk.",
              "Surface Wipe: All interior surfaces are wiped and disinfected.",
              "Glass Cleaning: Interior windows and mirrors are polished for clarity.",
              "Odor Removal: We apply deodorizing treatments to ensure a fresh scent.",
            ].map((step, index) => (
              <li key={index} className="text-gray-600">
                <strong>{step.split(":")[0]}:</strong> {step.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600">
          Enjoy a clean and refreshing car interior with our deep cleaning
          service!
        </p>
      </div>
    </div>
  );
};

export default InteriorCleaningPage;
