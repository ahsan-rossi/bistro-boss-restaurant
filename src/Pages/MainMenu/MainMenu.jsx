import MenuSection from "../Shared/MenuSection/MenuSection";
import PageCover from "../../Components/PageCover/PageCover";
import coverImg from "../../assets/menu/banner3.jpg";
import useMenuDataCategoryWise from "../../hooks/useMenuDataCategoryWise";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";

const MainMenu = () => {
  const offeredMenu = useMenuDataCategoryWise("offered");
  const dessertMenu = useMenuDataCategoryWise("dessert");
  const pizzaMenu = useMenuDataCategoryWise("pizza");
  const saladMenu = useMenuDataCategoryWise("salad");
  const soupMenu = useMenuDataCategoryWise("soup");
  const drinkMenu = useMenuDataCategoryWise("drinks");
  return (
    <div className="flex flex-col gap-20">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <PageCover
        bgImg={coverImg}
        heading="OUR MENU"
        description="Would you like to try a dish?"
        sectionCover={false}
      ></PageCover>
      {/* OFFERED MENU */}
      <MenuSection
        sectionTitle={true}
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
        menuData={offeredMenu}
        sectionCover={false}
      ></MenuSection>
      {/* DESSERTS MENU */}
      <MenuSection
        sectionTitle={false}
        menuData={dessertMenu}
        sectionCover={true}
        bgImg={dessertImg}
        sectionHeading="DESSERT"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuSection>
      {/* PIZZA MENU */}
      <MenuSection
        sectionTitle={false}
        menuData={pizzaMenu}
        sectionCover={true}
        bgImg={pizzaImg}
        sectionHeading="PIZZA"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuSection>
      {/* SALAD MENU */}
      <MenuSection
        sectionTitle={false}
        menuData={saladMenu}
        sectionCover={true}
        bgImg={saladImg}
        sectionHeading="SALAD"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuSection>
      {/* SOUP MENU */}
      <MenuSection
        sectionTitle={false}
        menuData={soupMenu}
        sectionCover={true}
        bgImg={soupImg}
        sectionHeading="SOUP"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuSection>
       {/* SOUP MENU */}
      <MenuSection
        sectionTitle={false}
        menuData={drinkMenu}
        sectionCover={true}
        bgImg={soupImg}
        sectionHeading="DRINK"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuSection>
    </div>
  );
};

export default MainMenu;
