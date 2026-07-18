

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


import ShoppingCartProvider from "./Context/ShoppingCartContext";
import AuthProvider from "./Context/AuthContext";
import { CollectionProvider } from "./Context/CollectionContext";

function App() {
  return (
    <CollectionProvider>
      <ShoppingCartProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="products" element={<ProductListing />} />
              <Route path="products/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              
            </Route>
          </Routes>
        </AuthProvider>
      </ShoppingCartProvider>
    </CollectionProvider>
  );
}

export default App;