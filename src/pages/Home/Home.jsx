import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home({ darkMode }) {
  const [expanded, setExpanded] = useState(null);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
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
    }, 2000); // Change role every 2 seconds
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  // Auto-scroll effect for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        setScrollPosition((prev) => {
          if (prev >= maxScroll) {
            return 0; // Reset to start when reaching the end
          }
          return prev + 1; // Smooth scrolling
        });
      }
    }, 30); // Adjust speed here (lower = faster)
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <main className={`absolute top-10 bottom-15 left-0 right-0 flex md:items-center gap-2 p-3.5 pt-7 md:pt-0 md:gap-6 md:p-8 overflow-x-hidden ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Left Box */}
      <motion.div
        className={`size-[40%] flex gap-2.5 md:h-[90%] md:w-[60%] cursor-pointer shadow-lg rounded-lg transform-gpu ${darkMode ? "dark-component" : "light-component"} ${
          expanded === "a" ? "absolute left-0 right-0 inset-0 w-full h-full z-10 md:w-full scale-100 px-[20%]" : "hover:scale-102"
        }`}
        onClick={() => handleExpand("a")}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="w-[50%] flex flex-col items-center justify-center p-4">
          <motion.div className="size-44 rounded-full overflow-hidden shadow-md" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <img src="../../../Public/profile.png" alt="profile image" className="w-full h-full rounded-full object-cover" />
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="text-3xl font-bold">
            {displayedText}
            <span className="animate-blink">|</span>
          </motion.p>

          {/* Animated Role Text */}
          <motion.div
            key={roleIndex} // Key changes with roleIndex to trigger animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-medium mt-2"
          >
            {roles[roleIndex]}
          </motion.div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 p-4">
          <div className="relative w-full overflow-hidden">
            <div
              ref={carouselRef}
              className="flex flex-row gap-4 overflow-x-hidden"
              style={{
                width: "100%",
                maxWidth: "320px", // 4 icons * (80px width + gap)
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", // Fade edges
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", // For Safari
              }}
            >
              {skillIcons.concat(skillIcons).map((icon, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <img src={`../../../Public/${icon}`} alt={icon} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-200" />
                  <span
                    className={`absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 ${
                      darkMode ? "bg-[#292929] text-gray-200" : "bg-gray-700 text-gray-200"
                    } text-xs font-medium rounded-md px-2 py-1 transition-opacity duration-300 pointer-events-none z-20`}
                  >
                    {icon.split(".")[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-5">
            <a href="/Henok_CV.pdf" download="Henok_CV.pdf">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all cursor-pointer">
                Download CV
              </motion.button>
            </a>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all cursor-pointer">
                Hire Me
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right Box */}
      <motion.div
        className={`size-[40%] md:h-[90%] md:w-[40%] cursor-pointer shadow-lg rounded-lg transform-gpu ${darkMode ? "dark-component" : "light-component"} ${
          expanded === "b" ? "absolute inset-0 w-full h-full z-10 md:w-full scale-100" : "hover:scale-102"
        }`}
        onClick={() => handleExpand("b")}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="flex items-center justify-center h-full text-2xl font-semibold">Content Coming Soon</div>
      </motion.div>
    </main>
  );
}

export default Home;
