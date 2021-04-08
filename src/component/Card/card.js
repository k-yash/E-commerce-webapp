import "./card.css";
import { useCart } from "../../cartContext";
import { Rating } from "./rating";
import { Link } from "react-router-dom";

export const Card = ({ item, type }) => {
  const {
    dispatch,
    ifPresentCart,
    ifPresentWishlist,
    cartHandler,
    wishListHandler
  } = useCart();

  return (
    <div className="card-v" key={item.id}>
      <img src={item.image} width="100%" height="auto" alt={item.productName} />
      <div className="content-card">
        <div className="div1">
          <h4>{item.name}</h4>
          <p className="price">₹{item.price}</p>
        </div>
        <Rating rating={item.ratings} />
        {type === "productShowcase" && (
          <div className="div2">
            <p>{item.description}</p>
          </div>
        )}

        {type === "productShowcase" && (
          <div className="div3">
            {ifPresentCart(item.id) ? (
              <Link to="/cart" className="cart-btn btn-red">
                {ifPresentCart(item.id) ? "Go to Cart" : "Add to Cart"}
              </Link>
            ) : (
              <button
                className="cart-btn btn-red"
                onClick={() => dispatch({ type: "ADDTOCART", payload: item })}
              >
                {ifPresentCart(item.id) ? "Go to Cart" : "Add to Cart"}
              </button>
            )}

            <i
              onClick={
                ifPresentWishlist(item.id)
                  ? () => {
                      dispatch({
                        type: "REMOVEFROMWISHLIST",
                        payload: item.id
                      });
                    }
                  : () => {
                      dispatch({ type: "ADDTOWISHLIST", payload: item });
                    }
              }
              className="fa fa-heart"
              aria-hidden="true"
              style={{ color: ifPresentWishlist(item.id) ? "red" : "grey" }}
            ></i>
          </div>
        )}

        {type === "cart" && (
          <div className="div4">
            <div className="quantity-btn">
              <button
                onClick={() => {
                  dispatch({ type: "INCREMENT", payload: item.id });
                }}
              >
                +
              </button>
              {item.quantity}
              <button
                onClick={() => {
                  dispatch({
                    type: "DECREMENT",
                    payload: { id: item.id, quantity: item.quantity }
                  });
                }}
              >
                -
              </button>
            </div>
            <button
              className="cart-btn btn-blue"
              onClick={() => cartHandler(item)}
            >
              Move to Wishlist
            </button>
            <button
              className="cart-btn btn-red"
              onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
            >
              Remove
            </button>
          </div>
        )}

        {type === "wishList" && (
          <div>
            <button
              className="cart-btn btn-blue"
              onClick={() => wishListHandler(item)}
            >
              Move to Cart
            </button>
            <button
              className="cart-btn btn-red"
              onClick={() =>
                dispatch({ type: "REMOVEFROMWISHLIST", payload: item.id })
              }
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
