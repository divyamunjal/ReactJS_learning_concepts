import React, { useState } from "react";

const Color = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColor = (e) => {
    setSelectedColor(e.target.value);
  };
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Color Example !</h1>

      <input type="color" onChange={handleColor} />

      <div style={{width:'100px',height: '100px',backgroundColor: selectedColor}}></div>
    </div>
  );
};

export default Color;
