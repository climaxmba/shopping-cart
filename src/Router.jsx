import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Items from "./Items";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/",
      element: <Profile />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
    {
      path: "items/",
      element: <Items />,
    },
    {
      path: "items/:item",
      element: <Items />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;