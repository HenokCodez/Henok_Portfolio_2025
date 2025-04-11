import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Briefcase, MessageSquare, Linkedin, Github } from "lucide-react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Define handleChange function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Basic validation function
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required.");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required.");
      return false;
    }
    setError(null);
    return true;
  };

  // Handle form submission with Web3Forms(Limited to 250 submissions per month)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const accessKey = "87aa8064-d7c7-42d8-a85a-4cd89f3c2512";
    const formEndpoint = "https://api.web3forms.com/submit";

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission",
          from_name: formData.name,
          replyto: formData.email,
          to: "henokbinayew21@gmail.com", // Your email address
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Submission error:", error);
    }
  };

  const contactLinks = [
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      label: "Gmail",
      href: "mailto:henokbinayew21@gmail.com",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~016c7cf89dfa2f6d80",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-600" />,
      label: "Fiverr",
      href: "https://www.fiverr.com/henok_codes/buying?source=avatar_menu_profile",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      label: "WhatsApp",
      href: "https://wa.me/0973231113",
    },
    {
      icon: <Linkedin className="w-8 h-8 text-blue-700" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/henok-binayew/",
    },
    {
      icon: <Github className="w-8 h-8 text-gray-800 dark:text-gray-200" />,
      label: "GitHub",
      href: "https://github.com/HenokCodez",
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
          📬 Contact Me
        </motion.h2>

        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info with Icons */}
          <motion.div className={`p-8 rounded-xl ${darkMode ? "dark-component" : "light-component"}`} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Get in Touch</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.div>
                  <span className="text-gray-700 dark:text-gray-200 text-center text-sm group-hover:text-blue-600 transition-colors duration-300">{link.label}</span>
                </motion.a>
              ))}
            </div>
            <div className="mt-6 text-gray-700 dark:text-gray-300">
              <p className="mb-2">
                🕐 <strong>Availability:</strong> I'm available for freelance work, remote opportunities, and collaborative projects.
              </p>
              <p>Feel free to reach out — I’ll get back to you as soon as possible.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className={`p-8 rounded-xl ${darkMode ? "dark-component" : "light-component"}`} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Send a Message</h3>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center text-green-600 dark:text-green-400">
                <p className="text-lg">Thank you for your message! I’ll get back to you soon.</p>
              </motion.div>
            ) : error ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center text-red-600 dark:text-red-400">
                <p className="text-lg">{error}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange} // Ensure this is correctly bound
                    className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} // Ensure this is correctly bound
                    className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange} // Ensure this is correctly bound
                    className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    required
                  />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Separate Navigation (if needed) - Move this to a separate component */}
      <nav className="fixed bottom-0 w-full bg-gray-800 dark:bg-gray-900 p-4 flex justify-around items-center">
        <a href="#home" className="text-white">
          Home
        </a>
        <a href="#projects" className="text-white">
          Projects
        </a>
        <a href="#services" className="text-white">
          Services
        </a>
        <a href="#about" className="text-white">
          About
        </a>
        <a href="#contact" className="text-white">
          Contact
        </a>
      </nav>
    </section>
  );
};

export default Contact;
