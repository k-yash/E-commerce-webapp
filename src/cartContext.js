import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

function cartReduce(state, action) {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
      };

    case "ADDTOWISHLIST":
      return { ...state, wishlist: [...state.wishlist, { ...action.payload }] };

    case "REMOVEFROMWISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload)
      };

    case "MOVETOCART":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
      };
    case "MOVETOWISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload }],

        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )
      };

    case "INCREMENT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREMENT":
      if (action.payload.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          )
        };
      }
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    case "REMOVE":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload)
      };

    case "EMPTYCART":
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
}

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
  const [state, dispatch] = useReducer(cartReduce, { cartItems, wishlist });

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
