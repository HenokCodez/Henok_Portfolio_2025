import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../../data/projects";
import { ExternalLink, Github } from "lucide-react";

function Projects({ darkMode }) {
  const categories = ["All", "React", "HTML/CSS/JS", "Fullstack MERN", "Firebase"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  // Animation variants for the overlay content
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  // Animation variants for the buttons
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <section className={`min-h-screen px-4 pb-28 pt-16 ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg" : darkMode ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`relative rounded-xl overflow-hidden ${darkMode ? "dark-component" : "light-component"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }} // Subtle scale on hover for the entire card
              >
                {/* Image (no navigation on click) */}
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" loading="lazy" />

                {/* Overlay */}
                <motion.div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6 opacity-0" whileHover="visible" initial="hidden" variants={overlayVariants}>
                  {/* Title */}
                  <motion.h3 className="text-xl font-semibold text-white mb-2" variants={overlayVariants}>
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p className="text-gray-300 mb-4" variants={overlayVariants}>
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div className="flex flex-wrap justify-center gap-2 mb-6" variants={overlayVariants}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-600/50 text-white text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {/* Visit Live Site Button (shown only if project.link exists) */}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition-all"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Live
                      </motion.a>
                    )}

                    {/* View on GitHub Button (shown only if project.github exists) */}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg shadow-md hover:from-gray-800 hover:to-gray-700 transition-all"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <motion.p className="text-center text-gray-600 dark:text-gray-400 col-span-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              No projects found in this category.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
