import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import DashboardLayout from "./components/layout/DashboardLayout";
import Login from "./pages/login";
import Router from "./routers";
import { Config, IS_LOGGED, LOCAL_STORAGE } from "./utils/constants";

const App: React.FC = () => {
  // i18next.changeLanguage('ko')
  // const {t} = useTranslation()
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
