import React from "react";
import ReactDOM from "react-dom/client";
import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ui/error-page.jsx";
import {
  AllArticles,
  Article,
  Dashboard,
  EditArticle,
  Editor,
  Home,
  LandingPage,
  LogInPage,
  MyPosts,
  MyProfile,
  Presentation,
  Settings,
  SignupPage,
} from "./components/index.js";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home user={user} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "articles",
          element: <AllArticles />,
        },
        {
          path: "articles/:articleID",
          element: <Article />,
        },
        {
          path: "login",
          element: <LogInPage />,
        },
        {
          path: "signup",
          element: <SignupPage />,
        },
        {
          path: "/editor",
          element: <Editor />,
        },
        {
          path: "/editor/:articleID",
          element: <EditArticle />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "profile",
              element: <MyProfile />,
            },
            {
              path: "myposts",
              element: <MyPosts />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
          ],
        },
      ],
    },
    {
      path: "/presentation",
      element: <Presentation />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
