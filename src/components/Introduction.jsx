import planting from "../assets/images/Planting.svg";
import waterDroplet from "../assets/images/Water-drop.svg";
import pollution from "../assets/images/Pollution.svg";
import liveSimply from "../assets/images/LiveSimply.svg";

import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-4 text-center">
        <h2 className="px-2 font-semibold text-lg md:text-xl lg:text-2xl my-2 text-[#007FC9]">
          What is Our Earth Our Home?
        </h2>
        <h3 className="text-lg md:text-2xl mt-4 tracking-[0.3rem]">
          NATURE'S&nbsp; DIARY
        </h3>
        <p className="italic text-slate-600">By Us, For Us!</p>
        <p className="px-1 md:px-2 lg:px-3 my-6 text-lg md:text-xl">
          It is a platform where you can read and write articles and stories
          about our Earth, our Nature, our Home
        </p>
        <Link
          to="/signup"
          className="px-6 py-2 bg-emerald-200 text-emerald-900 font-semibold rounded-lg"
        >
          Get Started
        </Link>
      </div>
      <h2 className="text-center relative top-12 px-2 font-semibold text-lg md:text-xl lg:text-2xl my-2 text-[#007FC9]">
        Let's make our Home a better place to live!
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
        <div className="w-3/4 md:w-2/4 mx-auto">
          <img src={planting} alt="planting illustration" />
        </div>
        <div className="w-3/4 md:w-2/4 text-center md:text-left">
          <h3 className="font-semibold mb-2 text-lg md:text-xl tracking-[0.3rem]">
            LET'S&nbsp; PLANT
          </h3>
          <p className="italic text-slate-600">
            Let us all strive to plant at least one sapling or one tree on our
            birthday
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
        <div className="md:order-2 w-3/4 md:w-2/4 mx-auto">
          <img
            src={waterDroplet}
            alt="water droplet illustration"
            className="h-[200px] aspect-square md:h-[250px] lg:h-[300px] xl:h-[350px] mx-auto"
          />
        </div>
        <div className="md:order-1 w-3/4 md:w-2/4 text-center md:text-left">
          <h3 className="font-semibold mb-2 text-lg md:text-xl tracking-[0.3rem]">
            LET'S &nbsp;SAVE&nbsp; WATER
          </h3>
          <p className="italic text-slate-600">
            Let us all pledge to not waste our most precious resource and save
            as much water as we can.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
        <div className="w-3/4 md:w-2/4 mx-auto">
          <img
            src={pollution}
            alt="pollution illustration"
            className="h-[200px] aspect-square md:h-[250px] lg:h-[300px] xl:h-[350px] mx-auto"
          />
        </div>
        <div className="w-3/4 md:w-2/4 text-center md:text-left">
          <h3 className="font-semibold mb-2 text-lg md:text-xl tracking-[0.3rem]">
            LET'S&nbsp; NOT&nbsp; POLLUTE
          </h3>
          <p className="italic text-slate-600">
            Let us all try our best not to pollute our home. We can all start
            with reducing our trash production per person.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
        <div className="md:order-2 w-3/4 md:w-2/4 mx-auto">
          <img
            src={liveSimply}
            alt="meditating in nature illustration"
            className="h-[200px] aspect-square md:h-[250px] lg:h-[300px] xl:h-[350px] mx-auto"
          />
        </div>
        <div className="md:order-1 w-3/4 md:w-2/4 text-center md:text-left">
          <h3 className="font-semibold mb-2 text-lg md:text-xl tracking-[0.3rem]">
            LET'S&nbsp; LIVE&nbsp; SIMPLY
          </h3>
          <p className="italic text-slate-600">
            Let us all live simply and in harmony with nature.
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
