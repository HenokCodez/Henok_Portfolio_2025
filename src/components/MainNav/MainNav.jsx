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
    <nav className={`flex items-center p-4 fixed bottom-0 left-0 right-0 ${darkMode ? "dark-component " : "light-component "}`}>
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
          <button className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </li>
      </ul>

      {menuOpen && (
        <div ref={menuRef} className={`absolute bottom-18 rounded-4xl right-5 p-5 h-auto w-60 md:w-96 ${darkMode ? "dark-mode" : "light-mode"} shadow-lg`}>
          <ul className="flex flex-col gap-4">
            <li className="rounded-full p-2 text-center transition-all hover:bg-gray-200 dark:hover:bg-gray-700">
              <Link to="/about">About</Link>
            </li>
            <li className="rounded-full p-2 text-center transition-all hover:bg-gray-200 dark:hover:bg-gray-700">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MainNav;
