import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

import ProductPrice from "./ProductPrice";

const ProductInfo = ({ product }) => {
  const navigate = useNavigate();

  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    if (!addToCart) {
      console.error("addToCart is not available in ShoppingCartContext");
      return;
    }

    addToCart(product);
    navigate("/cart");
  };

  return (
    <div
      className="
        bg-white
        rounded-[30px]
        p-10
        shadow-sm
      "
    >
      <p
        className="
          uppercase
          text-[#D09054]
          tracking-widest
          text-sm
        "
      >
        {product.category}
      </p>

      <h1
        className="
          text-5xl
          font-bold
          mt-5
          text-[#222]
        "
      >
        {product.title}
      </h1>

      <ProductPrice price={product.price} />

      <p
        className="
          mt-8
          text-gray-600
          leading-8
        "
      >
        {product.description}
      </p>

      <div
        className="
          mt-10
          flex
          gap-4
          flex-wrap
        "
      >
        <button
          onClick={handleAddToCart}
          className="
            bg-[#F97316]
            hover:bg-orange-600
            text-white
            px-8
            py-3
            rounded-full
            transition
            cursor-pointer
          "
        >
          Add To Cart
        </button>

        <Link
          to="/products"
          className="
            border
            border-gray-300
            px-8
            py-3
            rounded-full
            hover:bg-gray-100
            transition
          "
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;