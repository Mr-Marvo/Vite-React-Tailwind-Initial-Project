import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../pages/layouts/MainLayout";

const Routerset = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routerset;
