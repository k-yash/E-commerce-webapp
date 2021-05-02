export const cartReducer = (state, action) => {
    switch (action.type) {

      case "SETCART":
        return {
          ...state, cartItems:action.payload
        }


      case "ADDTOCART":
        return {
          ...state,
          cartItems: [...state.cartItems, { product:action.payload, quantity: 1 }]
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
            item.product.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
  
      case "DECREMENT":
        if (action.payload.quantity === 1) {
          return {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.product.id !== action.payload.id
            )
          };
        }
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        };
  
      case "REMOVE":
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.product.id !== action.payload)
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