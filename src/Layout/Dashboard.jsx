import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Pages/Shared/DashboardSidebar/DashboardSidebar";
import DashBoradHeader from "../Pages/Shared/DashboardHeader/DashBoradHeader";
import authBg from "../assets/others/authentication.png";

const Dashboard = () => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        {/* Main Panel (Header + Content Section) */}
        <div
          className="drawer-content flex flex-col min-h-screen"
          style={{ backgroundImage: `url(${authBg})` }}
        >
          {/* Header Section */}
          <DashBoradHeader />

          {/* Content Section */}
          <main className="flex-1 p-4 md:p-10 overflow-y-auto">
            <Outlet />
          </main>
        </div>

        {/* Sidebar Section */}
        <div className="drawer-side z-50">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <DashboardSidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
