import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { fakeAuthApi } from "./fakeAuthApi";
import { useNavigate } from "react-router-dom";
import { Users } from "./fakeAuthApi";

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

  const AuthenticateWithCredentials = async (username, password, from) => {
    try {
      const response = await fakeAuthApi(username, password);
      console.log(response.status);
      setLogin(true);
      navigate(from);
    } catch (err) {
      console.log("password lekr aa beta", err);
      setLogin(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isUserLogin, AuthenticateWithCredentials, state, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
