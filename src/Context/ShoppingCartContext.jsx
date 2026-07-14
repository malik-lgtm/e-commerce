import React, {
  createContext,
  useState,
  useEffect,
} from "react";

export const ShoppingCartContext =
  createContext();

const ShoppingCartProvider = ({
  children,
}) => {
  const [loading, setLoading] =
    useState(false);

  const [
    listOfProducts,
    setListOfProducts,
  ] = useState([]);

  const [cartItems, setCartItems] =
    useState([]);

  async function fetchListOfProducts() {
    setLoading(true);

    try {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      const data = await response.json();

      setListOfProducts(data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  // ADD TO CART
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // REMOVE
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  // CLEAR
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        loading,
        listOfProducts,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;