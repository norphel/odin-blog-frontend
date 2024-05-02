import React, { useRef, useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";
import Quote from "@editorjs/quote";
import NestedList from "@editorjs/nested-list";
import LinkTool from "@editorjs/link";
import Embed from "@editorjs/embed";
import Heading from "./Header";
import { FormError } from "./ui/form-error";
import { FormSuccess } from "./ui/form-success";
import { useNavigate } from "react-router-dom";

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "paragraph",
      data: {
        text: "Pour yourself a cup of coffee and start writing...",
      },
    },
  ],
};

const Editor = () => {
  const [title, setTitle] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isPending, setPending] = useState(false);
  const ejsInstance = useRef();

  const navigate = useNavigate();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejsInstance.current = editor;
      },
      autofocus: true,
      data: DEFAULT_INITIAL_DATA,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+H",
        },
        image: SimpleImage,
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        list: {
          class: NestedList,
          inlineToolbar: true,
        },
        linkTool: {
          class: LinkTool,
        },
        embed: {
          class: Embed,
          inlineToolbar: true,
          config: {
            services: {
              youtube: true,
              facebook: true,
              instagram: true,
              twitter: true,
            },
          },
        },
      },
    });
  };

  useEffect(() => {
    if (ejsInstance.current === null) {
      initEditor();
    }

    return () => {
      ejsInstance?.current?.destroy();
      ejsInstance.current = null;
    };
  }, []);

  const handleSave = async () => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setPending(true);

    try {
      let formData = new FormData();

      if (title === "") throw new Error("Title of post is required!");
      formData.append("title", title);

      if (thumbnailImage === null)
        throw new Error("Please provide a thumbnail image");
      formData.append("thumbnailImage", thumbnailImage);

      if (ejsInstance.current) {
        const data = await ejsInstance.current.save();
        console.log(data);
        formData.append("content", JSON.stringify(data));
      }

      const response = await fetch("http://localhost:3000/api/v1/posts", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      console.log(response);
      setSuccessMessage("Saved successfully");
      setPending(false);

      navigate("/dashboard/myposts");
    } catch (error) {
      console.log("Failed: ", error);
      setErrorMessage(`Failed to save! ${error.message}`);
      setPending(false);
    }
  };

  return (
    <div className="mt-2 max-w-screen-xl mx-2 md:mx-4 lg:mx-6 xl:mx-auto min-h-screen">
      <Heading />
      <label htmlFor="title" className="mt-4 mb-2 block font-semibold">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        className="border  w-full p-1 rounded-md"
      />
      <label htmlFor="thumbnailImage" className="mt-4 mb-2 block font-semibold">
        Thumbnail/Cover Image
      </label>
      <input
        type="file"
        id="thumbnailImage"
        name="thumbnailImage"
        required
        onChange={(e) => setThumbnailImage(e.target.files[0])}
      />
      <p className="mt-4 mb-2 font-semibold">Content</p>
      <div id="editorjs" className="border mx-6 mb-6 md:mx-0 rounded-md "></div>

      <FormError message={errorMessage} />
      <FormSuccess message={successMessage} />
      <button
        onClick={handleSave}
        className="mx-6 md:mx-0 my-6 px-4 py-1 rounded-xl bg-emerald-100 text-emerald-900 bold"
      >
        {isPending === true ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default Editor;
