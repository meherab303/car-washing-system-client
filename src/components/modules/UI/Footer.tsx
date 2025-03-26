import Link from "next/link";
import { FaCar, FaCarCrash, FaFacebook, FaInstagram, FaTwitter, FaWater } from "react-icons/fa";
import { BiSolidCarWash } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="text-xl font-semibold mb-4">Services</h6>
            <Link href="/exteriorWash">
              <p className="link link-hover text-lg hover:text-blue-300 transition-all duration-200">Exterior Wash</p>
            </Link>
            <Link href="/interior-cleaning">
              <p className="link link-hover text-lg hover:text-blue-300 transition-all duration-200">Interior Cleaning</p>
            </Link>
            <Link href="/polishing">
              <p className="link link-hover text-lg hover:text-blue-300 transition-all duration-200">Polishing</p>
            </Link>
            <Link href="/ceramic-coating">
              <p className="link link-hover text-lg hover:text-blue-300 transition-all duration-200">Ceramic Coating</p>
            </Link>
          </div>

          {/* Company Section */}
          <div>
            <h6 className="text-xl font-semibold mb-4">Company</h6>
            <Link href="/about">
              <p className="link link-hover text-lg hover:text-blue-300 transition-all duration-200">About Us</p>
            </Link>
            <Link href="/contact">
              <p className="link link-hover text-lg hover:text-blue-300 transition-all duration-200">Contact</p>
            </Link>
            
          </div>

          {/* Legal Section */}
          <div>
            <h6 className="text-xl font-semibold mb-4">Legal</h6>
            <Link href="/terms-of-service">
              <p className="link link-hover text-lg hover:text-blue-300 transition-all duration-200">Terms of Service</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="link link-hover text-lg hover:text-blue-300 transition-all duration-200">Privacy Policy</p>
            </Link>
            <Link href="/cookie-policy">
              <p className="link link-hover text-lg hover:text-blue-300 transition-all duration-200">Cookie Policy</p>
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2">
          <BiSolidCarWash  size={25}/>
              <p className="font-semibold text-xl">Car Wash Experts</p>
            </div>
            <p className="text-center">Providing quality cleaning services since 2010</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-white transition-all duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-all duration-300"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 py-4 mt-8 w-11/12 mx-auto rounded-full">
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Car Wash Experts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
