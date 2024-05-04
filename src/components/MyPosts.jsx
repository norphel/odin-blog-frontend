import { useContext, useState, useEffect } from "react";
import { UserContext } from "../main";
import { cn } from "../utils/cn";
import { Link } from "react-router-dom";

const MyPosts = () => {
  const [myarticles, setMyarticles] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchAllMyPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/posts/user/${user._id}/all`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();
        setMyarticles(data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMyPosts();
  }, []);

  const handleChangePublishStatus = async (article) => {
    try {
      const isPublished = !article.isPublished;

      const response = await fetch(
        `http://localhost:3000/api/v1/posts/${article._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            isPublished: isPublished.toString(),
          }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        const updatedArticles = myarticles.map((art) =>
          art._id === article._id ? { ...art, isPublished: isPublished } : art
        );
        setMyarticles(updatedArticles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" my-6 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
      {myarticles.map((article) => (
        <Link
          key={article._id}
          to={`/articles/${article._id}`}
          className="cursoer-pointer"
        >
          <div className="shadow-md rounded-xl py-2 px-6">
            <h2 className="font-semibold text-[20px] md:text-[24px] lg:text-[28px]">
              {article.title}
            </h2>
            <div className="border">
              <img
                src={article.thumbnailImage}
                alt="thumbnail image"
                className="w-full max-h-80"
              />
            </div>

            <div className="mt-4 flex gap-4 flex-wrap justify-center">
              <button
                onClick={() => handleChangePublishStatus(article)}
                className={cn(
                  article.isPublished === true
                    ? "bg-red-100 text-red-900"
                    : "bg-emerald-100 text-emerald-900",
                  "px-4 py-1  rounded-lg"
                )}
              >
                {article.isPublished === true ? "Unpublish" : "Publish"}
              </button>
              <button className="bg-blue-100 text-blue-900 px-4 py-1 rounded-lg">
                Edit
              </button>
            </div>
          </div>
        </Link>
      ))}
      <Link
        to="/editor"
        className=" shadow-md rounded-lg flex justify-center items-center p-6 text-4xl"
      >
        +
      </Link>
    </div>
  );
};

export default MyPosts;
