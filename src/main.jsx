import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import ChekIn from "./pages/ChekIn/ChekIn";
import AccountCreate from "./pages/Register/AccountCreate";
import ContextualMusic from "./pages/ContextualMusic/ContextualMusic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChekIn></ChekIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/account-create",
    element: <AccountCreate></AccountCreate>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/ContextualMusic",
    element: <ContextualMusic/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
