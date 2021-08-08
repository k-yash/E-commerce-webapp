import "./filterbar.css";
import { useProduct } from "../../Contexts/productContext";

const FilterBar = () => {
  const { dispatchProduct, showInventoryAll, fastDeliveryOnly, priceRange, selectRating } = useProduct();

  return (
    <>
      <div className="filter-bar">
        <h3>Filters</h3>
        <fieldset>
        <legend>Sort</legend>
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
        <legend>Delivery</legend>
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

        <fieldset>
        <legend>Price</legend>
          <div>
            <input
              className="input"
              type="range"
              min="300"
              max="3300"
              value={priceRange}
              step="300"
              onChange={(event) =>
                dispatchProduct({ type: "PRICE_RANGE", payload: event.target.value })
            }
              // checked={fastDeliveryOnly}
              // onClick={() => dispatchProduct({ type: "TOGGLE_DELIVERY" })}
            />
            {/* <label className="label">Fast Delivery</label> */}
          </div>
         
          <label className="label">Price between 300 to {priceRange}</label>
        </fieldset>

        <fieldset>
        <legend>Rating</legend>
          <div>
            <input
              className="input"
              type="radio"
              name="rating"
              checked={selectRating}
              onClick={() => dispatchProduct({ type: "SELECT_RATING", payload:4 })}
            />
            <label className="label">4<span className="fa fa-star"></span> & above</label>
          </div>

          <div>
            <input
              className="input"
              type="radio"
              name="rating"
              checked={selectRating}
              onClick={() => dispatchProduct({ type: "SELECT_RATING", payload:3  })}
            />
            <label className="label">3<span className="fa fa-star"></span> & above</label>
          </div>

          <div>
            <input
              className="input"
              type="radio"
              name="rating"
              checked={selectRating}
              onClick={() => dispatchProduct({ type: "SELECT_RATING", payload:2  })}
            />
            <label className="label">2<span className="fa fa-star"></span> & above</label>
          </div>

          <div>
            <input
              className="input"
              type="radio"
              name="rating"
              checked={selectRating}
              onClick={() => dispatchProduct({ type: "SELECT_RATING", payload:1 })}
            />
            <label className="label">1<span className="fa fa-star"></span> & above</label>
          </div>
          
        </fieldset>
      </div>
    </>
  );
};

export default FilterBar;
