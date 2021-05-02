import { createContext, useContext, useReducer } from "react";
import {cartReducer} from "../Reducers/cartReducer";
import {ifPresentCart,ifPresentWishlist, cartHandler, wishListHandler, productHandler} from "./utilities/restApiCalls";
export const CartContext = createContext();



export const CartProvider = ({ children }) => {
  const cartItems = [];
  const wishlist = [];

  const ifPresentCart = (id) => {
    const val = state.cartItems.some((item) => item.product.id === id);
    return val;
  };

 const ifPresentWishlist = (id) => {
    const val = state.wishlist.some((item) => item.product.id === id);
    return val;
  };



//  const productHandler = (item) => {
//     const val = ifPresentCart(item.id);
//     val
//       ? dispatch({ type: "INCREMENT", payload: item.id })
//       : dispatch({ type: "ADDTOCART", payload: item });
//   };

  

  // const data = {cartItems, wishlist}
  const [state, dispatch] = useReducer(cartReducer, { cartItems, wishlist });

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        ifPresentCart,
        ifPresentWishlist
        // cartHandler,
        // wishListHandler,
        // productHandler
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
