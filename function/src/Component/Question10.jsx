//Create a Component that changes its background color when clicked.

import React, { useState } from "react";

const Question10 = () => {
  const [backgroundColor, setBackgroundColor] = useState("yellow");

  const handleClick = () => {
    const newColor = backgroundColor === "yellow" ? "Lightblue" : "white";

    setBackgroundColor(newColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        width: "200px",
        height: "200px",
        cursor: "pointer",
      }}
    >
      Click me to change Color
    </div>
  );
};

export default Question10;
