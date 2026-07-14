import React from "react";

import { motion } from "framer-motion";

import contactImg from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="bg-[#F7F4EF]">

      {/* CONTACT FORM */}

      <div
        className="
        w-full
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-14
        "
      >

        <motion.div
          className="
          w-full
          max-w-6xl
          bg-white
          rounded-[30px]
          overflow-hidden
          shadow-lg
          flex
          flex-col
          md:flex-row
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
            duration: 1.3,
          }}
        >

          {/* IMAGE */}

          <motion.div
            className="md:w-1/2"

            initial={{
              opacity: 0,
              x: -120,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1.5,
            }}
          >

            <motion.img
              src={contactImg}
              alt="contact"

              whileHover={{
                scale: 1.04,
              }}

              transition={{
                duration: 0.7,
              }}

              className="
              w-full
              h-full
              object-cover
              "
            />

          </motion.div>

          {/* FORM */}

          <motion.div
            className="
            md:w-1/2
            p-10
            md:p-14
            "

            initial={{
              opacity: 0,
              x: 120,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1.5,
            }}
          >

            <h2
              className="
              text-4xl
              font-serif
              text-[#222]
              "
            >
              Contact Us
            </h2>

            <p className="text-gray-500 mt-3">
              We'd love to hear from you.
            </p>

            <form className="mt-10 space-y-5">

              {[
                {
                  label: "Full Name",
                  type: "text",
                },

                {
                  label: "Email",
                  type: "email",
                },

                {
                  label: "Subject",
                  type: "text",
                },
              ].map(
                (
                  field,
                  index
                ) => (

                  <motion.div
                    key={index}

                    initial={{
                      opacity: 0,
                      y: 40,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      duration: 1,
                      delay:
                        index *
                        0.3,
                    }}
                  >

                    <label>
                      {field.label}
                    </label>

                    <input
                      type={
                        field.type
                      }

                      className="
                      w-full
                      mt-2
                      px-4
                      py-4
                      rounded-xl
                      border
                      focus:ring-2
                      focus:ring-[#F97316]
                      outline-none
                      "
                    />

                  </motion.div>
                )
              )}

              <motion.div
                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                transition={{
                  duration: 1,
                  delay: 1,
                }}
              >

                <label>
                  Message
                </label>

                <textarea
                  rows="5"

                  className="
                  w-full
                  mt-2
                  px-4
                  py-4
                  rounded-xl
                  border
                  outline-none
                  focus:ring-2
                  focus:ring-[#F97316]
                  "
                />

              </motion.div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="
                w-full
                py-4
                rounded-xl
                bg-[#F97316]
                text-white
                font-semibold
                mt-4
                "
              >
                Send Message
              </motion.button>

            </form>

          </motion.div>

        </motion.div>

      </div>

      {/* CONTACT CARDS */}

      <section className="max-w-6xl mx-auto px-4">

        <h2
          className="
          text-center
          text-4xl
          font-serif
          mb-14
          text-[#222]
          "
        >
          Get In Touch
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >

          {[
            [
              "Phone",
              "+92 300 1234567",
            ],

            [
              "Email",
              "support@shop.com",
            ],

            [
              "Location",
              "Pakistan",
            ],
          ].map(
            (
              item,
              index
            ) => (

              <motion.div
                key={index}

                whileHover={{
                  y: -10,
                }}

                initial={{
                  opacity: 0,
                  y: 70,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 1,
                  delay:
                    index *
                    0.3,
                }}

                className="
                bg-white
                rounded-[28px]
                p-10
                text-center
                shadow-sm
                "
              >

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-[#F97316]
                  "
                >
                  {item[0]}
                </h3>

                <p className="mt-5 text-gray-500">
                  {item[1]}
                </p>

              </motion.div>

            )
          )}

        </div>

      </section>

      {/* FAQ */}

      <section
        className="
        max-w-6xl
        mx-auto
        mt-24
        mb-24
        px-4
        "
      >

        <div
          className="
          bg-[#FFF7F0]
          rounded-[30px]
          p-10
          "
        >

          <h2
            className="
            text-center
            text-4xl
            font-serif
            mb-12
            "
          >
            FAQ
          </h2>

          <div className="space-y-6">

            {[
              [
                "How long does shipping take?",
                "3–7 working days.",
              ],

              [
                "Can I return products?",
                "Yes within 14 days.",
              ],

              [
                "Support available?",
                "24/7 Support.",
              ],
            ].map(
              (
                item,
                index
              ) => (

                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    x: -70,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    duration: 1,
                    delay:
                      index *
                      0.3,
                  }}

                  className="
                  bg-white
                  rounded-xl
                  p-7
                  "
                >

                  <h3 className="font-semibold">
                    {item[0]}
                  </h3>

                  <p className="mt-3 text-gray-500">
                    {item[1]}
                  </p>

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;