import React, { useContext } from "react";

import { CollectionContext } from "../../context/CollectionContext";
import CollectionCard from "./CollectionCard";

const CollectionSection = () => {
  const { collectionData } =
    useContext(CollectionContext);

  return (
    <section className="bg-[#F7F6F5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-serif mb-16">
          Featured Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {collectionData.map((item) => (
            <CollectionCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default CollectionSection;