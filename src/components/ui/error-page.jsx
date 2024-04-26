import { useRouteError } from "react-router-dom";
import PresentationHeader from "../PresentaionHeader";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className={"min-h-screen max-h-screen flex flex-col bg-[#007FC9]"}
    >
      <PresentationHeader />
      <main className="flex-grow flex flex-col justify-center items-center overflow-hidden relative">
        <div className="flex flex-col justify-center items-center h-full w-3/4 md:w-2/4 mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-averiaLibre text-white mb-4">
            {error.statusText === "Not Found" ? "404" : "Oops!"}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl italic text-white">
            {error.statusText === "Not Found"
              ? ""
              : "Sorry, an unexpected error has occurred."}
          </p>
          <p className="text-white text-md md:text-lg lg:text-xl">
            <i>{error.statusText || error.message}</i>
          </p>
          <Link
            to={"/home"}
            className="border text-white px-6 py-2 rounded-xl mt-4 font-bold text-sm md:text-lg lg:text-xl"
          >
            H O M E
          </Link>
        </div>
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
      </main>
    </div>
  );
}
