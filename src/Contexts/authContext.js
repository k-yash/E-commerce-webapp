import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import {successToast, errorToast} from "../component/Card/toast";
import { useNavigate } from "react-router-dom";
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
  // const [isUserLogin, setLogin] = useState(false);
  const [user, setUser] = useState({
    userId:"",
    userName:"",
    isUserLoggedIn:false
  })
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

  const AuthenticateWithCredentials = async (users, from) => {
    try {
      setLoading(true);
      const {data} = await axios.post("https://podkart.yash2018.repl.co/login",users);
      console.log(data);
      if(data.success){
        localStorage.setItem("AuthForEcomm",JSON.stringify({"userId":data.userId , "userName": data.name, "isUserLoggedIn":data.success}));
        
        // console.log("hiiiiiiiiiiiiiiii", );
        // setLogin(true);
        setUser(JSON.parse(localStorage.getItem("AuthForEcomm")));
        successToast("Login Successful!");
        navigate(from);
      }
    } catch (err) {
      errorToast("User not found!")
      localStorage?.removeItem("AuthForEcomm");
      setLogin(false);
    }finally{
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{user,setUser, AuthenticateWithCredentials, createUserCredentials, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
