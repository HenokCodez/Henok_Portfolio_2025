import React from "react";
import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`min-h-screen px-4 pb-28 pt-16 lg:pb-16 ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          📬 Contact Me
        </motion.h2>

        <motion.p className="text-gray-600 dark:text-gray-300 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
          Whether you have a project in mind, want to collaborate, or just want to say hello — I’d love to hear from you!
        </motion.p>

        <motion.div className="space-y-4 text-left text-gray-700 dark:text-gray-200" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <p>
            <strong>Email:</strong> henokbinayew21@gmail.com
          </p>
          <p>
            <strong>Upwork:</strong>{" "}
            <a href="https://www.henokdev.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              www.henokdev.com
            </a>
          </p>
          <p>
            <strong>Fiverr:</strong>{" "}
            <a href="https://www.henokdev.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              www.henokdev.com
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a href="https://www.henokdev.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              www.henokdev.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/henokdev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              linkedin.com/in/henokdev
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/henokdev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              github.com/henokdev
            </a>
          </p>
        </motion.div>

        <motion.div className="mt-10 text-gray-700 dark:text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
          <p className="mb-2">
            🕐 <strong>Availability:</strong> I'm available for freelance work, remote opportunities, and collaborative projects.
          </p>
          <p>Feel free to reach out — I’ll get back to you as soon as possible.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
