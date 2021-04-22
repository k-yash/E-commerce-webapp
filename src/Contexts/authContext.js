import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import {successToast, errorToast} from "../component/Card/toast";
// import { fakeAuthApi } from "./fakeAuthApi";
import { useNavigate } from "react-router-dom";
// import { Users } from "./fakeAuthApi";
import axios from "axios";

export const AuthContext = createContext();

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "CREATENEWUSER":
//       break;

//     default:
//       break;
//   }
// };


export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isUserLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  // const [state, dispatch] = useReducer(authReducer, { Users });


   const createUserCredentials = async(userData)=>{
    try{
      setLoading(true);
      const {data} = await axios.post("https://podkart.yash2018.repl.co/signup",userData);
      if(data.success){
        successToast("SignUp Successful! Please Login");
        navigate('/login');
      }
      
    }catch(err){
      errorToast("Please enter details correctly !")
      console.log("error",err);
    }finally{
      setLoading(false);
    }
  
  }

  const AuthenticateWithCredentials = async (user, from) => {
    try {
      setLoading(true);
      const {data} = await axios.post("https://podkart.yash2018.repl.co/login",user);
      // console.log(response);
      if(data.success){
        setLogin(true);
        successToast("Login Successful!");
        navigate(from);
      }else{

      }
    } catch (err) {
      errorToast("User not found!")
      setLogin(false);
    }finally{
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isUserLogin, AuthenticateWithCredentials, createUserCredentials, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};