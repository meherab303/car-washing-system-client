"use client";
import { FaCar } from "react-icons/fa";

const PolishingPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-300 shadow-lg p-6 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <FaCar size={30} className="text-blue-500" />
          <h2 className="text-3xl text-black font-semibold">Polishing</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Our Polishing service restores the shine of your car’s paint. Here is
          how we do it:
        </p>

        <div className="mb-6">
          <h3 className="text-xl text-black font-semibold">
            Step-by-Step Process:
          </h3>
          <ul className="list-inside list-decimal ml-4">
            {[
              "Surface Prep: The car is thoroughly washed and dried.",
              "Clay Bar Treatment: Removes embedded contaminants.",
              "Machine Polishing: Enhances shine and removes minor scratches.",
              "Final Buffing: We apply a finishing compound for a glossy look.",
            ].map((step, index) => (
              <li key={index} className="text-gray-600">
                <strong>{step.split(":")[0]}:</strong> {step.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600">
          Get a smooth, mirror-like finish with our professional polishing
          service!
        </p>
      </div>
    </div>
  );
};

export default PolishingPage;
