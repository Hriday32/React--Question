//Implement a basic toggle switch Component.

import React, { useState } from "react";

const Question5 = () => {
  const [istoggled, setIsToggles] = useState(false);

  const handleToggle = () => {
    setIsToggles(!istoggled);
  };
  return (
    <>
      <label>
        <input type="checkbox" onClick={handleToggle} />
      </label>
      <p>{istoggled ? "On" : "off"}</p>
    </>
  );
};

export default Question5;
