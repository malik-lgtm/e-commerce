import React, { useContext } from "react";

import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

const CartClear = () => {
  const { clearCart, cartItems } = useContext(ShoppingCartContext);

  if (cartItems.length === 0) return null;

  return (
    <button
      onClick={clearCart}
      className="
      bg-gray-900
      hover:bg-black
      text-white
      px-8
      py-3
      rounded-full
      transition
      duration-300
      cursor-pointer
      font-semibold
      "
    >
      Clear Cart
    </button>
  );
};

export default CartClear;