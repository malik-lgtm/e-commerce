import React from "react";
import CartRemove from "./CartRemove";

const CartItems = ({ cartItems }) => {
  return (
    <div className="flex flex-col gap-6">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="
          bg-white
          rounded-[30px]
          p-6
          shadow-sm
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          "
        >
          {/* Product Image */}
          <div
            className="
            w-[140px]
            h-[140px]
            bg-[#F7F6F2]
            rounded-2xl
            flex
            items-center
            justify-center
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[90px] h-[90px] object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h2
              className="
              text-2xl
              font-bold
              text-gray-900
              "
            >
              {item.title}
            </h2>

            <p
              className="
              text-sm
              text-gray-500
              mt-2
              capitalize
              "
            >
              {item.category}
            </p>

            <p
              className="
              text-[#F97316]
              font-bold
              text-2xl
              mt-4
              "
            >
              ${item.price}
            </p>

            <p
              className="
              mt-2
              text-gray-700
              font-medium
              "
            >
              Quantity :
              <span className="ml-2">
                {item.quantity}
              </span>
            </p>
          </div>

          {/* Total */}
          <div
            className="
            flex
            flex-col
            items-center
            gap-4
            "
          >
            <p
              className="
              text-2xl
              font-bold
              "
            >
              $
              {(item.price * item.quantity).toFixed(
                2
              )}
            </p>

            <CartRemove id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;