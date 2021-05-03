import { Route, Navigate } from "react-router-dom";
// import {useEffect} from "react";
import { useAuth } from "../Contexts/authContext";

export function PrivateRoute({ path, ...props }) {
  // const { isUserLogin} = useAuth();
  let isUserLoggedIn = false;
  if(localStorage?.getItem("AuthForEcomm")){
    isUserLoggedIn = JSON.parse(localStorage?.getItem("AuthForEcomm")).isUserLoggedIn;
  }

  return isUserLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
