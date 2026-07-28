import React from "react";
import { NavLink } from "react-router-dom";
import { FaCalendar, FaCalendarCheck, FaCartShopping, FaEnvelope, FaHouse, FaList, FaUser } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const DashboardSidebar = () => {
  const [cart] = useCart();

  const getLinkClass = ({ isActive }) =>
    `flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all duration-200 ${
      isActive
        ? "text-white bg-gradient-to-r from-[#835D23] to-[#B58130]"
        : "text-gray-300 hover:text-white hover:bg-gradient-to-r from-[#835D23] to-[#B58130]"
    }`;

  const getCartLinkClass = ({ isActive }) =>
    `flex items-center justify-between py-2.5 px-4 rounded-lg transition-all duration-200 ${
      isActive
        ? "text-white bg-gradient-to-r from-[#835D23] to-[#B58130]"
        : "text-gray-300 hover:text-white hover:bg-gradient-to-r from-[#835D23] to-[#B58130]"
    }`;

  return (
    <div className="w-64 bg-[#1E1E1E] text-white p-6 font-semibold flex flex-col justify-between shadow-lg border-r border-white/5 min-h-full">
      <div>
        {/* Logo / Brand Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-black uppercase tracking-wider text-[#D1A054]">Bistro Boss</h1>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">Restaurant</p>
        </div>

        {/* Navigation Links */}
        <ul className="menu gap-2 p-0 text-lg">
          <li>
            <NavLink to="/dashboard/home" className={getLinkClass}>
              <FaHouse className="text-xl" />
              <span>User Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation" className={getLinkClass}>
              <FaCalendar className="text-xl" />
              <span>Reservation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart" className={getCartLinkClass}>
              <div className="flex items-center gap-3">
                <FaCartShopping className="text-xl" />
                <span>My Cart</span>
              </div>
              <span className="badge badge-sm bg-white text-[#1E1E1E] font-bold border-0 shadow-none">
                {cart?.length || 0}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className={getLinkClass}>
              <MdOutlineReviews className="text-xl" />
              <span>Add Review</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings" className={getLinkClass}>
              <FaCalendarCheck className="text-xl" />
              <span>My Bookings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users" className={getLinkClass}>
              <FaUser className="text-xl" />
              <span>Users</span>
            </NavLink> 
          </li>
        </ul>
      </div>

      {/* Divider and Main Website Links */}
      <div>
        <div className="h-[1px] bg-white/10 my-6"></div>
        <ul className="menu gap-2 p-0 text-lg">
          <li>
            <NavLink to="/" end className={getLinkClass}>
              <FaHouse className="text-xl" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={getLinkClass}>
              <FaList className="text-xl" />
              <span>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/pizza" className={getLinkClass}>
              <FaCartShopping className="text-xl" />
              <span>Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getLinkClass}>
              <FaEnvelope className="text-xl" />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;