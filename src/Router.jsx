import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Account from "./Account";
import Cart from "./Cart"
import Categories from "./Categories";
import Home from "./Home"
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    // {
    //   path: "search/",
    //   element: <Search />,
    // },
    // {
    //   path: "saerch/:name",
    //   element: <Search />,
    // },
    {
      path: "account/",
      element: <Account />,
    },
    {
      path: "cart/",
      element: <Cart />,
    },
    {
      path: "categories/",
      element: <Categories />,
    },
    {
      path: "home/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;