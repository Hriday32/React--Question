import React, { useState } from "react";

const Question16 = ({ items }) => {
  const [searchItem, setSearchItem] = useState("");
  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search...."
        onClick={(e) => setSearchItem(e.target.value)}
      />
      <ul>
        {filterItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question16;
