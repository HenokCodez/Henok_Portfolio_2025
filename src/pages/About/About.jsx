import React from "react";
import { motion } from "framer-motion";

function About({ darkMode }) {
  const experiences = [
    {
      year: "2025 - Present",
      role: "Freelance Developer",
      company: "Upwork",
      description:
        "Embarking on a freelance career on Upwork, delivering high-quality web solutions to a global clientele. Specializing in custom web development, bug fixes, and feature enhancements, ensuring client satisfaction through timely delivery and effective communication.",
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Geez Geeks (Self-Employed)",
      year: "2024 - Present",
      description:
        "Leading a dynamic team to design, develop, and deploy innovative web solutions, including advanced school management systems, scalable e-commerce platforms, and bespoke websites for educational institutions, hotels, and local businesses. Notable projects include a collaborative Forum App, a feature-rich E-Commerce Platform, and custom landing pages optimized for conversion and user engagement.",
    },
    {
      year: "2024 - 2025",
      role: "Fullstack Development Student",
      company: "Evangadi Tech",
      description:
        "Completed a rigorous 6-month, project-based, and highly interactive Zoom course at Evangadi Tech (visit their website at www.evangaditech.com). Gained hands-on experience in full-stack development, focusing on real-world applications, collaborative coding, and modern web technologies, laying a solid foundation for my professional journey.",
    },
    {
      year: "2022 - Present",
      role: "Front End Developer",
      company: "Family Business",
      description:
        "Working as a front-end developer for the family business, focusing on creating responsive and user-friendly web interfaces. Responsibilities include designing and implementing web features, optimizing user experiences, and maintaining website performance using modern frameworks like React and JavaScript.",
    },
    {
      year: "2019 - 2022",
      role: "Self-Taught Front End Development",
      company: "Independent Learning",
      description:
        "Self-taught front-end development through online resources, tutorials, and personal projects. Gained proficiency in HTML, CSS, JavaScript, and React, building a strong foundation in creating interactive and visually appealing web interfaces. Developed several portfolio projects to showcase skills and problem-solving abilities.",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "API Integration", level: 85 },
    { name: "Git", level: 90 },
    { name: "UI/UX Design", level: 70 },
  ];

  return (
    <section className={`min-h-screen px-4 pb-28 pt-16 lg:pb-16 ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Bio Section */}
        <motion.div
          className={`flex flex-col md:flex-row gap-8 mb-16 p-8 rounded-xl ${darkMode ? "dark-component" : "light-component"}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="md:w-1/3 flex justify-center">
            <img src="/profile.png" alt="Henok Binayew" className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-blue-500/20" loading="lazy" />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I’m Henok, a dedicated and detail-oriented Full-Stack Web Developer with a strong focus on creating modern, scalable web applications. I specialize in transforming complex ideas into seamless digital solutions using clean code,
              effective design, and the latest technologies like React, Node.js, and MySQL. When I’m not coding, I’m exploring new tech trends or solving challenges for clients and personal projects.
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div className={`mb-16 p-6 rounded-xl ${darkMode ? "dark-component" : "light-component"}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Education</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <strong>High School:</strong> Excel Academy, National Exam Score: 553
            </li>
            <li>
              <strong>Current Studies:</strong> Software Engineering Degree at ASTU
              <ul className="list-disc list-inside pl-5 mt-2">
                <li>Year: Third Year</li>
                <li>CGPA: 3.7</li>
                <li>Relevant Courses: Python, Data Structures and Algorithms, Java, Database Systems, C++</li>
              </ul>
            </li>

            <strong className="flex items-center gap-2">
              Certifications:
              <a href="https://www.linkedin.com/in/henok-binayew/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-300">
                View on LinkedIn
              </a>
            </strong>
          </ul>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">My Journey</h3>
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 mb-8 p-6 rounded-xl ${darkMode ? "dark-component" : "light-component"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="md:w-1/4 text-center md:text-right">
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{exp.year}</p>
                </div>
                <div className="hidden md:block w-px h-16 bg-blue-500/20 absolute left-1/4"></div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exp.role}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div className={`mb-16 ${darkMode ? "dark-component" : "light-component"}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <h3 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} className={`p-6 rounded-xl ${darkMode ? "dark-component" : "light-component"}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-100">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: index * 0.1 }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Learning Focus Section */}
        <motion.div className={`mb-16 p-6 rounded-xl ${darkMode ? "dark-component" : "light-component"}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Current Learning Focus</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Advanced React Native for cross-platform mobile apps. - Electron.js for desktop application development. - Cloud Computing (AWS, Google Cloud) for scalable infrastructure. - Machine Learning basics for AI-enhanced web applications.
          </p>
        </motion.div>

        {/* What Sets Me Apart Section */}
        <motion.div className={`mb-16 p-6 rounded-xl ${darkMode ? "dark-component" : "light-component"}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}>
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">What Sets Me Apart</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-600 dark:text-gray-300">
            <li>Proactive learner with a growth mindset and openness to feedback.</li>
            <li>Proven ability to deliver projects on time and exceed expectations.</li>
            <li>Exceptional problem-solving skills and attention to detail.</li>
            <li>Commitment to writing clean, maintainable, and efficient code.</li>
            <li>Up-to-date with industry trends, frameworks, and best practices.</li>
            <li>Strong communication skills, ensuring clarity and alignment with clients and teams.</li>
          </ul>
        </motion.div>

        {/* Contact Button */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
