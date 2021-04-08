import "../Card/card.css";
import { useCart } from "../../cartContext";
import { Card } from "../Card/card";
import { Link } from "react-router-dom";

export const Subtotal = () => {
  const { state } = useCart();
  return (
    <span>
      {state.cartItems.reduce(
        (acc, value) => acc + value.price * value.quantity,
        0
      )}
    </span>
  );
};

export default function Cart() {
  const { state, dispatch } = useCart();

  return (
    <div className="content-page">
      <h1>Items in cart</h1>
      <div className="product-showcase">
        {state.cartItems.map((item) => {
          return <Card key={item.id} item={item} type="cart" />;
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
          <Link to="/billing" className="cart-btn btn-blue">
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
}
