
import { useContext } from "react";
import { Link } from "react-router-dom";

import { ShoppingCartContext } from "../Context/ShoppingCartContext";

import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";
import CartClear from "../components/cart/CartClear";

const Cart = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-[#F7F6F2] flex items-center justify-center px-6">
        <div className="bg-white rounded-[30px] shadow-lg p-10 text-center w-full max-w-lg">
          <h1 className="text-4xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-4">
            Add some amazing products to your cart.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-[#F97316] text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F7F6F2] min-h-screen py-14 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-bold">
            Shopping Cart
          </h1>

          <CartClear />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">
            <CartItems cartItems={cartItems} />
          </div>

          <div>
            <CartSummary cartItems={cartItems} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Cart;