"use client";

const CookiePolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-300 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Cookie Policy
        </h2>
        <p className="text-gray-600 mb-4">
          This Cookie Policy explains how we use cookies and similar
          technologies to improve your experience.
        </p>
        <h3 className="text-xl font-semibold text-black">
          1. What Are Cookies?
        </h3>
        <p className="text-gray-600 mb-3">
          Cookies are small files stored on your device to enhance site
          functionality.
        </p>
        <h3 className="text-xl font-semibold text-black">
          2. How We Use Cookies
        </h3>
        <p className="text-gray-600 mb-3">
          We use cookies for website analytics, personalization, and security.
        </p>
        <h3 className="text-xl font-semibold text-black">
          3. Managing Cookies
        </h3>
        <p className="text-gray-600">
          You can disable cookies in your browser settings. However, this may
          affect site performance.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
