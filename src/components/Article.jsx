import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import edjsHTML from "editorjs-html";
import { IconThumbUp } from "@tabler/icons-react";

const Article = () => {
  const [article, setArticle] = useState({});
  const { articleID } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/posts/${articleID}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();

        const title = data.post.title;
        const thumbnailImage = data.post.thumbnailImage;
        const htmlEncodedContentJson = data.post.content;
        const authorUsername = data.post.author.username;
        const authorID = data.post.author._id;
        const date = new Date(data.post.createdAt);
        const createdAt = date.toDateString();
        const numberOfLikes = data.post.likes;

        let parser = new DOMParser();
        let dom = parser.parseFromString(
          "<!doctype html><body>" + htmlEncodedContentJson,
          "text/html"
        );
        let decodedString = dom.body.textContent;

        let decodedContent = JSON.parse(decodedString);

        const htmlContent = createMarkup(decodedContent);
        // console.log(htmlContent);
        setArticle({
          title,
          thumbnailImage,
          htmlContent,
          authorUsername,
          authorID,
          createdAt,
          numberOfLikes,
        });
      } catch (error) {
        console.error("Error fetching article:", error);
        //TODO: Handle the error (e.g., show an error message to the user)
      }
    };
    fetchArticle();
  }, [articleID]);

  const createMarkup = (content) => {
    const edjsParser = edjsHTML();
    let html = edjsParser.parse(content);
    html = html.join("");
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  if (!article) {
    return <main className="animate-spin"></main>;
  }

  return (
    <main className="flex flex-col w-full">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  my-4">
        {article.title}
      </h1>
      <img
        src={article.thumbnailImage}
        alt="thumbnail image"
        className=" mb-4"
      />
      <div className="flex justify-between">
        <Link to={`/authors/${article.authorID}`} className="italic underline">
          @{article.authorUsername}
        </Link>
        <p className="italic text-slate-500 mb-6">{article.createdAt}</p>
      </div>
      <div dangerouslySetInnerHTML={article.htmlContent} className="prose" />
      <button className="my-6 flex items-center gap-4 text-2xl font-semibold">
        <IconThumbUp className="w-8 h-8" /> {article.numberOfLikes}
      </button>
    </main>
  );
};

export default Article;
