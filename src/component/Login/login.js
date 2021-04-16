import { useState } from "react";
import { useAuth } from "../../authContext";
import { useLocation } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeContainer, setActiveContainer] = useState(false);
  const { state } = useLocation();
  const { AuthenticateWithCredentials } = useAuth();

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const loginHandler = () => {
    const from = state?.from ? state.from : "/";
    AuthenticateWithCredentials(email, password, from);
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
              placeholder="Name"
              className="input-form "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-form "
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-form "
            />
            <button className="button-form">SignUp</button>
          </form>
        </div>

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
              onChange={(event) => setEmail(event.target.value)}
              className="input-form "
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
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
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setActiveContainer((val) => !val)}
                className="button-form ghost"
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start journey with us</p>
              <button
                onClick={() => setActiveContainer((val) => !val)}
                className="button-form ghost"
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
