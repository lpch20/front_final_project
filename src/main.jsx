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
import MusicalCupido from "./pages/MusicalCupido/MusicalCupido";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Profile/Settings";
import NewPlaylist from "./pages/Profile/NewPlaylist";
import EmptyPlaylist from "./pages/Profile/EmptyPlaylist";


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
    element: <ContextualMusic />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/newPlaylist",
    element: <NewPlaylist />,
  },
  {
    path: "/emptyPlaylist",
    element: <EmptyPlaylist />,
  },
  {
    path: "/musicalcupido",
    element: <MusicalCupido></MusicalCupido>

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
