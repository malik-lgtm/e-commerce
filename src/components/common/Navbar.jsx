
import React, {
  useContext,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiUser,
  FiShoppingCart,
  FiMail,
  FiLogOut,
} from "react-icons/fi";

import {
  AuthContext,
} from "../../Context/AuthContext";

const Navbar = () => {
  const navigate =
    useNavigate();

  const {
    user,
    logout,
  } = useContext(AuthContext);

  const handleLogout =
    () => {
      logout();

      navigate("/");
    };

  return (
    <nav className="bg-white shadow-sm">

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        h-[90px]
        flex
        justify-between
        items-center
        "
      >

        {/* LOGO */}

        <h1 className="text-[36px] font-serif text-[#222]">
          ShopLogo
        </h1>

        {/* MENU */}

        <div className="flex gap-10 text-[17px] font-medium">

          <Link
            to="/"
            className="hover:text-[#F97316] transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-[#F97316] transition"
          >
            About
          </Link>

          <Link
            to="/products"
            className="hover:text-[#F97316] transition"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="hover:text-[#F97316] transition"
          >
            Cart
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#F97316] transition"
          >
            Contact
          </Link>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-6 text-[24px]">

          <Link
            to="/contact"
            className="hover:text-[#F97316] transition"
          >
            <FiMail />
          </Link>

          <Link
            to="/cart"
            className="hover:text-[#F97316] transition"
          >
            <FiShoppingCart />
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="
                bg-[#F97316]
                text-white
                px-5
                py-2
                rounded-full
                text-base
                hover:bg-orange-600
                transition
                "
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="
                border
                border-[#F97316]
                text-[#F97316]
                px-5
                py-2
                rounded-full
                text-base
                hover:bg-[#F97316]
                hover:text-white
                transition
                "
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="hover:text-[#F97316] transition"
              >
                <FiUser />
              </Link>

              <button
                onClick={handleLogout}
                className="
                flex
                items-center
                gap-2
                bg-[#F97316]
                hover:bg-red-600
                text-white
                px-5
                py-2
                rounded-full
                text-base
                transition
                cursor-pointer
                "
              >
                <FiLogOut />

                Logout
              </button>
            </>
          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;