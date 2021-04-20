import { useState } from "react";
import { useAuth } from "../../authContext";
import { useLocation, Link } from "react-router-dom";

import "./login.css";


export const SignUp = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  });

  const [activeContainer, setActiveContainer] = useState(true);
  const { state } = useLocation();
  const {createUserCredentials } = useAuth();

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  
  const inputEvent = (event) =>{
    const {value, name} = event.target;
    if(name === "name"){
      setFormData((prev)=> ({...prev, name:value}))
    }else if(name==="email"){
      setFormData((prev)=> ({...prev, email:value}))
    }else{
      setFormData((prev)=> ({...prev, password:value}))
    }

  } 


  const signupHandler = () => {
    createUserCredentials(formData);
  };

  return (

    <div className="content-page show-flex">
    <div
      className={` container  ${activeContainer ? "right-panel-active" : ""}`}
      id="container"
    >
    <div className="form-container sign-up-container">
          <form onSubmit={formSubmitHandler}>
            <h1>Create Account</h1>
            {/* <div className="social-container">
                <a href="#" className="social"><i className="fa fa-facebook"></i></a>
                <a href="#" className="social"><i className="fa fa-google"></i></a>
                <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
              </div>
              <span>or use your email for registration</span> */}
            <input
              type="text"
              name="name"
              onChange={inputEvent}
              placeholder="Name"
              className="input-form "
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              onChange={inputEvent}
              placeholder="Email"
              className="input-form "
              value={formData.email}
            />
            <input
              type="password"
              name="password"
              onChange={inputEvent}
              placeholder="Password"
              className="input-form "
              value={formData.password}
            />
            <button onClick={()=>{signupHandler()}} className="button-form">SignUp</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Link to = "/login"  className="button-form ghost"
                id="signIn">
                
                Sign In
              </Link>
            </div>
            
          </div>
        </div>
        </div>
        </div>
  );
};
