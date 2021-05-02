import React from 'react'
import {Rating} from "../Card/rating";
import {useCart} from "../../Contexts/cartContext";
import {restApiCalls} from "../../Contexts/utilities/restApiCalls";
import {useAuth} from "../../Contexts/authContext";
const CartCard = ({product, quantity}) => {

    const { dispatch, ifPresentWishlist } = useCart();
    const {user} = useAuth();

    const incrementQuantity= async() => {
        dispatch({ type: "INCREMENT", payload: product.id });
        const response = await restApiCalls("POST",`cart/${user.userId}/${product.id}`,{qty: quantity+1})
    }

    const decrementQuantity=  async() => {
        dispatch({ type: "DECREMENT", payload: {id:product.id, quantity:quantity} });
        if(quantity==1){
            const response = await restApiCalls("DELETE",`cart/${user.userId}/${product.id}`)
        }else{
            const response = await restApiCalls("POST",`cart/${user.userId}/${product.id}`,{qty: quantity-1})
        }

    }

    const cartHandler = async(product) => {
        if (ifPresentWishlist(product.id)) {
          dispatch({ type: "REMOVE", payload: product.id });
          const response = await restApiCalls("DELETE",`cart/${user.userId}/${product.id}`);
        } else {
          dispatch({ type: "MOVETOWISHLIST", payload: product });
          const response = await restApiCalls("DELETE",`cart/${user.userId}/${product.id}`);
          if(response.success){
              const response = await restApiCalls("POST", `wishlist/${user.userId}`, {productId: product.id});
          }

        }
      };

    const removeHandler = async() => {
        dispatch({ type: "REMOVE", payload: product.id });
        const response = await restApiCalls("DELETE",`cart/${user.userId}/${product.id}`);

    }
    

    return (
        <div className="card-v" key={product.id}>
            <img src={product.image} width="100%" height="auto" alt={product.name} />
            <div className="content-card">
                <div className="div1">
                <p>{product.name}</p>
                <p className="price">₹{product.price}</p>
                </div>
                <Rating rating={product.rating} />

                <div className="div4">
                    <div className="quantity-btn">
                        <button
                        onClick={() => {incrementQuantity()}}
                        >
                        +
                        </button>
                        {quantity}
                        <button
                        onClick={() => {decrementQuantity()}}
                        >
                        -
                        </button>
                    </div>
                    <button
                        className="cart-btn btn-blue"
                        onClick={() => cartHandler(product)}
                    >
                        Move to Wishlist
                    </button>
                    <button
                        className="cart-btn btn-red"
                        onClick={() => removeHandler()}
                    >
                        Remove
                    </button>
                </div>
            

            </div>
        </div>
    )
}

export default CartCard;
