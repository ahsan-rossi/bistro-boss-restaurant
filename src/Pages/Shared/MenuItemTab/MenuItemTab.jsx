import React from "react";
import MenuItemCard from "../MenuItem/MenuItemCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './paginationStyle.css';

// import required modules
import { Pagination } from "swiper/modules";

const MenuItemTab = ({ label, item, defaultChecked }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const itemsPerSlide = 6; // Number of items to show per slide
  const totalSlides = Math.ceil(item.length / itemsPerSlide); // Calculate total slides needed
  var slideItems = [];
  return (
    <>
      {/* <p>{item.length}</p> */}
      <input
        type="radio"
        name="my_tabs_2"
        className="tab"
        aria-label={label}
        defaultChecked={defaultChecked}
      />
      <div className="tab-content p-10">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Array.from({ length: totalSlides }).map((_, index) => {
            // <div key={index}>Item {index + 1}</div>
            slideItems = item.slice(
              index * itemsPerSlide,
              (index + 1) * itemsPerSlide,
            );

            return (
              <SwiperSlide key={index}>
                <div className="w-full mx-auto grid md:grid-cols-3 gap-6 mb-16">
                  {slideItems?.map((menu) => (
                    <MenuItemCard key={menu._id} item={menu} />
                  ))}
                </div>
              </SwiperSlide>
            );
          })}

          {/*  <SwiperSlide>
              <div className="w-full mx-auto grid md:grid-cols-3 gap-6 mb-16">
                 {item.map((menu) => (
                  <MenuItemCard key={menu._id} item={menu}></MenuItemCard>
                ))}
             </div>
            </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default MenuItemTab;
