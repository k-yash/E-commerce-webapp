import { createContext, useContext, useReducer } from "react";
import {cartReducer} from "../Reducers/cartReducer";
import {ifPresentCart,ifPresentWishlist, cartHandler, wishListHandler, productHandler} from "./utilities/utilityFunction";
export const CartContext = createContext();



export const CartProvider = ({ children }) => {
  const cartItems = [];
  const wishlist = [];

  const ifPresentCart = (id) => {
    const val = state.cartItems.some((item) => item.id === id);
    return val;
  };

 const ifPresentWishlist = (id) => {
    const val = state.wishlist.some((item) => item.id === id);
    return val;
  };

 const cartHandler = (item) => {
    if (ifPresentWishlist(item.id)) {
      dispatch({ type: "REMOVE", payload: item.id });
    } else {
      dispatch({ type: "MOVETOWISHLIST", payload: item });
    }
  };

 const wishListHandler = (item) => {
    if (ifPresentCart(item.id)) {
      dispatch({ type: "REMOVEFROMWISHLIST", payload: item.id });
    } else {
      dispatch({ type: "MOVETOCART", payload: item });
    }
  };

 const productHandler = (item) => {
    const val = ifPresentCart(item.id);
    val
      ? dispatch({ type: "INCREMENT", payload: item.id })
      : dispatch({ type: "ADDTOCART", payload: item });
  };

  

  // const data = {cartItems, wishlist}
  const [state, dispatch] = useReducer(cartReducer, { cartItems, wishlist });

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        ifPresentCart,
        ifPresentWishlist,
        cartHandler,
        wishListHandler,
        productHandler
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
