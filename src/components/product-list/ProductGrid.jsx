// src/components/product-list/ProductGrid.jsx

import React from "react";
import { Link } from "react-router-dom";

import {
  motion,
} from "framer-motion";

const ProductGrid = ({
  products,
}) => {
  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      justify-items-center
      "
    >
      {products.map(
        (
          item,
          index
        ) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay:
                index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
            bg-white
            rounded-2xl
            p-4
            border
            shadow-sm
            hover:shadow-xl
            transition
            overflow-hidden
            w-full
            max-w-[320px]
            "
          >

            <motion.img
              src={item.image}
              alt={item.title}
              className="
              w-full
              h-[180px]
              object-contain
              "
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              transition={{
                duration: 0.4,
              }}
            />

            <motion.p
              className="
              uppercase
              text-[10px]
              text-gray-400
              mt-3
              "
            >
              {item.category}
            </motion.p>

            <h3
              className="
              font-bold
              mt-2
              text-[15px]
              line-clamp-2
              text-gray-800
              "
            >
              {item.title}
            </h3>

            <p
              className="
              text-gray-500
              text-sm
              mt-2
              line-clamp-2
              "
            >
              {item.description}
            </p>

            <motion.p
              className="
              mt-3
              font-bold
              text-xl
              text-black
              "
              whileHover={{
                scale: 1.05,
              }}
            >
              ${item.price}
            </motion.p>

            {/* FIXED BUTTON */}

            <Link
              to={`/products/${item.id}`}
            >
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                mt-4
                bg-[#F97316]
                text-white
                px-4
                py-2
                rounded-full
                text-sm
                cursor-pointer
                "
              >
                View Details
              </motion.button>
            </Link>

          </motion.div>
        )
      )}
    </div>
  );
};

export default ProductGrid;