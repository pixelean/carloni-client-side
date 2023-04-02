import React from "react";
import "./Banner.css";
import ShareButton from "../../Share/ShareButton/ShareButton";
import BannerImg from "../../../Asset/Page1/Banner.png";

const Banner = () => {
  return (
    <div className="bannerContainer  bg-base-100 shadow-xl rounded-none">
      <div className="flex items-center">
        <div>
          <h2 className=" text-white text-5xl leading-">
            <div className="my-5">
              {" "}
              A <span className="highliteText"> FREE </span>No Obligation{" "}
            </div>
            <div className="my-5">
              Call Should <span className="highliteText"> SAVE YOU</span>
            </div>
            <div className="my-5"> Thousands!</div>
            
          </h2>
          <div><ShareButton>Call Now 250-493-9111</ShareButton></div>
        </div>
      </div>

      <img className="bannerImg" src={BannerImg} alt="Banner" />
    </div>
  );
};

export default Banner;
