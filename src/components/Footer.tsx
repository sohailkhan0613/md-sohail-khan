
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-luxury-navy border-t border-luxury-gold/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold text-luxury-gold">
              Sohail Khan
            </Link>
            <p className="mt-4 text-luxury-lightGray">
              Senior Software Engineer specializing in web application development, AI, and 
              creating engaging user experiences.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xl font-serif font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-luxury-lightGray hover:text-luxury-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-luxury-lightGray hover:text-luxury-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-luxury-lightGray hover:text-luxury-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-luxury-lightGray hover:text-luxury-gold transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-luxury-lightGray hover:text-luxury-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xl font-serif font-bold text-white mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/sohailkhan0613"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-lightGray hover:text-luxury-gold transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-sohail-khan-8b59a41ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-lightGray hover:text-luxury-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sk581470@gmail.com"
                className="text-luxury-lightGray hover:text-luxury-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+919381635201"
                className="text-luxury-lightGray hover:text-luxury-gold transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
            <p className="text-luxury-lightGray">
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-luxury-gold/10 text-center text-luxury-lightGray">
          <p>&copy; {new Date().getFullYear()} Mohd Sohail Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
