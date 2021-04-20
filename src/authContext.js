import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { fakeAuthApi } from "./fakeAuthApi";
import { useNavigate } from "react-router-dom";
import { Users } from "./fakeAuthApi";
import axios from "axios";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "CREATENEWUSER":
      break;

    default:
      break;
  }
};


export const AuthProvider = ({ children }) => {
  const [isUserLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(authReducer, { Users });


   const createUserCredentials = async(userData)=>{
    try{
      const response = await axios.post("https://podkart.yash2018.repl.co/signup",userData);
      navigate('/login');
    }catch(err){
      console.log("error",err);
    }
  
  }

  const AuthenticateWithCredentials = async (user, from) => {
    try {
      const {data} = await axios.post("https://podkart.yash2018.repl.co/login",user);
      // console.log(response);
      if(data.success){
        setLogin(true);
        navigate(from);
      }
    } catch (err) {
      console.log("password lekr aa beta", err);
      setLogin(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isUserLogin, AuthenticateWithCredentials, state, dispatch, createUserCredentials }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
