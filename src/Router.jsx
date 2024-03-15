import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Account from "./pages/account/Account";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import ErrorPage from "./ErrorPage";

import "./index.css";
import RootLayout from "./RootLayout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout>
          <App />
        </RootLayout>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "account",
      element: (
        <RootLayout>
          <Account />
        </RootLayout>
      ),
    },
    {
      path: "account/:name",
      element: (
        <RootLayout>
          <Account />
        </RootLayout>
      ),
    },
    {
      path: "cart/",
      element: (
        <RootLayout>
          <Cart />
        </RootLayout>
      ),
    },
    {
      path: "categories/",
      element: (
        <RootLayout>
          <Categories />
        </RootLayout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
