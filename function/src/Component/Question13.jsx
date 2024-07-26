import React, { useState } from "react";

const Question13 = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded" />}
    </div>
  );
};

export default Question13;
