
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts";

const ProductDetail = ({
  product,
  allProducts,
}) => {
  return (
    <section
      className="
      bg-[#F7F6F2]
      min-h-screen
      py-14
      px-6
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Product Section */}
        <div
          className="
          grid
          lg:grid-cols-2
          gap-12
          items-center
          "
        >
          <ProductGallery
            product={product}
          />

          <ProductInfo
            product={product}
          />
        </div>

        {/* Related Products */}
        <RelatedProducts
          products={allProducts}
          category={product.category}
        />

      </div>
    </section>
  );
};

export default ProductDetail;