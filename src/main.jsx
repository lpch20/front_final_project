import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
<<<<<<< HEAD
import App from "./App";
=======
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
>>>>>>> 4f32ff39f17d633b6e9f52dacb7fe9813daf8d96

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/",
<<<<<<< HEAD
    element: <App/>,
     
=======
    element: <Home />,
  },
  {
    path: "/top20",
    element: <Search />,
>>>>>>> 4f32ff39f17d633b6e9f52dacb7fe9813daf8d96
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
