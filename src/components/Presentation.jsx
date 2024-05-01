import PresentationHeader from "./PresentaionHeader";
import PageTransition from "./PageTransition";
import MouseScroll from "./ui/mouse-scroll";
import { useState } from "react";

const Presentation = () => {
  const [background, setBackground] = useState("bg-[#007FC9]");

  return (
    <div className={`min-h-screen max-h-screen flex flex-col ${background}`}>
      <PresentationHeader />
      <main className="flex-grow flex flex-col justify-center items-center overflow-hidden relative">
        <PageTransition setBackground={setBackground} />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%_+_1.3px)] xl:h-[100px] md:h-[75px] h-12"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="fill-[#00790C]"
            ></path>
          </svg>
        </div>
        <MouseScroll />
      </main>
    </div>
  );
};

export default Presentation;
