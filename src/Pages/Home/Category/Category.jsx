import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        heading="ORDER ONLINE"
        subHeading="From 11:00am to 10:00pm"
      />
      <section className="ml-6 mr-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          //   centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-16 max-w-4xl mx-auto"
        >
          <SwiperSlide className="relative">
            <img src={slide1} alt="Slide 1" />
            <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-white">
              SALADS
            </h3>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide2} alt="Slide 2" />
            <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-white">
              SOUPS
            </h3>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide3} alt="Slide 3" />
            <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-white">
              PIZZAS
            </h3>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide4} alt="Slide 4" />
            <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-white">
              DESSERTS
            </h3>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slide5} alt="Slide 5" />
            <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-white">
              DRINKS
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
