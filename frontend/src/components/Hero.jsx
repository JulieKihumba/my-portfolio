import React from "react";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-dot-pattern opacity-20 bg-size-[20px_20px] rounded-full translate-x-1/3" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <span className="inline-block text-terracotta font-medium mb-4 tracking-wide">
            HELLO, I'M
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-blue leading-tight mb-6">
            Juliet Wanjiru <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue to-blue/80">
              Kihumba
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray font-light mb-8 flex items-center gap-3">
            Software Engineer
            <span className="h-px flex-1 bg-gray/30 max-w-25"></span>
          </h2>
          <p className="text-lg text-blue/80 max-w-lg leading-relaxed mb-10">
            Crafting thoughtful digital experiences. A frontend specialist with
            a growing passion for backend architecture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <div className="px-8 py-3 bg-terracotta text-white rounded-full font-medium flex items-center gap-2 shadow-lg shadow-terracotta/20 hover:bg-terracotta/90 transition-colors">
                View My Work
                <FiArrowRight size={18} />
              </div>
            </Link>
            <Link to="/contact">
              <div className="px-8 py-3 border-2 border-blue text-blue rounded-full font-medium flex items-center gap-2 hover:bg-blue hover:text-white transition-colors">
                Get In Touch
                <FiMail size={18} />
              </div>
            </Link>
          </div>
        </div>
        <div
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Abstract geometric composition instead of photo */}
            <div className="absolute inset-0 border-2 border-blue/10 rounded-full transform rotate-6"></div>
            <div className="absolute inset-4 border border-terracotta/20 rounded-full transform -rotate-3"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-sage/10 rounded-full flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-30 bg-size-[16px_16px]"></div>
                <img
                  src="/jj1.png"
                  alt="JK"
                  className="w-64 h-64 object-cover rounded-full"
                />
              </div>
            </div>

            {/* Floating badges */}
            {/* <div
             
              className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-xl shadow-gray/10 border border-gray/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue">
                  Open to work
                </span>
              </div>
            </div> */}

            <div className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-xl shadow-gray/10 border border-gray/10">
              <div className="text-sm font-medium text-blue">
                <span className="text-terracotta font-bold">3+ Years</span>
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-gray/60 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
