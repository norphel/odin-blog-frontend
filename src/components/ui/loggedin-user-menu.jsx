import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Home";

const LoggedinUserMenu = () => {
  const { user, setUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuVisbility = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogOut = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/logout",
        {
          method: "POST",

          credentials: "include",
        }
      );
      console.log(response);
      const isLoggedOut = await response.json();
      console.log(isLoggedOut);

      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onClick={handleMenuVisbility}
      className="relative rounded-full w-8 md:w-9 lg:w-10 cursor-pointer aspect-square"
    >
      <img
        src={
          user.profilePicture === undefined
            ? "https://avatar.iran.liara.run/public/3"
            : `${user.profilePicture}`
        }
        alt="user avatar"
      />
      <div
        className={`${
          isMenuOpen ? "scale-y-100" : "scale-y-0"
        } bg-white shadow-md w-28 absolute right-0 top-10 flex flex-col gap-2 p-4 transform origin-top transition-transform duration-200 ease-in-out`}
      >
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={handleLogOut} className="text-left">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LoggedinUserMenu;
