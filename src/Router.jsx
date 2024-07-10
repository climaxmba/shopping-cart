import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { useState } from "react";
import { store } from "./_redux/store";

import Home from "./pages/Home";
import Account from "./pages/account/Account";
import Cart from "./pages/cart/Cart";
import Categories from "./pages/categories/Categories";
import ErrorPage from "./errorPage/ErrorPage";
import Products from "./pages/products/Products";
import ProductDetails from "./components/productDetails/ProductDetails";
import Checkout from "./pages/checkout/Checkout";
import Likes from "./pages/likes/Likes";
import RootLayout from "./RootLayout";

import "./index.scss";

const Router = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuStates = {
    menuOpen,
    setMenuOpen,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout menuStates={menuStates}>
          <Home />
        </RootLayout>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "account",
      element: (
        <RootLayout menuStates={menuStates}>
          <Account />
        </RootLayout>
      ),
    },
    {
      path: "account/:name",
      element: (
        <RootLayout menuStates={menuStates}>
          <Account />
        </RootLayout>
      ),
    },
    {
      path: "products",
      element: (
        <RootLayout menuStates={menuStates}>
          <Products />
        </RootLayout>
      ),
      children: [
        {
          path: ":productId",
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "cart",
      element: (
        <RootLayout menuStates={menuStates}>
          <Cart />
        </RootLayout>
      ),
    },
    {
      path: "categories",
      element: (
        <RootLayout menuStates={menuStates}>
          <Categories />
        </RootLayout>
      ),
    },
    {
      path: "categories/:category",
      element: (
        <RootLayout menuStates={menuStates}>
          <Categories />
        </RootLayout>
      ),
      children: [
        {
          path: ":productId",
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "checkout",
      element: (
        <RootLayout menuStates={menuStates}>
          <Checkout />
        </RootLayout>
      ),
    },
    {
      path: "likes",
      element: (
        <RootLayout menuStates={menuStates}>
          <Likes />
        </RootLayout>
      ),
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default Router;
