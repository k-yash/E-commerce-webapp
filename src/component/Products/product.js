import "./filterbar.css";
import "../style.css";
import {useEffect, useState} from "react";
import { successToast, errorToast } from "../Card/toast";
import { useProduct } from "../../Contexts/productContext";
import { Card } from "../Card/card";
import axios from "axios";
import FilterBar from "./filterbar";
import LoadingPage from "../loadingpage";
import { useAuth } from "../../Contexts/authContext";
import {restApiCalls} from "../../Contexts/utilities/restApiCalls";



export default function Products() {
  const { filteredData,dispatchProduct, setData } = useProduct();
  const {loading, setLoading}= useAuth();


  useEffect(() => {
    
    (async()=>{
      setLoading(true);
      try{
        const response = await restApiCalls("GET","products"); 
        setData(response.products);
        // successToast("Products loded successfully");
        dispatchProduct({type:"ADD_PRODUCTS", payload:response.products})


      }catch(err){
        // setData([]);
        errorToast("Something went wrong!");
      }finally{
        setLoading(false);
      }

    })();
  
  }, [])

  return (
    <div className="content-page">
      <h1>Products</h1>
      <div className="product-page-grid">
        <FilterBar />
      

        <div className="product-showcase product-left">
          {loading ? <LoadingPage/>:filteredData.map((item) => {
            return (
              <>
              <Card
                key={item.id}
                item={item}
              />
              
              </>
            );
          })}
          
        </div>
        
      </div>
    </div>
  );
}
