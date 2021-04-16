import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./cartContext";
import { ProductProvider } from "./productContext";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./authContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
