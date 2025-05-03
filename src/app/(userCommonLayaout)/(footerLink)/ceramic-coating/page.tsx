"use client";
import { FaCar } from "react-icons/fa";

const CeramicCoatingPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-300 shadow-lg p-6 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <FaCar size={30} className="text-blue-500" />
          <h2 className="text-3xl text-black font-semibold">Ceramic Coating</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Our Ceramic Coating service provides long-lasting protection. Here is
          how we do it:
        </p>

        <div className="mb-6">
          <h3 className="text-xl text-black font-semibold">
            Step-by-Step Process:
          </h3>
          <ul className="list-inside list-decimal ml-4">
            {[
              "Deep Cleaning: The car is washed and decontaminated.",
              "Paint Correction: We remove any swirl marks or imperfections.",
              "Ceramic Coating Application: A protective layer is applied for durability.",
              "Curing Time: The coating is left to bond for optimal protection.",
            ].map((step, index) => (
              <li key={index} className="text-gray-600">
                <strong>{step.split(":")[0]}:</strong> {step.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600">
          Experience the ultimate protection with our premium ceramic coating
          service!
        </p>
      </div>
    </div>
  );
};

export default CeramicCoatingPage;
