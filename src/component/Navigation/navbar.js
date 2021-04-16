import commerce from "./commerce.png";
import { useCart } from "../../cartContext";
import { SearchBar } from "./searchBar";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink
              activeClassName="selected"
              to="/products"
              className="nav-btn"
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              className="nav-btn"
              activeClassName="selected"
              to="/wishlist"
            >
              {/* WishList */}
              <i className="value fas fa-heart">
                <span>{state.wishlist.length}</span>
              </i>{" "}
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/cart" className="nav-btn">
              {/* Cart */}
              <i className="value fas fa-shopping-cart">
                <span>
                  {state.cartItems.reduce(
                    (acc, value) => acc + value.quantity,
                    0
                  )}
                </span>
              </i>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/login" className="nav-btn">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile-nav-bar">
        <ul className="mob-nav-box">
          <li>
            <NavLink end activeClassName="selected" to="/" className="nav-btn">
              <i className="mob-nav-btn fas fa-home"></i>
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName="selected"
              to="/products"
              className="nav-btn"
            >
              <i className="mob-nav-btn fas fa-box"></i>
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName="selected"
              to="/wishlist"
              className="nav-btn"
            >
              <i className="mob-nav-btn value fas fa-heart">
                <span>{state.wishlist.length}</span>
              </i>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/cart" className="nav-btn">
              <i className="mob-nav-btn value fas fa-shopping-cart">
                <span>
                  {state.cartItems.reduce(
                    (acc, value) => acc + value.quantity,
                    0
                  )}
                </span>
              </i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
