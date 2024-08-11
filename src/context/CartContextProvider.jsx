import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

 const CartContextProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(1 + value);
  };

  const handleDecrease = () => {
    setValue(value - 1);
  };

  return (
    <CartContext.Provider value={{ value, handleDecrease, handleIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartContextProvider;
