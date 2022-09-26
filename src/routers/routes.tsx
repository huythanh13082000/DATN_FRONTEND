import { Url } from "./paths";
import Home from "../pages/home";
import Login from "../pages/login";
import Map from "../pages/map";
import { RouteProps } from "react-router-dom";
import Setting from "../pages/setting";

const routes: Array<RouteProps> = [
  {
    path: Url.login,
    element: <Login />,
  },
  {
    path: Url.home,
    element: <Home />,
  },
  {
    path: Url.map,
    element: <Map />,
  },
  {
    path: Url.setting,
    element: <Setting />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
export default routes;
