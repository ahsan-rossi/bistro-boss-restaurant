import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Pages/Shared/DashboardSidebar/DashboardSidebar";
import DashBoradHeader from "../Pages/Shared/DashboardHeader/DashBoradHeader";
import authBg from "../assets/others/authentication.png";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Section */}
      <DashboardSidebar />

      {/* Main Panel (Header + Content Section) */}
      <div className="flex-1 flex flex-col" style={{ backgroundImage: `url(${authBg})` }}>
        {/* Header Section */}
        <DashBoradHeader />

        {/* Content Section */}
        <main className="flex-1 p-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;