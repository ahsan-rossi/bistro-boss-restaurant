import React from "react";
import useAuth from "../../../hooks/useAuth";
import { FaBars } from "react-icons/fa6";

const DashBoradHeader = () => {
  const { user } = useAuth();
  return (
    <header className="bg-gradient-to-r from-[#835D23] to-[#B58130] shadow-sm border-b border-gray-100 py-4 px-3 sm:px-6 md:px-10 flex items-center justify-between gap-2">
      <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
        {/* Toggle Button for Mobile Drawer */}
        <label htmlFor="dashboard-drawer" className="btn btn-ghost p-1 text-white lg:hidden cursor-pointer hover:bg-white/10 rounded-lg min-h-0 h-auto">
          <FaBars className="text-xl sm:text-2xl" />
        </label>
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-white uppercase tracking-wide">Dashboard</h2>
      </div>
      <div className="flex items-center text-right min-w-0">
        <span className="text-xs sm:text-sm text-white font-medium truncate" title={user?.email}>
          Hi, {user?.email}!
        </span>
      </div>
    </header>
  );
};

export default DashBoradHeader;
