import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ShoppingCartContext } from "../Context/ShoppingCartContext";

import ProductDetail from "../components/product-detail/ProductDetail";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    loading,
    listOfProducts,
    handleAddToCart,
  } = useContext(ShoppingCartContext);

  const product = listOfProducts.find(
    (item) => item.id === Number(id)
  );

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        Product not found
      </div>
    );
  }

  return (
    <ProductDetail
      product={product}
      allProducts={listOfProducts}
      handleAddToCart={handleAddToCart}
    />
  );
};

export default ProductDetails;