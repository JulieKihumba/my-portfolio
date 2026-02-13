import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCoffee, FiMapPin } from "react-icons/fi";

const About = () => {
  return (
    <div className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deepNavy mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-terracotta rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
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
              delay: 0.2,
            }}
            className="md:col-span-7 space-y-6 text-lg text-deepNavy/80 leading-relaxed"
          >
            <p>
              Hello! I’m Julie, a Software Engineer based in Nairobi and a
              graduate of Murang’a University of Technology, where I earned a
              Bachelor of Science in Software Engineering (Second Class Upper
              Division). My journey into tech began with curiosity about how
              systems work, which grew into a passion for building practical and
              impactful digital solutions.
            </p>
            <p>
              I specialize in frontend development using React, JavaScript,
              HTML, CSS, and Tailwind. I enjoy creating responsive, accessible,
              and user-friendly web applications that deliver smooth user
              experiences. As I continue growing professionally, I am actively
              exploring backend development to strengthen my skills and become a
              well-rounded full-stack engineer.
            </p>
            <p>
              Outside of tech, I’m a coffee lover who enjoys a good cup while
              learning, building, or reflecting on new ideas. I believe in
              continuous growth, clean code, and building software that is both
              functional and meaningful.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3 p-4 bg-warmWhite rounded-lg border border-coolGray/10">
                <FiMapPin className="text-terracotta" size={24} />
                <div>
                  <h4 className="font-bold text-deepNavy text-sm">Location</h4>
                  <p className="text-sm text-coolGray">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-warmWhite rounded-lg border border-coolGray/10">
                <FiCode className="text-sage" size={24} />
                <div>
                  <h4 className="font-bold text-deepNavy text-sm">Focus</h4>
                  <p className="text-sm text-coolGray">Frontend + Backend</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-warmWhite rounded-lg border border-coolGray/10">
                <FiCoffee className="text-deepNavy" size={24} />
                <div>
                  <h4 className="font-bold text-deepNavy text-sm">Fuel</h4>
                  <p className="text-sm text-coolGray">Coffee Lover</p>
                </div>
              </div>
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
              delay: 0.4,
            }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-coolGray/10">
              <img src="/jj2.png" alt="Julie" className="w-full h-full object-cover" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-terracotta rounded-tl-3xl m-4"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-sage rounded-br-3xl m-4"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
