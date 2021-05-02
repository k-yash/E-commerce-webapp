// import "./card.css";
import { useCart } from "../../Contexts/cartContext";
import { Rating } from "../Card/rating";
import { Link } from "react-router-dom";


export const WishlistCard = ({product, quantity}) => {
  const {
    dispatch,
    ifPresentCart,
    ifPresentWishlist,
    cartHandler,
    wishListHandler
  } = useCart();

  return (
    <div className="card-v" key={product.id}>
      <img src={product.image} width="100%" height="auto" alt={product.name} />
      <div className="content-card">
        <div className="div1">
          <p>{product.name}</p>
          <p className="price">₹{product.price}</p>
        </div>
        <Rating rating={product.rating} />

          <div>
            <button
              className="cart-btn btn-blue"
              onClick={() => wishListHandler(product)}
            >
              Move to Cart
            </button>
            <button
              className="cart-btn btn-red"
              onClick={() =>
                dispatch({ type: "REMOVEFROMWISHLIST", payload: product.id })
              }
            >
              Remove
            </button>
          </div>
        
      </div>
    </div>
  );
};
