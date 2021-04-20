import "./filterbar.css";
import "../style.css";
import { ToastContainer } from "react-toastify";
import { useProduct } from "../../productContext";
import { Card } from "../Card/card";
import FilterBar from "./filterbar";

export default function Products({ setRoute }) {
  const { filteredData } = useProduct();

  return (
    <div className="content-page">
      <h1>Products</h1>
      <div className="product-page-grid">
        <FilterBar />

        <div className="product-showcase product-left">
          {filteredData.map((item) => {
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
