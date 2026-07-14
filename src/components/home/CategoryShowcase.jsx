import React from "react";
import { Link } from "react-router-dom";

import {
  motion,
} from "framer-motion";

const cards = [
  {
    image:
      "/images/fashion3.jpg",

    title:
      "Premium Fashion",

    text:
      "Explore luxury Shoes and timeless style.",
  },

  {
    image:
      "/images/fashion6.jpg",

    title:
      "Modern Collection",

    text:
      "Discover fresh arrivals for everyday elegance.",
  },

  {
    image:
      "/images/fashion5.jpg",

    title:
      "Luxury Essentials",

    text:
      "Upgrade your lifestyle with premium products.",
  },
];

const CategoryShowcase = () => {
  return (
    <section
      className="
      bg-[#F5F3EE]
      py-24
      px-6
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
          }}
          viewport={{
            once: true,
          }}
          className="mb-14"
        >
          <h2
            className="
            text-4xl
            font-serif
            text-[#222]
            "
          >
            Shop by Category
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="space-y-10">

          {cards.map(
            (
              item,
              index
            ) => (
              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 120,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 1.6,
                  delay:
                    index * 0.35,
                  ease:
                    "easeOut",
                }}

                viewport={{
                  once: true,
                  amount: 0.25,
                }}

                whileHover={{
                  scale: 1.03,

                  transition: {
                    duration: 0.7,
                  },
                }}

                className="
                relative
                h-[320px]
                rounded-[30px]
                overflow-hidden
                shadow-lg
                "
              >

                <motion.img
                  src={
                    item.image
                  }

                  alt={
                    item.title
                  }

                  whileHover={{
                    scale: 1.12,
                  }}

                  transition={{
                    duration: 1.8,
                  }}

                  className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  "
                />

                {/* Overlay */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-black/35
                  "
                ></div>

                {/* Text */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -80,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    duration: 1.2,
                    delay:
                      index * 0.4,
                  }}

                  className="
                  absolute
                  left-12
                  top-1/2
                  -translate-y-1/2
                  text-white
                  z-10
                  "
                >

                  <h3
                    className="
                    text-5xl
                    font-bold
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-lg
                    max-w-[420px]
                    "
                  >
                    {item.text}
                  </p>

                <Link to="/products">
  <motion.button
    whileHover={{
      scale: 1.08,
    }}
    whileTap={{
      scale: 0.96,
    }}
    transition={{
      duration: 0.5,
    }}
    className="
      mt-8
      bg-[#F97316]
      px-8
      py-3
      rounded-full
      transition
      cursor-pointer
      text-white
    "
  >
    Shop Now
  </motion.button>
</Link>

                </motion.div>

              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default CategoryShowcase;