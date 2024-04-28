import Logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex flex-col md:flex-row gap-2 justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="xl:w-40 lg:w-36 w-24" />
        </Link>
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
          <Link to="/blogs" className="tracking-widest">
            ARTICLES
          </Link>
          <Link
            to="/login"
            className="border border-[#00790C] rounded-lg text-[#00790C] py-1 px-3 font-bold"
          >
            Log In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
