import { TypewriterEffect } from "./ui/typewriter-effect";

export function Quote() {
  const textClass = "text-white font-averiaLibre";
  const words = [
    {
      text: "Preserve",
      className: `${textClass}`,
    },
    {
      text: "and",
      className: `${textClass}`,
    },
    {
      text: "cherish",
      className: `${textClass}`,
    },
    {
      text: "the",
      className: `${textClass}`,
    },
    {
      text: "pale",
      className: `${textClass}`,
    },
    {
      text: "blue",
      className: `${textClass}`,
    },
    {
      text: "dot,",
      className: `${textClass}`,
    },
    {
      text: "the",
      className: `${textClass}`,
    },
    {
      text: "only",
      className: `${textClass}`,
    },
    {
      text: "home",
      className: `${textClass}`,
    },
    {
      text: "we've",
      className: `${textClass}`,
    },
    {
      text: "ever",
      className: `${textClass}`,
    },
    {
      text: "known.",
      className: `${textClass}`,
    },
    {
      text: "-",
      className: `${textClass}`,
    },
    {
      text: "Carl",
      className: `${textClass} italic underline`,
    },
    {
      text: "Sagan",
      className: `${textClass} italic underline`,
    },
  ];

  return <TypewriterEffect words={words} />;
}
