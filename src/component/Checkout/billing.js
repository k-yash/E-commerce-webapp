import "./billing.css";
import { useCart } from "../../cartContext";
import { Subtotal } from "../Cart/cart";

export const Billing = () => {
  const { state } = useCart();
  return (
    <div className="content-page">
      <div className="row ">
        <div className="col-75">
          <div className="container-billing">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label for="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label for="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label for="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label for="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label for="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label for="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" />{" "}
                Shipping address same as billing
              </label>
              <input
                type="submit"
                value="Continue to checkout"
                className="btn"
              />
            </form>
          </div>
        </div>
        <div class="col-25">
          <div class="container-billing">
            <h4>
              Cart
              <span class="price" style={{ color: "black" }}>
                <i class="fa fa-shopping-cart"></i>
                <b>
                  {state.cartItems.reduce(
                    (acc, value) => acc + value.quantity,
                    0
                  )}
                </b>
              </span>
            </h4>
            {state.cartItems.map((item) => {
              return (
                <p>
                  <a href="#Billing">{item.name}</a> x {item.quantity}{" "}
                  <span class="price">₹{item.price * item.quantity}</span>
                </p>
              );
            })}
            <hr />
            <p>
              Total{" "}
              <span class="price" style={{ color: "black" }}>
                <b>
                  ₹<Subtotal />
                </b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
