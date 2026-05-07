import React from "react";

import coverImg from "../../assets/shop/banner2.jpg";
import useMenuDataCategoryWise from "../../hooks/useMenuDataCategoryWise";
import MenuItemCard from "../Shared/MenuItem/MenuItemCard";
import { Helmet } from "react-helmet-async";
import PageCover from "../../Components/PageCover/PageCover";
import MenuItemTab from "../Shared/MenuItemTab/MenuItemTab";
import Category from "./../Home/Category/Category";
import { useParams } from "react-router";

const ShopMenu = () => {
  const shopCategory = useParams().shopCategory;
  //console.log(shopCategory);
  const salad = useMenuDataCategoryWise("salad");
  const pizza = useMenuDataCategoryWise("pizza");
  const soup = useMenuDataCategoryWise("soup");
  const dessert = useMenuDataCategoryWise("dessert");
  const drinks = useMenuDataCategoryWise("drinks");
  const offered = useMenuDataCategoryWise("offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <PageCover
        bgImg={coverImg}
        heading="OUR SHOP"
        description="Would you like to try a dish?"
        sectionCover={false}
      ></PageCover>
      <section>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border py-6 md:p-10 justify-center">
          <MenuItemTab
            label="SALAD"
            item={salad}
            defaultChecked={shopCategory === "salad" ? true : false}
          ></MenuItemTab>
          <MenuItemTab
            label="PIZZA"
            item={pizza}
            defaultChecked={shopCategory === "pizza" ? true : false}
          ></MenuItemTab>
          <MenuItemTab
            label="SOUP"
            item={soup}
            defaultChecked={shopCategory === "soup" ? true : false}
          ></MenuItemTab>
          <MenuItemTab
            label="DESSERT"
            item={dessert}
            defaultChecked={shopCategory === "dessert" ? true : false}
          ></MenuItemTab>
          <MenuItemTab
            label="DRINK"
            item={drinks}
            defaultChecked={shopCategory === "drink" ? true : false}
          ></MenuItemTab>
          <MenuItemTab
            label="OFFERED"
            item={offered}
            defaultChecked={shopCategory === "offered" ? true : false}
          ></MenuItemTab>
        </div>
        {/* <div className="tabs tabs-border justify-center p-10">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="SALAD"
          />
          <div className="tab-content p-10">
            <div className="w-full mx-auto grid md:grid-cols-3 gap-6 mb-16">
              {salad.map((menu) => (
                <MenuItemCard key={menu._id} item={menu}></MenuItemCard>
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="PIZZA"
            defaultChecked
          />
          <div className="tab-content mt-12 md:p-6  ">
            <div className="w-full mx-auto grid md:grid-cols-3 gap-6 mb-16">
              {pizza.map((menu) => (
                <MenuItemCard key={menu._id} item={menu}></MenuItemCard>
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="SOUP"
          />
          <div className="tab-content p-10">
            <div className="w-full mx-auto grid md:grid-cols-3 gap-6 mb-16">
              {soup.map((menu) => (
                <MenuItemCard key={menu._id} item={menu}></MenuItemCard>
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="DESSERT"
          />
          <div className="tab-content p-10">
            <div className="w-full mx-auto grid md:grid-cols-3 gap-6 mb-16">
              {dessert.map((menu) => (
                <MenuItemCard key={menu._id} item={menu}></MenuItemCard>
              ))}
            </div>
          </div>
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="DRINK"
          />
          <div className="tab-content p-10">
            <div className="w-full mx-auto grid md:grid-cols-3 gap-6 mb-16">
              {offered.map((menu) => (
                <MenuItemCard key={menu._id} item={menu}></MenuItemCard>
              ))}
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default ShopMenu;
