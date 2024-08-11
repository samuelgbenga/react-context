import React, { useContext, useEffect } from "react";
import {useCartContext} from "../context/CartContextProvider";


const Cart = () => {


  const {value, handleIncrease, handleDecrease} = useCartContext();

  //   useEffect(() => {
  //     console.log("store", state);
  //   }, []);

  return (
    <div className="cart">
      <h2>Number of items in Cart:{value}</h2>
      <button
        className="green"
        onClick={handleIncrease}
      >
        Add Item to Cart
      </button>
      <button
        className="red"
        onClick={handleDecrease}
      >
        Remove Item from Cart
      </button>
    </div>
  );
};

export default Cart;
