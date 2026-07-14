import React from "react";

import {
  motion,
} from "framer-motion";

import shoppingVideo from "../../assets/videos/shopping-video.mp4";

const ShoppingVideo = () => {
  return (
    <section
      className="
      bg-[#F5F5F5]
      py-20
      px-6
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        "
      >

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="
          text-center
          mb-12
          "
        >
          <p
            className="
            uppercase
            tracking-[5px]
            text-[#F97316]
            text-sm
            "
          >
            Lifestyle Collection
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-serif
            text-[#222]
            mt-4
            "
          >
            Everything You Love
          </h2>

          <p
            className="
            mt-5
            text-gray-500
            max-w-2xl
            mx-auto
            "
          >
            Discover fashion, beauty,
            shoes, home essentials,
            luxury bags and modern
            lifestyle products.
          </p>
        </motion.div>

        {/* Video */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          whileHover={{
            scale: 1.01,
          }}
          className="
          overflow-hidden
          rounded-[24px]
          shadow-xl
          mx-auto
          "
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="
            w-full
            h-[300px]
            sm:h-[420px]
            md:h-[500px]
            object-cover
            "
          >
            <source
              src={shoppingVideo}
              type="video/mp4"
            />
          </video>

        </motion.div>

      </div>
    </section>
  );
};

export default ShoppingVideo;