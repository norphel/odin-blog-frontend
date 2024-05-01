import React, { useRef, useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";
import Quote from "@editorjs/quote";
import NestedList from "@editorjs/nested-list";
import LinkTool from "@editorjs/link";
import Embed from "@editorjs/embed";
import Heading from "./Header";

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Title",
        level: 1,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Pour yourself a cup of coffee and start writing...",
      },
    },
  ],
};

const Editor = () => {
  const ejsInstance = useRef();

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
    if (ejsInstance.current) {
      const data = await ejsInstance.current.save();
      console.log(data);
    }
  };

  return (
    <div className="mt-2 max-w-screen-xl mx-2 md:mx-4 lg:mx-6 xl:mx-auto min-h-screen">
      <Heading />
      <div id="editorjs" className="border m-6 md:mx-0 rounded-md "></div>
      <button
        onClick={handleSave}
        className="mx-6 md:mx-0 px-4 py-1 rounded-xl bg-emerald-100 text-emerald-900 bold"
      >
        Save
      </button>
    </div>
  );
};

export default Editor;
