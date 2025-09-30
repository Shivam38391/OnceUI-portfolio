"use client";

import React, { useEffect, useState } from "react";
import { Row, ToggleButton, useTheme } from "@once-ui-system/core";

export const ThemeToggle: React.FC = () => {


  const systemTheme= () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log("prefersDark", prefersDark);
    return prefersDark ? 'dark' : 'light';
  }

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    setMounted(true);
    // setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");

    setCurrentTheme(systemTheme())
  }, []);

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, [theme]);

  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};
