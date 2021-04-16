import "./filterbar.css";
import { useProduct } from "../../productContext";

const FilterBar = () => {
  const { dispatchProduct, showInventoryAll, fastDeliveryOnly } = useProduct();

  return (
    <>
      <div className="filter-bar">
        <h3>Filters</h3>
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
            <label className="label">High To Low</label>
          </div>
          <div>
            <input
              className="input"
              type="radio"
              name="sort"
              onClick={() =>
                dispatchProduct({ type: "SORT_BY", payload: "LOWTOHIGH" })
              }
            />
            <label className="label">Low To High</label>
          </div>
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
    </>
  );
};

export default FilterBar;
