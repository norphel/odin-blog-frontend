import { useRouteError } from "react-router-dom";
import Header from "../Header";
import { Link } from "react-router-dom";
import cherryblossom from "../../assets/images/cherry-blossom.gif";

export default function ErrorPage() {
  const error = useRouteError();

  // If error is null, assume it's a 404 error
  const isNotFound = !error;
  const statusText = error?.statusText;
  const message = error?.message;

  return (
    <div
      id="error-page"
      className="mt-2 max-w-screen-xl mx-2 md:mx-4 lg:mx-6 xl:mx-auto max-h-screen min-h-screen flex flex-col"
    >
      <Header />
      <main className="flex-grow relative">
        <img
          src={cherryblossom}
          alt="cherry blossom for decorative purposes only"
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-0 w-3/4 md:w-2/4 aspect-square"
        />
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-1 bg-white/30 backdrop-blur-md p-6 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-averiaLibre text-black mb-4">
            {isNotFound ? "404" : "Oops!"}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl italic text-black">
            {isNotFound ? "" : "Sorry, an unexpected error has occurred."}
          </p>
          <p className="text-black text-md md:text-lg lg:text-xl italic text-center">
            {statusText || message}
          </p>
          <Link
            to={"/"}
            className="border border-black text-black px-3 py-1 md:px-6 md:py-2 rounded-xl mt-4 font-bold text-sm md:text-lg lg:text-xl"
          >
            HOME
          </Link>
        </div>
      </main>
    </div>
  );
}
