import React, { useContext } from "react";

import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

const CartRemove = ({ id }) => {
  const { removeFromCart } = useContext(ShoppingCartContext);

  return (
    <button
      onClick={() => removeFromCart(id)}
      className="
      bg-red-500
      hover:bg-red-600
      text-white
      px-5
      py-2
      rounded-full
      transition
      duration-300
      cursor-pointer
      font-medium
      "
    >
      Remove
    </button>
  );
};

export default CartRemove;