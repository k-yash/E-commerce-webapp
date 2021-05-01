import "./styles.css";
import {useEffect} from "react";
import Cart from "./component/Cart/cart";
import Products from "./component/Products/product";
import Wishlist from "./component/Wishlist/wishlist";
import Home from "./component/Home/home";
import { NavBar } from "./component/Navigation/navbar";
import { Billing } from "./component/Checkout/billing";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./component/errorpage";
import { Login } from "./component/Login/login";
import { SignUp } from "./component/Login/signUp";
import { PrivateRoute } from "./component/PrivateRoute";
import {toast} from "react-toastify";
import { useAuth } from "./Contexts/authContext";
import {useCart} from "./Contexts/cartContext";
import axios from "axios";

toast.configure();
export default function App() {
  
  const {isUserLogin, setLogin} = useAuth();
  const {dispatch} = useCart();




  useEffect(() => {
    
    if(localStorage.getItem("AuthForEcomm")){

    const {isUserLoggedIn} = JSON.parse(localStorage.getItem("AuthForEcomm"));
    setLogin(isUserLoggedIn);
    }else{
      setLogin(false);
    }
    
  }, [])


  useEffect(() => {
    if(isUserLogin){

      const userId = JSON.parse(localStorage.getItem("AuthForEcomm")).userId;
      // console.log(userId)

      (async()=>{
        try{
          const {data} = await axios.get(`https://podkart.yash2018.repl.co/cart/${userId}`)
          if(data.success){
            console.log(data.response.cartProducts);
            dispatch({type:"SETCART", payload:data.response.cartProducts})

          }
        }catch(error){
          console.log(error);
        }
      })();
    }else{
      dispatch({type:"SETCART", payload:[]})
    }
    
  }, [isUserLogin])

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <PrivateRoute path="/wishlist" element={<Wishlist />} />
          <PrivateRoute path="/billing" element={<Billing />} />
        </Routes>
      </div>
    </>
  );
}
