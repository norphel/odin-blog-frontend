import Header from "../components/Header";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="mt-2 max-w-screen-xl mx-2 md:mx-4 lg:mx-6 xl:mx-auto min-h-screen">
      <Header />
      <main>
        <Hero />
        <Introduction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
