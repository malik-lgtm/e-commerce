import React from "react";

import {
  motion,
} from "framer-motion";

const About = () => {
  const fadeUp = {
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
    <>

      {/* MAIN ABOUT SECTION */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Left */}
          <motion.div
            className="flex-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="
              text-4xl
              md:text-5xl
              font-serif
              text-gray-800
              leading-tight
              "
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
            >
              Discover Timeless Fashion
            </motion.h2>

            <motion.p
              className="
              mt-6
              text-gray-600
              text-lg
              leading-relaxed
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
              We bring you the latest trends with premium quality products. Our mission is to redefine your shopping experience with style, comfort, and elegance.
            </motion.p>

            <motion.p
              className="
              mt-4
              text-gray-500
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
              From everyday essentials to luxury pieces, explore collections designed for every lifestyle.
            </motion.p>

            <motion.button
              className="
              mt-8
              bg-orange-500
              text-white
              px-8
              py-3
              rounded-md
              cursor-pointer
              "
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Explore More
            </motion.button>

          </motion.div>

          {/* Right Image */}
          <motion.div
            className="
            flex-1
            flex
            justify-center
            "
            initial={{
              opacity: 0,
              x: 100,
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
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="relative"
            >
              <img
                src="/images/house.jpg"
                alt="About Fashion"
                className="
                w-[380px]
                md:w-[450px]
                rounded-lg
                object-cover
                shadow-lg
                "
              />

              <div
                className="
                absolute
                -z-10
                top-6
                left-6
                w-full
                h-full
                bg-orange-100
                rounded-lg
                "
              ></div>

            </motion.div>

          </motion.div>

        </div>

      </section>

{/* OUR STORY */}

<section className="bg-white py-20 px-4">

<div className="max-w-7xl mx-auto">

<motion.h2
initial={{
opacity:0,
y:60,
}}
whileInView={{
opacity:1,
y:0,
}}
viewport={{
once:true,
}}
className="
text-center
text-5xl
font-serif
text-gray-800
mb-16
"
>
Our Story
</motion.h2>

<div className="grid md:grid-cols-4 gap-8">

{[
["2020","Brand Started"],
["2022","5K Customers"],
["2024","Expanded"],
["2026","Premium Collections"],
].map((item,index)=>(

<motion.div
key={index}
initial={{
opacity:0,
y:80,
}}
whileInView={{
opacity:1,
y:0,
}}
transition={{
delay:index*0.2,
}}
viewport={{
once:true,
}}
whileHover={{
scale:1.05,
}}
className="
bg-[#FFF7ED]
rounded-3xl
p-10
text-center
"
>

<h3 className="text-orange-500 text-4xl font-bold">
{item[0]}
</h3>

<p className="mt-4 text-gray-600">
{item[1]}
</p>

</motion.div>

))}

</div>

</div>
</section>



{/* REVIEWS */}

<section className="bg-white py-20">

<div className="max-w-7xl mx-auto">

<h2
className="
text-center
text-5xl
font-serif
mb-16
"
>
Customer Reviews
</h2>

<div className="grid md:grid-cols-3 gap-10">

{[
"Beautiful quality products.",
"Fast delivery and amazing support.",
"My favorite ecommerce store.",
].map((text,index)=>(

<motion.div
key={index}
whileHover={{
scale:1.04,
}}
initial={{
opacity:0,
y:60,
}}
whileInView={{
opacity:1,
y:0,
}}
transition={{
delay:index*.2,
}}
viewport={{
once:true,
}}
className="
bg-[#FFF7ED]
rounded-3xl
p-10
"
>

<p className="text-orange-500 text-3xl">
★★★★★
</p>

<p className="mt-6 text-gray-600">
{text}
</p>

<p className="mt-6 font-bold">
Customer
</p>

</motion.div>

))}

</div>

</div>

</section>

 {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto text-center">

          <motion.h2
            className="
            text-4xl
            md:text-5xl
            font-serif
            text-gray-800
            "
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            className="
            mt-4
            text-gray-600
            max-w-2xl
            mx-auto
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
            We focus on quality, trust, and customer satisfaction to give you the best shopping experience.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16">

            {[
              ["10K+", "Happy Customers"],
              ["500+", "Premium Products"],
              ["24/7", "Customer Support"],
            ].map(
              (
                item,
                index
              ) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index *
                      0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  className="
                  bg-white
                  p-8
                  rounded-lg
                  shadow-sm
                  "
                >
                  <h3
                    className="
                    text-4xl
                    font-bold
                    text-orange-500
                    "
                  >
                    {item[0]}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {item[1]}
                  </p>
                </motion.div>
              )
            )}

          </div>

        </div>

      </section>

{/* NEWSLETTER */}

<section
className="
bg-orange-400
py-24
px-6
text-center
text-white
"
>

<motion.div
initial={{
opacity:0,
scale:.9,
}}
whileInView={{
opacity:1,
scale:1,
}}
viewport={{
once:true,
}}
className="
max-w-3xl
mx-auto
"
>

<h2
className="
text-5xl
font-serif
"
>
Stay Updated
</h2>

<p className="mt-6">

Get new arrivals and exclusive offers.

</p>

<div
className="
mt-10
flex
flex-col
md:flex-row
gap-4
"
>

<input
type="email"
placeholder="Enter Email"
className="
flex-1
bg-white
text-black
p-4
rounded-full
outline-none
"
/>

<button
className="
bg-black
px-10
rounded-full
cursor-pointer
"
>

Subscribe

</button>

</div>

</motion.div>

</section>

     

    </>
  );
};

export default About;