import { IconThumbUp, IconMessage } from "@tabler/icons-react";

const Article = ({ article }) => {
  return (
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
      <p className="italic text-slate-600 text-[16px] md:text-[20px] lg:text-[24px]">
        {article.author.displayName}
      </p>
      <div className="flex gap-4 mt-4">
        <div className="flex gap-1 items-center">
          <IconThumbUp /> {article.likes}
        </div>
        <div className="flex gap-1 items-center">
          <IconMessage /> {article.comments.length}
        </div>
      </div>
    </div>
  );
};

export default Article;
