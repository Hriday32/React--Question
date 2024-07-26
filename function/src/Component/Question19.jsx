import React from "react";
import { useTheme } from "./ThemeContext";

const Question19 = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      Dark Mode
    </div>
  );
};

export default Question19;
