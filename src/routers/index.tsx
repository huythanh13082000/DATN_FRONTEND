import { useEffect } from "react";
import {
  Navigate,
  Route,
  RouteProps,
  Routes,
  useNavigate,
} from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import Login from "../pages/login";
import { Config, IS_LOGGED, LOCAL_STORAGE } from "../utils/constants";
import { Url } from "./paths";
import routes from "./routes";

const Router = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);
    if (!token) navigate(Url.login);
  }, [navigate]);

  return (
    <Routes>
      {routes.map((item: RouteProps) => (
        <Route
          key={item.path}
          {...item}
          element={
            item.path !== Url.login ? (
              <DashboardLayout>{item.element}</DashboardLayout>
            ) : (
              item.element
            )
          }
        />
      ))}
    </Routes>
  );
};
export default Router;
