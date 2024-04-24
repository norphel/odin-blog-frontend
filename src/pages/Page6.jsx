import { TypewriterEffect } from "../components/ui/typewriter-effect";

const Page6 = () => {
  const words = [
    {
      text: "The",
    },
    {
      text: "Earth",
    },
    {
      text: "has",
    },
    {
      text: "enough",
    },
    {
      text: "for",
    },
    {
      text: "everyone's",
    },
    {
      text: "need",
    },
    {
      text: "but",
    },
    {
      text: "not",
    },
    {
      text: "for",
    },
    {
      text: "everyone's",
    },
    {
      text: "greed",
    },
    {
      text: "-",
    },
    {
      text: "Mahatma",
      className: "italic",
    },
    {
      text: "Gandhi",
      className: "italic",
    },
  ];
  return (
    <div className="flex justify-center items-center h-full w-3/4 md:w-2/4 mx-auto">
      <h1 className="font-bold font-averiaLibre text-xl md:text-3xl text-center text-green-900 bg-green-100  px-6 py-4 md:px-9 md:py-6 rounded-xl backdrop-blur-sm">
        <TypewriterEffect words={words} />
      </h1>
    </div>
  );
};

export default Page6;
