import Logo from "../assets/images/Logo.svg";
import tree from "../assets/images/tree.svg";
import flowers from "../assets/images/flowers.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-6 border-t-2">
      <div className="lg:relative top-40 flex flex-col justify-center items-center">
        <img src={Logo} alt="logo" className="w-24 md:w-36 lg:w-[200px] " />
        <h4 className="text-center italic text-slate-600">
          Let's unite today for a better future!
        </h4>
        <Link
          to="/blogs"
          className="tracking-[0.3rem] bg-emerald-200 px-6 py-2 rounded-xl mt-4"
        >
          ARTICLES
        </Link>
      </div>
      <div className="flex justify-center md:justify-between">
        <img
          src={flowers}
          alt="flowers illustration"
          aria-hidden
          className="hidden md:block max-w-[280px] relative top-4 right-4 overflow-hidden"
        />
        <img src={tree} alt="tree illustration" className="max-w-[320px]" />
      </div>
    </footer>
  );
};

export default Footer;
