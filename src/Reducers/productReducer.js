export const productReducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCTS":
        return {...state, products:action.payload}
      case "TOGGLE_INVENTORY":
        return { ...state, showInventoryAll: !state.showInventoryAll };
  
      case "TOGGLE_DELIVERY":
        return { ...state, fastDeliveryOnly: !state.fastDeliveryOnly };
  
      case "SORT_BY":
        return { ...state, sortBy: action.payload };

      case "PRICE_RANGE":
        return {...state, priceRange:action.payload};

      case "SELECT_RATING":
        return {...state, selectRating:action.payload}  
  
      default:
        return state;
    }
  };