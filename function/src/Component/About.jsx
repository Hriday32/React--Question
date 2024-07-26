import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "ABOUT";
  });
  return <div>About</div>;
};

export default About;
