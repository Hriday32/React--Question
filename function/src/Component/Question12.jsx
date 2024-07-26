import React from "react";

const Question12 = () => {
  let quotes = [
    "Avoid day dreaming about the year to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, ignore what other perople have to say about you.",
    "Only demonstrate your strength when it's really required.",
    "It's me Ram Hriday Mahato",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return <div>{quote}</div>;
};

export default Question12;
