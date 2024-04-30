import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./components/ui/error-page.jsx";
import Home from "./components/Home.jsx";
import LogInPage from "./components/LogInPage.jsx";
import SignupPage from "./components/SignupPage.jsx";
import Editor from "./components/Editor.jsx";
import Dashboard from "./components/Dashboard.jsx";
import MyProfile from "./components/MyProfile.jsx";
import MyPosts from "./components/MyPosts.jsx";
import Settings from "./components/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/dashboard",
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
  {
    path: "/dashboard/editor",
    element: <Editor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
