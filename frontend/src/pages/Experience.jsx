import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
const experiences = [
  {
    role: "Software Engineer",
    company: "SajSoft",
    period: "Jan 2026 - Present",
    description:
      "Working on business management solutions using the Crystalline ERP system. Contributing to frontend development, system customization, and improving user workflows. Collaborating with cross-functional teams to build reliable, efficient, and scalable ERP features that support business operations.",
  },
  {
    role: "Web Developer (Remote)",
    company: "Zoommeek Africa",
    period: "May 2025 - Jun 2025",
    description:
      "Designed and customized an interactive company website to improve client engagement and visibility. Integrated automated messaging and email APIs, and ensured responsive, cross-browser compatibility using React, JavaScript, HTML, CSS, and Tailwind.",
  },
  {
    role: "Web Developer (Remote)",
    company: "Goldtech Solutions",
    period: "Oct 2024 - Nov 2024",
    description:
      "Developed a responsive company website using React and Tailwind CSS. Integrated email and messaging APIs and implemented Google Sign-In authentication for secure user access. Collaborated with the client to improve UI/UX and ensure proper deployment.",
  },
  {
    role: "Software Engineering Intern",
    company: "Murang’a County – Kang’ata Care",
    period: "May 2024 - Aug 2024",
    description:
      "Supported IT operations by troubleshooting system and network issues. Assisted development teams by reporting bugs and supporting system improvements. Processed and verified NHIF Kang’ata Card claims and contributed to maintaining reliable call center system performance.",
  },
];

const Experience = () => {
  return (
    <div className="py-24 bg-warmWhite relative">
      <div className="max-w-4xl mx-auto px-6">
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
            Experience
          </h2>
          <div className="h-1 w-20 bg-terracotta rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-terracotta/30 transform md:-translate-x-1/2 ml-4 md:ml-0"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
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
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-terracotta border-4 border-warmWhite transform md:-translate-x-1/2 translate-y-1.5 ml-2 md:ml-0 z-10 shadow-sm"></div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div
                    className={`bg-white p-6 rounded-2xl shadow-sm border border-coolGray/10 hover:shadow-md transition-shadow duration-300 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                  >
                    <h3 className="text-xl font-bold text-deepNavy mb-1">
                      {exp.role}
                    </h3>
                    <div
                      className={`flex items-center gap-2 text-terracotta font-medium text-sm mb-4 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                    >
                      <FiBriefcase size={14} />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-deepNavy/70 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex items-center gap-2 text-coolGray text-xs font-medium uppercase tracking-wider ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                    >
                      <FiCalendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
