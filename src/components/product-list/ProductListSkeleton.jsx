// src/components/product-list/ProductListSkeleton.jsx

import React from "react";

const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="
          h-[400px]
          rounded-3xl
          bg-gray-200
          animate-pulse
          "
        />
      ))}
    </div>
  );
};

export default ProductListSkeleton;