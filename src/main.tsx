import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Components/Router.tsx";
import { Provider } from "react-redux";
import { Store } from "./Components/Redux/Store/Store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
