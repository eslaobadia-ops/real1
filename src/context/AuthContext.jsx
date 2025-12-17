import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("jaycrestUser"))
  );

  function login(email) {
    const role = email.includes("admin") ? "admin" : "student";
    const data = { email, role };
    setUser(data);
    localStorage.setItem("jaycrestUser", JSON.stringify(data));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("jaycrestUser");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
