import React, { useState, useEffect } from "react";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDark) {
      root.classList.remove("dark");
      body.classList.remove("dark");
    } else {
      root.classList.add("dark");
      body.classList.add("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={toggleTheme}
        className={`px-6 py-2 font-semibold rounded-lg shadow-md transition-all duration-300
          ${
            isDark
              ? "bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 text-gray-100 hover:opacity-90"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
      >
        Switch to {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};
