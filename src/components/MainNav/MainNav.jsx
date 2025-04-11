import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function MainNav({ darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`flex items-center p-4 fixed bottom-0 left-0 right-0 ${darkMode ? "dark-component" : "light-component"}`}>
      <ul className="flex items-center justify-between w-full md:px-24">
        <li className="text-lg font-bold pb-2 border-b-2 border-transparent transition-all hover:border-black dark:hover:border-white">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg font-bold pb-2 border-b-2 border-transparent transition-all hover:border-black dark:hover:border-white">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="text-lg font-bold pb-2 border-b-2 border-transparent transition-all hover:border-black dark:hover:border-white">
          <Link to="/services">Services</Link>
        </li>
        <li className="hidden md:block text-lg font-bold pb-2 border-b-2 border-transparent transition-all hover:border-black dark:hover:border-white">
          <Link to="/about">About</Link>
        </li>

        <li className="hidden md:block text-lg font-bold pb-2 border-b-2 border-transparent transition-all hover:border-black dark:hover:border-white">
          <Link to="/contact">Contact</Link>
        </li>

        <li className="md:hidden relative">
          <button className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Mobile Menu" aria-expanded={menuOpen}>
            <Menu className="w-6 h-6" />
          </button>
        </li>
      </ul>

      {menuOpen && (
        <div ref={menuRef} className={`absolute bottom-16 right-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transform transition-all duration-300 ease-in-out ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`} role="menu">
          <ul className="flex flex-col gap-4">
            <li className="rounded-lg p-3 text-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
              <Link to="/about" className="block w-full h-full" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="rounded-lg p-3 text-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
              <Link to="/contact" className="block w-full h-full" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MainNav;
