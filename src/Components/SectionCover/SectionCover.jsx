import React from "react";

const SectionCover = ({ bgImg, heading, description }) => {
  return (
     <div>
    
      <div
        className="hero h-120"
        style={{
          backgroundImage:
            `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay md:w-9/12 h-7/12 mt-15"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md mt-15">
            <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
            <p className="mb-5">
                {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCover;
