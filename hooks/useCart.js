import React from "react";
import { AppContext } from "../App";
import Axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);
  const deleteCartItems = async () => {
    try {
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await Axios.delete(
          "https://64c97ea1b2980cec85c247be.mockapi.io/cart/" + item.id
        );
        // await delay(50);
        setCartItems((prev) => prev.filter((obj) => obj.id !== item.id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    cartItems,
    setCartItems,
    totalPrice,
    deleteCartItems,
  };
};
