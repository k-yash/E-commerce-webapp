import "../Card/card.css";
import { useCart } from "../../Contexts/cartContext";
import  CartCard  from "./cartCard";
import { Link } from "react-router-dom";

import {useEffect} from "react";
import {useAuth} from "../../Contexts/authContext";

export const Subtotal = () => {
  const { state } = useCart();
 
  return (
    <span>
      {state.cartItems.reduce(
        (acc, value) => acc + value.product.price * value.quantity,
        0
      )}
    </span>
  );
};



export default function Cart() {
  const { state, dispatch } = useCart();
  // console.log(state);
  

  return (
    <div className="content-page">
      <h1>Your cart</h1>
      {console.log({state})}
      {state.cartItems.length > 0 ? (
        <div>
          <div className="product-showcase">
            {state.cartItems.map(({product, quantity}) => {
              return <CartCard key={product.id} product={product} quantity = {quantity} />;
            })}
          </div>

          <div className="cart-last">
            <h2>
              total Price: ₹<Subtotal />
            </h2>
            <div>
              <button
                className="cart-btn btn-red"
                onClick={() => dispatch({ type: "EMPTYCART" })}
              >
                EMPTY CART
              </button>
              <button className="cart-btn btn-blue">
              <Link to="/billing" className="cart-btn btn-blue">
                CHECKOUT
              </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div class="empty">
          <h2>SO LONELY. SO ALONE.</h2>
          <p>I am your shopping cart. I am empty.</p>

          <Link to="/products" className="cart-btn btn-red">
            GO TO PRODUCTS
          </Link>
        </div>
      )}
    </div>
  );
}
