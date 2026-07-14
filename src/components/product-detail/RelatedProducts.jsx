const RelatedProducts = ({
  products,
  category,
}) => {
  const filtered =
    products
      .filter(
        (
          item
        ) =>
          item.category ===
          category
      )
      .slice(
        0,
        4
      );

  return (
    <section className="mt-24">

      <h2
        className="
        text-4xl
        mb-10
        font-serif
        "
      >
        Related Products
      </h2>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6
        "
      >

        {filtered.map(
          (
            item
          ) => (
            <div
              key={
                item.id
              }
              className="
              bg-white
              p-5
              rounded-3xl
              "
            >
              <img
                src={
                  item.image
                }
                className="
                h-[180px]
                mx-auto
                object-contain
                "
              />

              <h3
                className="
                mt-4
                line-clamp-2
                "
              >
                {
                  item.title
                }
              </h3>

            </div>
          )
        )}

      </div>

    </section>
  );
};

export default RelatedProducts;