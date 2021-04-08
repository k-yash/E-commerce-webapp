import commerce from "./commerce.png";
import { useCart } from "../../cartContext";
import { SearchBar } from "./searchBar";
import { Link } from "react-router-dom";

export const NavBar = ({ setRoute }) => {
  const { state } = useCart();

  return (
    <div>
      <div className="nav-box">
        <Link to="/">
          <img className="nav-logo" src={commerce} alt="" />
        </Link>

        <SearchBar setRoute={setRoute} />
        <ul className="navigation disable">
          <li>
            <Link to="/products" className="nav-btn">
              Products
            </Link>
          </li>

          <li>
            <Link className="nav-btn" to="/wishlist">
              WishList
              <i className="value fas fa-heart">
                <span>{state.wishlist.length}</span>
              </i>{" "}
            </Link>
          </li>

          <li>
            <Link to="/cart" className="nav-btn">
              Cart{" "}
              <i className="value fas fa-shopping-cart">
                <span>
                  {state.cartItems.reduce(
                    (acc, value) => acc + value.quantity,
                    0
                  )}
                </span>
              </i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-nav-bar">
        <ul className="mob-nav-box">
          <li>
            <Link to="/" className="nav-btn">
              <i className="mob-nav-btn fas fa-home"></i>
            </Link>
          </li>

          <li>
            <Link to="/products" className="nav-btn">
              <i className="mob-nav-btn fas fa-box"></i>
            </Link>
          </li>

          <li>
            <Link to="/wishlist" className="nav-btn">
              <i className="mob-nav-btn value fas fa-heart">
                <span>{state.wishlist.length}</span>
              </i>
            </Link>
          </li>

          <li>
            <Link to="/cart" className="nav-btn">
              <i className="mob-nav-btn value fas fa-shopping-cart">
                <span>
                  {state.cartItems.reduce(
                    (acc, value) => acc + value.quantity,
                    0
                  )}
                </span>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
