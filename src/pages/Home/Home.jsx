import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import testimonials from "../../data/testimonials";

function Home({ darkMode }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const nameText = "Henok Binayew";
  const roles = ["Fullstack Developer", "UI/UX Designer", "Freelancer", "Problem Solver"];
  const skillIcons = ["JavaScript.png", "React.png", "Mongodb.png", "MySql.png", "Node.png", "Firebase.png", "Github.png", "Stripe(Payment Integration).png", "Ai-Integration.png"];
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Typing animation for name
  useEffect(() => {
    if (index < nameText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(nameText.slice(0, index + 1));
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Role cycling animation
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  // Testimonial sliding effect
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  // Auto-scroll effect for skill carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        setScrollPosition((prev) => {
          if (prev >= maxScroll) return 0;
          return prev + 1;
        });
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <main className={`absolute top-10 bottom-16  left-0 right-0 flex md:flex-row flex-col items-center gap-6 p-4 md:p-8 lg:p-12 overflow-x-hidden ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Left Box (Profile Section) */}
      <motion.div
        className={`w-full md:w-[60%] max-w-[600px] md:mt-28  lg:max-w-[700px] md:min-h-[576px] flex flex-col gap-6 rounded-xl p-8 transform-gpu ${darkMode ? "dark-component" : "light-component"}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div className="size-48 rounded-full overflow-hidden shadow-xl border-4 border-blue-500/20" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <img src="../../../public/profile.png" alt="profile image" className="w-full h-full rounded-full object-cover" loading="lazy" />
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
            {displayedText}
            <span className="animate-blink">|</span>
          </motion.p>

          <motion.div
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-medium text-center text-gray-600 dark:text-gray-300"
          >
            {roles[roleIndex]}
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full overflow-hidden max-w-[400px]">
            <div
              ref={carouselRef}
              className="flex flex-row gap-4 overflow-x-hidden"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              {skillIcons.concat(skillIcons).map((icon, index) => (
                <motion.div
                  key={index}
                  className="group relative flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={`../../../public/${icon}`} alt={icon} className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-200" loading="lazy" />
                  <span
                    className={`absolute top-[-3rem] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 ${
                      darkMode ? "bg-[#292929] text-gray-200" : "bg-gray-700 text-gray-200"
                    } text-xs font-medium rounded-md px-2 py-1 transition-opacity duration-300 pointer-events-none z-20`}
                  >
                    {icon.split(".")[0]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a href="/My-CV-2024.pdf" download="My-CV-2024.pdf">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Download CV
              </motion.button>
            </a>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all">
                Hire Me
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right Box (Testimonials Section) */}
      <motion.div
        className={`w-full md:w-[40%] max-w-[600px] md:mt-28  lg:max-w-[500px] md:min-h-[576px]  rounded-xl p-8 transform-gpu  ${darkMode ? "dark-component" : "light-component"}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">Client Testimonials</h2>
        <motion.div key={testimonialIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-4 rounded-full overflow-hidden shadow-md border-2 border-blue-500/20">
            <img src={testimonials[testimonialIndex].profilePic} alt={`${testimonials[testimonialIndex].name}'s profile`} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <p className="text-lg italic mb-3 text-gray-600 dark:text-gray-300">"{testimonials[testimonialIndex].text}"</p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{testimonials[testimonialIndex].name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{testimonials[testimonialIndex].role}</p>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Home;
