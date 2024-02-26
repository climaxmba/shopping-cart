import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "search/",
      element: <Search />,
    },
    {
      path: "saerch/:name",
      element: <Search />,
    },
    {
      path: "categories/",
      element: <Categories />,
      children: [<Category />]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;