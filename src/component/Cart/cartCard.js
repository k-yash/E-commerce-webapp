import React from 'react'
import {Rating} from "../Card/rating";
import {useCart} from "../../Contexts/cartContext";

const CartCard = ({product, quantity}) => {

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

                <div className="div4">
                    <div className="quantity-btn">
                        <button
                        onClick={() => {
                            dispatch({ type: "INCREMENT", payload: product.id });
                        }}
                        >
                        +
                        </button>
                        {quantity}
                        <button
                        onClick={() => {
                            dispatch({
                            type: "DECREMENT",
                            payload: { id: product.id, quantity: quantity }
                            });
                        }}
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
                        onClick={() => dispatch({ type: "REMOVE", payload: product.id })}
                    >
                        Remove
                    </button>
                </div>
            

            </div>
        </div>
    )
}

export default CartCard;
