import React from "react";

import "./App.css";
import Cart from "./component/Cart";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <Cart />
    </CartContextProvider>
  );
};

export default App;
