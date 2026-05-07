import React from "react";

const PageCover = ({ bgImg, heading, sectionHeading, description, sectionCover }) => {
  return (
    <div>
      {/* <img src={bgImg} alt="Page Cover"></img>
            <h1>{heading}</h1>
            <p>{description}</p> */}

      <div
        className={`hero ${sectionCover ? "h-100" : "h-120"}`}
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div
          className={`hero-overlay md:w-9/12 h-7/12 ${sectionCover ? "" : "mt-15"}`}
        ></div>
        <div className="hero-content text-neutral-content text-center">
          <div className={`max-w-md ${sectionCover ? "" : "mt-15"}`}>
            <h1
              className={`mb-5  font-bold ${sectionCover ? "text-3xl" : "text-5xl"}`}
            >
              { sectionCover ? sectionHeading : heading }
            </h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
