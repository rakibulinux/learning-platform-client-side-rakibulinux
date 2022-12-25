import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/FAQ/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoutes from "../Routers/PrivateRoutes";
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
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://rakib-learning-platform-server.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
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
