import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Errorpage from "../pages/Errorpage";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Profile";
import SkillDetails from "../pages/skillDetails";

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
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/skillDetails/:skillId",
        element: (
          <PrivateRoutes>
            <SkillDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "*",
        Component: Errorpage,
      },
    ],
  },
]);
