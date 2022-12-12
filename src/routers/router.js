import { createBrowserRouter } from "react-router-dom";
import Customers from "../pages/Customers";
import ErrorPage from "../pages/ErrorPage";
import HomePages from "../pages/HomePages";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import Payments from "../pages/Payments";
import Products from "../pages/Products";
import Registration from "../pages/Registration";
import Layout from "../ui/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
