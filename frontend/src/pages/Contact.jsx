import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deepNavy mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-deepNavy/80 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to drop me a message!
            </p>
            <div className="space-y-6 mb-10">
              <a
                href="mailto:julie@example.com"
                className="flex items-center gap-4 text-deepNavy hover:text-terracotta transition-colors group"
              >
                <div className="w-12 h-12 bg-warmWhite rounded-full flex items-center justify-center border border-coolGray/10 group-hover:border-terracotta/30 transition-colors">
                  <FiMail size={20} />
                </div>
                <span className="font-medium">kihumbawanjiru08@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-deepNavy">
                <div className="w-12 h-12 bg-warmWhite rounded-full flex items-center justify-center border border-coolGray/10">
                  <FiMapPin size={20} />
                </div>
                <span className="font-medium">Nairobi, Kenya</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-deepNavy text-white rounded-full flex items-center justify-center hover:bg-terracotta transition-colors shadow-lg shadow-deepNavy/20"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-deepNavy text-white rounded-full flex items-center justify-center hover:bg-terracotta transition-colors shadow-lg shadow-deepNavy/20"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="bg-warmWhite p-8 md:p-10 rounded-3xl shadow-sm border border-coolGray/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-deepNavy"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-coolGray/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-deepNavy"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-coolGray/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-deepNavy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-coolGray/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
