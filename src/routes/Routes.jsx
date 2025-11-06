import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Errorpage from "../pages/Errorpage";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "blog",
        Component: Blogs,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "*",
        Component: Errorpage,
      },
    ],
  },
]);
