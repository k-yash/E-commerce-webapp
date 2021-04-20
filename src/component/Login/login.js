import { useState } from "react";
import { useAuth } from "../../authContext";
import { useLocation, Link} from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email:"",
    password:""
  })
  

  const [activeContainer, setActiveContainer] = useState(false);
  const { state } = useLocation();
  const { AuthenticateWithCredentials } = useAuth();

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const inputEvent = (event) => {
    const {value, name} = event.target;
    if(name==="email"){
      setLoginUser((prev)=>({...prev, email:value}));
    }else{
      setLoginUser((prev)=>({...prev, password:value}));
    }
    // 
    // 
  };

  const loginHandler = () =>{
    const from = state?.from ? state.from : "/";
    AuthenticateWithCredentials(loginUser, from);
    
  }
// console.log(loginUser);
  return (
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
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={inputEvent}
              className="input-form "
              type="password"
              name="password"
              placeholder="Password"
            />
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
    </div>
  );
};
