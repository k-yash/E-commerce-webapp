// import "./card.css";
import { useCart } from "../../Contexts/cartContext";
import { Rating } from "../Card/rating";
import {useAuth} from "../../Contexts/authContext";
import { Link } from "react-router-dom";
import {restApiCalls} from "../../Contexts/utilities/restApiCalls";


export const WishlistCard = ({product}) => {
  const { dispatch, ifPresentCart} = useCart();
  const {user} = useAuth();

  const removeHandler = async() => {
    dispatch({ type: "REMOVEFROMWISHLIST", payload: product.id })
   
    const response = await restApiCalls("DELETE",`wishlist/${user.userId}/${product.id}`)
 
  }

const wishListHandler = async(product) => {
  if (ifPresentCart(product.id)) {
    dispatch({ type: "REMOVEFROMWISHLIST", payload: product.id });
    const response = await restApiCalls("DELETE",`wishlist/${user.userId}/${product.id}`)
  } else {
    dispatch({ type: "MOVETOCART", payload: product });
    const response = await restApiCalls("DELETE",`wishlist/${user.userId}/${product.id}`)

    if(response.success){
      const response = await restApiCalls("POST", `cart/${user.userId}`, {productId : product.id})
    }

  }
  };

  return (
        <div class="product-card">

          <Rating rating={product.rating} />

          <div class="product">
            <img src={product.image} height="190"/>
          </div>

          <div class="textp">
            <div class="titlep">
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
            </div>
          </div>

          <div>
              <button
                className="cart-btn btn-blue"
                onClick={() => wishListHandler(product)}
              >
                Move to Cart
              </button>
              <button
                className="cart-btn btn-red"
                onClick={() => removeHandler()}
              >
                Remove
              </button>
            </div>
        </div>

  );
};
