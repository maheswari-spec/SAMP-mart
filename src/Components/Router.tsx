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
    element: <ProductDetail />,
  },
  {
    path:"/cart",
    element:<Cart/>
  }
]);

export default router;
