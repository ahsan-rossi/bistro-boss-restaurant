import React from "react";
import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Review from "../Review/Review";
import Offered from "../Offered/Offered";
import sectionCover from "../../../assets/home/chef-service.jpg";
import PageCover from "../../../Components/PageCover/PageCover";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Bannar></Bannar>
      <Category></Category>

      <PageCover
        bgImg={sectionCover}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        sectionCover={true}
        sectionHeading="Bistro Boss"
      ></PageCover>

      <PopularMenu></PopularMenu>
      <Offered></Offered>
      <Featured></Featured>
      <Review></Review>
    </div>
  );
};

export default Home;
