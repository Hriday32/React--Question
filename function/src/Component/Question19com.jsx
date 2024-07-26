import React from "react";
import { useTheme } from "./ThemeContext";
import "../Component/Style/Question19.css";

function Question19com() {
  const { isDarkMode } = useTheme;
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <div className={`container ${themeClass}`}>
      <p>This component uses selected theme</p>
    </div>
  );
}

export default Question19com;
