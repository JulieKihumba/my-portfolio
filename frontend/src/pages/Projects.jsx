import React from "react";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Goldtech Solutions Company Website",
    description:
      "A responsive company website built to enhance online presence and client communication. Features secure Google Sign-In authentication, API integration for messaging and email workflows, and a clean, modern user interface optimized for performance and accessibility.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Google Authentication",
      "HTML",
      "CSS",
    ],
    links: {
      github: "https://github.com/JulieKihumba/GoldTech",
      demo: "https://github.com/JulieKihumba/GoldTech",
    },
    color: "bg-terracotta",
    iconColor: "text-terracotta",
  },
  {
    title: "Zoommeek Africa Interactive Website",
    description:
      "An interactive business website designed to improve client engagement and visibility. Includes automated email and messaging integrations, responsive design across devices, and optimized UI components built with clean and maintainable code.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
    links: {
      github: "https://github.com/JulieKihumba/zoomeek-project",
      demo: "zoomeek-project.vercel.app",
    },
    color: "bg-sage",
    iconColor: "text-sage",
  },
  {
    title: "Chrisy Arts website",
    description:
      "A responsive company website developed to showcase services and improve client engagement. Features secure Google Sign-In authentication, messaging and email API integration, and a modern, user-friendly interface designed for performance and accessibility.",
    tags: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    links: {
      github: "https://github.com/JulieKihumba/Nick-s-Airbrush",
      demo: "https://github.com/JulieKihumba/Nick-s-Airbrush",
    },
    color: "bg-blue",
    iconColor: "text-blue",
  },
  // {
  //   title: "ShopEase",
  //   description:
  //     "A modern e-commerce frontend interface with product filtering, cart management, and seamless checkout flow integration.",
  //   tags: ["React", "Redux", "Stripe"],
  //   links: {
  //     github: "#",
  //     demo: "#",
  //   },
  //   color: "bg-gray",
  // },
];

const Projects = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-terracotta rounded-full"></div>
          </div>
          <p className="text-gray max-w-md text-right md:text-left">
            A selection of projects that showcase my journey in building robust
            and scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className={`h-2 w-full ${project.color}`}></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-gray/20">
                    <FiFolder size={24} className={project.iconColor} />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      className="text-gray hover:text-blue transition-colors p-2 hover:bg-gray-100 rounded-full"
                      aria-label="View Source"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      className="text-gray hover:text-blue transition-colors p-2 hover:bg-gray-100 rounded-full"
                      aria-label="View Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-blue mb-3 group-hover:text-terracotta transition-colors">
                  {project.title}
                </h3>

                <p className="text-blue/70 mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 bg-white border border-gray/20 rounded-full text-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/JulieKihumba"
            target="_blank"
            className="inline-flex items-center gap-2 text-blue font-medium hover:text-terracotta transition-colors border-b border-blue hover:border-terracotta pb-1"
          >
            View more projects on GitHub <FiExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
