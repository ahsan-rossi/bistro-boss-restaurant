import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { MdStarRate } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="p-10">
      <SectionTitle
        heading={"testimonials"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>

      {/* <h1>{review.length > 0 ? review.length : "No reviews yet"}</h1> */}

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="flex flex-col items-center gap-6 text-center">
              <Rating style={{ maxWidth: 240 }} value={item.rating} readOnly />
              <FaQuoteLeft className="text-7xl" />
              <p className="w-7/12">{item.details}</p>
              <h3 className="text-3xl uppercase text-[#D99904]">{item.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* static review */}
      {/*
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <MdStarRate className="text-[#D99904] text-4xl" />
          <MdStarRate className="text-[#D99904] text-4xl" />
          <MdStarRate className="text-[#D99904] text-4xl" />
          <MdStarRate className="text-[#D99904] text-4xl" />
          <MdStarRate className="text-gray-400 text-4xl" />
        </div>
        <FaQuoteLeft className="text-7xl" />
        <p className="w-7/12">
          Various version have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </p>
        <h3 className="text-3xl uppercase text-[#D99904]">John Doe</h3>
      </div> */}
    </div>
  );
};

export default Review;
