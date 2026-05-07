import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItemCard from "../../Shared/MenuItem/MenuItemCard";

const Offered = () => {
  const [offered, setOffered] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const offeredMenu = data.filter((item) => item.category === "offered");
        setOffered(offeredMenu);
      });
  }, []);

  return (
    <div className="w-full mx-auto py-10">
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"Should Try"}
      ></SectionTitle>

      <div className="w-full mx-auto grid md:grid-cols-4 gap-6 mb-16">
        {
            offered.map(menu => <MenuItemCard key={menu._id} item={menu}></MenuItemCard>)
        }
      </div>


    </div>
  );
};

export default Offered;
