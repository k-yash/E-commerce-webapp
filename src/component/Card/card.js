import "./card.css";
import { useCart } from "../../Contexts/cartContext";
import { Rating } from "./rating";
import { Link } from "react-router-dom";
import {restApiCalls} from "../../Contexts/utilities/restApiCalls";
import {useAuth} from "../../Contexts/authContext";


export const Card = ({ item, type }) => {
  const {
    dispatch,
    ifPresentCart,
    ifPresentWishlist,
    cartHandler,
    wishListHandler
  } = useCart();

  const {user} = useAuth();

  const addToCart = async() => {
    dispatch({ type: "ADDTOCART", payload: item });
    const response = await restApiCalls("POST",`cart/${user.userId}`,{productId: item.id})
    console.log({response})

  }

  const addToWishlist = async() => {
    if(ifPresentWishlist(item.id)){
      dispatch({ type: "REMOVEFROMWISHLIST", payload: item.id});
      const response = await restApiCalls("DELETE", `wishlist/${user.userId}/${item.id}`);
      console.log({response})
    }else{
      dispatch({ type: "ADDTOWISHLIST", payload: item });
      const response = await restApiCalls("POST", `wishlist/${user.userId}`, {productId: item.id});
      console.log({response})

    }
  }

  return (
    <div className="card-v" key={item.id}>
      <img src={item.image} width="100%" height="auto" alt={item.productName} />
      <div className="content-card">
        <div className="div1">
          <p>{item.name}</p>
          <p className="price">₹{item.price}</p>
        </div>
        <Rating rating={item.rating} />
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
                onClick={() => addToCart()}
              >
                {ifPresentCart(item.id) ? "Go to Cart" : "Add to Cart"}
              </button>
            )}

            <i
              onClick={() => addToWishlist() }
              className="fa fa-heart"
              aria-hidden="true"
              style={{ color: ifPresentWishlist(item.id) ? "red" : "grey" }}
            ></i>
          </div>
        )}

        {/* {type === "cart" && (
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
        )} */}

        {/* {type === "wishList" && (
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
        )} */}
      </div>
    </div>
  );
};
