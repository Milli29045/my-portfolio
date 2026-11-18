
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light-theme");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLight;

    setIsLight(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("light-theme");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      document.documentElement.classList.remove("light-theme");
      localStorage.setItem("portfolio-theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full border border-cyan-400/50 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
    >
      {isLight ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
