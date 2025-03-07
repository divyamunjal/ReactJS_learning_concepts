import React, { useState } from "react";


const UserInput = () => {
    const [regForm,setRegForm] = useState({name : ''})
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-primary">Registration</h1>
        <h3>Username : {regForm.name}</h3>
        <form>
            <input type="text"  value={regForm.name} onChange={(e)=> {
                setRegForm({
                    name : e.target.value
                })
            }}/>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
