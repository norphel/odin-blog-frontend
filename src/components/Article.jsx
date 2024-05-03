import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import edjsHTML from "editorjs-html";

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

        let parser = new DOMParser();
        let dom = parser.parseFromString(
          "<!doctype html><body>" + htmlEncodedContentJson,
          "text/html"
        );
        let decodedString = dom.body.textContent;

        let decodedContent = JSON.parse(decodedString);

        const htmlContent = createMarkup(decodedContent);
        // console.log(htmlContent);
        setArticle({ title, thumbnailImage, htmlContent });
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
    <main>
      <h1>{article.title}</h1>
      <img src={article.thumbnailImage} alt="thumbnail image" />
      <div dangerouslySetInnerHTML={article.htmlContent} />
    </main>
  );
};

export default Article;
