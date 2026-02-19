import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiDownload, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-blue">
          Juliet W. Kihumba
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-blue hover:text-terracotta transition-colors text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-blue hover:text-terracotta transition-colors text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/skills"
              className="text-blue hover:text-terracotta transition-colors text-base font-medium"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="text-blue hover:text-terracotta transition-colors text-base font-medium"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="text-blue hover:text-terracotta transition-colors text-base font-medium"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="text-blue hover:text-terracotta transition-colors text-base font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="h-6 w-px bg-gray/30 mx-4" />
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/JulieKihumba"
              target="_blank"
              className="text-blue hover:text-terracotta transition-colors"
            >
              <FiGithub className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/juliet-w-kihumba/"
              target="_blank"
              className="text-blue hover:text-terracotta transition-colors"
            >
              <FiLinkedin className="size-6" />
            </a>
            <Link
              to="/"
              className="flex items-center space-x-2 bg-blue text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-terracotta transition-colors"
            >
              <FiDownload className="size-4" />
              <span>Resume</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX className="size-7" /> : <FiMenu className="size-7" />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div>
        {isOpen && (
          <div
            
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden border-t border-gray/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              <Link
                to="/"
                className="text-blue hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-blue hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/skills"
                className="text-blue hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="text-blue hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/experience"
                className="text-blue hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="/contact"
                className="text-blue hover:text-terracotta text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="h-px w-full bg-gray/20 my-4" />
              <div className="flex items-center space-x-6 pt-2">
                <a
                  href="https://github.com/JulieKihumba"
                  target="_blank"
                  className="text-blue hover:text-terracotta"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/juliet-w-kihumba/"
                  target="_blank"
                  className="text-blue hover:text-terracotta"
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
