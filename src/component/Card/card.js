import "./card.css";
import { useCart } from "../../Contexts/cartContext";
import { Rating } from "./rating";
import { Link } from "react-router-dom";
import {restApiCalls} from "../../Contexts/utilities/restApiCalls";
import {useAuth} from "../../Contexts/authContext";
import { successToast, errorToast, infoToast } from "./toast";


export const Card = ({item}) => {
  const {
    dispatch,
    ifPresentCart,
    ifPresentWishlist,
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

    <div class="product-card" key={item.id}>

      <Rating rating={item.rating} />

			<div class="product">
        <i
          onClick={() => {user.isUserLoggedIn?addToWishlist():infoToast("Please login first!")} }
          className="fa fa-heart wish-heart"
          aria-hidden="true"
          style={{ color: ifPresentWishlist(item.id) ? "red" : "grey" }}
        ></i>
				<img src={item.image} height="190"/>
			</div>

			<div class="textp">
				<div class="titlep">
					<h3>{item.name}</h3>
          <p className="price">₹{item.price}</p>
				</div>
        {ifPresentCart(item.id) ? (
            <Link to="/cart" className="cart-btn btn-red">
              {ifPresentCart(item.id) ? "Go to Cart" : "Add to Cart"}
            </Link>
            ) : (
            <button
              className="cart-btn btn-red"
              onClick={() => {user.isUserLoggedIn?addToCart():infoToast("Please login first!")}}
            >
              {ifPresentCart(item.id) ? "Go to Cart" : "Add to Cart"}
            </button>)
        }
			</div>
	  </div>

  );
};
