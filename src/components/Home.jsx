import { useState, createContext } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export const UserContext = createContext();

const Home = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="mt-2 max-w-screen-xl mx-2 md:mx-4 lg:mx-6 xl:mx-auto min-h-screen flex flex-col">
        <Header user={user} />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default Home;
