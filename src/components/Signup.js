import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
const [registerForm,setRegisterForm] = useState({fullName : '',email : '',password : ''});

const setValue = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
        ...prev,
        [name]: value
    }));
};

const onRegister = (e) => {
    e.preventDefault();
    const {fullName,email,password} = registerForm;
    debugger;
    if(fullName == ''){
        alert("Please enter Full Name")
    }
    else if(email == ''){
        alert("Please enter Email Address")
    }
   else if(password == ''){
        alert("Please enter password")
    }
    else {
        let obj = {
            ...registerForm
        }
        localStorage.setItem('registeredUser',JSON.stringify(obj));
        alert('Registered successfully !!')
    }
}
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-lg p-4">
            <div className="text-center">
                        <h3 id="formTitle">Sign Up</h3>
                    </div>
              <div class="tab-content mt-3">
                <div>
                  <form onSubmit={onRegister}>
                    <div class="mb-3">
                      <label for="signupName" class="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="fullName"
                        value={registerForm.fullName}
                        onChange={setValue}
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="signupEmail" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        value={registerForm.email}
                        onChange={setValue}
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="signupPassword" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        value={registerForm.password}
                        onChange={setValue}
                        required
                      />
                    </div>
                    <button type="submit" class="btn btn-success w-100">
                      Signup
                    </button>

                    <p className="text-center mt-3">
                      Don't have an account? <Link to="/login">Sign In</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
