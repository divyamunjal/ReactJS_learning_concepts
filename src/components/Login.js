import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginForm,setLoginForm] = useState({email:"",password:""})
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    const changeHandler = (e) => {
        const {name,value} = e.target
        setLoginForm((loginForm) => ({
            ...loginForm,
            [name] : value
        }))
    }
    
    const submitHandler = (e) =>{
        e.preventDefault();

       if(loginForm.email == registeredUser.email && loginForm.password == registeredUser.password){
        alert('Login successfully');
       }
       else{
        alert('Invalid Credentials')
       }
    }
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-5">
            <div className="card shadow-lg p-4">
            <div className="text-center">
                        <h3 id="formTitle">Login</h3>
                    </div>

                <div className="tab-content mt-3">
                    <div className="tab-pane fade show active" id="login" role="tabpanel">
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label for="loginEmail" className="form-label">Email address</label>
                                <input type="email" name="email" value={loginForm.email} onChange={changeHandler} className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label for="loginPassword" className="form-label">Password</label>
                                <input type="password" name="password" value={loginForm.password} onChange={changeHandler} className="form-control" id="password" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                        <p className="text-center mt-3">
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
    </div>
  )
}

export default Login
