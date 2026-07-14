import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

import {
  motion,
} from "framer-motion";

const Footer = () => {
  const footerAnimation = {
    hidden: {
      opacity: 0,
      y: 80,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.footer
      className="
      bg-[#F5F5F5]
      px-4
      sm:px-6
      lg:px-8
      mt-16
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerAnimation}
    >
      <div className="max-w-7xl mx-auto py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo */}
          <motion.div
            whileHover={{
              y: -8,
            }}
          >
            <h2 className="text-3xl font-serif">
              ShopLogo
            </h2>

            <p className="mt-5 text-gray-600">
              Latest trends and premium products.
            </p>

            <div className="flex gap-4 mt-5 text-xl">

              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: 15,
                }}
              >
                <FaFacebookF className="cursor-pointer hover:text-orange-500 transition" />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: 15,
                }}
              >
                <FaInstagram className="cursor-pointer hover:text-orange-500 transition" />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: 15,
                }}
              >
                <FaPinterestP className="cursor-pointer hover:text-orange-500 transition" />
              </motion.div>

            </div>
          </motion.div>

          {/* Shop */}
          <motion.div
            whileHover={{
              y: -8,
            }}
          >
            <h3 className="font-semibold mb-4">
              Shop
            </h3>

            <Link
              to="/products"
              className="
              block
              text-gray-600
              hover:text-orange-500
              hover:translate-x-2
              transition-all
              duration-300
              "
            >
              Products
            </Link>

            <Link
              to="/products"
              className="
              block
              mt-3
              text-gray-600
              hover:text-orange-500
              hover:translate-x-2
              transition-all
              duration-300
              "
            >
              New Arrivals
            </Link>

          </motion.div>

          {/* Support */}
          <motion.div
            whileHover={{
              y: -8,
            }}
          >
            <h3 className="font-semibold mb-4">
              Support
            </h3>

            <Link
              to="/contact"
              className="
              block
              text-gray-600
              hover:text-orange-500
              hover:translate-x-2
              transition-all
              duration-300
              "
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className="
              block
              mt-3
              text-gray-600
              hover:text-orange-500
              hover:translate-x-2
              transition-all
              duration-300
              "
            >
              Contact
            </Link>

          </motion.div>

          {/* Subscribe */}
          <motion.div
            whileHover={{
              y: -8,
            }}
          >
            <input
              type="email"
              placeholder="Enter Email"
              className="
              border
              border-gray-300
              w-full
              p-3
              rounded-md
              focus:outline-none
              focus:ring-2
              focus:ring-orange-400
              "
            />

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              w-full
              mt-4
              p-3
              rounded-md
              cursor-pointer
              transition
              "
            >
              Subscribe
            </motion.button>

          </motion.div>

        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;