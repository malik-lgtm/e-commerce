import React, {
  useState,
  useContext,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
} from "react-icons/fi";

import {
  AuthContext,
} from "../Context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();

  const { signup } =
    useContext(AuthContext);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert(
        "Passwords do not match."
      );
      return;
    }

    signup({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password:
        formData.password,
    });

    alert(
      "Account Created Successfully!"
    );

    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-[#F7F6F2] flex justify-center items-center px-6 py-14">

      <div className="bg-white rounded-[30px] shadow-lg p-10 w-full max-w-lg">

        <h1 className="text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join ShopLogo today
        </p>

        <form
          onSubmit={handleSignup}
          className="mt-8 space-y-5"
        >

          {/* Name */}

          <div className="relative">

            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-full py-4 pl-12 pr-5 outline-none focus:border-[#F97316]"
            />

          </div>

          {/* Email */}

          <div className="relative">

            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-full py-4 pl-12 pr-5 outline-none focus:border-[#F97316]"
            />

          </div>

          {/* Phone */}

          <div className="relative">

            <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-full py-4 pl-12 pr-5 outline-none focus:border-[#F97316]"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border rounded-full py-4 pl-12 pr-5 outline-none focus:border-[#F97316]"
            />

          </div>

          {/* Confirm Password */}

          <div className="relative">

            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border rounded-full py-4 pl-12 pr-5 outline-none focus:border-[#F97316]"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-[#F97316] hover:bg-orange-600 text-white py-4 rounded-full font-semibold transition"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-[#F97316] ml-2 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Signup;