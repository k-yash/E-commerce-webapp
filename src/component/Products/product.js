import "../style.css";
import { useProduct } from "../../productContext";
import { Card } from "../Card/card";

export default function Products({ setRoute }) {
  const {
    filteredData,
    dispatchProduct,
    showInventoryAll,
    fastDeliveryOnly
  } = useProduct();

  return (
    <div className="content-page">
      <h1>Products</h1>
      <div className="filter-bar">
        <fieldset>
          <div>
            <input
              className="input"
              type="radio"
              name="sort"
              onClick={() =>
                dispatchProduct({ type: "SORT_BY", payload: "HIGHTOLOW" })
              }
            />
            <label className="label">Price High To Low</label>
          </div>
          <input
            className="input"
            type="radio"
            name="sort"
            onClick={() =>
              dispatchProduct({ type: "SORT_BY", payload: "LOWTOHIGH" })
            }
          />
          <label className="label">Price Low To High</label>
        </fieldset>

        <fieldset>
          <div>
            <input
              className="input"
              type="checkbox"
              checked={fastDeliveryOnly}
              onClick={() => dispatchProduct({ type: "TOGGLE_DELIVERY" })}
            />
            <label className="label">Fast Delivery</label>
          </div>
          <input
            className="input"
            type="checkbox"
            checked={showInventoryAll}
            onClick={() => dispatchProduct({ type: "TOGGLE_INVENTORY" })}
          />
          <label className="label">Includes Out of Stock</label>
        </fieldset>
      </div>

      <div className="product-showcase">
        {filteredData.map((item) => {
          return (
            <Card
              key={item.id}
              item={item}
              type="productShowcase"
              setRoute={setRoute}
            />
          );
        })}
      </div>
    </div>
  );
}
