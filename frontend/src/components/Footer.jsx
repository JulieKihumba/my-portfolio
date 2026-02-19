import React from "react";
import { FiGithub, FiHeart, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-white border-t border-gray/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-xl font-bold text-blue mb-2">
            Juliet W. Kihumba
          </h3>
          <p className="text-gray text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/JulieKihumba"
            target="_blank"
            className="text-gray hover:text-terracotta transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/juliet-w-kihumba/"
            target="_blank"
            className="text-gray hover:text-terracotta transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
        </div>

        {/* <div className="flex items-center gap-2 text-sm text-blue/60">
          <span>Built with React & lots of coffee</span>
          <FiHeart size={14} className="text-terracotta fill-terracotta" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
