import React from "react";
import { motion } from "framer-motion";

const frontendSkills = [
  "React",
  // "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Next.js",
  // "Figma",
  // "Redux",
  "Framer Motion",
];
const backendSkills = [
  "Node.js",
  "Express",
  // "PostgreSQL",
  "MongoDB",
  "REST APIs",
];
const tools = [
  "Git & GitHub",
  "VS Code",
  "Responsive Design",
  //  "Jest",
  //  "CI/CD"
];

const Skills = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="py-24 bg-warmWhite relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-coolGray/20 to-transparent"></div>

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
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deepNavy mb-4">
            Technical Skills
          </h2>
          <p className="text-coolGray max-w-2xl mx-auto">
            My technical toolkit is constantly evolving. Here are the
            technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Column */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-coolGray/10"
          >
            <h3 className="text-2xl font-serif font-bold text-deepNavy mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-terracotta rounded-full"></span>
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-4 py-2 bg-terracotta/10 text-terracotta font-medium rounded-lg text-sm border border-terracotta/20 hover:bg-terracotta hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend & Tools Column */}
          <div className="space-y-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-coolGray/10"
            >
              <h3 className="text-2xl font-serif font-bold text-deepNavy mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-sage rounded-full"></span>
                Backend (Learning)
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-4 py-2 bg-sage/10 text-sage font-medium rounded-lg text-sm border border-sage/20 relative overflow-hidden group hover:bg-sage hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                    <span className="absolute top-0 right-0 w-2 h-2 bg-sage rounded-full -mr-1 -mt-1"></span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-coolGray/10"
            >
              <h3 className="text-2xl font-serif font-bold text-deepNavy mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-deepNavy rounded-full"></span>
                Tools & Practices
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-4 py-2 bg-deepNavy/5 text-deepNavy font-medium rounded-lg text-sm border border-deepNavy/10 hover:bg-deepNavy hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
