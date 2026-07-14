import React, {
  useState,
  useContext,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiMail,
  FiLock,
} from "react-icons/fi";

import {
  AuthContext,
} from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(
      email,
      password
    );

    if (success) {
      alert("Login Successful!");

      navigate("/profile");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <section className="min-h-screen bg-[#F7F6F2] flex justify-center items-center px-6 py-14">

      <div className="bg-white rounded-[30px] shadow-lg p-10 w-full max-w-lg">

        <h1 className="text-4xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to your account
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          {/* Email */}

          <div className="relative">

            <FiMail
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="
              w-full
              border
              rounded-full
              py-4
              pl-12
              pr-5
              outline-none
              focus:border-[#F97316]
              "
            />

          </div>

          {/* Password */}

          <div className="relative">

            <FiLock
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              "
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              className="
              w-full
              border
              rounded-full
              py-4
              pl-12
              pr-5
              outline-none
              focus:border-[#F97316]
              "
            />

          </div>

          <button
            type="submit"
            className="
            w-full
            bg-[#F97316]
            hover:bg-orange-600
            text-white
            py-4
            rounded-full
            font-semibold
            transition
            "
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">

          Don't have an account?

          <Link
            to="/signup"
            className="
            text-[#F97316]
            ml-2
            font-semibold
            "
          >
            Sign Up
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Login;