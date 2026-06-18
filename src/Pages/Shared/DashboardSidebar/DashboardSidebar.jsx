import React from "react";
import { Link } from "react-router-dom";
import { FaCalendar, FaCalendarCheck, FaCartShopping, FaEnvelope, FaHouse, FaList } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const DashboardSidebar = () => {
  const [cart] = useCart();

  return (
    <div className="w-64 bg-[#1E1E1E] text-white p-6 font-semibold flex flex-col justify-between shadow-lg border-r border-white/5">
      <div>
        {/* Logo / Brand Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-black uppercase tracking-wider text-[#D1A054]">Bistro Boss</h1>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">Restaurant</p>
        </div>

        {/* Navigation Links */}
        <ul className="menu gap-2 p-0 text-lg">
          <li>
            <Link to="/dashboard/home" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
              <FaHouse className="text-xl" />
              <span>User Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/reservation" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
              <FaCalendar className="text-xl" />
              <span>Reservation</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/mycart" className="flex items-center justify-between py-2.5 px-4 rounded-lg bg-[#D1A054] text-white hover:bg-[#b0803d] transition-all duration-200">
              <div className="flex items-center gap-3">
                <FaCartShopping className="text-xl" />
                <span>My Cart</span>
              </div>
              <span className="badge badge-sm bg-white text-[#1E1E1E] font-bold border-0 shadow-none">
                {cart?.length || 0}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/review" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
              <MdOutlineReviews className="text-xl" />
              <span>Add Review</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/bookings" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
              <FaCalendarCheck className="text-xl" />
              <span>My Bookings</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Divider and Main Website Links */}
      <div>
        <div className="h-[1px] bg-white/10 my-6"></div>
        <ul className="menu gap-2 p-0 text-lg">
          <li>
            <Link to="/" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
              <FaHouse className="text-xl" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/menu" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
              <FaList className="text-xl" />
              <span>Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/shop/pizza" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
              <FaCartShopping className="text-xl" />
              <span>Shop</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-3 py-2.5 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200">
              <FaEnvelope className="text-xl" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;