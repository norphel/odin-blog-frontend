import EarthIllustration from "../assets/images/Earth.svg";
import CherryBlossom from "../assets/images/cherry-blossom.gif";
const Hero = () => {
  return (
    <div className="pt-2 w-full flex flex-col md:flex-row items-center">
      <div className="w-2/4 text-center md:text-left">
        <h1 className="font-bold text-lg md:text-2xl lg:text-4xl">
          All of us are one family living in the same beautiful home!
        </h1>
        <p className="italic text-sm md:text-lg lg:text-xl mt-2">
          Who is going to take care of our own home if not us?
        </p>
      </div>
      <div className="w-2/4">
        <img src={EarthIllustration} alt="illustration of earth" />
      </div>
    </div>
  );
};

export default Hero;
