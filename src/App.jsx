import Header from "./components/Header";

const App = () => {
  return (
    <div className="max-w-screen min-h-screen flex flex-col bg-[#00A3FF]">
      <Header />
      <main className="flex-grow">
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
};

export default App;
