import { Sun, Moon } from "lucide-react";

export default function TopNav({ darkMode, setDarkMode }) {
  return (
    <div className={`flex items-center fixed top-0 left-0 right-0 justify-end p-0.5 ${darkMode ? "dark-mode" : "light-mode"}`}>
      <button className="text-black dark:text-amber-400 mr-8 md:mr-20 cursor-pointer m-2" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
