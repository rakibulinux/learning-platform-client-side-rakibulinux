import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Course from "../components/Course";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import Faq from "../components/Faq";
import Home from "../components/Home";
import LeftSide from "../components/LeftSide";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      // {
      //   path: "/category/:id",
      //   element: <LeftSide />,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://rakib-learning-platform-server.vercel.app/categories/${params.id}`
      //     ),
      // },
      {
        path: "/courses",
        element: <Courses />,
        loader: () =>
          fetch("https://rakib-learning-platform-server.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(
            `https://rakib-learning-platform-server.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
