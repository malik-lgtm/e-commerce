import React from "react";

import {
  motion,
} from "framer-motion";

const ProductListHeader = ({
  totalProducts,
}) => {
  return (
    <motion.section
      className="
      bg-[#F5F3EE]
      border
      border-[#E8E3D9]
      rounded-[32px]
      px-8
      md:px-12
      py-10
      mb-10

      flex
      flex-col
      lg:flex-row

      justify-between
      items-start
      lg:items-center

      gap-8
      "
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
        duration: 0.8,
      }}
    >
      {/* Left */}

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
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <motion.p
          className="
          uppercase
          tracking-[4px]
          text-[12px]
          font-medium
          text-[#D09054]
          mb-4
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          Product Catalog
        </motion.p>

        <motion.h1
          className="
          text-[#222222]
          text-4xl
          md:text-5xl
          font-bold
          leading-tight
          "
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          Find your next
          <br />
          everyday favorite
        </motion.h1>

        <motion.p
          className="
          text-[#767676]
          mt-5
          max-w-[620px]
          leading-7
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          Explore a curated mix of
          fashion, electronics and
          essentials pulled from
          our shared catalog.
        </motion.p>

      </motion.div>

      {/* Right */}

      <motion.div
        className="
        bg-[#F97316]
        rounded-[24px]
        px-8
        py-7
        min-w-[240px]
        text-white
        shadow-sm
        "
        initial={{
          opacity: 0,
          scale: 0.7,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        viewport={{
          once: true,
        }}
        whileHover={{
          scale: 1.05,
          y: -5,
        }}
      >
        <p
          className="
          uppercase
          tracking-[4px]
          text-[11px]
          text-[#D7D7D7]
          "
        >
          Live Products
        </p>

        <motion.h2
          className="
          text-[42px]
          font-bold
          mt-2
          "
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {totalProducts}
        </motion.h2>

        <p
          className="
          text-[#BDBDBD]
          text-sm
          "
        >
          Ready to browse
          right now
        </p>

      </motion.div>

    </motion.section>
  );
};

export default ProductListHeader;