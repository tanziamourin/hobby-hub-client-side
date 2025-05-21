import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // প্রথমে localStorage থিম চেক করবে, না থাকলে ব্রাউজারের থিম detect করবে
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDarkMode ? "dark" : "light");
    }
  }, []);

  // theme state পরিবর্তন হলে root এ ক্লাস update করবে এবং localStorage এ সেভ করবে
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
