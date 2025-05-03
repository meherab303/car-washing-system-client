"use client";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-300 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-black">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have any questions or need assistance? Feel free to reach out to us
          using the form below.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-black font-medium">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-black font-medium">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-black font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
