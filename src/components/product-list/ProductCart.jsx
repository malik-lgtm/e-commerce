import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-linear-to-br from-stone-100 via-white to-amber-50 p-6">
        <div className="flex h-64 items-center justify-center rounded-[1.25rem] bg-white p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full max-h-56 object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
          {product.category}
        </p>
        <h2 className="mt-3 line-clamp-2 text-xl font-semibold text-stone-900">
          {product.title}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-stone-500">Price</p>
            <p className="text-2xl font-bold text-stone-900">
              ${product.price}
            </p>
          </div>

         <Link
  to={`/products/${product.id}`}
  onClick={() =>
    console.log(
      "Clicked:",
      product.id
    )
  }
  className="
  rounded-full
  bg-stone-900
  px-5
  py-3
  text-sm
  font-semibold
  text-white
  hover:bg-amber-600
  "
>
  View details
</Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCart;
