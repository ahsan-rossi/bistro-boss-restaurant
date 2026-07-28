import React from "react";
import useUsers from "../../hooks/useUsers";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaRegTrashCan, FaTrashCan } from "react-icons/fa6";

const Users = () => {

 const [users, refetch] = useUsers();
 const axiosSecure = useAxiosSecure();

 const handleDelete = (id, name) => {
     Swal.fire({
       title: "Are you sure?",
       text: `You are about to remove ${name}.`,
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!",
     }).then((result) => {
       if (result.isConfirmed) {
         axiosSecure
           .delete(`/users/${id}`)
           .then((res) => {
             if (res.data.deletedCount > 0) {
               Swal.fire({
                 title: "Deleted!",
                 text: `${name} has been removed.`,
                 icon: "success",
                 timer: 1500,
                 showConfirmButton: false,
               });
               refetch();
             }
           })
           .catch((err) => {
             console.error("Error deleting user:", err);
             Swal.fire({
               icon: "error",
               title: "Error",
               text: "Could not remove user. Please try again.",
             });
           });
       }
     });
   };


  return (
    <div className="p-4 sm:p-8 rounded-lg shadow-2xl border border-gray-100 min-h-[80vh] bg-white">
      
      {/*Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 font-bold uppercase text-lg sm:text-xl text-center sm:text-left">
        <h2>
          Total Users: <span className="text-gray-600">{users.length}</span>
        </h2>
      </div>

         {/* Users Table */}
              {users.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <p className="text-gray-400 text-lg mb-4">No users found.</p>
                </div>
              ) : (
                <>
                  {/* Mobile View (Cards) */}
                  <div className="md:hidden space-y-4">
                    {users.map((user, index) => (
                      <div
                        key={user._id}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300 relative"
                      >
                        {/* Index Badge */}
                        <div className="absolute top-2 left-2 bg-[#D1A054] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                          {index + 1}
                        </div>
        
                        {/* Item Image */}
                        <div className="avatar mt-2">
                          <div className="mask mask-squircle w-20 h-20 shadow-sm">
                            <img src={user.photoURL} alt={user.name} />
                          </div>
                        </div>
        
                        {/* Item Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-lg truncate pr-2">
                            {user.name}
                          </h4>
                          <p className="font-semibold text-gray-800 text-lg break-all">
                            {user.email}
                          </p>
                        </div>

        
                        {/* Action Button */}
                        <div>
                          <button
                            onClick={() => handleDelete(user._id, user.name)}
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
                          <th className="py-4 px-6">Image</th>
                          <th className="py-4 px-6">Name</th>
                          <th className="py-4 px-6">Email</th>
                          <th className="py-4 px-6">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr
                            key={user._id}
                            className="hover:bg-gray-50 border-b border-gray-100"
                          >
                            <td className="py-4 px-6 font-semibold">{index + 1}</td>
                            <td className="py-4 px-6">
                              <div className="avatar">
                                <div className="mask mask-squircle w-16 h-16">
                                  <img src={user.photoURL} alt={user.name} />
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-800">
                              {user.name}
                            </td>
                            <td className="py-4 px-6 font-bold text-gray-700">
                              {user.email}
                            </td>
                            <td className="py-4 px-6">
                              <button
                                onClick={() => handleDelete(user._id, user.name)}
                                className="btn btn-ghost bg-red-100 hover:bg-red-200 text-red-600 rounded-md p-3"
                              >
                                <FaRegTrashCan className="text-lg" />
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

export default Users;
