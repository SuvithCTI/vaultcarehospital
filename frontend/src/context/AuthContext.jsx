import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const ADMIN_USER = {
  id: "usr-admin",
  name: "Chief Medical Administrator",
  email: "admin@vaultcare.org",
  role: "Administrator",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  badge: "Vault Care Super Admin",
  accessLevel: "Level-1 System Authority",
};

export const AuthProvider = ({ children }) => {
  // Start with no user logged in by default unless stored in session
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = sessionStorage.getItem("vaultcare_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [authError, setAuthError] = useState("");

  const login = (email, password) => {
    setAuthError("");
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanPass = (password || "").trim();

    // Check credentials (accepts admin@vaultcare.org or admin, and admin123 or admin)
    if (
      (cleanEmail === "admin@vaultcare.org" || cleanEmail === "admin") &&
      (cleanPass === "admin123" || cleanPass === "admin")
    ) {
      setCurrentUser(ADMIN_USER);
      try {
        sessionStorage.setItem("vaultcare_user", JSON.stringify(ADMIN_USER));
      } catch (e) {
        console.error("Storage error:", e);
      }
      return { success: true };
    } else {
      const errorMsg = "Invalid credentials. Use admin@vaultcare.org / admin123";
      setAuthError(errorMsg);
      return { success: false, error: errorMsg };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setAuthError("");
    try {
      sessionStorage.removeItem("vaultcare_user");
    } catch (e) {
      console.error("Storage error:", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        isAdmin: currentUser?.role === "Administrator",
        login,
        logout,
        authError,
        setAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
