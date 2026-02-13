import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiDownload, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-warmWhite/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-deepNavy">
          Juliet W. Kihumba
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-deepNavy hover:text-terracotta transition-colors text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-deepNavy hover:text-terracotta transition-colors text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/skills"
              className="text-deepNavy hover:text-terracotta transition-colors text-base font-medium"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="text-deepNavy hover:text-terracotta transition-colors text-base font-medium"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="text-deepNavy hover:text-terracotta transition-colors text-base font-medium"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="text-deepNavy hover:text-terracotta transition-colors text-base font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="h-6 w-px bg-coolGray/30 mx-4" />
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/JulieKihumba"
              target="_blank"
              className="text-deepNavy hover:text-terracotta transition-colors"
            >
              <FiGithub className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/juliet-w-kihumba/"
              target="_blank"
              className="text-deepNavy hover:text-terracotta transition-colors"
            >
              <FiLinkedin className="size-6" />
            </a>
            <Link
              to="/"
              className="flex items-center space-x-2 bg-deepNavy text-warmWhite px-4 py-2 rounded-full text-sm font-medium hover:bg-terracotta transition-colors"
            >
              <FiDownload className="size-4" />
              <span>Resume</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-deepNavy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX className="size-7" /> : <FiMenu className="size-7" />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="absolute top-full left-0 right-0 bg-warmWhite shadow-lg md:hidden border-t border-coolGray/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              <Link
                to="/"
                className="text-deepNavy hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-deepNavy hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/skills"
                className="text-deepNavy hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="text-deepNavy hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/experience"
                className="text-deepNavy hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="/contact"
                className="text-deepNavy hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="h-px w-full bg-coolGray/20 my-4" />
              <div className="flex items-center space-x-6 pt-2">
                <a
                  href="https://github.com/JulieKihumba"
                  target="_blank"
                  className="text-deepNavy hover:text-terracotta"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/juliet-w-kihumba/"
                  target="_blank"
                  className="text-deepNavy hover:text-terracotta"
                >
                  <FiLinkedin size={24} />
                </a>
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-terracotta font-medium"
                >
                  <FiDownload size={20} />
                  <span>Download CV</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
