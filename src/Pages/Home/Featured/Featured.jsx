import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import bgCover from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="text-zinc-300 bg-cover bg-center bg-fixed py-20 relative"
      style={{ backgroundImage: `url(${bgCover})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <SectionTitle
          heading={"Check it Out"}
          subHeading={"Featured Item"}
        ></SectionTitle>
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-20">
          <img className="w-100" src={featuredImg} alt="" />
          <div className="w-80">
            <h3>March 20, 2023</h3>
            <h3 className="uppercase">Where can i get some?</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              facilis porro saepe sit consectetur animi, dolor quo quas enim
              delectus!
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
