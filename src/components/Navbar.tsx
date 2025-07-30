
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Briefcase } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-luxury-navy/90 backdrop-blur-sm py-3 shadow-md" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-luxury-gold">
          Sohail Khan
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`nav-link ${isActiveRoute("/") ? "text-luxury-gold" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActiveRoute("/about") ? "text-luxury-gold" : ""}`}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${isActiveRoute("/portfolio") ? "text-luxury-gold" : ""}`}
          >
            Portfolio
          </Link>
          <Link
            to="/games"
            className={`nav-link ${isActiveRoute("/games") ? "text-luxury-gold" : ""}`}
          >
            Games
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActiveRoute("/contact") ? "text-luxury-gold" : ""}`}
          >
            Contact
          </Link>
          <Link
            to="/for-recruiters"
            className={`nav-link flex items-center ${isActiveRoute("/for-recruiters") ? "text-luxury-gold" : ""}`}
          >
            <Briefcase className="mr-1" size={16} />
            For Recruiters
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="md:hidden absolute top-full left-0 right-0 bg-luxury-navy/95 backdrop-blur-sm border-b border-luxury-gold/20"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-lg ${isActiveRoute("/") ? "text-luxury-gold" : "text-white"}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-lg ${isActiveRoute("/about") ? "text-luxury-gold" : "text-white"}`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className={`text-lg ${isActiveRoute("/portfolio") ? "text-luxury-gold" : "text-white"}`}
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                to="/games"
                className={`text-lg ${isActiveRoute("/games") ? "text-luxury-gold" : "text-white"}`}
                onClick={toggleMenu}
              >
                Games
              </Link>
              <Link
                to="/contact"
                className={`text-lg ${isActiveRoute("/contact") ? "text-luxury-gold" : "text-white"}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/for-recruiters"
                className={`text-lg flex items-center ${isActiveRoute("/for-recruiters") ? "text-luxury-gold" : "text-white"}`}
                onClick={toggleMenu}
              >
                <Briefcase className="mr-1" size={16} />
                For Recruiters
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
