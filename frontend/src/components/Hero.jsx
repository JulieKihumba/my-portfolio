import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-dot-pattern opacity-20 bg-size-[20px_20px] rounded-full translate-x-1/3" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="inline-block text-terracotta font-medium mb-4 tracking-wide"
          >
            HELLO, I'M
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-deepNavy leading-tight mb-6">
            Juliet Wanjiru <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-deepNavy to-deepNavy/80">
              Kihumba
            </span>
          </h1>
          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="text-2xl md:text-3xl text-coolGray font-light mb-8 flex items-center gap-3"
          >
            Software Engineer
            <span className="h-px flex-1 bg-coolGray/30 max-w-25"></span>
          </motion.h2>
          <p className="text-lg text-deepNavy/80 max-w-lg leading-relaxed mb-10">
            Crafting thoughtful digital experiences. A frontend specialist with
            a growing passion for backend architecture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-8 py-3 bg-terracotta text-warmWhite rounded-full font-medium flex items-center gap-2 shadow-lg shadow-terracotta/20 hover:bg-terracotta/90 transition-colors"
              >
                View My Work
                <FiArrowRight size={18} />
              </motion.div>
            </Link>
            <Link to="/contact">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-8 py-3 border-2 border-deepNavy text-deepNavy rounded-full font-medium flex items-center gap-2 hover:bg-deepNavy hover:text-warmWhite transition-colors"
              >
                Get In Touch
                <FiMail size={18} />
              </motion.div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Abstract geometric composition instead of photo */}
            <div className="absolute inset-0 border-2 border-deepNavy/10 rounded-full transform rotate-6"></div>
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
            {/* <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
              }}
              className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-xl shadow-coolGray/10 border border-coolGray/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-deepNavy">
                  Open to work
                </span>
              </div>
            </motion.div> */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-xl shadow-coolGray/10 border border-coolGray/10"
            >
              <div className="text-sm font-medium text-deepNavy">
                <span className="text-terracotta font-bold">3+ Years</span>{" "}
                Experience
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-coolGray/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-coolGray/60 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
