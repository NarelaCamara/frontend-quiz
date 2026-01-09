import { useEffect, useState } from "react";
import icon_moon_dark from "../assets/icon-moon-light.svg";
import icon_sun_dark from "../assets/icon-sun-dark.svg";

export const ButtonDarkLightMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Leer de localStorage al cargar
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };
  return (
    <div className="flex flex-row-reverse">
      <div className={`m-2`}>
        <button
          onClick={toggleDarkMode}
          className="dark:border-white border-gray-400 border-2 rounded-2xl p-2"
        >
          <img src={darkMode ? icon_moon_dark : icon_sun_dark} alt="" />
        </button>
      </div>
    </div>
  );
};
