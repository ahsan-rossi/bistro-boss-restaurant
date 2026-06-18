import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashBoradHeader = () => {
  const { user } = useAuth();
  return (
    <header className="bg-[#D1A054] shadow-sm border-b border-gray-100 py-4 px-10 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">Dashboard</h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-white font-medium">Hi, {user?.email}!</span>
      </div>
    </header>
  );
};

export default DashBoradHeader;
