"use client";
import "@/src/styles/landing.css"; // adjust based on your structure

export default function Landing() {
  return (
    <div
      className="relative h-[calc(100vh-64px)] bg-fixed -m-9 w-full bg-cover bg-center flex justify-center items-center text-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.7), transparent), url('/carwash.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative flex flex-col items-center">
        <h1
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider drop-shadow-2xl 
          bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text"
        >
          <span className="premium-fade-in text-blue-500 mr-2">Premium</span>
          <span className="carwash-slide-in">Car Wash</span>
        </h1>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mt-1 sm:mt-2 fade-in-up">
  Experience the shine like never before! 🚗✨
</p>

      </div>
    </div>
  );
}
