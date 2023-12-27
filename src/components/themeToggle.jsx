import React from "react";
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="toggleButton" onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
