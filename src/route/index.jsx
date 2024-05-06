import { createBrowserRouter } from "react-router-dom";
import Layout from "../app/Layout";
import Home from "../app/Home";
import AddJobCategory from "../app/AddJobCategory";
import AddJob from "../app/AddJob";
import MyPostJobs from "../app/MyPostJob";
import MyBids from "../app/MyBids";
import Login from "../app/auth/Login";
import Register from "../app/auth/Register";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-job-category",
        element: <AddJobCategory />,
      },
      {
        path: "/add-job-post",
        element: <AddJob />,
      },
      {
        path: "/my-post-jobs",
        element: <MyPostJobs />,
      },
      {
        path: "/my-bids",
        element: <MyBids />,
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

export default routes;
