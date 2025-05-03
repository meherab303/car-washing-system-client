import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiSolidCarWash } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Services Section */}
          <div>
            <h6 className="text-xl font-semibold mb-4">Services</h6>
            <div className="space-y-2">
              <Link
                href="/exteriorWash"
                className="block hover:text-blue-300 transition-all"
              >
                Exterior Wash
              </Link>
              <Link
                href="/interior-cleaning"
                className="block hover:text-blue-300 transition-all"
              >
                Interior Cleaning
              </Link>
              <Link
                href="/polishing"
                className="block hover:text-blue-300 transition-all"
              >
                Polishing
              </Link>
              <Link
                href="/ceramic-coating"
                className="block hover:text-blue-300 transition-all"
              >
                Ceramic Coating
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h6 className="text-xl font-semibold mb-4">Company</h6>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block hover:text-blue-300 transition-all"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block hover:text-blue-300 transition-all"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h6 className="text-xl font-semibold mb-4">Legal</h6>
            <div className="space-y-2">
              <Link
                href="/terms-of-service"
                className="block hover:text-blue-300 transition-all"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="block hover:text-blue-300 transition-all"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="block hover:text-blue-300 transition-all"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <div className="flex items-center gap-2">
              <BiSolidCarWash size={25} />
              <p className="font-semibold text-xl">Car Wash Experts</p>
            </div>
            <p className="text-center sm:text-left">
              Providing quality cleaning services since 2010
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-white transition-all"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-white transition-all"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-all"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 py-4 mt-8 w-11/12 mx-auto rounded-full text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Car Wash Experts. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
