import { createContext, useContext, useReducer, useState } from "react";
import {productReducer} from "../Reducers/productReducer";
const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
 
  const [
    { products, sortBy, showInventoryAll, fastDeliveryOnly, priceRange, selectRating },
    dispatchProduct
  ] = useReducer(productReducer, {
    products:[],
    sortBy: null,
    showInventoryAll: true,
    fastDeliveryOnly: false,
    priceRange:3300,
    selectRating:1
  });

  const [data, setData] = useState(products);

  const onSearchData = (event) => {
    const filterData = products.filter((item) => {
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
    { showInventoryAll, fastDeliveryOnly, priceRange, selectRating }
  ) => {
    return productList
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
      .filter(({ fastDelivery }) => (fastDeliveryOnly ? fastDelivery : true))
      .filter(({price})=> (parseInt(price) < priceRange))
      .filter(({rating})=>(parseInt(rating)>=selectRating))
  };

  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showInventoryAll,
    fastDeliveryOnly,
    priceRange,
    selectRating
  });
  return (
    <ProductContext.Provider
      value={{
        filteredData,
        dispatchProduct,
        showInventoryAll,
        fastDeliveryOnly,
        onSearchData,
        priceRange,
        setData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};