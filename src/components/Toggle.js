import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Toggle Example</h1>
      <h3>Toggle : {toggle ? 'On' : 'Off'}</h3>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success" onClick={()=>setToggle(!toggle)}>
          On/Off
        </button>
      </div>
    </div>
  );
};

export default Toggle;
