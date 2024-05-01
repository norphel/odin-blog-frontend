import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ui/error-page.jsx";
import {
  Dashboard,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
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
    path: "/editor",
    element: <Editor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
