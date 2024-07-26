//Build a lsit component to display a list of item.

import React from "react";

const Question4 = () => {
  const items = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
  ];
  return (
    <>
      <ul>
        {items.map((items, index) => {
          return <li key={index}>{items}</li>;
        })}
      </ul>
    </>
  );
};

export default Question4;
