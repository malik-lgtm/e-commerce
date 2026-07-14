import React from "react";

const CartSummary = ({ cartItems }) => {
  // Total Items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping
  const shipping = cartItems.length > 0 ? 10 : 0;

  // Grand Total
  const grandTotal = subtotal + shipping;

  // Checkout Handler
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty. Please add some products before checking out.");
      return;
    }

    alert("✅ Order placed successfully! Thank you for shopping with us.");
  };

  return (
    <div className="bg-white rounded-[30px] shadow-sm p-8 sticky top-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Order Summary
      </h2>

      {/* Total Products */}
      <div className="flex justify-between mb-5">
        <span className="text-gray-600">Total Items</span>
        <span className="font-semibold">{totalItems}</span>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between mb-5">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-semibold">${subtotal.toFixed(2)}</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between mb-5">
        <span className="text-gray-600">Shipping</span>
        <span className="font-semibold">${shipping.toFixed(2)}</span>
      </div>

      <hr className="my-6" />

      {/* Grand Total */}
      <div className="flex justify-between">
        <span className="text-xl font-bold">Total</span>
        <span className="text-2xl font-bold text-[#F97316]">
          ${grandTotal.toFixed(2)}
        </span>
      </div>

      <button
        onClick={handleCheckout}
        className="mt-8 w-full bg-[#F97316] hover:bg-orange-600 text-white py-4 rounded-full font-semibold text-lg transition duration-300 cursor-pointer"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSummary;