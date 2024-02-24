import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

function UseDarkTheme() {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));
  const colorTheme = theme === "dark" ? "light" : "dark";

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, setTheme]);
  return [colorTheme, setTheme];
}


// pc project context __________________________

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty() {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler() {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document.querySelector("body").classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
      isDarkTheme && document.querySelector("body").classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleThemeHandler() {
    const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody() {
    document.querySelector("body").classList.toggle("dark");
  }

  function setValueToLocalStorage() {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, useTheme };


export default UseDarkTheme;
