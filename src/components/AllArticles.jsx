import { useEffect, useState } from "react";

import Article from "./ui/article-card";

const AllArticles = () => {
  const [articlces, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/posts", {
          method: "GET",
        });
        const data = await response.json();
        setArticles(data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <main className=" my-6 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
      {articlces.map((article) => (
        <Article key={article._id} article={article} />
      ))}
    </main>
  );
};

export default AllArticles;
