import {
  FiTruck,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";

import {
  motion,
} from "framer-motion";

const Features = () => {
  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 80,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="bg-white py-16 border-t border-b border-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="flex justify-start mb-10"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h2 className="text-3xl font-serif text-gray-800">
            Features
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Card 1 */}
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="
            flex
            flex-col
            items-center
            text-center
            gap-3
            p-6
            rounded-lg
            hover:shadow-xl
            "
          >
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.2,
              }}
              className="p-4 bg-gray-50 rounded-full"
            >
              <FiTruck size={28} />
            </motion.div>

            <h3 className="text-lg font-semibold">
              Free Shipping
            </h3>

            <p className="text-gray-500 text-sm">
              Fast and reliable delivery to your doorstep.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="
            flex
            flex-col
            items-center
            text-center
            gap-3
            p-6
            rounded-lg
            hover:shadow-xl
            "
          >
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.2,
              }}
              className="p-4 bg-gray-50 rounded-full"
            >
              <FiShield size={28} />
            </motion.div>

            <h3 className="text-lg font-semibold">
              Secure Checkout
            </h3>

            <p className="text-gray-500 text-sm">
              Your payments are safe and protected.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="
            flex
            flex-col
            items-center
            text-center
            gap-3
            p-6
            rounded-lg
            hover:shadow-xl
            "
          >
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.2,
              }}
              className="p-4 bg-gray-50 rounded-full"
            >
              <FiHeadphones size={28} />
            </motion.div>

            <h3 className="text-lg font-semibold">
              24/7 Support
            </h3>

            <p className="text-gray-500 text-sm">
              We are always here to help you anytime.
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Features;