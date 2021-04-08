import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./cartContext";
import { ProductProvider } from "./productContext";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </Router>
  </StrictMode>,
  rootElement
);
