import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import UseDarkTheme, { useTheme } from "../Hooks/UseDarkTheme";

function DarkModeSwitcher() {
  const { isDarkTheme, toggleThemeHandler } = useTheme();
  const [colorTheme, setTheme] = UseDarkTheme();
  const [darkMode, setDarkMode] = React.useState(
    colorTheme === "light" ? true : false
  );
  const darkModeToggler = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
    toggleThemeHandler();
  };
  return (
    <div className="fixed z-[7000] left-7 bottom-7 p-4 rounded-full bg-white shadow-shadowPrimaryFront dark:shadow-shadowDarkFront dark:bg-slate-600 text-gray-800 dark:text-white cursor-pointer">
      <DarkModeSwitch checked={isDarkTheme} onChange={darkModeToggler} size={30} />
    </div>
  );
}

export default DarkModeSwitcher;
