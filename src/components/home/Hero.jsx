import React from "react";
import { Link } from "react-router-dom";

import {
  motion,
} from "framer-motion";

const Hero = () => {
  return (
    <section
      className="
      relative
      h-[700px]
      bg-cover
      bg-center
      flex
      items-center
      overflow-hidden
      "
      style={{
        backgroundImage:
          "url('/images/ecom.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        className="
        relative
        max-w-7xl
        mx-auto
        px-10
        text-white
        "
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.h1
          className="
          text-6xl
          font-serif
          "
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          Discover Your Style
        </motion.h1>

        <motion.p
          className="
          mt-6
          text-xl
          text-gray-200
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
          Shop the latest trends &
          exclusive offers.
        </motion.p>

        <Link to="/products">

  <motion.button
    className="
    mt-8
    w-[220px]
    h-[60px]
    bg-[#F97316]
    rounded-full
    text-white
    text-xl
    cursor-pointer
    "
    initial={{
      opacity: 0,
      scale: 0.7,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      delay: 0.8,
      duration: 0.8,
    }}
    whileHover={{
      scale: 1.08,
    }}
    whileTap={{
      scale: 0.95,
    }}
  >
    Shop Now
  </motion.button>

</Link>
      </motion.div>
    </section>
  );
};

export default Hero;