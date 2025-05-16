import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login/Login";
import Home from "./Home/Home";
import ProtetectedRoutes from "./Routers/ProtectedRoutes";
import PublicRoutes from "./Routers/PublicRoutes";
import ProductPage from "./Shopping/Product/Product";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { ProductDetail } from "./Shopping/Product/ProductDetail";
import Cart from "./Shopping/Cart/Cart";
import Dashboard from "./Dashboard/Dashboard";
import AdminRoutes from "./Routers/AdminRoutes";
import { AddNewProduct } from "./Dashboard/AddNewProduct";
import { NotFound } from "./Not Found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <PublicRoutes>
        <Login />
      </PublicRoutes>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtetectedRoutes>
        <Home />
      </ProtetectedRoutes>
    ),
  },
  {
    path: "/product",
    element: (
      <ProtetectedRoutes>
        <ProductPage />
      </ProtetectedRoutes>
    ),
  },
  {
    path: "/about",
    element: (
      <ProtetectedRoutes>
        <About />
      </ProtetectedRoutes>
    ),
  },
  {
    path: "/contact",
    element: (
      <ProtetectedRoutes>
        <Contact />
      </ProtetectedRoutes>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <ProtetectedRoutes>
        <ProductDetail />
      </ProtetectedRoutes>
    ),
  },
  {
    path: "/cart",
    element: (
      <ProtetectedRoutes>
        <Cart />
      </ProtetectedRoutes>
    ),
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
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
