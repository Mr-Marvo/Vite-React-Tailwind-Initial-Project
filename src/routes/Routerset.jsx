import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";

const Routerset = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route index element={<Dashboard />} />
    </Routes>
  );
};

export default Routerset;
