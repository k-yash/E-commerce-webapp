import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../Contexts/authContext";
import { useLocation, Link} from "react-router-dom";
import "./login.css";
import LoadingPage from "../loadingpage";

export const Login = () => {
  const inputRef = useRef(null);
  const {loading}= useAuth();

  const [loginUser, setLoginUser] = useState({
    email:"",
    password:""
  })
  
  const [formError, setFormError] = useState({
    email : "",
    password : ""
  })


  const [activeContainer, setActiveContainer] = useState(false);
  const { state } = useLocation();
  const { AuthenticateWithCredentials } = useAuth();

  useEffect(() => {
    inputRef.current.focus();
  },[]);

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
    <div className="content-page show-flex">
      <div
        className={` container  ${activeContainer ? "right-panel-active" : ""}`}
        id="container"
      >
        

        <div className="form-container sign-in-container">
          <form onSubmit={formSubmitHandler}>
            <h1>Sign In</h1>
            {/* <div className="social-container">
		<a href="#" className="social"><i className="fa fa-facebook"></i></a>
		<a href="#" className="social"><i className="fa fa-google"></i></a>
		<a href="#" className="social"><i className="fa fa-linkedin"></i></a>
	</div>
	<span>or use your account</span> */}
            <input
              onChange={inputEvent}
              className="input-form "
              value = {loginUser.email}
              type="email"
              name="email"
              placeholder="Email"
              ref={inputRef}
            />
            <small>{formError.email}</small>
            <input
              onChange={inputEvent}
              className="input-form "
              value = {loginUser.password}
              type="password"
              name="password"
              placeholder="Password"
            />
            <small>{formError.password}</small>
            {/* <a href="#">Forgot Your Password</a> */}

            <button className="button-form" onClick={() => loginHandler()}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start journey with us</p>
              <Link
                to = "/signup"
                
                className="button-form ghost"
                id="signUp"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
  
};
