import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { FaBars } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DashBoradHeader = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    console.log("User data in DashboardHeader:", user);
    axiosSecure
      .get(`/user/${user.email}`)
      .then((res) => {
        console.log("User data from server:", res.data[0]);
        if (res.data[0]) {
          console.log("User data exists:", res.data[0]);
          setUserData(res.data[0]);
          console.log("User data state updated:", userData.photoURL);
        } else {
          console.log("No user data found for this email.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [user, axiosSecure]);

  return (
    <header className="bg-gradient-to-r from-[#835D23] to-[#B58130] shadow-sm border-b border-gray-100 py-4 px-3 sm:px-6 md:px-10 flex items-center justify-between gap-2">
      <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
        {/* Toggle Button for Mobile Drawer */}
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-ghost p-1 text-white lg:hidden cursor-pointer hover:bg-white/10 rounded-lg min-h-0 h-auto"
        >
          <FaBars className="text-xl sm:text-2xl" />
        </label>
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-white uppercase tracking-wide">
          Dashboard
        </h2>
      </div>
      <div className="flex items-center text-right min-w-0">
        {/* Item Image */}
        <div className="avatar mr-4">
          <div className="mask mask-squircle w-10 h-10 shadow-sm">
            <img src={userData?.photoURL} alt={userData?.name} />
          </div>
        </div>

        <span
          className="text-xs sm:text-sm text-white font-medium truncate mr-4"
          title={user?.email}
        >
          Hi, {userData?.name}!
        </span>
      </div>
    </header>
  );
};

export default DashBoradHeader;
