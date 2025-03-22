import Link from "next/link";
import { FaCarCrash, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/services/exterior-wash">
          <p className="link link-hover">Exterior Wash</p>
        </Link>
        <Link href="/services/interior-cleaning">
          <p className="link link-hover">Interior Cleaning</p>
        </Link>
        <Link href="/services/polishing">
          <p className="link link-hover">Polishing</p>
        </Link>
        <Link href="/services/ceramic-coating">
          <p className="link link-hover">Ceramic Coating</p>
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/about">
          <p className="link link-hover">About Us</p>
        </Link>
        <Link href="/contact">
          <p className="link link-hover">Contact</p>
        </Link>
        <Link href="/careers">
          <p className="link link-hover">Careers</p>
        </Link>
        <Link href="/press">
          <p className="link link-hover">Press</p>
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/terms-of-service">
          <p className="link link-hover">Terms of Service</p>
        </Link>
        <Link href="/privacy-policy">
          <p className="link link-hover">Privacy Policy</p>
        </Link>
        <Link href="/cookie-policy">
          <p className="link link-hover">Cookie Policy</p>
        </Link>
      </nav>

      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <FaCarCrash size={24} className="fill-current text-blue-600" />
          <p>
            Car Wash Experts
            <br />
            Providing quality cleaning services since 2010
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="fill-current text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="fill-current text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="fill-current text-blue-600" />
            </a>
          </div>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
