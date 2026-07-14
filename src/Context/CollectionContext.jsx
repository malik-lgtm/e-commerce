import React, { createContext } from "react";

export const CollectionContext =
  createContext();

const collectionData = [
  {
    id: 1,
    title: "Spring Fashion",
    image: "/images/fashion7.jpg",
  },
  {
    id: 2,
    title: "Luxury Watches",
    image: "/images/fashion.jpg",
  },
  {
    id: 3,
    title: "Home Essentials",
    image: "/images/fashion5.jpg",
  },
  {
    id: 4,
    title: "Designer Bags",
    image: "/images/fashion4.jpg",
  },
  {
    id: 5,
    title: "Premium Shoes",
    image: "/images/fashion3.jpg",
  },
  {
    id: 6,
    title: "Modern Decor",
    image: "/images/fashion6.jpg",
  },
];

export const CollectionProvider = ({
  children,
}) => {
  return (
    <CollectionContext.Provider
      value={{ collectionData }}
    >
      {children}
    </CollectionContext.Provider>
  );
};