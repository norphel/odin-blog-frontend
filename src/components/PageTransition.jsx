import React, { useState, useEffect } from "react";
import { Page1, Page2, Page3, Page4, Page5 } from "../pages";

const pages = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />];

const PageTransition = ({ setBackground }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage === pages.length - 1) return;
    setCurrentPage((prevPage) =>
      prevPage === pages.length - 1 ? 0 : prevPage + 1
    );
  };

  const prevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage((prevPage) =>
      prevPage === 0 ? pages.length - 1 : prevPage - 1
    );
  };

  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? "down" : "up";
    if (direction === "down") {
      nextPage();
    } else {
      prevPage();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextPage();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      prevPage();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  useEffect(() => {
    switch (currentPage) {
      case 0:
        setBackground("bg-[#007FC9]");
        break;
      case 1:
        setBackground("bg-img1Medium bg-cover bg-center");
        break;
      case 2:
        setBackground("bg-img2Medium bg-cover bg-center");
        break;
      case 3:
        setBackground("bg-img3Medium bg-cover bg-center");
        break;
      case 4:
        setBackground("bg-img4Medium bg-cover bg-center");
        break;
      case 5:
        setBackground("bg-img5Medium bg-cover bg-center");
        break;
      default:
        setBackground("bg-[#007FC9]");
        break;
    }
  }, [currentPage, setBackground]);

  return (
    <div tabIndex={0}>
      {pages.map((page, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentPage
              ? "transform-none"
              : index > currentPage
              ? "translate-x-full"
              : "-translate-x-full"
          }`}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default PageTransition;
