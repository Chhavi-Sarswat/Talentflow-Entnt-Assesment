import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../HrDashboard/Header";

const HrLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HrLayout;
