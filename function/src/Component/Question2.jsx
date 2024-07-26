// Build a counter application with increment and decrement buttons.(not less than zero.)
import React, { useState } from "react";

const Question2 = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span>{count}</span>
      <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>
        Decremet
      </button>
    </>
  );
};

export default Question2;
