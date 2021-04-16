export const SignUp = () => {
  return (
    <div>
      {/* <form action="#" className="sign-up-form"> */}
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <button type="submit" className="btn" value="Sign up"></button>
      {/* </form> */}
    </div>
  );
};
