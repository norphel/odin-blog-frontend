import Header from "../components/Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="mt-2 max-w-screen-xl mx-2 md:mx-4 lg:mx-6 xl:mx-auto min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
