import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function App({ dark }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`flex items-center relative top-0 left-0 right-0 justify-end p-0.5 ${darkMode ? "dark-mode" : "light-mode"}`}>
      <button
        className="text-black dark:text-amber-400 mr-8 md:mr-20 cursor-pointer m-2"
        onClick={() => {
          setDarkMode(!darkMode);
          dark(!darkMode);
        }}
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
