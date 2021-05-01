import "./filterbar.css";
import "../style.css";
// import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from "react";
import { successToast } from "../Card/toast";
import { useProduct } from "../../Contexts/productContext";
import { Card } from "../Card/card";
import axios from "axios";
import FilterBar from "./filterbar";
import LoadingPage from "../loadingpage";
import { useAuth } from "../../Contexts/authContext";
// import {toast} from "react-toastify";


export default function Products({ setRoute }) {
  const { filteredData,dispatchProduct, setData } = useProduct();
  const {loading, setLoading}= useAuth();


  useEffect(() => {
    
    (async()=>{
      setLoading(true);
      try{
        const {data} = await axios.get("https://podkart.yash2018.repl.co/products")
        // console.log({data});
        setData(data.products);
        successToast("Products loded successfully");
        dispatchProduct({type:"ADD_PRODUCTS", payload:data.products})

      }catch(err){
        console.log("Page cannot be loaded");
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
                type="productShowcase"
                setRoute={setRoute}
              />
              
              </>
            );
          })}
          
        </div>
        
      </div>
    </div>
  );
}
