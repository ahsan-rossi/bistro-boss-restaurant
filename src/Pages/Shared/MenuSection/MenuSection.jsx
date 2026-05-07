import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import PageCover from "../../../Components/PageCover/PageCover";
import { Link } from "react-router-dom";

const MenuSection = ({
  sectionTitle,
  subHeading,
  heading,
  menuData,
  sectionCover,
  bgImg,
  sectionHeading,
  description,
}) => {
  const shopCategory = sectionHeading
    ? sectionHeading.toLowerCase()
    : "offered";

  return (
    <div className="mb-10">
      {sectionTitle && (
        <div className="w-full mx-auto">
          <SectionTitle
            subHeading={subHeading}
            heading={heading}
          ></SectionTitle>
        </div>
      )}

      {sectionCover && (
        <PageCover
          bgImg={bgImg}
          sectionHeading={sectionHeading}
          description={description}
          sectionCover={true}
        ></PageCover>
      )}

      {menuData && menuData.length > 0 && (
        <div className="grid md:grid-cols-2 gap-12 my-12 w-11/12 mx-auto">
          {menuData.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      )}

      <div className="card-actions justify-center">
        <button className="btn btn-outline bg-base-200 border-0 border-b-3 border-black text-black uppercase p-6 mt-4 hover:bg-black/20">
          <Link to={`/shop/${shopCategory}`}>ORDER YOUR FAVOURITE FOOD</Link>
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
