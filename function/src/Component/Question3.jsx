//Create a form that takes user input and display it in real time.

import React, { useState } from "react";

const Question3 = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <p>User Input: {input}</p>
      </div>
    </>
  );
};

export default Question3;
