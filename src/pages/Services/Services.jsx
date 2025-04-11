import React from "react";
import { motion } from "framer-motion";
import { Code, Paintbrush, Rocket, Brain } from "lucide-react";

function Services({ darkMode }) {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Web Development",
      description: "Building responsive, high-performance web applications using React, Node.js, and more.",
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-green-600" />,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing interfaces that enhance user experience.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-600" />,
      title: "App Optimization",
      description: "Optimizing web apps for speed, scalability, and seamless performance.",
    },
    {
      icon: <Brain className="w-12 h-12 text-red-600" />,
      title: "AI Integration",
      description: "Integrating AI-powered features to make your app smarter and more efficient.",
    },
    {
      icon: <Code className="w-12 h-12 text-yellow-600" />,
      title: "Fullstack Web Apps",
      description: "End-to-end development of robust fullstack web applications tailored to your needs.",
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-indigo-600" />,
      title: "Simple Websites and Landing Pages",
      description: "Creating clean, professional websites and landing pages to boost your online presence.",
    },
    {
      icon: <Brain className="w-12 h-12 text-teal-600" />,
      title: "Personal Tutoring",
      description: "Experienced in tutoring university students in Python, C++, JS, MERN, and programming fundamentals. Available in-person for local clients and via Zoom for others.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-orange-600" />,
      title: "SEO",
      description: "Implementing search engine optimization strategies to improve your website's visibility and ranking.",
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-pink-600" />,
      title: "Web Copy",
      description: "Crafting compelling and conversion-focused copy for your website to engage and convert visitors.",
    },
  ];

  return (
    <section className={`min-h-screen px-4 pb-28 pt-16  ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl text-center ${darkMode ? "dark-component" : "light-component"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
