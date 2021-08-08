import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../Contexts/authContext";
import { useLocation, Link} from "react-router-dom";
import "./login.css";
import LoadingPage from "../loadingpage";

export const Login = () => {
  // const inputRef = useRef(null);
  const {loading}= useAuth();
  const [hidePassword, setHidePassword] = useState(false);

  const [loginUser, setLoginUser] = useState({
    email:"",
    password:""
  })
  
  const [formError, setFormError] = useState({
    email : "",
    password : ""
  })


  // const [activeContainer, setActiveContainer] = useState(false);
  const { state } = useLocation();
  const { AuthenticateWithCredentials } = useAuth();

  // useEffect(() => {
  //   inputRef.current.focus();
  // },[]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const inputEvent = (event) => {
    const {value, name} = event.target;

    setLoginUser((prev)=>({...prev, [name]:value}));

  };

  const validateForm = () =>{
    setFormError({
      email : "",
      password : ""
    })
    let userValidate = true;
     if(!loginUser.email){+
       setFormError((prev)=>({...prev, email: "Enter a valid email" }))
       userValidate = false;
     }

     if(!loginUser.password){
      setFormError((prev)=>({...prev, password: "Enter a valid password" }))
      userValidate = false;
    }

    return userValidate;
  }

  const loginHandler = () =>{
    if(validateForm()){
    const from = state?.from ? state.from : "/";
    AuthenticateWithCredentials(loginUser, from);
  }
}
    
    

// console.log(loginUser);
  return (
    <>
    {loading?<LoadingPage/>:
    <div class="overlay content-page">

      <form onSubmit={formSubmitHandler}>
        <div class="con">
          <header class="head-form">
              <h2>Log In</h2>
              <p>login here using your username and password</p>
          </header>
          <br/>
          <div class="field-set">
            <span class="input-item">
              <i class="fa fa-user-circle"></i>
            </span>

            <input 
            class="form-input" 
            id="txt-input"
            onChange={inputEvent} 
            value = {loginUser.email}
            type="email" 
            name="email"
            placeholder="@Email" 
            required/>
           
            <br/>
            <small className="formError">{formError.email}</small>
            <span class="input-item">
              <i class="fa fa-key"></i>
            </span>

            <input 
            class="form-input" 
            type={hidePassword ?"text": "password"}
            onChange={inputEvent} 
            value = {loginUser.password}
            placeholder="Password" 
            id="pwd"  
            name="password" 
            required/>

            <span>
            <i class="fa fa-eye" aria-hidden="true"  type="button" id="eye" onClick={()=>{setHidePassword((val)=>!val)}}></i>
            </span>
            <br/>
            <small className="formError">{formError.password}</small>
            <button class="log-in" onClick={() => loginHandler()}> Log In </button>
          </div>
          <Link
                to = "/signup"
                className="button-form ghost"
                id="signUp"
              >
              Click here to create an account
            </Link>
        
          {/* <div class="other">
            <button class="btn submits frgt-pass">Forgot Password</button>
            <button class="btn submits sign-up">
            <Link
                to = "/signup"
                className="button-form ghost"
                id="signUp"
              >
              Sign Up
            </Link>
            <i class="fa fa-user-plus" aria-hidden="true"></i>
            </button>

          </div> */}

        </div>
        

      </form>

    </div>
    }
    </>
  );
  
};
