import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MenuItemCard = ({ item }) => {
  const { name, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        email: user.email,
        name,
        image,
        price
      };

      axiosSecure.post("/cart", cartItem)
        .then(res => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} added to cart!`,
              showConfirmButton: false,
              timer: 1500
            });
            // Refetch cart to update the count in the navbar
            refetch();
          }
        })
        .catch(err => {
          console.error("Error adding item to cart:", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to add item to cart. Please try again.",
          });
        });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add this item to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-200 w-10/12 md:w-72 mx-auto mb-10 md:mb-2 shadow-sm">
      <figure> 
        <img
          src={image}
          alt={name}
          className="w-full"
        />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 bg-black text-lg font-bold text-[#D99904] p-2  rounded-[10px]">${price.toFixed(2)}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {item.recipe} 
        </p>
        <div className="card-actions justify-center">
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white  border-0 border-b-4 border-black uppercase p-6 mt-4" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
