import React from "react";

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
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-4">
            Technical Skills
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            My technical toolkit is constantly evolving. Here are the
            technologies I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Column */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray/10">
            <h3 className="text-2xl font-serif font-bold text-blue mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-terracotta rounded-full"></span>
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-terracotta/10 text-terracotta font-medium rounded-lg text-sm border border-terracotta/20 hover:bg-terracotta hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Tools Column */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray/10">
              <h3 className="text-2xl font-serif font-bold text-blue mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-sage rounded-full"></span>
                Backend (Learning)
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-sage/10 text-sage font-medium rounded-lg text-sm border border-sage/20 relative overflow-hidden group hover:bg-sage hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                    <span className="absolute top-0 right-0 w-2 h-2 bg-sage rounded-full -mr-1 -mt-1"></span>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray/10">
              <h3 className="text-2xl font-serif font-bold text-blue mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue rounded-full"></span>
                Tools & Practices
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue/5 text-blue font-medium rounded-lg text-sm border border-blue/10 hover:bg-blue hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
