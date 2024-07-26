import React, { useState } from "react";

const Question17 = ({ items, itemsPerPage }) => {
  const [currentPage, SetCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      {pageNumber.map((number) => (
        <li key={number} onClick={() => SetCurrentPage(number)}>
          {number}
        </li>
      ))}
    </div>
  );
};

export default Question17;
