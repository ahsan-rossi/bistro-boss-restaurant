import React from "react";

const MenuItemCard = ({ item }) => {
  return (
    <div className="card bg-base-200 w-10/12 md:w-72 mx-auto mb-10 md:mb-2 shadow-sm">
      <figure> 
        <img
          src={item.image}
          alt={item.name}
          className="w-full"
        />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 bg-black text-lg font-bold text-[#D99904] p-2  rounded-[10px]">${item.price.toFixed(2)}</p>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>
          {item.recipe} 
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline bg-base-300 border-0 border-b-3 border-[#D99904] text-[#D99904] uppercase p-6 mt-4 hover:bg-black/70">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
