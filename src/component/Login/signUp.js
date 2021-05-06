import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../Contexts/authContext";
import { useLocation, Link } from "react-router-dom";


import "./login.css";
import LoadingPage from "../loadingpage";


export const SignUp = () => {
  // const inputRef = useRef(null);
  const {loading}= useAuth();
  const [activeContainer, setActiveContainer] = useState(true);
  const { state } = useLocation();
  const {createUserCredentials } = useAuth();

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  });

  const [formError, setFormError] = useState({
    name : "",
    email : "",
    password : ""
  })

  // useEffect(() => {
  //   inputRef.current.focus();
  // },[]);

  const isValidEmail=(email)=>{
    const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    return emailRegex.test(email);
  }

  const isValidPassword = (password) =>{
    // const passwordRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    // passwordRegex.test(password)
    return (password.length>7);
  }

  const validateForm = () =>{
    setFormError({
      name : "",
      email : "",
      password : ""
    })

    let userValidate = true;
     if(!formData.email || !isValidEmail){
       setFormError((prev)=>({...prev, email: "Enter a valid Email" }))
       userValidate = false;
     }

     if(!formData.password || !isValidPassword){
      setFormError((prev)=>({...prev, password: "Password must be 8 characters long and should contain a number " }))
      userValidate = false;
    }
    if(!formData.name){
      setFormError((prev)=>({...prev, name: "Enter a valid name" }))
      userValidate = false;
    }

    return userValidate;
  }
  

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  
  const inputEvent = (event) =>{
    const {value, name} = event.target;
 
    setFormData((prev)=> ({...prev, [name]:value}))

  } 


  const signupHandler = () => {
    if(validateForm()){
    createUserCredentials(formData);
  }
  };

  return (
    <>{loading?<LoadingPage/>:
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
              // ref={inputRef}
            />
            <small>{formError.name}</small>
            <input
              type="email"
              name="email"
              onChange={inputEvent}
              placeholder="Email"
              className="input-form "
              value={formData.email}
            />
            <small>{formError.email}</small>
            <input
              type="password"
              name="password"
              onChange={inputEvent}
              placeholder="Password"
              className="input-form "
              value={formData.password}
            />
            <small>{formError.password}</small>
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
        </div>}
        </>
  );
};
