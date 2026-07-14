const ProductPrice = ({
  price,
}) => {
  return (
    <div
      className="
      mt-8
      "
    >
      <h2
        className="
        text-5xl
        font-bold
        text-[#F97316]
        "
      >
        ${price}
      </h2>
    </div>
  );
};

export default ProductPrice;