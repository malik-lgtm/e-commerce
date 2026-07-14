import React, {
  useEffect,
  useState,
} from "react";

import ProductListHeader from "../components/product-list/ProductListHeader";
import ProductGrid from "../components/product-list/ProductGrid";
import ProductListSkeleton from "../components/product-list/ProductListSkeleton";

const ProductListing = () => {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <section
      className="
      bg-[#F7F6F2]
      min-h-screen
      px-6
      md:px-10
      py-12
      "
    >
      <div className="max-w-7xl mx-auto">

        <ProductListHeader
          totalProducts={
            products.length
          }
        />

        {loading ? (
          <ProductListSkeleton />
        ) : (
          <ProductGrid
            products={products}
          />
        )}

      </div>
    </section>
  );
};

export default ProductListing;