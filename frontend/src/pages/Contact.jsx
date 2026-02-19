import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-blue/80 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to drop me a message!
            </p>
            <div className="space-y-6 mb-10">
              <a
                href="mailto:julie@example.com"
                className="flex items-center gap-4 text-blue hover:text-terracotta transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray/10 group-hover:border-terracotta/30 transition-colors">
                  <FiMail size={20} />
                </div>
                <span className="font-medium">kihumbawanjiru08@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-blue">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray/10">
                  <FiMapPin size={20} />
                </div>
                <span className="font-medium">Nairobi, Kenya</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/JulieKihumba"
                target="_blank"
                className="w-12 h-12 bg-blue text-white rounded-full flex items-center justify-center hover:bg-terracotta transition-colors shadow-lg shadow-blue/20"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/juliet-w-kihumba/"
                target="_blank"
                className="w-12 h-12 bg-blue text-white rounded-full flex items-center justify-center hover:bg-terracotta transition-colors shadow-lg shadow-blue/20"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-blue">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-blue"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-blue"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-terracotta text-white font-medium rounded-xl hover:bg-terracotta/90 transition-colors shadow-lg shadow-terracotta/20 flex items-center justify-center gap-2"
              >
                Send Message
                <FiSend size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
