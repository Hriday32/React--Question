//Work with multiple states in a single state object. The component should display the following information on the screen:
//1. A count value, initially set to 0.
//2. A text value, initally set to "Hello, World!".
//3. An "Active" status, initially set to true.

import React, { useState } from "react";

const Question28 = () => {
  const [state, setState] = useState({
    count: 0,
    text: "Hello World",
    isActive: true,
  });

  const incrementCount = () => {
    setState({ ...state, count: state.count + 1 });
  };

  const changeText = () => {
    setState({ ...state, text: "Updated Text" });
  };

  const toggleActive = () => {
    setState({ ...state, isActive: !state.isActive });
  };

  return (
    <div>
      <h1>Multiple State Example</h1>
      <p>Count:{state.count}</p>
      <p>Text:{state.text}</p>
      <p>Action:{state.isActive ? "Yes" : "NO"}</p>

      <button onClick={incrementCount}>Incremant</button>
      <button onClick={changeText}>Change Text</button>
      <button onClick={toggleActive}>Toggle Active</button>
    </div>
  );
};

export default Question28;
