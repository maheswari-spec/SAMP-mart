import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login/Login";
import Home from "./Home/Home";
import ProtetectedRoutes from "./Routers/ProtectedRoutes";
import PublicRoutes from "./Routers/PublicRoutes";
import ProductPage from "./Shopping/Product/Product";

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
    element: <ProductPage />,
  },
]);

export default router;
