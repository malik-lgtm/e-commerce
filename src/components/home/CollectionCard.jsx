import React from "react";

import {
  motion,
} from "framer-motion";

const CollectionCard = ({
  image,
  title,
}) => {
  return (
    <motion.div
      className="
      group
      cursor-pointer
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
      whileHover={{
        y: -10,
      }}
    >
      <div
        className="
        overflow-hidden
        bg-[#EFEFEF]
        rounded-xl
        "
      >
        <motion.img
          src={image}
          alt={title}
          className="
          w-full
          h-[340px]
          object-cover
          "
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.5,
          }}
        />
      </div>

      <motion.h3
        className="
        text-center
        mt-6
        text-[32px]
        text-[#222]
        "
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

export default CollectionCard;