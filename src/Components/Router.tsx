import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login/Login";
import Home from "./Home/Home";

import ProductPage from "./Shopping/Product/Product";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { ProductDetail } from "./Shopping/Product/ProductDetail";
import Cart from "./Shopping/Cart/Cart";
import Dashboard from "./Dashboard/Dashboard";

import { AddNewProduct } from "./Dashboard/AddNewProduct";
import { NotFound } from "./Not Found/NotFound";
import CheckOut from "./Shopping/Checkout/CheckOut";
import Registration from "./Register/Registration";
import AdminRoutes from "./Routers/AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/dashboard",

    element: (
      <AdminRoutes>
        <Dashboard />
      </AdminRoutes>
    ),
  },
  {
    path: "/dashboard/addnewproduct",

    element: (
      <AdminRoutes>
        <AddNewProduct />
      </AdminRoutes>
    ),
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
]);

export default router;
