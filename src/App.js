import "./styles.css";
import Cart from "./component/Cart/cart";
import Products from "./component/Products/product";
import Wishlist from "./component/Wishlist/wishlist";
import Home from "./component/Home/home";
import { NavBar } from "./component/Navigation/navbar";
import { Billing } from "./component/Checkout/billing";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./component/errorpage";
import { Login } from "./component/Login/login";
// import { SignUp } from "./component/Login/signUp";
import { PrivateRoute } from "./component/PrivateRoute";

export default function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/wishlist" element={<Wishlist />} /> */}
          {/* <Route path="/billing" element={<Billing />} /> */}
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <PrivateRoute path="/wishlist" element={<Wishlist />} />
          <PrivateRoute path="/billing" element={<Billing />} />
        </Routes>
      </div>
    </>
  );
}
