import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../Contexts/authContext";
import { useLocation, Link } from "react-router-dom";


import "./login.css";
import LoadingPage from "../loadingpage";


export const SignUp = () => {
  // const inputRef = useRef(null);
  const {loading}= useAuth();
  // const [activeContainer, setActiveContainer] = useState(true);
  const { state } = useLocation();
  const {createUserCredentials } = useAuth();
  const [hidePassword, setHidePassword] = useState(false)

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
      setFormError((prev)=>({...prev, password: "must be 8 char long and should contain a number " }))
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
      <div class="overlay content-page">
        <form onSubmit={formSubmitHandler}>
          <div class="con">
            <header class="head-form">
                <h2>Sign Up</h2>
                <p>Sign Up here using your username and password</p>
            </header>
            <br/>
            <div class="field-set">
              <span class="input-item">
                <i class="fa fa-user-circle"></i>
              </span>

              <input 
              class="form-input" 
              id="txt-input" 
              type="text" 
              name="name"
              onChange={inputEvent}
              placeholder="Name"
              value={formData.name} 
              required/>
              
              <br/>
              <small className="formError">{formError.name}</small>

              <span class="input-item">
                <i class="fa fa-user-circle"></i>
              </span>

              <input 
              class="form-input" 
              id="txt-input" 
              type="email" 
              name="email"
              onChange={inputEvent}
              placeholder="Email"
              value={formData.email} 
              required/>

              <br/>
              <small className="formError">{formError.email}</small>
    
              <span class="input-item">
              <i class="fa fa-key"></i>
              </span>
            
              <input 
              class="form-input" 
              type={hidePassword ?"text": "password"}
              name="password"
              onChange={inputEvent} 
              placeholder="Password" 
              id="pwd"  
              value={formData.password} 
              required/>

              <span>
                  <i class="fa fa-eye" aria-hidden="true"  type="button" id="eye" onClick={()=>{setHidePassword((val)=>!val)}}></i>
              </span>

              <br/>
              <small className="formError">{formError.password}</small>

              <button class="log-in" onClick={()=>{signupHandler()}}> Log In </button>
            </div>
            <Link to = "/login"  className="button-form ghost"
              id="signIn">
              Already registered Click here!
            </Link>
        
{/* 
            <div class="other">
                <button onClick={()=>{signupHandler()}} class="btn submits frgt-pass">Sign Up </button>
                <button  class="btn submits sign-up">
                <i class="fa fa-user-plus" aria-hidden="true"></i>
                </button>
            </div> */}
          </div>
        </form>
      </div>
       } </>
  );
};



