const ProductGallery = ({
  product,
}) => {
  return (
    <div
      className="
      bg-white
      rounded-[30px]
      p-8
      "
    >
      <img
        src={
          product.image
        }
        alt={
          product.title
        }
        className="
        w-full
        h-[500px]
        object-contain
        "
      />
    </div>
  );
};

export default ProductGallery;