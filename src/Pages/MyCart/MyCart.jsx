import React from "react";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import authBg from "../../assets/others/authentication.png";

const MyCart = () => {
  
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart
    .reduce((total, item) => {
      return total + item.price;
    }, 0)
    .toFixed(2);

  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to remove ${name} from your cart.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/cart/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `${name} has been removed from your cart.`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
              refetch();
            }
          })
          .catch((err) => {
            console.error("Error deleting cart item:", err);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Could not remove item from cart. Please try again.",
            });
          });
      }
    });
  };

  return (
    <div className="p-4 sm:p-8 rounded-lg shadow-2xl border border-gray-100 min-h-[80vh] bg-white">
      {/* Title Header */}
      <div className="text-center mb-8">
        <p className="text-[#D1A054] italic text-lg mb-2">--- My Cart ---</p>
        <h3 className="text-xl sm:text-2xl font-bold italic border-y-2 border-gray-200 py-3 inline-block px-4 sm:px-10">
          Wanna Add More?{" "}
          <Link to="/menu" className="text-[#D1A054] hover:underline">
            Browse Menu
          </Link>
        </h3>
      </div>

      {/* Cart Summary Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 font-bold uppercase text-lg sm:text-xl text-center sm:text-left">
        <h2>
          Total Orders: <span className="text-gray-600">{cart.length}</span>
        </h2>
        <h2>
          Total Price: <span className="text-[#D1A054]">${totalPrice}</span>
        </h2>
        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white border-0 hover:bg-[#b0803d] px-6 w-full sm:w-auto">
          Pay
        </button>
      </div>

      {/* Cart Items Table */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-gray-400 text-lg mb-4">Your cart is empty.</p>
        </div>
      ) : (
        <>
          {/* Mobile View (Cards) */}
          <div className="md:hidden space-y-4">
            {cart.map((item, index) => (
              <div
                key={item._id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300 relative"
              >
                {/* Index Badge */}
                <div className="absolute top-2 left-2 bg-[#D1A054] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                  {index + 1}
                </div>

                {/* Item Image */}
                <div className="avatar mt-2">
                  <div className="mask mask-squircle w-20 h-20 shadow-sm">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>

                {/* Item Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-lg truncate pr-2">
                    {item.name}
                  </h4>
                  <p className="font-bold text-[#D1A054] text-md mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Action Button */}
                <div>
                  <button
                    onClick={() => handleDelete(item._id, item.name)}
                    className="btn btn-ghost bg-red-100 hover:bg-red-200 text-red-600 rounded-lg p-3 min-h-0 h-auto"
                  >
                    <FaTrashCan className="text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View (Table) */}
          <div className="hidden md:block overflow-x-auto rounded-t-lg border border-gray-200 shadow-sm">
            <table className="table table-zebra w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#835D23] to-[#B58130] text-white font-bold text-sm uppercase">
                  <th className="py-4 px-6">#</th>
                  <th className="py-4 px-6">Item Image</th>
                  <th className="py-4 px-6">Item Name</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-50 border-b border-gray-100"
                  >
                    <td className="py-4 px-6 font-semibold">{index + 1}</td>
                    <td className="py-4 px-6">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {item.name}
                    </td>
                    <td className="py-4 px-6 font-bold text-gray-700">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleDelete(item._id, item.name)}
                        className="btn btn-ghost bg-red-100 hover:bg-red-200 text-red-600 rounded-md p-3"
                      >
                        <FaTrashCan className="text-lg" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;
