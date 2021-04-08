import { useCart } from "../../cartContext";
import { Card } from "../Card/card";
import { Link } from "react-router-dom";

export default function Cart() {
  const { state } = useCart();

  return (
    <div className="content-page">
      <h1>Your Wishlist</h1>
      {state.wishlist.length > 0 ? (
        <div className="product-showcase">
          {state.wishlist.map((item) => {
            return <Card key={item.id} item={item} type="wishList" />;
          })}
        </div>
      ) : (
        <div class="empty">
          <h2>Hey, it feels so light!</h2>
          <p>There is nothing in your Wishlist. Let's add some items.</p>

          <Link to="/products" className="cart-btn btn-red">
            GO TO PRODUCTS
          </Link>
        </div>
      )}
    </div>
  );
}
