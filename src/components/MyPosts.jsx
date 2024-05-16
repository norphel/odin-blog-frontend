import { useContext, useState, useEffect } from "react";
import { UserContext } from "../main";
import { cn } from "../utils/cn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
  const [myarticles, setMyarticles] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

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

  const handleEdit = (article) => {
    navigate(`/editor/${article._id}`, { state: { article } });
  };

  const handleDelete = async (article) => {
    // delete the article
  };

  return (
    <div className=" my-6 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
      {myarticles.map((article) => (
        <div key={article._id} className="shadow-md rounded-xl py-2 px-6">
          <Link to={`/articles/${article._id}`} className="cursor-pointer">
            <h2 className="font-semibold text-[20px] md:text-[24px] lg:text-[28px]">
              {article.title}
            </h2>
          </Link>
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
            <button
              onClick={() => handleEdit(article)}
              className="bg-blue-100 text-blue-900 px-4 py-1 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(article)}
              className="bg-red-500 text-white font-bold px-4 py-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
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
