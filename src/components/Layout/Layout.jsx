import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import DarkModeSwitcher from "../DarkModeSwitcher/DarkModeSwitcher.jsx";
import { ThemeProvider } from "../Hooks/UseDarkTheme.jsx";


const Layout = () => {
  return (
    <ThemeProvider>
      <div className="bg:white dark:bg-slate-800 text-slate-900 dark:text-stone-300">
        <Header />
        <div>
          <Outlet />
          <DarkModeSwitcher />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
