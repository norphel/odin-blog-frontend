import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div className="mt-2 max-w-screen-xl mx-2 md:mx-4 lg:mx-6 xl:mx-auto min-h-screen flex flex-col">
      <Header user={user} />
      <Outlet />
    </div>
  );
};

export default Home;
