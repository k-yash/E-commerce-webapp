import "./styles.css";
import Cart from "./component/Cart/cart";
import Products from "./component/Products/product";
import Wishlist from "./component/Wishlist/wishlist";
import Home from "./component/Home/home";
import { NavBar } from "./component/Navigation/navbar";
import { Billing } from "./component/Checkout/billing";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </div>
    </>
  );
}
