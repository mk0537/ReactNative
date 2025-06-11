import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState(null); // 로그인 전 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (value) => {
    setName(value);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setName(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ name, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
