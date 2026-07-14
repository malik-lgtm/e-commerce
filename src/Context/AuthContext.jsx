import React, {
  createContext,
  useState,
  useEffect,
} from "react";

export const AuthContext =
  createContext();

const AuthProvider = ({
  children,
}) => {
  const [user, setUser] =
    useState(null);

  useEffect(() => {
    const savedUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // SIGNUP
  const signup = (data) => {
    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    setUser(data);
  };

  // LOGIN
  const login = (
    email,
    password
  ) => {
    const savedUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password ===
        password
    ) {
      setUser(savedUser);

      return true;
    }

    return false;
  };

  // LOGOUT
  const logout = () => {
    setUser(null);

    localStorage.removeItem(
      "user"
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;