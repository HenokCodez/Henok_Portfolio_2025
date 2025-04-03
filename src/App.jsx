import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import TopNav from "./components/TopNav/TopNav";
import MainNav from "./components/MainNav/MainNav";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <TopNav dark={(mode) => setDarkMode(mode)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MainNav darkMode={darkMode} />
    </Router>
  );
}

export default App;
