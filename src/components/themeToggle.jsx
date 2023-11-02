import React from "react";
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
