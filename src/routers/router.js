import { createBrowserRouter } from "react-router-dom";
import Customers from "../pages/Customers";
import ErrorPage from "../pages/ErrorPage";
import Orders from "../pages/Orders";
import Payments from "../pages/Payments";
import Products from "../pages/Products";
import Layout from "../ui/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
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
    ],
  },
]);

export default router;
