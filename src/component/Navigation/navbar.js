import podkartLogo from "./podkartLogo.PNG";
import { useCart } from "../../Contexts/cartContext";
import { SearchBar } from "./searchBar";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Contexts/authContext";

export const NavBar = ({ setRoute }) => {
  const { state } = useCart();
  const {isUserLogin, setLogin, user, setUser} = useAuth();

  const logout =() =>{
    // setLogin(false);
    setUser({
      userId:"",
      userName:"",
      isUserLoggedIn:false
    });
    localStorage?.removeItem("AuthForEcomm");
  }

  return (
    <div>
      <div className="nav-box">
        <Link to="/">
          <img className="nav-logo" src={podkartLogo} alt="" width="150px"  height="50px"/>
        </Link>

        <SearchBar setRoute={setRoute} />

        {!user.isUserLoggedIn?
            <NavLink activeClassName="selected" to="/login" className="nav-btn">
              Login
            </NavLink>
          : <div className="right-menu">
            <button className="username-btn">Hi, {user.userName}</button>
            <div className="dropdown-menu"><button onClick={()=>{logout()}}>Log Out</button></div>
            </div> 
          }

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
