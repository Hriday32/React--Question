import React, { useState } from "react";

const Question18 = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const handleChange = () => {
    setSelectedColor(e.target);
  };
  return (
    <div>
      <input type="color" onChange={handleChange} />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: selectedColor,
        }}
      ></div>
    </div>
  );
};

export default Question18;
