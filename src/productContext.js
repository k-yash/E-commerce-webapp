import { itemsInCart } from "./items-in-cart";
import { createContext, useContext, useReducer, useState } from "react";

const ProductContext = createContext();

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "TOGGLE_INVENTORY":
      return { ...state, showInventoryAll: !state.showInventoryAll };

    case "TOGGLE_DELIVERY":
      return { ...state, fastDeliveryOnly: !state.fastDeliveryOnly };

    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    default:
      break;
  }
};

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState(itemsInCart);

  const [
    { sortBy, showInventoryAll, fastDeliveryOnly },
    dispatchProduct
  ] = useReducer(reducerFunc, {
    sortBy: null,
    showInventoryAll: true,
    fastDeliveryOnly: false
  });

  const onSearchData = (event) => {
    const filterData = itemsInCart.filter((item) => {
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setData(filterData);
    // return filterData;
    // console.log(filterData);
  };

  const getSortedData = (productList, sortBy) => {
    if (sortBy && sortBy === "LOWTOHIGH") {
      return productList.sort((a, b) => a.price - b.price);
    }
    if (sortBy && sortBy === "HIGHTOLOW") {
      return productList.sort((a, b) => b.price - a.price);
    }
    return productList;
  };

  const getFilteredData = (
    productList,
    { showInventoryAll, fastDeliveryOnly }
  ) => {
    return productList
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
      .filter(({ fastDelivery }) => (fastDeliveryOnly ? fastDelivery : true));
  };

  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showInventoryAll,
    fastDeliveryOnly
  });
  return (
    <ProductContext.Provider
      value={{
        filteredData,
        dispatchProduct,
        showInventoryAll,
        fastDeliveryOnly,
        onSearchData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
