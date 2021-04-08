import { useCart } from "../../cartContext";
import { Card } from "../Card/card";

export default function Cart() {
  const { state } = useCart();

  return (
    <div className="content-page">
      <h1>Items in Wishlist</h1>
      <div className="product-showcase">
        {state.wishlist.map((item) => {
          return <Card key={item.id} item={item} type="wishList" />;
        })}
      </div>
    </div>
  );
}
