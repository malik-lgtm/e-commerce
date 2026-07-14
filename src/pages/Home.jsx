import React from "react";

import Hero from "../components/home/Hero";

import CollectionSection from "../components/home/CollectionSection";
import ShoppingVideo from "../components/home/ShoppingVideo";
import CategoryShowcase from "../components/home/CategoryShowcase";
import Features from "../components/home/Features";

const Home = () => {
  return (
    <>
      <Hero />
     
      <CollectionSection />
          <ShoppingVideo/>
          <CategoryShowcase/>
           <Features />
    </>
  );
};

export default Home;