import React, { useEffect, useState } from "react";

const Question6 = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((Response) => Response.json())
      .then((Ram) => setdata(Ram));
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <h1>Title:{data.title}</h1>
          <h4>body:{data.body}</h4>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Question6;
